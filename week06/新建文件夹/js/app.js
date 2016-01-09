var num1=0;
var num2=0;
var some='';
function show(results){
  document.getElementById("number-2").innerHTML=results;
}
function show1(results1){
  document.getElementById("number-1").innerHTML=results1;  
}
// 清零
function clearP(){
  num1=0;
  num2=0;
  show(num2);
}
function eliminate(option){
  num1=0;
  num2=num2+option;
  num2=parseFloat(num2);
  show(num2);
}
function eliminate1(input1){
  num2=0;
  num1=num1+input1;
  num1=num1+"+";
  show1(num1);
}
// 和的赋值num1
function digital16(num1){
  num1=num+num2;
  eliminate1(num1);
}

// 获取0-－9之间的数字
function digital0(num2){
  num2=document.getElementById("key-li-17").innerHTML;
  eliminate(num2);
}
function digital1(num2){
  num2=document.getElementById("key-li-13").innerHTML;
  eliminate(num2);
}
function digital2(num2){
  num2=document.getElementById("key-li-14").innerHTML;
  eliminate(num2);
}
function digital3(num2){
  num2=document.getElementById("key-li-15").innerHTML;
  eliminate(num2);
}
function digital4(num2){
  num2=document.getElementById("key-li-9").innerHTML;
  eliminate(num2);
}
function digital5(num2){
  num2=document.getElementById("key-li-10").innerHTML;
  eliminate(num2);
}
function digital6(num2){
  num2=document.getElementById("key-li-11").innerHTML;
  eliminate(num2);
}
function digital7(num2){
  num2=document.getElementById("key-li-5").innerHTML;
  eliminate(num2);
}
function digital8(num2){
  num2=document.getElementById("key-li-6").innerHTML;
  eliminate(num2);
}
function digital9(num2){
  num2=document.getElementById("key-li-7").innerHTML;
  eliminate(num2);
}
function digitalPoint(num2){
  num2=document.getElementById("key-li-18").innerHTML;
  eliminate(num2);
}