// 根据login-body 不同高度设置版权位置
$(document).ready(function(){
    var winH=($(window).height());
    var divT=$("#login-body").position().top;
    var divH=$("#login-body").height();
    var winzhi=winH-(divH+divT);
    if (winzhi<=150) {
        $(".footing1").css('display','block');
        $(".footing2").css('display','none');
    }else{
        $(".footing2").css('display','block')
        $(".footing1").css('display','none')
    }
})
