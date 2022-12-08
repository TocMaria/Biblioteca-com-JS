-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Dez-2022 às 19:50
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bibliotecabel`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--
drop table clientes
CREATE TABLE `clientes` (
  `id_cli` int(11) NOT NULL,
  `nome_cli` varchar(80) NOT NULL,
  `sexo_cli` varchar(20) NOT NULL,
  `nasc_cli` varchar(20) NOT NULL,
  `cpf_cli` varchar(15) NOT NULL,
  `ender_cli` varchar(100) NOT NULL,
  `tel_cli` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco`
--

CREATE TABLE `endereco` (
  `cep` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `rua` varchar(50) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `numero` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `livro`
--
drop table livros
CREATE TABLE `livros` (
  `id_livro` int(11) NOT NULL,
  `nome_livro` varchar(80) NOT NULL,
  `autor_livro` varchar(80) NOT NULL,
  `genero_livro` varchar(20) NOT NULL,
  `editora_livro` varchar(80) NOT NULL,
  `data_lancamento_livro` varchar(80) NOT NULL,
  `desc_livro` varchar(200) NOT NULL,
  `obs_livro` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `loja`
--
drop table lojas
CREATE TABLE `lojas` (
  `id_loja` int(11) NOT NULL,
  `nome_loja` varchar(80) NOT NULL,
  `cnpj_loja` varchar(20) NOT NULL,
  `ender_loja` varchar(50) NOT NULL,
  `tele_loja` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cli`);

--
-- Índices para tabela `livro`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id_livro`);

--
-- Índices para tabela `loja`
--
ALTER TABLE `lojas`
  ADD PRIMARY KEY (`id_loja`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `clientes`
  MODIFY `id_cli` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `livro`
--
ALTER TABLE `livros`
  MODIFY `id_livro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `loja`
--
ALTER TABLE `lojas`
  MODIFY `id_loja` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
