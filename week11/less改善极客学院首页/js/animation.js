$(document).ready(function(){
	var a=1,dele,li=$(".slide-bottom-ul>li");// 获取li 
	var forleft=$(".main_middle_left");//向左按钮
	var forright=$(".main_middle_right");//向右按钮
	var slide_left=$(".con-main-slide");//存放slide的div的left的值
	li.on("click",function(){
		clearInterval(dele);//点击向左时清除定时器
		a=$(this).index()+1;
		bgli(a);//调用bgli函数，点击不同的小圆改变当前小圆的颜色
		slide(a);//d调用slide函数，
		timing();//重新调用定时器，计时器从0开始计时
	});
	function timing(){//定时器
		dele = setInterval("$('.main_middle_right').click()",6000);
	};timing();//自身调用，定时器
	function bgli(a){//设置当前页对应li的背景颜色
		li.attr("class"," ");
		li.eq(a-1).attr("class","bottom-ul-oneli");
	};bgli(a);// 自身调用，启动默认值即开始时第一个有背景色
	forleft.on("click",function(){//单击向右翻页
		clearInterval(dele);//点击向左时清除定时器
		a=a-1;
		if (a == 0){
			slide(a);
			a=5;
		};bgli(a);
		if (!$(".con-main-slide").is(':animated')) {//判断动画是否执行完毕如果没有等待执行
			slide(a);
		};timing();//重新调用定时器，计时器从0开始计时
	});
	forright.on("click",function(){//单击向左翻页
		clearInterval(dele);//点击向左时清除定时器
		a=a+1;
		if (a == 6) {
			slide(a);
			a=1;
		};bgli(a);
		if (!$(".con-main-slide").is(':animated')) {//判断动画是否执行完毕如果没有等待执行
			slide(a);
		};timing();//重新调用定时器，计时器从0开始计时
	});
	function slide(a){//控制divleft的值，从而进行左右移动（主函数）
		switch(a){
			case 0:
				slide_left.animate({"left":"-3600px"},0);
				break;
			case 1:
				slide_left.animate({"left":"-600px"},300);
				break;
			case 2:
				slide_left.animate({"left":"-1200px"},300);
				break;
			case 3:
				slide_left.animate({"left":"-1800px"},300);
				break;
			case 4:
				slide_left.animate({"left":"-2400px"},300);
				break;
			case 5:
				slide_left.animate({"left":"-3000px"},300);
				break;
			case 6:
				slide_left.animate({"left":"0px"},0);
				break;
			default:
				slide_left.animate({"left":"-600px"},0);
				break;
		}
	};slide(a);//自身调用
})