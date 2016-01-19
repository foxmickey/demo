<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>新闻管理系统</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<script type="text/javascript" src="./js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/add.js"></script>
<style type="text/css">
    #deleteclass{
        position: absolute;
        left: 0;
        top: 0;
        display: none;
    }
</style>
</head>
    <body>
        <?php//CSRF防御
            session_start();
            $token = md5(uniqid(rand(),TRUE));
            $_SESSION['token'] = $token;
        ?>
    <!-- 增加 -->
        <form action="php/addclass.php" method="post">
            <p>
                <label>分类</label>
                <input type="text" id="classtitle" name="classtitle">
                <input type="hidden" name="token" value="<?php echo $token; ?>"><!-- 添加token -->
            </p>
            <p>
                <input id="addinput" value="添加" />
                <input type="reset" value重置 />
            </p>
        </form>
    <!-- 删除 -->
        <form action="php/delete.php" method="post">
            <select id="select">
                
            </select>
            <input id="deleteclass" name="deleteclass" type="text">
            <input type="hidden" name="token" value="<?php echo $token; ?>"><!-- 添加token -->
            <button id="btn">删除</button>
        </form>
        <br>
        <br>
        <form action="php/addnews.php" method="post">
            <p>
                <label>标题</label>
                <input type="text" id="newstitle" name="newstitle">
            </p>
            <p>
                <label>图片地址</label>
                <input type="text" id="newsimg" name="newsimg">
            </p>
            <p>
                <label>新闻内容</label>
                <textarea name="newscontent" id="newscontent"></textarea>
            </p>
            <p>
                <label>新闻时间</label>
                <input type="date" id="addtime" name="addtime" />
            </p>
            <input type="hidden" name="token" value="<?php echo $token; ?>"><!-- 添加token -->
            <p>
                <input id="addnews" type="submit" value="添加" />
                <input type="reset" value重置 />
            </p>
        </form>
    </body>
</html>