# Justificativa de Arquitetura — Banco de Dados (Biblioteca)

## Escolha Tecnológica
- **Banco:** PostgreSQL 17
- **Tipo:** Relacional (SQL)

## Por que SQL e não NoSQL?
O domínio de uma biblioteca é relacional e exige integridade:
- Um empréstimo só existe se houver um livro e um usuário válidos.
- Relatórios (livros mais emprestados, atrasos) dependem de JOINs e agregações.
- Transações ACID garantem que não exista empréstimo de um livro inexistente.

## Por que PostgreSQL?
- Suporte estrito a ACID e chaves estrangeiras.
- Índices B-Tree eficientes para JOINs e filtros por data.
- Extensão pg_trgm para busca textual por título.
- Compatível com Sequelize + driver pg (usado pela API do projeto).

## Modelagem
Entidades: usuarios, autores, categorias, livros, emprestimos e a pivô livro_categorias.

Relacionamentos:
- 1:N — Um autor escreve vários livros.
- 1:N — Um usuário faz vários empréstimos.
- 1:N — Um livro participa de vários empréstimos.
- N:N — Um livro tem várias categorias e vice-versa (resolvido pela tabela pivô livro_categorias).

## Normalização

### 1FN (Primeira Forma Normal)
Todos os campos são atômicos. As categorias de um livro não ficam num campo separado por vírgula — ficam na tabela livro_categorias.

### 2FN (Segunda Forma Normal)
Sem dependências parciais. Na pivô livro_categorias os dados dependem do par livro+categoria inteiro.

### 3FN (Terceira Forma Normal)
Sem dependências transitivas. O nome do autor fica em autores (não repetido em livros), acessado por JOIN via autor_id.

## Estratégia de Indexação
| Campo | Motivo |
|-------|--------|
| livros.titulo | Busca por título (operação mais comum) |
| livros.autor_id | Acelera JOIN livro → autor |
| emprestimos.data_emprestimo | Relatórios por período |
| emprestimos.usuario_id | Empréstimos de um usuário |
| emprestimos.devolvido | Filtro de atrasados / em aberto |

## Dimensionamento Estimado
| Entidade | Estimativa | Crescimento |
|----------|-----------|-------------|
| Usuários | 5.000 | ~200/mês |
| Livros | 10.000 | ~300/mês |
| Empréstimos | 3.000/mês | crescente |