var a,b,c,aBox,bBox,cBox;
function publ(){
  aBox=document.getElementById("first");
  bBox=document.getElementById("second");
}
function sum(a,b){
  publ();
  a=aBox.value;
  b=bBox.value;
  c=document.getElementById("pid");
  c.innerHTML=(parseFloat(a)+parseFloat(b));
}
// 相减
function subtra(a,b){
  publ();
  a=aBox.value;
  b=bBox.value;
  c=document.getElementById("pid");
  c.innerHTML=(parseFloat(a)-parseFloat(b));
}
// 相乘
function mul(a,b){
  publ();
  a=aBox.value;
  b=bBox.value;
  c=document.getElementById("pid");
  c.innerHTML=(parseFloat(a)*parseFloat(b));
}
// 除以
function div(a,b){
  publ();
  a=aBox.value;
  b=bBox.value;
  c=document.getElementById("pid");
  if (b==0) {
    alert("除数不能为零");
  }else{
    c.innerHTML=(parseFloat(a)/parseFloat(b));
  }
}