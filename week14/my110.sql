-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-01-16 11:44:10
-- 服务器版本： 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my110`
--

-- --------------------------------------------------------

--
-- 表的结构 `classify`
--

CREATE TABLE IF NOT EXISTS `classify` (
  `id` int(16) DEFAULT NULL,
  `classtitle` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `classify`
--

INSERT INTO `classify` (`id`, `classtitle`) VALUES
(NULL, '推荐'),
(NULL, '本地'),
(NULL, '图片'),
(NULL, '娱乐'),
(NULL, '社会'),
(NULL, '科技'),
(NULL, '军事'),
(NULL, '科技'),
(NULL, '生活'),
(NULL, '国内'),
(NULL, '国外'),
(NULL, '更多');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newstitle` varchar(100) DEFAULT NULL,
  `newsimg` varchar(300) DEFAULT NULL,
  `newscontent` text,
  `addtime` date DEFAULT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='新闻表' AUTO_INCREMENT=112 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(79, '水皮：钱不值钱了 人民币贬值成就了谁的机会？', 'http://t12.baidu.com/it/u=http://y0.ifengimg.com/haina/2016_03/0eb93b190206ecc_w550_h355.jpg&fm=36', '有时候还真就是这个情况，这边股市暴跌熔断，那边人民币兑美元连跌，让水皮不得不想到了去年夏天的情况，感觉股市汇市双双救市的局面又要来一遍。但是，这只是似曾相识，真正的情况还不一样，股市的杠杆不一样，人民币的情景也不尽相同。人民币近期走势的确说得上是剧烈波动，新年的第一天，盘中离岸人民币一下子跌了600个基点，隔一天之后，又跌800个基点，三天共跌2%左右，非常恐怖。但1月11日，离岸人民币又涨了1000个基点，基本收复失地。12日、13日，离岸人民币兑美元又温和上涨，接着14日、15日离岸人民币兑美元又是继续下跌。', '2015-11-01'),
(80, '水皮：钱不值钱了 人民币贬值成就了谁的机会？', 'http://t12.baidu.com/it/u=http://y0.ifengimg.com/haina/2016_03/0eb93b190206ecc_w550_h355.jpg&fm=36', '有时候还真就是这个情况，这边股市暴跌熔断，那边人民币兑美元连跌，让水皮不得不想到了去年夏天的情况，感觉股市汇市双双救市的局面又要来一遍。但是，这只是似曾相识，真正的情况还不一样，股市的杠杆不一样，人民币的情景也不尽相同。人民币近期走势的确说得上是剧烈波动，新年的第一天，盘中离岸人民币一下子跌了600个基点，隔一天之后，又跌800个基点，三天共跌2%左右，非常恐怖。但1月11日，离岸人民币又涨了1000个基点，基本收复失地。12日、13日，离岸人民币兑美元又温和上涨，接着14日、15日离岸人民币兑美元又是继续下跌。', '2015-11-01'),
(81, '水皮：钱不值钱了 人民币贬值成就了谁的机会？', 'http://t12.baidu.com/it/u=http://y0.ifengimg.com/haina/2016_03/0eb93b190206ecc_w550_h355.jpg&fm=36', '有时候还真就是这个情况，这边股市暴跌熔断，那边人民币兑美元连跌，让水皮不得不想到了去年夏天的情况，感觉股市汇市双双救市的局面又要来一遍。但是，这只是似曾相识，真正的情况还不一样，股市的杠杆不一样，人民币的情景也不尽相同。人民币近期走势的确说得上是剧烈波动，新年的第一天，盘中离岸人民币一下子跌了600个基点，隔一天之后，又跌800个基点，三天共跌2%左右，非常恐怖。但1月11日，离岸人民币又涨了1000个基点，基本收复失地。12日、13日，离岸人民币兑美元又温和上涨，接着14日、15日离岸人民币兑美元又是继续下跌。', '2015-11-01'),
(82, '水皮：钱不值钱了 人民币贬值成就了谁的机会？', 'http://t12.baidu.com/it/u=http://y0.ifengimg.com/haina/2016_03/0eb93b190206ecc_w550_h355.jpg&fm=36', '有时候还真就是这个情况，这边股市暴跌熔断，那边人民币兑美元连跌，让水皮不得不想到了去年夏天的情况，感觉股市汇市双双救市的局面又要来一遍。但是，这只是似曾相识，真正的情况还不一样，股市的杠杆不一样，人民币的情景也不尽相同。人民币近期走势的确说得上是剧烈波动，新年的第一天，盘中离岸人民币一下子跌了600个基点，隔一天之后，又跌800个基点，三天共跌2%左右，非常恐怖。但1月11日，离岸人民币又涨了1000个基点，基本收复失地。12日、13日，离岸人民币兑美元又温和上涨，接着14日、15日离岸人民币兑美元又是继续下跌。', '2015-11-01'),
(83, '水皮：钱不值钱了 人民币贬值成就了谁的机会？', 'http://t12.baidu.com/it/u=http://y0.ifengimg.com/haina/2016_03/0eb93b190206ecc_w550_h355.jpg&fm=36', '有时候还真就是这个情况，这边股市暴跌熔断，那边人民币兑美元连跌，让水皮不得不想到了去年夏天的情况，感觉股市汇市双双救市的局面又要来一遍。但是，这只是似曾相识，真正的情况还不一样，股市的杠杆不一样，人民币的情景也不尽相同。人民币近期走势的确说得上是剧烈波动，新年的第一天，盘中离岸人民币一下子跌了600个基点，隔一天之后，又跌800个基点，三天共跌2%左右，非常恐怖。但1月11日，离岸人民币又涨了1000个基点，基本收复失地。12日、13日，离岸人民币兑美元又温和上涨，接着14日、15日离岸人民币兑美元又是继续下跌。', '2015-11-01'),
(84, '水皮：钱不值钱了 人民币贬值成就了谁的机会？', 'http://t12.baidu.com/it/u=http://y0.ifengimg.com/haina/2016_03/0eb93b190206ecc_w550_h355.jpg&fm=36', '有时候还真就是这个情况，这边股市暴跌熔断，那边人民币兑美元连跌，让水皮不得不想到了去年夏天的情况，感觉股市汇市双双救市的局面又要来一遍。但是，这只是似曾相识，真正的情况还不一样，股市的杠杆不一样，人民币的情景也不尽相同。人民币近期走势的确说得上是剧烈波动，新年的第一天，盘中离岸人民币一下子跌了600个基点，隔一天之后，又跌800个基点，三天共跌2%左右，非常恐怖。但1月11日，离岸人民币又涨了1000个基点，基本收复失地。12日、13日，离岸人民币兑美元又温和上涨，接着14日、15日离岸人民币兑美元又是继续下跌。', '2015-11-01');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
