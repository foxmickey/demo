$.ajax({
    url:'php/mysql.php',
    dateType:"json",
    success:function(data){
        for (var i = 0; i < data.length; i++) {
            var titles=data[i].newstitle;
            $("#top-title-ul").append("<li class='col-xs-2'><a class="+'title'+'-'+(i+1)+">"+titles+"</a></li>");// 把数据库中title的值显示在页面中
        };
        var a=1;
        var bgl=$("#top-title-ul>li");
        showbottom(a);// 页面开始时给第一个a加下环线
        bgl.each(function(){
            $(this).on("click",function(){
                // 设置click事件并调用showbottom(a)
                var a=$(this).index()+1;
                showbottom(a);
            });
        });

        function showbottom(a){
            // 给当前a添加下划线
            bgl.children().attr("class",""); 
            bgl.eq(a-1).children().attr("class","a-bottom");
        }
    }
});
