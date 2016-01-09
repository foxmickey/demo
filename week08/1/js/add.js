$.ajax({
            url:'php/mysql.php',
            dateType:"json",
            success:function(data){
                // var arr=new　Array();
                // var z=$("#newstitles").val();
                // for (var i = 0; i < data.length; i++) {                    
                //     var titles=data[i].newstitle;
                //     $("#select").append("<option>"+titles+"</option>");//把数据库中的title的值用select显示出来
                // };
            }
        });
$(document).ready(function(){
    $("#btn").click(function(){
        var selected=$('#select option:selected').text();//把select选中的值给input。让input隐藏
        $("#newstitles").val(selected);
    })
})