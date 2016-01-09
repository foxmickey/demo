// input获得焦点时改搜索边框的颜色
function bianse(){
    var b=document.getElementById("two-input");
    b.style.border="1px solid #3385FF";
}
function quse(){
    var b=document.getElementById("two-input");
    b.style.border="1px solid #CCC"; 
}
function inHover(){
    document.getElementById("two-input").onmouseover=function(){
        this.style.border="1px solid #111";
    }
    document.getElementById("two-input").onmouseout=function(){
        this.style.border="1px solid #ccc";
    }
}
// 更多产品
function showPro(){
    document.getElementById("top-product").style.display="block";
    document.getElementById("top-pro").style.color="#111";
    document.getElementById("con-ul-li-8").style.backgroundColor="rgba(0,0,0,0)";
}
function closeProd(){
    document.getElementById("top-product").style.display="none";
    document.getElementById("con-ul-li-8").style.backgroundColor="#3385FF";
}
//登陆界面的show与close
function show(){
    var one=document.getElementById("logo-in");
    one.style.display="block";
    var br=document.getElementById("con-span");
    br.style.border="1px solid #666";
    var bg=document.getElementById("body");
    bg.style.backgroundColor="#CCC";
    var wo=document.getElementById("word");
    wo.style.color="rgb(255,241,210)"
}
function openLogoin(){
    var one=document.getElementById("logo-in");
    one.style.display="none";
    var br=document.getElementById("con-span");
    br.style.border="1px solid #ccc";
    var bg=document.getElementById("body");
    bg.style.backgroundColor="#FFF";
    var wo=document.getElementById("word");
    wo.style.color="rgb(255,255,255)"
}