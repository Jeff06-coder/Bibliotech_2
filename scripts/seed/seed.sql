-- =============================================================
-- SISTEMA DE BIBLIOTECA — SEED (dados de teste)
-- Senhas = bcrypt("Senha@123")
-- =============================================================

-- USUÁRIOS (20)
INSERT INTO usuarios (nome, email, senha) VALUES
  ('Ana Souza',      'ana.souza@biblioteca.com',    '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Bruno Lima',     'bruno.lima@biblioteca.com',   '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Carla Mendes',   'carla.mendes@biblioteca.com', '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Diego Ferreira', 'diego.f@biblioteca.com',      '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Elisa Costa',    'elisa.costa@biblioteca.com',  '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Felipe Nunes',   'felipe.n@biblioteca.com',     '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Gabriela Rocha', 'gabi.rocha@biblioteca.com',   '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Henrique Alves', 'henrique.a@biblioteca.com',   '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Isabela Martins','isa.martins@biblioteca.com',  '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('João Pedro',     'joao.pedro@biblioteca.com',   '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Karen Oliveira', 'karen.oli@biblioteca.com',    '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Lucas Ribeiro',  'lucas.rib@biblioteca.com',    '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Marina Santos',  'marina.s@biblioteca.com',     '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Nathan Cruz',    'nathan.cruz@biblioteca.com',  '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Olivia Pereira', 'olivia.p@biblioteca.com',     '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Paulo Gomes',    'paulo.g@biblioteca.com',      '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Rafaela Torres', 'rafa.torres@biblioteca.com',  '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Samuel Cardoso', 'samuel.c@biblioteca.com',     '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Tatiane Barros', 'tati.b@biblioteca.com',       '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa'),
  ('Victor Leal',    'victor.leal@biblioteca.com',  '$2b$10$KIX/PVH0dWNmcaY5kVP0QeM8VNNNkHBklD5pXlCk4lgJJEj1S7VQa');

-- AUTORES (20)
INSERT INTO autores (nome, nacionalidade) VALUES
  ('Machado de Assis','Brasileira'),('Clarice Lispector','Brasileira'),
  ('Jorge Amado','Brasileira'),('Graciliano Ramos','Brasileira'),
  ('Guimarães Rosa','Brasileira'),('George Orwell','Britânica'),
  ('J.R.R. Tolkien','Britânica'),('Jane Austen','Britânica'),
  ('Gabriel García Márquez','Colombiana'),('Fiódor Dostoiévski','Russa'),
  ('Liev Tolstói','Russa'),('Franz Kafka','Tcheca'),
  ('Ernest Hemingway','Americana'),('Mark Twain','Americana'),
  ('J.K. Rowling','Britânica'),('Stephen King','Americana'),
  ('Agatha Christie','Britânica'),('Haruki Murakami','Japonesa'),
  ('Isabel Allende','Chilena'),('Umberto Eco','Italiana');

-- CATEGORIAS (10)
INSERT INTO categorias (nome) VALUES
  ('Romance'),('Ficção Científica'),('Fantasia'),('Suspense'),('Clássico'),
  ('Drama'),('Aventura'),('Terror'),('Policial'),('Literatura Brasileira');

-- LIVROS (30)
INSERT INTO livros (titulo, ano_publicacao, autor_id) VALUES
  ('Dom Casmurro',1899,1),('Memórias Póstumas de Brás Cubas',1881,1),
  ('Quincas Borba',1891,1),('A Hora da Estrela',1977,2),
  ('A Paixão Segundo G.H.',1964,2),('Capitães da Areia',1937,3),
  ('Gabriela, Cravo e Canela',1958,3),('Dona Flor e Seus Dois Maridos',1966,3),
  ('Vidas Secas',1938,4),('São Bernardo',1934,4),
  ('Grande Sertão: Veredas',1956,5),('1984',1949,6),
  ('A Revolução dos Bichos',1945,6),('O Senhor dos Anéis',1954,7),
  ('O Hobbit',1937,7),('Orgulho e Preconceito',1813,8),
  ('Razão e Sensibilidade',1811,8),('Cem Anos de Solidão',1967,9),
  ('O Amor nos Tempos do Cólera',1985,9),('Crime e Castigo',1866,10),
  ('Os Irmãos Karamázov',1880,10),('Guerra e Paz',1869,11),
  ('Anna Karênina',1877,11),('A Metamorfose',1915,12),
  ('O Processo',1925,12),('O Velho e o Mar',1952,13),
  ('As Aventuras de Tom Sawyer',1876,14),('Harry Potter e a Pedra Filosofal',1997,15),
  ('It: A Coisa',1986,16),('Assassinato no Expresso do Oriente',1934,17);

-- LIVRO_CATEGORIAS (pivô N:N)
INSERT INTO livro_categorias (livro_id, categoria_id) VALUES
  (1,1),(1,5),(1,10),(2,5),(2,10),(3,5),(3,10),(4,6),(4,10),(5,6),(5,10),
  (6,1),(6,10),(7,1),(7,10),(8,1),(8,10),(9,6),(9,10),(10,6),(10,10),
  (11,5),(11,10),(12,2),(12,4),(13,2),(13,5),(14,3),(14,7),(15,3),(15,7),
  (16,1),(16,5),(17,1),(17,5),(18,1),(18,5),(20,4),(28,3),(29,8),(30,9);

-- EMPRÉSTIMOS (30)
INSERT INTO emprestimos (livro_id, usuario_id, data_emprestimo, data_devolucao_prevista, devolvido) VALUES
  (1,1,'2026-05-02','2026-05-16',TRUE),(12,2,'2026-05-03','2026-05-17',TRUE),
  (14,3,'2026-05-05','2026-05-19',TRUE),(28,4,'2026-05-06','2026-05-20',TRUE),
  (18,5,'2026-05-08','2026-05-22',TRUE),(4,6,'2026-05-10','2026-05-24',FALSE),
  (20,7,'2026-05-11','2026-05-25',TRUE),(6,8,'2026-05-12','2026-05-26',FALSE),
  (29,9,'2026-05-14','2026-05-28',TRUE),(16,10,'2026-05-15','2026-05-29',FALSE),
  (22,11,'2026-05-16','2026-05-30',TRUE),(24,12,'2026-05-18','2026-06-01',TRUE),
  (30,13,'2026-05-19','2026-06-02',FALSE),(2,14,'2026-05-20','2026-06-03',TRUE),
  (15,15,'2026-05-21','2026-06-04',FALSE),(11,16,'2026-05-22','2026-06-05',TRUE),
  (26,17,'2026-05-24','2026-06-07',FALSE),(7,18,'2026-05-25','2026-06-08',TRUE),
  (9,19,'2026-05-26','2026-06-09',FALSE),(13,20,'2026-05-27','2026-06-10',TRUE),
  (8,1,'2026-05-28','2026-06-11',FALSE),(5,2,'2026-05-29','2026-06-12',TRUE),
  (21,3,'2026-05-30','2026-06-13',FALSE),(23,4,'2026-06-01','2026-06-15',FALSE),
  (25,5,'2026-06-02','2026-06-16',TRUE),(27,6,'2026-06-03','2026-06-17',FALSE),
  (3,7,'2026-06-04','2026-06-18',FALSE),(10,8,'2026-06-05','2026-06-19',FALSE),
  (17,9,'2026-06-06','2026-06-20',FALSE),(19,10,'2026-06-07','2026-06-21',FALSE);