// 设置的显示与隐藏
$(document).ready(function(e) {
    $("#con-ul-li-7").hover(function(){
		var pos=$(this).position().left-21;
		$("#top-set").css({"left":pos+"px"});
        $("#top-set").animate({"opacity":1},300);
	},function(){
         setTimeout( $("#top-set").animate({"opacity":0},300))
	})
});
function showPro(){
    document.getElementById("top-product").style.display="block";
	document.getElementById("top-pro").style.color="#111";
	document.getElementById("con-ul-li-8").style.backgroundColor="rgba(0,0,0,0)";
}
function closeProd(){
    document.getElementById("top-product").style.display="none";
    document.getElementById("con-ul-li-8").style.backgroundColor="#3385FF";
}
//百度搜索
function checkHttps () {
        BaiduHttps.useHttps();    
    };
    function baiduWithHttps (formname) {
        var data = BaiduHttps.useHttps();
        if (data.s === 0) {
            return true;
        }
        else {
            formname.action = 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
            return true;
        }
    };
//登陆界面的show与close
function show(){
	var one=document.getElementById("logo-in");
	one.style.display="block";
	var bg=document.getElementById("body");
	bg.style.backgroundColor="#CCC";
}
function openLogoin(){
	var one=document.getElementById("logo-in");
	one.style.display="none";
	var bg=document.getElementById("body");
	bg.style.backgroundColor="#FFF";
}
// input获得焦点时改搜索边框的颜色
function bianse(){
    var b=document.getElementById("con-span");
    b.style.border="1px solid #3385FF";
}
function quse(){
    var b=document.getElementById("con-span");
    b.style.border="1px solid #CCC"; 
}
// input获得焦点时改变登陆的边框颜色
function nameOne(){
	var b=document.getElementById("content-name");
    b.style.border="1px solid #3385FF";
	var a=document.getElementsByClassName("con-name-img");
	a.style.backgroundPosition="0px -65px";
}
function nameTwo(){
	var b=document.getElementById("content-name");
    b.style.border="1px solid #ccc";
}
// input获得焦点时改变password的边框颜色
function passOne(){
	var b=document.getElementById("content-password");
    b.style.border="1px solid #3385FF";
}
function passTwo(){
	var b=document.getElementById("content-password");
    b.style.border="1px solid #ccc";
}
