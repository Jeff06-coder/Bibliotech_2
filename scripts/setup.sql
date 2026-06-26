-- =============================================================
-- SISTEMA DE BIBLIOTECA — DDL (setup.sql)
-- PostgreSQL 17+
-- Espelha as migrations do Sequelize do projeto.
-- =============================================================

CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- usuarios
CREATE TABLE usuarios (
    id          SERIAL PRIMARY KEY,
    nome        VARCHAR(255)  NOT NULL,
    email       VARCHAR(255)  NOT NULL UNIQUE,
    senha       VARCHAR(255)  NOT NULL,
    "createdAt" TIMESTAMP     NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- autores
CREATE TABLE autores (
    id            SERIAL PRIMARY KEY,
    nome          VARCHAR(255) NOT NULL,
    nacionalidade VARCHAR(255),
    "createdAt"   TIMESTAMP    NOT NULL DEFAULT NOW(),
    "updatedAt"   TIMESTAMP    NOT NULL DEFAULT NOW()
);

-- categorias
CREATE TABLE categorias (
    id          SERIAL PRIMARY KEY,
    nome        VARCHAR(255) NOT NULL UNIQUE,
    "createdAt" TIMESTAMP    NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP    NOT NULL DEFAULT NOW()
);

-- livros
CREATE TABLE livros (
    id              SERIAL PRIMARY KEY,
    titulo          VARCHAR(255) NOT NULL,
    ano_publicacao  INTEGER,
    autor_id        INTEGER      NOT NULL
                       REFERENCES autores(id) ON UPDATE CASCADE ON DELETE CASCADE,
    "createdAt"     TIMESTAMP    NOT NULL DEFAULT NOW(),
    "updatedAt"     TIMESTAMP    NOT NULL DEFAULT NOW()
);

-- livro_categorias (TABELA PIVÔ — N:N)
CREATE TABLE livro_categorias (
    id           SERIAL PRIMARY KEY,
    livro_id     INTEGER NOT NULL
                    REFERENCES livros(id) ON UPDATE CASCADE ON DELETE CASCADE,
    categoria_id INTEGER NOT NULL
                    REFERENCES categorias(id) ON UPDATE CASCADE ON DELETE CASCADE,
    "createdAt"  TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt"  TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT livro_categoria_unica UNIQUE (livro_id, categoria_id)
);

-- emprestimos
CREATE TABLE emprestimos (
    id                       SERIAL PRIMARY KEY,
    livro_id                 INTEGER NOT NULL
                                REFERENCES livros(id) ON UPDATE CASCADE ON DELETE CASCADE,
    usuario_id               INTEGER NOT NULL
                                REFERENCES usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE,
    data_emprestimo          DATE    NOT NULL,
    data_devolucao_prevista  DATE,
    devolvido                BOOLEAN NOT NULL DEFAULT FALSE,
    "createdAt"              TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt"              TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ÍNDICES
CREATE INDEX idx_livros_titulo               ON livros(titulo);
CREATE INDEX idx_livros_autor_id             ON livros(autor_id);
CREATE INDEX idx_emprestimos_data_emprestimo ON emprestimos(data_emprestimo);
CREATE INDEX idx_emprestimos_usuario_id      ON emprestimos(usuario_id);
CREATE INDEX idx_livro_categorias_livro      ON livro_categorias(livro_id);
CREATE INDEX idx_livro_categorias_categoria  ON livro_categorias(categoria_id);
CREATE INDEX idx_emprestimos_livro           ON emprestimos(livro_id);
CREATE INDEX idx_emprestimos_devolvido       ON emprestimos(devolvido);
CREATE INDEX idx_livros_titulo_trgm          ON livros USING GIN (titulo gin_trgm_ops);