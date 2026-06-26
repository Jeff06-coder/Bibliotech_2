# API Biblioteca - LuanTavares

API REST para gerenciamento de uma biblioteca (livros, autores, categorias,
usuários e empréstimos). Projeto da prova de Desenvolvimento Web — 2º Bimestre.

**Arquitetura:**
```
Host -> Nginx (porta 80) -> Node.js / Express (privado) -> PostgreSQL
                                      \-> Redis (cache)
```

---

## 1. Containers utilizados

| Container   | Imagem            | Função                                              |
|-------------|-------------------|------------------------------------------------------|
| `db`        | postgres:17-alpine| Banco de dados relacional                            |
| `cache`     | redis:7-alpine    | Cache de `GET /livros` (60s, com invalidação automática nas escritas) |
| `web`       | build local       | API Node.js/Express — **sem porta exposta ao host**   |
| `nginx`     | nginx:alpine      | Proxy reverso — único ponto de acesso externo (porta 80) |
| `cli`       | build local       | Executa comandos (migrations, seeds) — não inicia com `up`, só com `run` |

---

## 2. Pré-requisitos

- Docker e Docker Compose instalados
- Node.js 24+ (só necessário se for rodar fora do Docker, pra desenvolvimento)

---

## 3. Como executar o projeto (passo a passo)

```bash
# 1. Clonar/extrair o projeto e entrar na pasta
cd Bibliotech_2

# 2. Copiar o arquivo de variáveis de ambiente
cp .env.example .env

# 3. Subir todos os containers (build da imagem + start)
docker compose up --build -d

# 4. Rodar as migrations (cria as tabelas no banco)
docker compose run --rm cli migrate

# 5. Popular o banco com um usuário de teste
docker compose run --rm cli seed
```

Depois disso, a API está disponível em **http://localhost** (porta 80, via Nginx).

> ⚠️ **Não tente acessar `http://localhost:3000` nesse modo.** O container `web`
> não tem porta publicada pro host de propósito (requisito da prova: "o Node
> deve ficar privado"). O único jeito de acessar de fora é pela porta 80, via
> Nginx. Se der "connection refused" na `:3000`, é exatamente isso — use `http://localhost` sem porta.

Pra parar tudo:
```bash
docker compose down
```
Pra parar e também apagar os dados do banco (volume):
```bash
docker compose down -v
```

### Modo B (alternativo): Node local, só banco/cache no Docker

> ⚠️ **Não misture os dois modos.** Se você está usando o Modo A acima (Docker
> completo), **não** edite `POSTGRES_HOST`/`REDIS_HOST` no `.env` — deixe como
> `db`/`cache`. As instruções abaixo (`localhost`) só valem se o `web` **não**
> estiver rodando dentro do Docker.

Use esse modo só se quiser rodar o `node _web.js`/`nodemon` direto na sua
máquina (fora do Docker), pra ter recarregamento automático a cada save:

```bash
docker compose up db cache -d     # só o banco e o cache, o "web" NÃO sobe aqui
npm install
# Edite o .env: troque POSTGRES_HOST=db -> POSTGRES_HOST=localhost
#           e   REDIS_HOST=cache -> REDIS_HOST=localhost
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev                       # nodemon, recarrega a cada alteração
```
Nesse modo (e só nesse) a API fica em `http://localhost:3000`, porque agora é
o seu Node local (não um container) que está escutando nessa porta.

---

## 4. Como fazer login e usar o token JWT

Todas as rotas exigem um token JWT no header `Authorization`, **exceto** `POST /login`.

**Passo 1 — login:**
```bash
curl -X POST http://localhost/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@biblioteca.com","senha":"123456"}'
```
Resposta:
```json
{ "token": "eyJhbGciOiJIUzI1NiIs..." }
```

**Passo 2 — usar o token nas demais rotas:**
```bash
curl http://localhost/livros \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
```

Sem o header `Authorization`, qualquer rota protegida retorna `401`.

> Usuário de teste criado pelo seed: `admin@biblioteca.com` / `123456`

---

## 5. Documentação Swagger

Disponível em:
```
http://localhost/api-docs       (via Docker/Nginx)
http://localhost:3000/api-docs  (rodando local, sem Docker)
```

Pra testar direto pela interface:
1. Abra `/api-docs`
2. Faça `POST /login` via "Try it out"
3. Copie o `token` da resposta
4. Clique em **Authorize** (canto superior direito) e cole `Bearer <token>`
5. Agora todas as outras rotas já testam autenticadas

---

## 6. Migrations e comandos (CLI)

Entrypoint da CLI: `command.js`. Comandos disponíveis:

```bash
node command.js migrate          # cria as tabelas
node command.js migrate:undo     # desfaz a última migration
node command.js migrate:status   # mostra o que já rodou
node command.js seed             # popula dados de teste
node command.js seed:undo        # remove os dados de teste
```

Via Docker, sempre use o serviço `cli` (não inicia com `docker compose up`):
```bash
docker compose run --rm cli migrate
docker compose run --rm cli seed
```

---

## 7. Testando tudo — passo a passo completo

> **Importante sobre IDs:** nunca fixe um ID na mão (ex: `usuario_id: 1`) nos
> seus testes. Bancos reais têm IDs que mudam conforme o uso (criação/remoção
> de registros). Sempre peça o ID de volta da própria resposta da API (como
> os exemplos abaixo fazem) ou pegue do payload do token JWT.

### 7.1 Script automatizado (testa tudo de uma vez)

```bash
./testar-api.sh                  # contra localhost:3000 (rodando local)
./testar-api.sh http://localhost # contra o Nginx (Docker completo)
```
Esse script roda, em sequência: autenticação (com e sem token, senha certa e
errada), CRUD completo de todas as 5 entidades, a relação N:N na tabela pivô,
o cache do Redis (MISS → HIT → invalidação), uma rota inexistente (404) e o
Swagger (200) — e limpa os dados de teste que ele mesmo cria no final. Pode
rodar quantas vezes quiser, ele não deixa lixo nem colide com dados antigos.

### 7.2 Passo a passo manual (pra entender cada peça)

Defina a URL base conforme o seu modo de execução (veja seção 3):
```bash
BASE_URL=http://localhost      # Docker completo
# ou
BASE_URL=http://localhost:3000 # local, sem Docker
```

**a) Autenticação e JWT**
```bash
# Sem token -> 401
curl -i $BASE_URL/usuarios

# Login com senha errada -> 401
curl -i -X POST $BASE_URL/login -H "Content-Type: application/json" \
  -d '{"email":"admin@biblioteca.com","senha":"errada"}'

# Login correto -> 200 + token
curl -X POST $BASE_URL/login -H "Content-Type: application/json" \
  -d '{"email":"admin@biblioteca.com","senha":"123456"}'
# copie o "token" da resposta e exporte:
export TOKEN="cole_o_token_aqui"
```

**b) Middleware de log** — depois de qualquer chamada acima, olhe o terminal
onde o servidor está rodando (ou `docker compose logs web`): deve aparecer
uma linha `[data] MÉTODO /rota` para cada requisição feita.

**c) CRUD de Autor**
```bash
curl -X POST $BASE_URL/autores -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" -d '{"nome":"Machado de Assis"}'
# -> 201, anote o "id" retornado como AUTOR_ID

curl $BASE_URL/autores -H "Authorization: Bearer $TOKEN"                  # 200, lista
curl $BASE_URL/autores/AUTOR_ID -H "Authorization: Bearer $TOKEN"         # 200, um só
curl -X PUT $BASE_URL/autores/AUTOR_ID -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" -d '{"nome":"Editado"}'            # 200
curl -X DELETE $BASE_URL/autores/AUTOR_ID -H "Authorization: Bearer $TOKEN" # 204
```
O CRUD de **Categoria**, **Usuário** e **Empréstimo** segue exatamente o
mesmo padrão (`GET` lista, `GET /:id` um só, `POST` cria, `PUT /:id` edita,
`DELETE /:id` remove) — troque só o nome da rota e os campos do corpo.

**d) Livro + cache (Redis)**
```bash
# 1a leitura: deve vir do banco
curl -i $BASE_URL/livros -H "Authorization: Bearer $TOKEN" | grep -i x-cache
# -> X-Cache: MISS

# 2a leitura, sem mudar nada: deve vir do cache (mais rápido)
curl -i $BASE_URL/livros -H "Authorization: Bearer $TOKEN" | grep -i x-cache
# -> X-Cache: HIT

# Cria um livro novo (precisa de um AUTOR_ID válido)
curl -X POST $BASE_URL/livros -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Dom Casmurro","ano_publicacao":1899,"autor_id":AUTOR_ID}'
# -> 201, anote o "id" como LIVRO_ID

# Leitura de novo: o cache foi invalidado pela escrita, então volta a MISS
curl -i $BASE_URL/livros -H "Authorization: Bearer $TOKEN" | grep -i x-cache
# -> X-Cache: MISS
```

**e) Relação N:N — tabela pivô `livro_categorias`**
```bash
# Cria uma categoria primeiro
curl -X POST $BASE_URL/categorias -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" -d '{"nome":"Romance"}'
# -> 201, anote o "id" como CATEGORIA_ID

# Associa a categoria ao livro
curl -X POST $BASE_URL/livros/LIVRO_ID/categorias -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" -d '{"categoria_id":CATEGORIA_ID}'   # 201

# Lista as categorias desse livro
curl $BASE_URL/livros/LIVRO_ID/categorias -H "Authorization: Bearer $TOKEN" # 200

# Remove a associação
curl -X DELETE $BASE_URL/livros/LIVRO_ID/categorias/CATEGORIA_ID \
  -H "Authorization: Bearer $TOKEN"                                        # 204
```

**f) Senha criptografada** — confirme direto no banco que a senha nunca é
salva em texto puro:
```bash
docker compose exec db psql -U biblioteca_user -d biblioteca \
  -c "SELECT email, senha FROM usuarios;"
```
A coluna `senha` deve mostrar um hash bcrypt (`$2a$10$...` ou `$2b$...`),
nunca a senha digitada.

**g) Swagger** — abra `$BASE_URL/api-docs` no navegador e confira que as 6
entidades (Auth, Usuarios, Autores, Categorias, Livros, Livros-Categorias,
Emprestimos) aparecem com suas rotas.

**h) Rota inexistente**
```bash
curl -i $BASE_URL/isso-nao-existe -H "Authorization: Bearer $TOKEN"  # 404
```

**i) `docker compose up --build` sem falhar** — esse é o teste mais
importante pra prova: rode do zero numa pasta limpa e confirme que todos os
containers sobem sem erro (veja seção 3).

### 7.3 Checklist resumido

| O que testar | Esperado |
|---|---|
| Sem token | `401` |
| Login certo / errado | `200`+token / `401` |
| Log no terminal a cada requisição | linha `[data] MÉTODO /rota` |
| CRUD completo (5 entidades) | `200/201/204` |
| Cache do Livro (MISS→HIT→invalida) | header `X-Cache` alterna corretamente |
| Relação N:N (pivô) | associa/lista/remove sem erro |
| Senha no banco | hash bcrypt, nunca texto puro |
| Swagger | todas as rotas listadas em `/api-docs` |
| Rota inexistente | `404` |
| `docker compose up --build` | sem falhas |

---

## 8. Variáveis de ambiente (`.env`)

Veja `.env.example` para a lista completa. **Nunca commitar o `.env` real** (já está no `.gitignore`).

| Variável | Descrição |
|---|---|
| `NODE_WEB_PORT` | Porta interna do servidor Node (padrão 3000) |
| `POSTGRES_*` | Configuração de conexão com o banco |
| `REDIS_HOST` / `REDIS_PORT` | Configuração de conexão com o cache |
| `JWT_SECRET` | Chave usada para assinar/validar os tokens |
| `JWT_EXPIRES_IN` | Validade do token (ex: `1d`) |

---

## 9. Estrutura do projeto (resumo)

```
app/          -> Models, Controllers, Middlewares
bootstrap/    -> inicialização do Express
routes/       -> definição das rotas REST
database/     -> config, conexões, migrations, seeders
docs/         -> swagger.yaml
docker/       -> nginx.conf, init do postgres
modelagem/    -> DER, modelo lógico, dicionário de dados (entrega de Banco de Dados)
scripts/      -> DDL e seed em SQL puro (entrega de Banco de Dados)
queries/      -> consultas críticas/agregações (entrega de Banco de Dados)
justificativa/-> justificativa da escolha tecnológica (entrega de Banco de Dados)
```

---

## 10. Problemas comuns (troubleshooting)

| Sintoma | Causa provável | Solução |
|---|---|---|
| `docker compose run --rm cli migrate` dá erro de conexão | `.env` não criado, ou banco ainda não está "healthy" | `cp .env.example .env`; espere uns segundos após o `up` |
| Erro ao rodar `sequelize-cli` direto na máquina (fora do Docker) | `POSTGRES_HOST=db` não resolve fora da rede Docker | Troque para `POSTGRES_HOST=localhost` no `.env` local |
| Swagger mostra "Failed to load API definition" | `docs/swagger.yaml` vazio ou inválido | Verifique se o arquivo tem conteúdo; o servidor avisa no terminal se falhar ao carregar |
| `localhost:3000` dá 404 na raiz | — | Normal antes da rota `GET /` ser adicionada; agora retorna uma mensagem |
