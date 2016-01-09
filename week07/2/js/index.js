$(document).ready(function(){
	var a=1;
	var imgwidth=560;
	var midslide=$(".top-mid-slider");
	var bgli=$(".mid-button-ul>li");
	var btnleft=$(".dou-btn-left");
	var btnright=$(".dou-btn-right");
	var silder=$(".top-mid-slider");
    bgli.on("click",function(){
    	a=$(this).index()+1;
    	showbg(a);
    	switchJUdge(a);
    })
    function goon(){ /* 自动播放*/
    setInterval("$('.dou-btn-right').click()",5000);
    }
function switchJUdge(a){
    switch (a){
        case 1:
        silder.css({"left":"-560px","transition":"0.6s"});
        break;
        case 2:
        silder.css({"left":"-1120px","transition":"0.6s"});
        break;
        case 3:
        silder.css({"left":"-1680px","transition":"0.6s"});
        break;
        case 4:
        silder.css({"left":"-2240px","transition":"0.6s"});
        break;
        case 5:
        silder.css({"left":"-2800px","transition":"0.6s"});
        break;
        default:
        silder.css({"left":"-560","transition":"0.6s"});
    }
}
	btnleft.on("click",function(){  /*单击向左 */
		a=a-1;
		if (a==0) {
			a=5;
		};
		// if (!$(".top-mid-slider").is(':animated')) {
			showbg(a);
			silderimg(-imgwidth);
		// };
	});
	var forright=btnright.on("click",function(){ /*单击向右 */
		a=a+1;
		if (a==6) {
			a=1;
		};
		showbg(a);
		silderimg(imgwidth);
	});
	bgli.each(function(){
		$(this).on("click",function(){
			showbg(a);
		})
	})
	function showbg(a){
		bgli.attr("class","");
		bgli.eq(a-1).attr("class","button-li-bg");
	};
	showbg(a);
	function silderimg(iw){
		var silderleft=parseInt(silder.css("left"));
		if (silderleft<-2820) {
			silder.css({"left":"-560px","transition":"0s"});
			var silderleft=parseInt(silder.css("left"));
			silder.css({"left":(silderleft-iw)+"px","transition":"0.6s"});
		}else{
			silder.css({"left":(silderleft-iw)+"px","transition":"0.6s"});
		}
		if (silderleft>-100) {
			silder.css({"left":"-2800px","transition":"0s"});
			var silderleft=parseInt(silder.css("left"));
			silder.css({"left":(silderleft-iw)+"px","transition":"0.6s"});
		}else{
			silder.css({"left":(silderleft-iw)+"px","transition":"0.6s"});
		}
	};
    goon();
});
