CREATE DATABASE  IF NOT EXISTS `planium` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `planium`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: planium
-- ------------------------------------------------------
-- Server version	5.7.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `beneficiary_table`
--

DROP TABLE IF EXISTS `beneficiary_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beneficiary_table` (
  `id_beneficiary` int(11) NOT NULL AUTO_INCREMENT,
  `nome_beneficiario` varchar(45) NOT NULL,
  `idade` int(11) NOT NULL,
  `id_beneficiary_main` int(11) NOT NULL,
  `id_plans_fk` int(11) NOT NULL,
  PRIMARY KEY (`id_beneficiary`),
  KEY `id_plans_idx` (`id_plans_fk`),
  KEY `id_beneficiary_main_idx` (`id_beneficiary_main`),
  CONSTRAINT `id_plans_fk` FOREIGN KEY (`id_plans_fk`) REFERENCES `plans_table` (`id_plans`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneficiary_table`
--

LOCK TABLES `beneficiary_table` WRITE;
/*!40000 ALTER TABLE `beneficiary_table` DISABLE KEYS */;
INSERT INTO `beneficiary_table` VALUES (1,'Luiz neto',18,1,1),(2,'Luiz Claudio',22,1,1),(3,'Luiz Nando',50,2,3),(4,'Luiz Nanda',30,1,1),(5,'Luiz Nelso',15,1,1),(6,'Luiz Rato',80,2,3),(7,'Luiz Rato',80,2,3);
/*!40000 ALTER TABLE `beneficiary_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans_table`
--

DROP TABLE IF EXISTS `plans_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans_table` (
  `id_plans` int(11) NOT NULL,
  `registro` varchar(45) NOT NULL,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id_plans`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans_table`
--

LOCK TABLES `plans_table` WRITE;
/*!40000 ALTER TABLE `plans_table` DISABLE KEYS */;
INSERT INTO `plans_table` VALUES (1,'reg1','Bitix Customer Plano 1'),(2,'reg2','Bitix Customer Plano 2'),(3,'reg3','Bitix Customer Plano 3'),(4,'reg4','Bitix Customer Plano 4'),(5,'reg5','Bitix Customer Plano 5'),(6,'reg6','Bitix Customer Plano 6'),(7,'reg6','Bitix Customer Plano 6');
/*!40000 ALTER TABLE `plans_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prices_table`
--

DROP TABLE IF EXISTS `prices_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prices_table` (
  `id_prices` int(11) NOT NULL AUTO_INCREMENT,
  `minimos_vidas` int(11) NOT NULL,
  `faixa1` float NOT NULL,
  `faixa2` float NOT NULL,
  `faixa3` float NOT NULL,
  `id_plans` int(11) NOT NULL,
  PRIMARY KEY (`id_prices`),
  KEY `id_plans_idx` (`id_plans`),
  CONSTRAINT `id_plans` FOREIGN KEY (`id_plans`) REFERENCES `plans_table` (`id_plans`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices_table`
--

LOCK TABLES `prices_table` WRITE;
/*!40000 ALTER TABLE `prices_table` DISABLE KEYS */;
INSERT INTO `prices_table` VALUES (1,1,10,12,15,1),(2,4,9,11,14,1),(3,1,20,30,40,2),(4,1,30,40,50,3),(5,1,40,50,60,4),(6,1,50,60,70,5),(7,1,60,70,80,6),(8,2,55,65,75,6),(9,2,55,65,75,3);
/*!40000 ALTER TABLE `prices_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-07 21:04:25
