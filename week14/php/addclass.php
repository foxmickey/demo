<?php
  session_start();
  header("Content-type:text/html;charset=utf-8");
  require_once 'xss.php';
  $con = mysql_connect("localhost","root","");
  if (!$con){
    die('Could not connect: ' . mysql_error());
    }
      else{
        // 添加title等信息 先获取input中的值 并传给数据库
        mysql_select_db("my110", $con);
        $classtitle=label_save($_POST['classtitle']);
        if ($_POST['token']==$_SESSION['token']) {
        // echo "sessio token is: =>".$_SESSION['token'];
        // echo "post cookie is: =>".$_POST['token'];
        $sql="INSERT INTO `classify`(`classtitle`) VALUES ('".$classtitle."')";
        mysql_query("set names'utf8'");
        $result=mysql_query($sql,$con);
        if (!$result)
          {
          die('Error: ' . mysql_error());
          }else{
            echo "sucess";
          }
        }else{
          echo "token don‘t allow!";
        }
      }
  mysql_close($con);
?>
