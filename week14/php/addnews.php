<?php
  session_start();
// header("Content-type: application/json;charset=utf-8");
header("Content-type:text/html;charset=utf-8");
    require_once 'xss.php';
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  else{
    if ($_POST['token']==$_SESSION['token']) {
    // 添加title等信息 先获取input中的值 并传给数据库
    mysql_select_db("my110", $con);
    $newstitle=label_save($_POST['newstitle']);
    $newsimg=label_save($_POST['newsimg']);
    $newscontent=label_save($_POST['newscontent']);
    $addtime=label_save($_POST['addtime']);
    $sql="INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$addtime."')";
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