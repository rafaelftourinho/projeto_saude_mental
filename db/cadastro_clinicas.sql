-- Schema BlogDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cadastro` ;
USE `cadastro` ;

-- -----------------------------------------------------
-- Table `BlogDB`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cadastro`.`local` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cidade` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `endereco` MEDIUMTEXT NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `contatos` MEDIUMTEXT NOT NULL,
  `preco` NUMBER NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
