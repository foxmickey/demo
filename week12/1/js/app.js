// 单例模式
$(document).ready(function(){
	var manyHover = {
		init:function(){
			var me = this;
			me.render();
			me.bind();
		},
		render:function(){
			var me = this;
			me.btn = $(".li-pro");
		},
		bind:function(){
			var me = this;
			me.btn.hover(function(){
				$(".many-product").show(200)
			},function(){
				$(".many-product").hide(200)
			})
		}
	}
	var bgcolor = {
		init:function(){
			var me = this;
			me.render();
			me.bind();
		},
		render:function(){
			var me = this;
			me.btn = $("#word");
		},
		bind:function(){
			var me = this;
			me.btn.hover(function(){
				$("#word").css('background-color','#2e79e8')
			},function(){
				$("#word").css('background-color','#3385ff');
			})
		}
	}
	var showDiv={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			this.btn = $("#li-6");
		},
		bind:function(){
			var me=this;
			me.btn.click(function(){
				$("#logo-in").show();
				$("#body").css('background-color','#FBECD7');
				$("#two-input").css('background-color','#EFF1F3')
			})
		}
	}
	var closeDiv={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			this.btn = $(".top-img-right");
		},
		bind:function(){
			var me=this;
			me.btn.click(function(){
				$("#logo-in").hide();
				$("#body").css('background-color','#FFF');
				$("#two-input").css('background-color','#FFF')
			})
		}
	}
	var hoverInput = {
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			var me = this;
			me.ho = $("#two-input");
		},
		bind:function(){
			var a=0;
			var me = this;
			me.ho.focus(function(){
				a=1;
				me.ho.css("border","1px solid #3385FF")
			});
			me.ho.blur(function(){
				a=0;
				me.ho.css("border","1px solid #ddd")
			});
			me.ho.hover(function(){
				if (a==1) {

				}else{
					me.ho.css("border","1px solid #c5c1c1");
				}
			},function(){
				if (a==1) {
					me.ho.css("border","1px solid #3385FF");
				}else{
					me.ho.css("border","1px solid #ddd");
				}
			})
		}
	}
	showDiv.init();//显示登录div
	closeDiv.init();//关闭登陆div
	bgcolor.init();//百度一下鼠标悬停效果
	manyHover.init();//更多产品
	hoverInput.init();//改变input输入框的颜色
})


