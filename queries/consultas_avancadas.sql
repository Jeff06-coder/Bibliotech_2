-- =============================================================
-- CONSULTAS CRÍTICAS — SISTEMA DE BIBLIOTECA
-- =============================================================

-- 1. Livros mais emprestados (ranking de popularidade)
SELECT l.titulo, a.nome AS autor, COUNT(e.id) AS total_emprestimos
FROM livros l
JOIN autores a ON a.id = l.autor_id
LEFT JOIN emprestimos e ON e.livro_id = l.id
GROUP BY l.id, l.titulo, a.nome
ORDER BY total_emprestimos DESC, l.titulo
LIMIT 10;


-- 2. Empréstimos atrasados (não devolvidos com prazo vencido)
SELECT u.nome AS usuario, l.titulo AS livro,
       e.data_devolucao_prevista,
       (CURRENT_DATE - e.data_devolucao_prevista) AS dias_de_atraso
FROM emprestimos e
JOIN usuarios u ON u.id = e.usuario_id
JOIN livros l   ON l.id = e.livro_id
WHERE e.devolvido = FALSE
  AND e.data_devolucao_prevista < CURRENT_DATE
ORDER BY dias_de_atraso DESC;


-- 3. Quantidade de livros por categoria (usa a tabela pivô N:N)
SELECT c.nome AS categoria, COUNT(lc.livro_id) AS qtd_livros
FROM categorias c
LEFT JOIN livro_categorias lc ON lc.categoria_id = c.id
GROUP BY c.id, c.nome
ORDER BY qtd_livros DESC, c.nome;


-- 4. Usuários mais ativos
SELECT u.nome, COUNT(e.id) AS total_emprestimos,
       SUM(CASE WHEN e.devolvido THEN 1 ELSE 0 END) AS ja_devolvidos,
       SUM(CASE WHEN NOT e.devolvido THEN 1 ELSE 0 END) AS em_aberto
FROM usuarios u
JOIN emprestimos e ON e.usuario_id = u.id
GROUP BY u.id, u.nome
ORDER BY total_emprestimos DESC;


-- 5. Empréstimos por mês (relatório temporal)
SELECT TO_CHAR(DATE_TRUNC('month', data_emprestimo), 'YYYY-MM') AS mes,
       COUNT(*) AS total_emprestimos
FROM emprestimos
GROUP BY DATE_TRUNC('month', data_emprestimo)
ORDER BY mes;


-- 6. Busca textual de livro por título (usa índice pg_trgm)
SELECT l.titulo, a.nome AS autor
FROM livros l
JOIN autores a ON a.id = l.autor_id
WHERE l.titulo ILIKE '%sertao%'
   OR similarity(l.titulo, 'sertao') > 0.2
ORDER BY similarity(l.titulo, 'sertao') DESC;