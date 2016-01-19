<?php
	header("Content-sype:text/html;chearset=utf-8");
	function label_save($xss){
		$str = trim($xss);
		$str = stripcslashes($str);
		$str = htmlspecialchars($str);
		return $str;
	}
?>