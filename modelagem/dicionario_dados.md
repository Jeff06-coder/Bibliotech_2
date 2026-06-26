# Dicionário de Dados — Sistema de Biblioteca

## Tabela: usuarios
| Coluna | Tipo | Restrições | Descrição |
|--------|------|-----------|-----------|
| id | SERIAL | PK | Identificador único |
| nome | VARCHAR(255) | NOT NULL | Nome do usuário |
| email | VARCHAR(255) | NOT NULL, UNIQUE | E-mail (login) |
| senha | VARCHAR(255) | NOT NULL | Hash bcrypt da senha |
| createdAt | TIMESTAMP | NOT NULL | Data de criação |
| updatedAt | TIMESTAMP | NOT NULL | Última atualização |

## Tabela: autores
| Coluna | Tipo | Restrições | Descrição |
|--------|------|-----------|-----------|
| id | SERIAL | PK | Identificador único |
| nome | VARCHAR(255) | NOT NULL | Nome do autor |
| nacionalidade | VARCHAR(255) | — | Nacionalidade |
| createdAt | TIMESTAMP | NOT NULL | Data de criação |
| updatedAt | TIMESTAMP | NOT NULL | Última atualização |

## Tabela: categorias
| Coluna | Tipo | Restrições | Descrição |
|--------|------|-----------|-----------|
| id | SERIAL | PK | Identificador único |
| nome | VARCHAR(255) | NOT NULL, UNIQUE | Nome da categoria |
| createdAt | TIMESTAMP | NOT NULL | Data de criação |
| updatedAt | TIMESTAMP | NOT NULL | Última atualização |

## Tabela: livros
| Coluna | Tipo | Restrições | Descrição |
|--------|------|-----------|-----------|
| id | SERIAL | PK | Identificador único |
| titulo | VARCHAR(255) | NOT NULL | Título do livro |
| ano_publicacao | INTEGER | — | Ano de publicação |
| autor_id | INTEGER | NOT NULL, FK → autores(id) | Autor do livro |
| createdAt | TIMESTAMP | NOT NULL | Data de criação |
| updatedAt | TIMESTAMP | NOT NULL | Última atualização |

## Tabela: livro_categorias (TABELA PIVÔ — N:N)
| Coluna | Tipo | Restrições | Descrição |
|--------|------|-----------|-----------|
| id | SERIAL | PK | Identificador único |
| livro_id | INTEGER | NOT NULL, FK → livros(id) | Livro |
| categoria_id | INTEGER | NOT NULL, FK → categorias(id) | Categoria |
| createdAt | TIMESTAMP | NOT NULL | Data de criação |
| updatedAt | TIMESTAMP | NOT NULL | Última atualização |
| — | UNIQUE | (livro_id, categoria_id) | Evita vínculo duplicado |

## Tabela: emprestimos
| Coluna | Tipo | Restrições | Descrição |
|--------|------|-----------|-----------|
| id | SERIAL | PK | Identificador único |
| livro_id | INTEGER | NOT NULL, FK → livros(id) | Livro emprestado |
| usuario_id | INTEGER | NOT NULL, FK → usuarios(id) | Quem pegou |
| data_emprestimo | DATE | NOT NULL | Data do empréstimo |
| data_devolucao_prevista | DATE | — | Prazo de devolução |
| devolvido | BOOLEAN | NOT NULL, DEFAULT FALSE | Se já devolveu |
| createdAt | TIMESTAMP | NOT NULL | Data de criação |
| updatedAt | TIMESTAMP | NOT NULL | Última atualização |

## Relacionamentos
- autores 1:N livros
- livros N:N categorias (via livro_categorias)
- usuarios 1:N emprestimos
- livros 1:N emprestimos