var y=0;
var strStoreDate;
// 颜色数组
var colors=["#33B5E5","#FFF","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];
// 定时器
window.onload=function Ys(){
	setInterval(function(){
		yanse1();yanse2();yanse3();yanse4();yanse5();yanse6();yanse7();yanse8();yanse9();yanse10();
		},1000);
    str();
}
// 设置一个开关,根据y的值选取不同的颜色
function yy1(){
    y=1;
	show();
}
function yy2(){
    y=2;
	show();
}
function yy3(){
    y=3;
	show();
}
function yy4(){
    y=4;
	show();
}
// 离线存储
function show(){
    var bg=document.getElementById("body");
    localStorage.bgc=colors[y];
	bg.style.backgroundColor=localStorage.bgc;
    if (window.localStorage) {
        localStorage.setItem("bgc","colors[y]");  
    } else {
        Cookie.write("bgc","colors[y]");  
    }
}

function str(){
    var strStoreDate = window.localStorage? localStorage.getItem("bgc"): Cookie.read("colors[y]");  
}
// top颜色块 跑马灯
function yanse1(){
    var a=document.getElementById("top-color-1");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse2(){
    var a=document.getElementById("top-color-2");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse3(){
    var a=document.getElementById("top-color-3");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse4(){
    var a=document.getElementById("top-color-4");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse5(){
    var a=document.getElementById("top-color-5");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse6(){
    var a=document.getElementById("top-color-6");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse7(){
    var a=document.getElementById("top-color-7");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse8(){
    var a=document.getElementById("top-color-8");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse9(){
    var a=document.getElementById("top-color-9");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}
function yanse10(){
    var a=document.getElementById("top-color-10");
    a.style.backgroundColor=colors[Math.round(Math.random()*10)];
}