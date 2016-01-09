$(document).ready(function  (argument) {
	$(".close_div").css({"left":"50%","top":"50%"})
	$(".one").on("click",function(){
		$(".Html").show(300);
		$(".circle").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		setTimeout(function(){
			var le = $('.circle').offset().left+225+"px";
			var to = $('.circle').offset().top-50+"px";
			$(".close_div").css({"left":le,"top":to})
		},350)
	})
	$(".two").on("click",function(){
		$(".CSS").show(300);
		$(".circle").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		setTimeout(function(){
			var le = $('.circle').offset().left+225+"px";
			var to = $('.circle').offset().top-50+"px";
			$(".close_div").css({"left":le,"top":to})
		},350)
	})
	$(".three").on("click",function(){
		$(".javaSc").show(300);
		$(".circle").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		setTimeout(function(){
			var le = $('.circle').offset().left+225+"px";
			var to = $('.circle').offset().top-50+"px";
			$(".close_div").css({"left":le,"top":to})
		},350)
	})
	$(".four").on("click",function(){
		$(".Html5").show(300);
		$(".circle").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		setTimeout(function(){
			var le = $('.circle').offset().left+225+"px";
			var to = $('.circle').offset().top-50+"px";
			$(".close_div").css({"left":le,"top":to})
		},350)
	})
	$(".five").on("click",function(){
		$(".Occupation").show(300);
		$(".circle").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		setTimeout(function(){
			var le = $('.circle').offset().left+225+"px";
			var to = $('.circle').offset().top-50+"px";
			$(".close_div").css({"left":le,"top":to})
		},350)
	})
	$(".six").on("click",function(){
		$(".web_qd").show(300);
		$(".circle").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		setTimeout(function(){
			var le = $('.circle').offset().left+225+"px";
			var to = $('.circle').offset().top-50+"px";
			$(".close_div").css({"left":le,"top":to})
		},350)
	})
	$(".eleven").on("click",function(){
		$(".web_tomo").show(300);
		$(".circle").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		setTimeout(function(){
			var le = $('.circle').offset().left+225+"px";
			var to = $('.circle').offset().top-50+"px";
			$(".close_div").css({"left":le,"top":to})
		},350)
	})
	$(".close_div").on("click",function(){//点击X关闭父div
		$(".close_div").parent().hide();
		$(".circle").css({"background-color":"rgba(50,61,214,1)","color":"#FFF"})
		$("#seven").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		$("#eight").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		$("#nine").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		$("#ten").css({"background-color":"rgba(50, 61, 214, 0.35)","color":"#DBD4D4"})
		$(".close_div").css({"left":"50%","top":"50%"})
	})
})