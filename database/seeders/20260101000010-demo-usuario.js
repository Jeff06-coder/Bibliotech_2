'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    const senhaCriptografada = await bcrypt.hash('123456', 10);

    // 1. USUARIOS (Admin + Seus 20 Usuários)
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'Administrador', email: 'admin@biblioteca.com', senha: senhaCriptografada, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ana Souza', email: 'ana.souza@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Bruno Lima', email: 'bruno.lima@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Carla Mendes', email: 'carla.mendes@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Diego Ferreira', email: 'diego.f@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Elisa Costa', email: 'elisa.costa@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Felipe Nunes', email: 'felipe.n@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Gabriela Rocha', email: 'gabi.rocha@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Henrique Alves', email: 'henrique.a@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Isabela Martins', email: 'isa.martins@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'João Pedro', email: 'joao.pedro@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Karen Oliveira', email: 'karen.oli@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Lucas Ribeiro', email: 'lucas.rib@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Marina Santos', email: 'marina.s@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Nathan Cruz', email: 'nathan.cruz@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Olivia Pereira', email: 'olivia.p@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Paulo Gomes', email: 'paulo.g@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Rafaela Torres', email: 'rafa.torres@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Samuel Cardoso', email: 'samuel.c@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Tatiane Barros', email: 'tati.b@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Victor Leal', email: 'victor.leal@biblioteca.com', senha: '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // 2. AUTORES
    await queryInterface.bulkInsert('autores', [
      { nome: 'Machado de Assis', nacionalidade: 'Brasileira', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Clarice Lispector', nacionalidade: 'Brasileira', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Jorge Amado', nacionalidade: 'Brasileira', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Graciliano Ramos', nacionalidade: 'Brasileira', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Guimarães Rosa', nacionalidade: 'Brasileira', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'George Orwell', nacionalidade: 'Britânica', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'J.R.R. Tolkien', nacionalidade: 'Britânica', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Jane Austen', nacionalidade: 'Britânica', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Gabriel García Márquez', nacionalidade: 'Colombiana', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Fiódor Dostoiévski', nacionalidade: 'Russa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Liev Tolstói', nacionalidade: 'Russa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Franz Kafka', nacionalidade: 'Tcheca', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ernest Hemingway', nacionalidade: 'Americana', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Mark Twain', nacionalidade: 'Americana', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'J.K. Rowling', nacionalidade: 'Britânica', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Stephen King', nacionalidade: 'Americana', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Agatha Christie', nacionalidade: 'Britânica', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Haruki Murakami', nacionalidade: 'Japonesa', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Isabel Allende', nacionalidade: 'Chilena', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Umberto Eco', nacionalidade: 'Italiana', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // 3. CATEGORIAS
    await queryInterface.bulkInsert('categorias', [
      { nome: 'Romance', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ficção Científica', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Fantasia', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Suspense', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Clássico', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Drama', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Aventura', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Terror', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Policial', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Literatura Brasileira', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // 4. LIVROS
    await queryInterface.bulkInsert('livros', [
      { titulo: 'Dom Casmurro', ano_publicacao: 1899, autor_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Memórias Póstumas de Brás Cubas', ano_publicacao: 1881, autor_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Quincas Borba', ano_publicacao: 1891, autor_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'A Hora da Estrela', ano_publicacao: 1977, autor_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'A Paixão Segundo G.H.', ano_publicacao: 1964, autor_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Capitães da Areia', ano_publicacao: 1937, autor_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Gabriela, Cravo e Canela', ano_publicacao: 1958, autor_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Dona Flor e Seus Dois Maridos', ano_publicacao: 1966, autor_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Vidas Secas', ano_publicacao: 1938, autor_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'São Bernardo', ano_publicacao: 1934, autor_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Grande Sertão: Veredas', ano_publicacao: 1956, autor_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { titulo: '1984', ano_publicacao: 1949, autor_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'A Revolução dos Bichos', ano_publicacao: 1945, autor_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'O Senhor dos Anéis', ano_publicacao: 1954, autor_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'O Hobbit', ano_publicacao: 1937, autor_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Orgulho e Preconceito', ano_publicacao: 1813, autor_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Razão e Sensibilidade', ano_publicacao: 1811, autor_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Cem Anos de Solidão', ano_publicacao: 1967, autor_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'O Amor nos Tempos do Cólera', ano_publicacao: 1985, autor_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Crime e Castigo', ano_publicacao: 1866, autor_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Os Irmãos Karamázov', ano_publicacao: 1880, autor_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Guerra e Paz', ano_publicacao: 1869, autor_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Anna Karênina', ano_publicacao: 1877, autor_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'A Metamorfose', ano_publicacao: 1915, autor_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'O Processo', ano_publicacao: 1925, autor_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'O Velho e o Mar', ano_publicacao: 1952, autor_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'As Aventuras de Tom Sawyer', ano_publicacao: 1876, autor_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Harry Potter e a Pedra Filosofal', ano_publicacao: 1997, autor_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'It: A Coisa', ano_publicacao: 1986, autor_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { titulo: 'Assassinato no Expresso do Oriente', ano_publicacao: 1934, autor_id: 17, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // 5. LIVRO_CATEGORIAS (Pivô N:M)
    await queryInterface.bulkInsert('livro_categorias', [
      { livro_id: 1, categoria_id: 1, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 1, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 1, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 2, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 2, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 3, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 3, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 4, categoria_id: 6, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 4, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 5, categoria_id: 6, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 5, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 6, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 6, categoria_id: 1, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 7, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 7, categoria_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 8, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 8, categoria_id: 1, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 9, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 9, categoria_id: 6, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 10, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 10, categoria_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 11, categoria_id: 10, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 11, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 12, categoria_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 12, categoria_id: 4, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 13, categoria_id: 2, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 13, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 14, categoria_id: 3, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 14, categoria_id: 7, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 15, categoria_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 15, categoria_id: 7, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 16, categoria_id: 1, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 16, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 17, categoria_id: 1, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 17, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 18, categoria_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 18, categoria_id: 5, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 20, categoria_id: 4, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 28, categoria_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 29, categoria_id: 8, createdAt: new Date(), updatedAt: new Date() }, { livro_id: 30, categoria_id: 9, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // 6. EMPRÉSTIMOS
    await queryInterface.bulkInsert('emprestimos', [
      { livro_id: 1, usuario_id: 2, data_emprestimo: '2026-05-02', data_devolucao_prevista: '2026-05-16', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 12, usuario_id: 3, data_emprestimo: '2026-05-03', data_devolucao_prevista: '2026-05-17', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 14, usuario_id: 4, data_emprestimo: '2026-05-05', data_devolucao_prevista: '2026-05-19', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 28, usuario_id: 5, data_emprestimo: '2026-05-06', data_devolucao_prevista: '2026-05-20', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 18, usuario_id: 6, data_emprestimo: '2026-05-08', data_devolucao_prevista: '2026-05-22', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 4, usuario_id: 7, data_emprestimo: '2026-05-10', data_devolucao_prevista: '2026-05-24', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 20, usuario_id: 8, data_emprestimo: '2026-05-11', data_devolucao_prevista: '2026-05-25', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 6, usuario_id: 9, data_emprestimo: '2026-05-12', data_devolucao_prevista: '2026-05-26', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 29, usuario_id: 10, data_emprestimo: '2026-05-14', data_devolucao_prevista: '2026-05-28', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 16, usuario_id: 11, data_emprestimo: '2026-05-15', data_devolucao_prevista: '2026-05-29', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 22, usuario_id: 12, data_emprestimo: '2026-05-16', data_devolucao_prevista: '2026-05-30', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 24, usuario_id: 13, data_emprestimo: '2026-05-18', data_devolucao_prevista: '2026-06-01', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 30, usuario_id: 14, data_emprestimo: '2026-05-19', data_devolucao_prevista: '2026-06-02', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 2, usuario_id: 15, data_emprestimo: '2026-05-20', data_devolucao_prevista: '2026-06-03', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 15, usuario_id: 16, data_emprestimo: '2026-05-21', data_devolucao_prevista: '2026-06-04', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 11, usuario_id: 17, data_emprestimo: '2026-05-22', data_devolucao_prevista: '2026-06-05', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 26, usuario_id: 18, data_emprestimo: '2026-05-24', data_devolucao_prevista: '2026-06-07', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 7, usuario_id: 19, data_emprestimo: '2026-05-25', data_devolucao_prevista: '2026-06-08', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 9, usuario_id: 20, data_emprestimo: '2026-05-26', data_devolucao_prevista: '2026-06-09', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 13, usuario_id: 21, data_emprestimo: '2026-05-27', data_devolucao_prevista: '2026-06-10', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 8, usuario_id: 2, data_emprestimo: '2026-05-28', data_devolucao_prevista: '2026-06-11', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 5, usuario_id: 3, data_emprestimo: '2026-05-29', data_devolucao_prevista: '2026-06-12', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 21, usuario_id: 4, data_emprestimo: '2026-05-30', data_devolucao_prevista: '2026-06-13', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 23, usuario_id: 5, data_emprestimo: '2026-06-01', data_devolucao_prevista: '2026-06-15', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 25, usuario_id: 6, data_emprestimo: '2026-06-02', data_devolucao_prevista: '2026-06-16', devolvido: true, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 27, usuario_id: 7, data_emprestimo: '2026-06-03', data_devolucao_prevista: '2026-06-17', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 3, usuario_id: 8, data_emprestimo: '2026-06-04', data_devolucao_prevista: '2026-06-18', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 10, usuario_id: 9, data_emprestimo: '2026-06-05', data_devolucao_prevista: '2026-06-19', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 17, usuario_id: 10, data_emprestimo: '2026-06-06', data_devolucao_prevista: '2026-06-20', devolvido: false, createdAt: new Date(), updatedAt: new Date() },
      { livro_id: 19, usuario_id: 11, data_emprestimo: '2026-06-07', data_devolucao_prevista: '2026-06-21', devolvido: false, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface) => {
    // Apaga os dados na ordem inversa para evitar problemas com chaves estrangeiras (Foreign Keys)
    await queryInterface.bulkDelete('emprestimos', null, {});
    await queryInterface.bulkDelete('livro_categorias', null, {});
    await queryInterface.bulkDelete('livros', null, {});
    await queryInterface.bulkDelete('categorias', null, {});
    await queryInterface.bulkDelete('autores', null, {});
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};