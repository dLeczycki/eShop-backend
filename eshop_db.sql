-- --------------------------------------------------------
-- Host:                         localhost
-- Wersja serwera:               10.4.22-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Zrzut struktury bazy danych eshop
CREATE DATABASE IF NOT EXISTS `eshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `eshop`;

-- Zrzut struktury tabela eshop.images
CREATE TABLE IF NOT EXISTS `images` (
  `name` varchar(64) NOT NULL,
  `url` varchar(128) NOT NULL,
  `productId` varchar(36) NOT NULL,
  PRIMARY KEY (`name`),
  KEY `FK__products` (`productId`),
  CONSTRAINT `FK__products` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Zrzucanie danych dla tabeli eshop.images: ~5 rows (około)
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` (`name`, `url`, `productId`) VALUES
	('battle-helicopter.jpg', 'img/battle-helicopter.jpg', '8b0c9a62-f2db-11ec-b317-106530fc9b48'),
	('bike.webp', 'img/bike.webp', '7dfa4538-ec6d-11ec-90d6-106530fc9b48'),
	('car.png', 'img/car.png', '986aa3ac-f05d-11ec-96a4-106530fc9b48'),
	('motorbike.jpeg', 'img/motorbike.jpeg', '7c5ef1e3-f20f-11ec-8b22-106530fc9b48'),
	('tomek-lokomotywa.jpg', 'img/tomek-lokomotywa.jpg', 'eaea7f9f-f2db-11ec-b317-106530fc9b48');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;

-- Zrzut struktury tabela eshop.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `number` smallint(6) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `postalCode` varchar(6) NOT NULL,
  `city` varchar(32) NOT NULL,
  `address` varchar(64) NOT NULL,
  `status` enum('fresh','in-progress','sent','finished') NOT NULL DEFAULT 'fresh',
  `amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `shipmentName` varchar(64) NOT NULL,
  `paymentName` varchar(64) NOT NULL,
  PRIMARY KEY (`number`),
  KEY `FK_orders_shipments` (`shipmentName`) USING BTREE,
  CONSTRAINT `FK_orders_shipments` FOREIGN KEY (`shipmentName`) REFERENCES `shipments` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Zrzucanie danych dla tabeli eshop.orders: ~2 rows (około)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`number`, `firstname`, `lastname`, `email`, `phone`, `postalCode`, `city`, `address`, `status`, `amount`, `shipmentName`, `paymentName`) VALUES
	(1, 'Daniel', 'Łęczycki', 'danielleczycki@gmail.com', '796415683', '96-100', 'Skierniewice', 'Kozietulskiego', 'fresh', 24.99, 'courier', 'payme'),
	(2, 'Daniel', 'Łęczycki', 'danielleczycki@gmail.com', '796415683', '96-100', 'Skierniewice', 'Kozietulskiego', 'fresh', 44.99, 'courier', 'payme'),
	(3, 'Daniel', 'Łęczycki', 'danielleczycki@gmail.com', '796415683', '96-100', 'Skierniewice', 'Kozietulskiego', 'fresh', 44.99, 'courier', 'payme'),
	(4, 'Daniel', 'Łęczycki', 'danielleczycki@gmail.com', '796415683', '96-100', 'Skierniewice', 'Kozietulskiego', 'fresh', 44.99, 'courier', 'payme');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Zrzut struktury tabela eshop.order_products
CREATE TABLE IF NOT EXISTS `order_products` (
  `orderNumber` smallint(6) NOT NULL,
  `productId` varchar(36) NOT NULL,
  `count` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`orderNumber`,`productId`),
  KEY `FK_order_products_products` (`productId`),
  CONSTRAINT `FK_order_products_orders` FOREIGN KEY (`orderNumber`) REFERENCES `orders` (`number`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_order_products_products` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Zrzucanie danych dla tabeli eshop.order_products: ~0 rows (około)
/*!40000 ALTER TABLE `order_products` DISABLE KEYS */;
INSERT INTO `order_products` (`orderNumber`, `productId`, `count`) VALUES
	(4, '8b0c9a62-f2db-11ec-b317-106530fc9b48', 1);
/*!40000 ALTER TABLE `order_products` ENABLE KEYS */;

-- Zrzut struktury tabela eshop.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(128) NOT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Zrzucanie danych dla tabeli eshop.products: ~4 rows (około)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `price`) VALUES
	('7c5ef1e3-f20f-11ec-8b22-106530fc9b48', 'Motocykl', 89999.99),
	('7dfa4538-ec6d-11ec-90d6-106530fc9b48', 'Rower', 999.99),
	('8b0c9a62-f2db-11ec-b317-106530fc9b48', 'Bojowy helikopter', 24.99),
	('986aa3ac-f05d-11ec-96a4-106530fc9b48', 'Samochód', 99999.99),
	('eaea7f9f-f2db-11ec-b317-106530fc9b48', 'Tomek lokomotywa', 45.99);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Zrzut struktury tabela eshop.shipments
CREATE TABLE IF NOT EXISTS `shipments` (
  `name` varchar(64) NOT NULL,
  `fullName` varchar(64) NOT NULL,
  `icon` varchar(64) NOT NULL,
  `price` decimal(5,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Zrzucanie danych dla tabeli eshop.shipments: ~2 rows (około)
/*!40000 ALTER TABLE `shipments` DISABLE KEYS */;
INSERT INTO `shipments` (`name`, `fullName`, `icon`, `price`) VALUES
	('courier', 'SuperKurier', 'fa-solid fa-truck', 20.00),
	('post', 'Szybka Poczta', 'fa-solid fa-box', 8.00),
	('teleport', 'Teleport', 'fa-solid fa-bolt-lightning', 0.00);
/*!40000 ALTER TABLE `shipments` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
