-- Schema `cadastro`
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cadastro` ;
USE `cadastro` ;

-- -----------------------------------------------------
-- Table `BlogDB`.`local`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cadastro`.`local`;

CREATE TABLE IF NOT EXISTS `cadastro`.`local` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cidade` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `endereco` MEDIUMTEXT NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `contatos` MEDIUMTEXT NOT NULL,
  `preco` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
