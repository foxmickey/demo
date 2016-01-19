// var classnumber;
$.ajax({
    url:'php/showclass.php',
    dateType:"json",
    success:function(data){
        var arr=new　Array();
        // var z=$("#newstitles").val();
        var classnumber = data.length;//12
        $("#addinput").on("click",function(){
            // alert(1);
        })
        for (var i = 0; i < data.length; i++) {                    
            var titles=data[i].classtitle;
            $("#select").append("<option>"+titles+"</option>");//把数据库中的title的值用select显示出来
        };
        $("#addinput").on("click",function(){
        var invalue = $("#classtitle").val();//获取input的值
        if (invalue =="") {
            alert("分类不能为空");
            $("#addinput").attr("type","button")
        }else{
            if (classnumber > 11) {
                alert("分类已满。请删除后再添加");
                $("#addinput").attr("type","button")
            }else{
            $("#addinput").attr("type","submit")
            }
        }
        })
    }
});
$(document).ready(function(){
    $("#addinput").attr("type","submit")
    $("#btn").click(function(){
        var selected=$('#select option:selected').text();//把select选中的值给input。让input隐藏
        $("#deleteclass").val(selected);
    })
    $("#addnews").on("click",function(){
        var title_value = $("#newstitle").val();//获取input的值
        var img_value = $("#newsimg").val();//获取input的值
        var content_value = $("#newscontent").val();//获取input的值
        var addtitme_value = $("#addtitme").val();//获取input的值
        if (title_value =="") {
            alert("标题不能为空");
            $("#addnews").attr("type","button")
            }
                else{
                    if(img_value ==""){
                            alert("图片不能为空");
                            $("#addnews").attr("type","button")
                        }
                            else{
                                if(content_value ==""){
                                alert("内容不能为空");
                                        $("#addnews").attr("type","button")
                                    }
                                        else{
                                                if(addtitme_value ==""){
                                                    alert("请选择时间");
                                                            $("#addnews").attr("type","button")
                                                        }
                                                            else{
                                                                $("#addnews").attr("type","submit")
                                                            }
                                            }

                            }
                }
    });
})