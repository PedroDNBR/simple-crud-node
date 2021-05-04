-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Maio-2021 às 17:44
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `node_crud`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `movie_reviews`
--

CREATE TABLE `movie_reviews` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieReview` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `movie_reviews`
--

INSERT INTO `movie_reviews` (`id`, `movieName`, `movieReview`) VALUES
(7, 'oeixe', 'peixeeeeeeeee'),
(8, 'smurf', 'cool'),
(9, 'teste', 'teste'),
(10, 'peixe', 'arroz'),
(11, 'nfs', 'most wanted'),
(13, 'Botstrap', 'muito doido'),
(14, 'teste', 'teste'),
(15, 'Vitor', 'é bom');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `movie_reviews`
--
ALTER TABLE `movie_reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `movie_reviews`
--
ALTER TABLE `movie_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
