<?php
header("Content-type: application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  else{
    mysql_select_db("my110", $con);
    $sql="select *from classify";
    mysql_query("set names'utf8'");
    $result=mysql_query($sql,$con);
    $arr=array();
    while($row=mysql_fetch_array($result))
    {
        array_push($arr, array("classtitle"=>$row['classtitle']));
    }
    echo json_encode($arr);
  }
mysql_close($con);
?>