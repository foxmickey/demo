<?php
header("Content-type: application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  else{
    mysql_select_db("my110", $con);
    $newstitles=$_REQUEST['newstitles'];
    $sql="DELETE FROM `news` WHERE `newstitle`='$newstitles'"; //删除
    mysql_query("set names'utf8'");
    $result=mysql_query($sql,$con);
    if (!$result)
      {
      die('Error: ' . mysql_error());
      }else{
        echo "sucess";
      }
  }
mysql_close($con);
?>