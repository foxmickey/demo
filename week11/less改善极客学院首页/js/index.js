$(document).ready(function () {
	var showli = $(".menu-hot-ul > li");
	function show(){
		showli.hover(function(){
			var a=1;
			a = $(this).index();
			showli.attr("class"," ")
			showli.eq(a).attr("class","important_li")
		})
	};
	show();
	$(".con_top_slide").hover(function(){
		$(".slide-main-middle").fadeToggle(400);
	})
})