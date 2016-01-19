<?php
session_start();
header("Content-type: application/json;charset=utf-8");
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  else{
    // CSRF防御
    if ($_POST['token']==$_SESSION['token']) {
        // echo "sessio token is: =>".$_SESSION['token'];
        // echo "post cookie is: =>".$_POST['token'];
    mysql_select_db("my110", $con);
    $deleteclass=$_POST['deleteclass'];
    $sql="DELETE FROM `classify` WHERE `classtitle`='$deleteclass'"; //删除
    mysql_query("set names'utf8'");
    $result=mysql_query($sql,$con);
    if (!$result)
      {
      die('Error: ' . mysql_error());
      }else{
        echo "sucess";
      }
    }
    else{
      echo "token don't allow !";
    }
  }
mysql_close($con);
?>