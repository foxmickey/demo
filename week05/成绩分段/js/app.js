function show(){
    // 分数
    var z=document.getElementById("in-number");
    // 获取range的值
    var x=document.getElementById("range");
    z.innerHTML=x.value;
    // 将分数除以10，分为10个等级
    var INT=x.value;
    // switch循环
    switch (true){
        case INT==100:
        document.getElementById("crade").innerHTML='满分';
        break;
        case INT<=100&&INT>90:
        document.getElementById("crade").innerHTML='一等生';
        break;
        case INT<=90&&INT>80:
        document.getElementById("crade").innerHTML='二等生';
        break;
        case INT<=80&&INT>70:
        document.getElementById("crade").innerHTML='三等生';
        break;
        case INT<=70&&INT>60:
        document.getElementById("crade").innerHTML='四等生';
        break;
        case INT<=60&&INT>50:
        document.getElementById("crade").innerHTML='五等生';
        break;
        case INT<=50&&INT>40:
        document.getElementById("crade").innerHTML='六等生';
        break;
        case INT<=40&&INT>30:
        document.getElementById("crade").innerHTML='七等生';
        break;
        case INT<=30&&INT>20:
        document.getElementById("crade").innerHTML='八等生';
        break;
        case INT<=20&&INT>10:
        document.getElementById("crade").innerHTML='九等生';
        break;
        case INT<=10&&INT>0:
        document.getElementById("crade").innerHTML='十等生';
        break;
        case INT==0:
        document.getElementById("crade").innerHTML='开始滑动';
        break;
        default:
        document.getElementById("crade").innerHTMl='开始滑动';
    }
}


function ahover(){
    $("")
}