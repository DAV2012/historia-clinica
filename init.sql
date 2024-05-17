CREATE DATABASE  IF NOT EXISTS `dbcivera` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dbcivera`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 192.168.1.6    Database: dbcivera
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agenda` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idpaciente` varchar(255) DEFAULT NULL,
  `fechacitadate` date DEFAULT NULL,
  `horatime` varchar(255) DEFAULT NULL,
  `tipodocumento_text` varchar(255) DEFAULT NULL,
  `documentodouble` varchar(255) DEFAULT NULL,
  `nombre_text` varchar(255) DEFAULT NULL,
  `telefono_double` varchar(255) DEFAULT NULL,
  `correo_email` varchar(255) DEFAULT NULL,
  `procedimiento_text` varchar(255) DEFAULT NULL,
  `status_boolean` tinyint(1) DEFAULT NULL,
  `status_double` decimal(38,2) DEFAULT NULL,
  `observaciones_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factura` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idpaciente` varchar(255) DEFAULT NULL,
  `codigofactura` varchar(255) DEFAULT NULL,
  `procedimiento_text` varchar(255) DEFAULT NULL,
  `numerofactura` varchar(255) DEFAULT NULL,
  `tipodocumento_text` varchar(255) DEFAULT NULL,
  `documentodouble` varchar(255) DEFAULT NULL,
  `descuento_double` decimal(38,2) DEFAULT NULL,
  `nombre_text` varchar(255) DEFAULT NULL,
  `total_factura` decimal(38,2) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `facturadate` date DEFAULT NULL,
  `observaciones_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `factura_BEFORE_INSERT` BEFORE INSERT ON `factura` FOR EACH ROW BEGIN
DECLARE next_id INT;
  SELECT IFNULL(MAX(id), 0) INTO next_id FROM factura;
  SET next_id = next_id + 1;
  SET NEW.codigofactura = CONCAT('FAC', DATE_FORMAT(CURRENT_DATE, '%y%m'), LPAD(next_id, 5, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `flyway_schema_history`
--

DROP TABLE IF EXISTS `flyway_schema_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flyway_schema_history` (
  `installed_rank` int NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `flyway_schema_history_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `historia_clinica`
--

DROP TABLE IF EXISTS `historia_clinica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historia_clinica` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idpaciente` varchar(255) DEFAULT NULL,
  `tipodocumento_text` varchar(255) DEFAULT NULL,
  `documentodouble` varchar(255) DEFAULT NULL,
  `nombre_text` varchar(255) DEFAULT NULL,
  `sexo_text` varchar(255) DEFAULT NULL,
  `fecha__nacimiento_date` date DEFAULT NULL,
  `estado_civil_text` varchar(255) DEFAULT NULL,
  `ocupacion_text` varchar(255) DEFAULT NULL,
  `barrio_text` varchar(255) DEFAULT NULL,
  `ciudad_text` varchar(255) DEFAULT NULL,
  `direccion_text` varchar(255) DEFAULT NULL,
  `telefono_double` varchar(255) DEFAULT NULL,
  `familiar_text` varchar(255) DEFAULT NULL,
  `parentesco_text` varchar(255) DEFAULT NULL,
  `nacionalidad_text` varchar(255) DEFAULT NULL,
  `edad_double` smallint DEFAULT NULL,
  `correo_email` varchar(255) DEFAULT NULL,
  `rh_text` varchar(255) DEFAULT NULL,
  `eps_text` varchar(255) DEFAULT NULL,
  `motivo_consulta` varchar(255) DEFAULT NULL,
  `comonosconoce` varchar(255) DEFAULT NULL,
  `enfermedades_text` varchar(255) DEFAULT NULL,
  `medicamento_boolean` tinyint(1) DEFAULT NULL,
  `medicamento_text` varchar(255) DEFAULT NULL,
  `operacion_boolean` tinyint(1) DEFAULT NULL,
  `operacion_text` varchar(255) DEFAULT NULL,
  `implante_medico_boolean` tinyint(1) DEFAULT NULL,
  `planifica_boolean` tinyint(1) DEFAULT NULL,
  `embarazo_double` smallint DEFAULT NULL,
  `cesarea_double` smallint DEFAULT NULL,
  `aborto_double` smallint DEFAULT NULL,
  `partos_double` smallint DEFAULT NULL,
  `marcapaso_boolean` tinyint(1) DEFAULT NULL,
  `ciclo_regularidad_boolean` tinyint(1) DEFAULT NULL,
  `ciclo_periodo_date` date DEFAULT NULL,
  `parto_date` date DEFAULT NULL,
  `fachadate` date DEFAULT NULL,
  `peso` varchar(255) DEFAULT NULL,
  `talla` varchar(255) DEFAULT NULL,
  `imc` varchar(255) DEFAULT NULL,
  `grasa` varchar(255) DEFAULT NULL,
  `sobrepeso` varchar(255) DEFAULT NULL,
  `abdomen_alto` varchar(255) DEFAULT NULL,
  `abdomen_bajo` varchar(255) DEFAULT NULL,
  `pierna_izquierda` varchar(255) DEFAULT NULL,
  `pierna_derecha` varchar(255) DEFAULT NULL,
  `cadera` varchar(255) DEFAULT NULL,
  `cintura` varchar(255) DEFAULT NULL,
  `brazo_izquierdo` varchar(255) DEFAULT NULL,
  `brazo_derecho` varchar(255) DEFAULT NULL,
  `plan` varchar(255) DEFAULT NULL,
  `procedimiento` varchar(255) DEFAULT NULL,
  `seguimiento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idpaciente` varchar(255) DEFAULT NULL,
  `nombre_text` varchar(255) DEFAULT NULL,
  `tipodocumento_text` varchar(255) DEFAULT NULL,
  `documentodouble` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telefono_double` varchar(255) DEFAULT NULL,
  `correo_email` varchar(255) DEFAULT NULL,
  `fachadate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `documentodouble_UNIQUE` (`documentodouble`),
  UNIQUE KEY `paciente_un` (`idpaciente`,`documentodouble`)
) ENGINE=InnoDB AUTO_INCREMENT=400 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pago`
--

DROP TABLE IF EXISTS `pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pago` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `idpaciente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `idfactura` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `codigofactura` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `codigo_pago_text` varchar(255) DEFAULT NULL,
  `documentodouble` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nombre_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fechadate` date DEFAULT NULL,
  `valor_pago_double` decimal(38,2) DEFAULT NULL,
  `facturadate` date DEFAULT NULL,
  `observacionespago` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `pago_BEFORE_INSERT` BEFORE INSERT ON `pago` FOR EACH ROW BEGIN
DECLARE next_id INT;
  SELECT IFNULL(MAX(id), 0) INTO next_id FROM pago;
  SET next_id = next_id + 1;
  SET NEW.codigo_pago_text = CONCAT('PAC', DATE_FORMAT(CURRENT_DATE, '%y%m'), LPAD(next_id, 4, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `clave` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'dbcivera'
--

--
-- Dumping routines for database 'dbcivera'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-08 13:24:04
