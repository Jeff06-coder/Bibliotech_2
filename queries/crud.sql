-- =============================================================
-- CRUD BÁSICO — SISTEMA DE BIBLIOTECA
-- =============================================================

-- ===== LIVROS =====
-- CREATE
INSERT INTO livros (titulo, ano_publicacao, autor_id) VALUES ('Novo Livro', 2024, 1);

-- READ (lista com nome do autor)
SELECT l.id, l.titulo, l.ano_publicacao, a.nome AS autor
FROM livros l JOIN autores a ON a.id = l.autor_id
ORDER BY l.titulo;

-- UPDATE
UPDATE livros SET titulo = 'Título Atualizado', "updatedAt" = NOW() WHERE id = 1;

-- DELETE
DELETE FROM livros WHERE id = 1;


-- ===== USUARIOS =====
INSERT INTO usuarios (nome, email, senha) VALUES ('Novo Usuario', 'novo@biblioteca.com', '$2b$10$hash');
SELECT id, nome, email FROM usuarios ORDER BY nome;
UPDATE usuarios SET nome = 'Nome Novo', "updatedAt" = NOW() WHERE id = 1;
DELETE FROM usuarios WHERE id = 1;


-- ===== AUTORES =====
INSERT INTO autores (nome, nacionalidade) VALUES ('Novo Autor', 'Brasileira');
SELECT * FROM autores ORDER BY nome;
UPDATE autores SET nacionalidade = 'Portuguesa', "updatedAt" = NOW() WHERE id = 1;
DELETE FROM autores WHERE id = 1;


-- ===== CATEGORIAS =====
INSERT INTO categorias (nome) VALUES ('Biografia');
SELECT * FROM categorias ORDER BY nome;
UPDATE categorias SET nome = 'Romance Histórico', "updatedAt" = NOW() WHERE id = 1;
DELETE FROM categorias WHERE id = 1;


-- ===== EMPRESTIMOS =====
INSERT INTO emprestimos (livro_id, usuario_id, data_emprestimo, data_devolucao_prevista)
VALUES (1, 1, CURRENT_DATE, CURRENT_DATE + INTERVAL '14 days');

SELECT e.id, l.titulo, u.nome, e.data_emprestimo, e.devolvido
FROM emprestimos e
JOIN livros l ON l.id = e.livro_id
JOIN usuarios u ON u.id = e.usuario_id;

UPDATE emprestimos SET devolvido = TRUE, "updatedAt" = NOW() WHERE id = 1;
DELETE FROM emprestimos WHERE id = 1;