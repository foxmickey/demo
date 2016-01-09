-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2015 �?11 �?27 �?08:46
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `my110`
--
CREATE DATABASE IF NOT EXISTS `my110` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `my110`;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='新闻表' AUTO_INCREMENT=87 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(79, '推荐', '01.jpg', '推荐', '2015-11-01 00:00:00'),
(80, '百家', '01.jpg', '百家', '2015-11-01 00:00:00'),
(81, '本地', '01.jpg', '本地', '2015-11-01 00:00:00'),
(82, '图片', '01.jpg', '图片', '2015-11-01 00:00:00'),
(83, '娱乐', '01.jpg', '娱乐', '2015-11-01 00:00:00'),
(84, '社会', '01.jpg', '社会', '2015-11-01 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
