-- =============================================================
-- AGREGAÇÕES — SISTEMA DE BIBLIOTECA
-- =============================================================

-- Total de livros no acervo
SELECT COUNT(*) AS total_livros FROM livros;

-- Total de empréstimos: devolvidos x em aberto
SELECT
    COUNT(*)                                       AS total,
    SUM(CASE WHEN devolvido THEN 1 ELSE 0 END)     AS devolvidos,
    SUM(CASE WHEN NOT devolvido THEN 1 ELSE 0 END) AS em_aberto
FROM emprestimos;

-- Média de dias de empréstimo previstos
SELECT ROUND(AVG(data_devolucao_prevista - data_emprestimo), 1) AS media_dias
FROM emprestimos
WHERE data_devolucao_prevista IS NOT NULL;

-- Livro mais antigo e mais novo do acervo
SELECT MIN(ano_publicacao) AS mais_antigo, MAX(ano_publicacao) AS mais_novo FROM livros;

-- Quantidade de livros por nacionalidade do autor
SELECT a.nacionalidade, COUNT(l.id) AS qtd_livros
FROM autores a
JOIN livros l ON l.autor_id = a.id
GROUP BY a.nacionalidade
ORDER BY qtd_livros DESC;