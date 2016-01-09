$(document).ready(function(){
	 ahover();
	 hotHover();
	 switchAD(ad);
     hotsHover();
     OCChover();
})
var ad=1;
function hotHover(){
	$(".hot-menu-a-1").hover(function(){
		ad=1;
		switchAD(ad);
	});
	$(".hot-menu-a-2").hover(function(){
		ad=2;
		switchAD(ad);
	});
	$(".hot-menu-a-3").hover(function(){
		ad=3;
		switchAD(ad);
	});
	$(".hot-menu-a-4").hover(function(){
		ad=4;
		switchAD(ad);
	});
	$(".hot-menu-a-5").hover(function(){
		ad=5;
		switchAD(ad);
	});
	$(".hot-menu-a-6").hover(function(){
		ad=6;
		switchAD(ad);
	});
}
function switchAD(ad){
	switch (ad){
		case 1:
		$(".hot-menu-a-1").addClass("hot-menu-a-hover");
		$(".hot-menu-a-2").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-3").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-4").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-5").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-6").removeClass("hot-menu-a-hover");
        $(".hot-menu-div-1").addClass("hot-menu-div-hover");
        $(".hot-menu-div-2").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-3").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-4").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-5").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-6").removeClass("hot-menu-div-hover");
		break;
		case 2:
		$(".hot-menu-a-1").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-2").addClass("hot-menu-a-hover");
		$(".hot-menu-a-3").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-4").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-5").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-6").removeClass("hot-menu-a-hover");
        $(".hot-menu-div-1").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-2").addClass("hot-menu-div-hover");
        $(".hot-menu-div-3").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-4").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-5").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-6").removeClass("hot-menu-div-hover");
		break;
		case 3:
		$(".hot-menu-a-1").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-2").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-3").addClass("hot-menu-a-hover");
		$(".hot-menu-a-4").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-6").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-5").removeClass("hot-menu-a-hover");
        $(".hot-menu-div-1").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-2").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-3").addClass("hot-menu-div-hover");
        $(".hot-menu-div-4").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-5").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-6").removeClass("hot-menu-div-hover");
		break;
		case 4:
		$(".hot-menu-a-1").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-2").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-3").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-4").addClass("hot-menu-a-hover");
		$(".hot-menu-a-5").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-6").removeClass("hot-menu-a-hover");
        $(".hot-menu-div-1").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-2").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-3").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-4").addClass("hot-menu-div-hover");
        $(".hot-menu-div-5").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-6").removeClass("hot-menu-div-hover");
		break;
		case 5:
		$(".hot-menu-a-1").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-2").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-3").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-4").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-5").addClass("hot-menu-a-hover");
		$(".hot-menu-a-6").removeClass("hot-menu-a-hover");
        $(".hot-menu-div-1").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-2").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-3").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-4").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-5").addClass("hot-menu-div-hover");
        $(".hot-menu-div-6").removeClass("hot-menu-div-hover");
		break;
		case 6:
		$(".hot-menu-a-1").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-2").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-3").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-4").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-5").removeClass("hot-menu-a-hover");
		$(".hot-menu-a-6").addClass("hot-menu-a-hover");
        $(".hot-menu-div-1").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-2").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-3").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-4").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-5").removeClass("hot-menu-div-hover");
        $(".hot-menu-div-6").addClass("hot-menu-div-hover");
		break;
		default:
		$(".hot-menu-a-1").addClass("hot-menu-a-hover");
        $("#hot-menu-div-1").addClass("hot-menu-div-hover");
	}
}
// top-left-菜单
function ahover(){
	$(".a-mobile").hover(function(){
		$(".div-mobile").css("display","block");
	},function(){
		$(".div-mobile").css("display","none");
	});
	$(".a-Front-web").hover(function(){
		$(".div-Front-web").css("display","block");
	},function(){
		$(".div-Front-web").css("display","none");
	});
	
	$(".a-back-end").hover(function(){
		$(".div-back-end").css("display","block");
	},function(){
		$(".div-back-end").css("display","none");
	});
	
	$(".a-basics").hover(function(){
		$(".div-basics").css("display","block");
	},function(){
		$(".div-basics").css("display","none");
	});
	
	$(".a-data").hover(function(){
		$(".div-data").css("display","block");
	},function(){
		$(".div-data").css("display","none");
	});
	
	$(".a-intelligence").hover(function(){
		$(".div-intelligence").css("display","block");
	},function(){
		$(".div-intelligence").css("display","none");
	});
	
	$(".a-database").hover(function(){
		$(".div-database").css("display","block");
	},function(){
		$(".div-database").css("display","none");
	});
	
	$(".a-rzks").hover(function(){
		$(".div-rzks").css("display","block");
	},function(){
		$(".div-rzks").css("display","none");
	});
	
	$(".a-IT").hover(function(){
		$(".div-IT").css("display","block");
	},function(){
		$(".div-IT").css("display","none");
	});
	$(".a-software").hover(function(){
		$(".div-software").css("display","block");
	},function(){
		$(".div-software").css("display","none");
	});
	$(".a-design").hover(function(){
		$(".div-design").css("display","block");
	},function(){
		$(".div-design").css("display","none");
	});
}
// 热门推荐
function hotsHover(){
    $(".hots-img-div-1").hover(function(){
        $("this").css("z-index","500")
        $(".hots1-text-p2").css("display","block");
        $(".hots1-top-right-107").css("display","block");
        $(".hots1-bottom-left-107").css("display","block");
        $(".hots1-img-div").css("display","block");
    },function(){
        $(".hots1-text-p2").css("display","none")
        $(".hots1-top-right-107").css("display","none");
        $(".hots1-bottom-left-107").css("display","none");
        $(".hots1-img-div").css("display","none");
    });
    $(".hots-img-div-2").hover(function(){
        $("this").css("z-index","500")
        $(".hots2-text-p2").css("display","block");
        $(".hots2-top-right-107").css("display","block");
        $(".hots2-bottom-left-107").css("display","block");
        $(".hots2-img-div").css("display","block");
    },function(){
        $(".hots2-text-p2").css("display","none")
        $(".hots2-top-right-107").css("display","none");
        $(".hots2-bottom-left-107").css("display","none");
        $(".hots2-img-div").css("display","none");
    });
    $(".hots-img-div-3").hover(function(){
        $("this").css("z-index","500")
        $(".hots3-text-p2").css("display","block");
        $(".hots3-top-right-107").css("display","block");
        $(".hots3-bottom-left-107").css("display","block");
        $(".hots3-img-div").css("display","block");
    },function(){
        $(".hots3-text-p2").css("display","none")
        $(".hots3-top-right-107").css("display","none");
        $(".hots3-bottom-left-107").css("display","none");
        $(".hots3-img-div").css("display","none");
    });
    $(".hots-img-div-4").hover(function(){
        $("this").css("z-index","500")
        $(".hots4-text-p2").css("display","block");
        $(".hots4-top-right-107").css("display","block");
        $(".hots4-bottom-left-107").css("display","block");
        $(".hots4-img-div").css("display","block");
    },function(){
        $(".hots4-text-p2").css("display","none")
        $(".hots4-top-right-107").css("display","none");
        $(".hots4-bottom-left-107").css("display","none");
        $(".hots4-img-div").css("display","none");
    });
    $(".hots-img-div-5").hover(function(){
        $("this").css("z-index","500")
        $(".hots5-text-p2").css("display","block");
        $(".hots5-top-right-107").css("display","block");
        $(".hots5-bottom-left-107").css("display","block");
        $(".hots5-img-div").css("display","block");
    },function(){
        $(".hots5-text-p2").css("display","none")
        $(".hots5-top-right-107").css("display","none");
        $(".hots5-bottom-left-107").css("display","none");
        $(".hots5-img-div").css("display","none");
    });
    $(".hots-img-div-6").hover(function(){
        $("this").css("z-index","500")
        $(".hots6-text-p2").css("display","block");
        $(".hots6-top-right-107").css("display","block");
        $(".hots6-bottom-left-107").css("display","block");
        $(".hots6-img-div").css("display","block");
    },function(){
        $(".hots6-text-p2").css("display","none")
        $(".hots6-top-right-107").css("display","none");
        $(".hots6-bottom-left-107").css("display","none");
        $(".hots6-img-div").css("display","none");
    });
    $(".hots-img-div-7").hover(function(){
        $("this").css("z-index","500")
        $(".hots7-text-p2").css("display","block");
        $(".hots7-top-right-107").css("display","block");
        $(".hots7-bottom-left-107").css("display","block");
        $(".hots7-img-div").css("display","block");
    },function(){
        $(".hots7-text-p2").css("display","none")
        $(".hots7-top-right-107").css("display","none");
        $(".hots7-bottom-left-107").css("display","none");
        $(".hots7-img-div").css("display","none");
    });
    $(".hots-img-div-8").hover(function(){
        $("this").css("z-index","500")
        $(".hots8-text-p2").css("display","block");
        $(".hots8-top-right-107").css("display","block");
        $(".hots8-bottom-left-107").css("display","block");
        $(".hots8-img-div").css("display","block");
    },function(){
        $(".hots8-text-p2").css("display","none")
        $(".hots8-top-right-107").css("display","none");
        $(".hots8-bottom-left-107").css("display","none");
        $(".hots8-img-div").css("display","none");
    });
}
// 职业路径图
function OCChover(){
    var occ1=$(".con-occupation-1");
    var occ2=$(".con-occupation-2");
    var occ3=$(".con-occupation-3");
    var occ4=$(".con-occupation-4");
    var occ5=$(".con-occupation-5");
    var occ6=$(".con-occupation-6");
    var occ7=$(".con-occupation-7");
    var occ8=$(".con-occupation-8");
    var occ9=$(".con-occupation-9");
    var occ10=$(".con-occupation-10");
    $(".con-occupation-1").hover(function(){
        occ1.css("border-left","1px solid rgb(53,181,88)");
        occ1.css("border-top","1px solid rgb(53,181,88)"); 
        occ2.css("border-left","1px solid rgb(53,181,88)");
        occ6.css("border-top","1px solid rgb(53,181,88)");
    },function(){
        occ1.css("border-left","1px solid #CCC");
        occ1.css("border-top","1px solid #CCC");
        occ2.css("border-left","1px solid #CCC");
        occ6.css("border-top","1px solid #CCC");

    });
    $(".con-occupation-2").hover(function(){
        occ2.css("border-left","1px solid rgb(53,181,88)");
        occ2.css("border-top","1px solid rgb(53,181,88)"); 
        occ3.css("border-left","1px solid rgb(53,181,88)");
        occ7.css("border-top","1px solid rgb(53,181,88)");
    },function(){
        occ2.css("border-left","1px solid #CCC");
        occ2.css("border-top","1px solid #CCC");
        occ3.css("border-left","1px solid #CCC");
        occ7.css("border-top","1px solid #CCC");

    });
    $(".con-occupation-3").hover(function(){
        occ3.css("border-left","1px solid rgb(53,181,88)");
        occ3.css("border-top","1px solid rgb(53,181,88)"); 
        occ4.css("border-left","1px solid rgb(53,181,88)");
        occ8.css("border-top","1px solid rgb(53,181,88)");
    },function(){
        occ3.css("border-left","1px solid #CCC");
        occ3.css("border-top","1px solid #CCC");
        occ4.css("border-left","1px solid #CCC");
        occ8.css("border-top","1px solid #CCC");

    });
    $(".con-occupation-4").hover(function(){
        occ4.css("border-left","1px solid rgb(53,181,88)");
        occ4.css("border-top","1px solid rgb(53,181,88)"); 
        occ5.css("border-left","1px solid rgb(53,181,88)");
        occ9.css("border-top","1px solid rgb(53,181,88)");
    },function(){
        occ4.css("border-left","1px solid #CCC");
        occ4.css("border-top","1px solid #CCC");
        occ5.css("border-left","1px solid #CCC");
        occ9.css("border-top","1px solid #CCC");

    });
    $(".con-occupation-5").hover(function(){
        occ5.css("border-left","1px solid rgb(53,181,88)");
        occ5.css("border-top","1px solid rgb(53,181,88)"); 
        occ5.css("border-right","1px solid rgb(53,181,88)");
        occ10.css("border-top","1px solid rgb(53,181,88)");
    },function(){
        occ5.css("border-left","1px solid #CCC");
        occ5.css("border-top","1px solid #CCC");
        occ5.css("border-right","1px solid #CCC");
        occ10.css("border-top","1px solid #CCC");
    });
    $(".con-occupation-6").hover(function(){
        occ6.css("border-left","1px solid rgb(53,181,88)");
        occ6.css("border-top","1px solid rgb(53,181,88)"); 
        occ6.css("border-bottom","1px solid rgb(53,181,88)");
        occ7.css("border-left","1px solid rgb(53,181,88)");
    },function(){
        occ6.css("border-left","1px solid #CCC");
        occ6.css("border-top","1px solid #CCC");
        occ6.css("border-bottom","1px solid #CCC");
        occ7.css("border-left","1px solid #CCC");
    });
   $(".con-occupation-7").hover(function(){
        occ7.css("border-left","1px solid rgb(53,181,88)");
        occ7.css("border-top","1px solid rgb(53,181,88)"); 
        occ7.css("border-bottom","1px solid rgb(53,181,88)");
        occ8.css("border-left","1px solid rgb(53,181,88)");
    },function(){
        occ7.css("border-left","1px solid #CCC");
        occ7.css("border-top","1px solid #CCC");
        occ7.css("border-bottom","1px solid #CCC");
        occ8.css("border-left","1px solid #CCC");
    });
   $(".con-occupation-8").hover(function(){
        occ8.css("border-left","1px solid rgb(53,181,88)");
        occ8.css("border-top","1px solid rgb(53,181,88)"); 
        occ8.css("border-bottom","1px solid rgb(53,181,88)");
        occ9.css("border-left","1px solid rgb(53,181,88)");
    },function(){
        occ8.css("border-left","1px solid #CCC");
        occ8.css("border-top","1px solid #CCC");
        occ8.css("border-bottom","1px solid #CCC");
        occ9.css("border-left","1px solid #CCC");
    });
   $(".con-occupation-9").hover(function(){
        occ9.css("border-left","1px solid rgb(53,181,88)");
        occ9.css("border-top","1px solid rgb(53,181,88)"); 
        occ9.css("border-bottom","1px solid rgb(53,181,88)");
        occ10.css("border-left","1px solid rgb(53,181,88)");
    },function(){
        occ9.css("border-left","1px solid #CCC");
        occ9.css("border-top","1px solid #CCC");
        occ9.css("border-bottom","1px solid #CCC");
        occ10.css("border-left","1px solid #CCC");
    });
   $(".con-occupation-10").hover(function(){
        occ10.css("border-left","1px solid rgb(53,181,88)");
        occ10.css("border-top","1px solid rgb(53,181,88)"); 
        occ10.css("border-bottom","1px solid rgb(53,181,88)");
        occ10.css("border-right","1px solid rgb(53,181,88)");
    },function(){
        occ10.css("border-left","1px solid #CCC");
        occ10.css("border-top","1px solid #CCC");
        occ10.css("border-bottom","1px solid #CCC");
        occ10.css("border-right","1px solid #CCC");
    });
}
