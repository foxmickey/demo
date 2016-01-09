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
	var bg=document.getElementById("body1");
	bg.style.backgroundColor="#CCC";
}
function xiao(){
	var one=document.getElementById("logo-in");
	one.style.display="none";
	var bg=document.getElementById("body1");
	bg.style.backgroundColor="#FFF";
}
function bianse(){
    var b=document.getElementById("con-span");
    b.style.border="1px solid #3385FF"; 
}
function quse(){
    var b=document.getElementById("con-span");
    b.style.border="1px solid #CCC"; 
}