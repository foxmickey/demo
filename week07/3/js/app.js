$(document).ready(function(){
    $(window).on("load",function(){ /*onload事件*/
        imgLocation();
        var dataImg={"data":[{"src":"35.jpg"},{"src":"36.jpg"},{"src":"37.jpg"},{"src":"38.jpg"},{"src":"39.jpg"},{"src":"40.jpg"},{"src":"41.jpg"},{"src":"42.jpg"},{"src":"43.jpg"},{"src":"44.jpg"},{"src":"45.jpg"}]}
        window.onscroll=function(){/* 模拟网络获取图片*/
            if (scrollside()) {
                $.each(dataImg.data,function(index,value){
                    // 创建存放img的div及img
                    var box=$("<div>").addClass("box").appendTo($("#con"));
                    var content=$("<div>").addClass("con-img").appendTo(box);
                    $("<img>").attr("src","./images/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation(); /*调用imgLocation()函数。让新添加的img获得相应的css属性 */
            };
        }
    });
});
function scrollside(){ /*当最鼠标滚动到最后一张图片高度的一半时加载新的图片*/
    var box=$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2); /*获取当前页面最后一张图片的高度 */
    var documentHeight=$(document).width();
    var scrollHeight=$(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}
function imgLocation(){
    var box=$(".box"); /*创建box对象*/
    var boxWidth=box.eq(0).width();/* 找到box的宽度*/
    var num=Math.floor($(window).width()/boxWidth); /*每行放几张图片 */
    var boxArr=[];
    box.each(function(index,value){
        var boxHeight=box.eq(index).height();
        if (index<num) {
            boxArr[index]=boxHeight;/* 让图片放在最小高度的那张图片下面 */
        }else{
            var minboxHeight=Math.min.apply(null,boxArr);
            var minboxIndex=$.inArray(minboxHeight,boxArr);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left,
            });
            boxArr[minboxIndex]+=box.eq(index).height(); /* 重新计算每行最小图片的高度 */
        }
    });
}