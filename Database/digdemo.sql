-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 19, 2021 at 01:07 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digdemo`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `productName` varchar(255) NOT NULL,
  `productPrice` float NOT NULL,
  `image` varchar(255) NOT NULL,
  `descr` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `productName`, `productPrice`, `image`, `descr`) VALUES
(1, 'Cars', 150, '16188151441620314160.png', 'dhsfds'),
(2, 'Bus', 148, '1618815374338973003.jpg', 'dsfsdfsdfsdf'),
(3, 'Anything', 150, '16188162911055756804.jpg', 'Any'),
(4, 'Plane', 250, '16188237352060806096.jpg', 'Flying'),
(5, 'Anyt', 140, '16188240301766814273.jpg', 'dsafd'),
(6, 'asdasd', 120, '1618824187939595057.jpg', 'saddas'),
(7, 'asdsad', 10, '16188243941661908721.jpg', 'sadsd'),
(8, 'Bus 2', 180, '16188253311179024345.jpg', 'dsad'),
(9, 'New', 10, '16188263011888607621.jpg', 'Prod'),
(10, 'asdad', 12, '16188265212116715864.jpg', 'asdsad'),
(11, 'www', 14, '161882672665286378.jpg', 'www'),
(12, 'Dada', 145, '161882712881039717.png', 'dadsd'),
(13, 'Dwdw', 155, '16188274081729887693.jpg', 'asd'),
(14, 'Cars 2', 600, '16188304241054105488.jpg', 'sadsda');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`) VALUES
(1, 'akshay', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
