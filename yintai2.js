$(document).ready(function(){
	// 银泰首页的移入移出的效果
	$(".index").hover(function(){
		$(".index p").css("background","url(images/top/06.png)")
	},function(){
		$(".index p").css("background","")
	})

	// 微信的移入移出效果
	$(".weixin").hover(function(){
		$(this).find(".btweixin").css("display","block")
		$(this).find(".top-left-img").css({background:"url(images/top/04.png) 0 -17px"})

	},function(){
		$(this).find(".btweixin").css("display","none")
		$(this).find(".top-left-img").css("background","")
	})


	$(".btcaidan").hover(function(){
		$(this).css("background","#fff");
		$(this).find(".pos-btcai").css("display","block");
		$(this).find(".top-left-img").css({background:"url(images/top/04.png) 0 -17px"})
	},function(){
		$(this).css("background","");
		$(".btcaidan").find(".pos-btcai").css("display","none");
		$(this).find(".top-left-img").css({background:"url(images/top/04.png) 0 0"});
	})


	// 购物车
	$(".logo-right-right a").first().hover(function(){
		$(".shop-pos").css("display","block")
	},function(){
		$(".shop-pos").css("display","none")
	})

	// nav
	$(".nav-sidenav").hover(function(){
		$(this).find(".pos-nav-hidden").css("display","block")
	},function(){
		$(this).find(".pos-nav-hidden").css("display","none")
	})


	// banner
	var n=0;
	var next=0;
	var t=setInterval(move,5000);
	function move(){
		next=n+1;
		if(next>=$(".pos-banner .pos-img").length){
			next=0;
		}
		$(".pos-banner a").eq(n).fadeTo(1000,0);
		$(".pos-banner a").eq(next).fadeTo(1000,1);
		$(".button-bottom .btn").eq(n).css("background","#000")
		$(".button-bottom .btn").eq(next).css("background","#e5004f")
		n=next
	}
	$(".banner-center").hover(function(){
		// $(".left-btn").css("display","block")
		// $(".right-btn").css("display","block")
		clearInterval(t)
	},function(){
		// $(".left-btn").css("display","none")
		// $(".right-btn").css("display","none")
		t=setInterval(move,5000);
	})

	$(".button-bottom .btn").on("click",function(){
		var index=$(this).index();
		if(index==n){
			return;
		}
		$(".pos-banner a").eq(n).fadeTo(1000,0);
		$(".pos-banner a").eq(index).fadeTo(1000,1);
		$(".button-bottom .btn").eq(n).css("background","#000")
		$(".button-bottom .btn").eq(index).css("background","#e5004f")
		n=index;
	})

	$(".left-btn").on("click",function(){
		next=n-1;
		if(next<0){
			next=$(".pos-banner .pos-img").length-1;
		}
		$(".pos-banner a").eq(n).fadeTo(1000,0);
		$(".pos-banner a").eq(next).fadeTo(1000,1);
		$(".button-bottom .btn").eq(n).css("background","#000")
		$(".button-bottom .btn").eq(next).css("background","#e5004f")
		n=next;
	})
	$(".right-btn").on("click",function(){
		move()
	})


	$(".rightbanner").on({
		mouseover:function(){
			$(this).animate({right:10})
		},
		mouseout:function(){
			$(this).animate({right:0})
		}})


	// 选项卡
	$(".topic").on("mouseover",function(){
		var index=$(this).index();

		$(this).css("borderColor","#e5004b").siblings().css("borderColor","#000")
		$(".triangle").css("display","none")
		$(this).find(".triangle").css("display","block")
		$(".ad-left-goods").css("display","none")
		$(".ad-left-goods").eq(index).css("display","block")
	})


	$(".top-nav a").hover(function(){
		var index=$(this).index();
		$(this).css("borderColor","#e5004b").siblings().css("borderColor","#000")
		$(".bottom-content").css("display","none")
		$(".bottom-content").eq(index).css("display","block")

	},function(){

	})

	// border
	$(".goods").hover(function(){
		$(this).find(".top-pos-right").animate({width:218},400)
		$(this).find(".top-pos-bottom").animate({height:258},400)
		$(this).find(".bottom-pos-top").animate({height:258},400)
		$(this).find(".bottom-pos-left").animate({width:218},400)
	},function(){
		$(this).find(".top-pos-right").animate({width:0},400)
		$(this).find(".top-pos-bottom").animate({height:0},400)
		$(this).find(".bottom-pos-top").animate({height:0},400)
		$(this).find(".bottom-pos-left").animate({width:0},400)
	})
	// border下面
	$(".jiabox").hover(function(){
		$(this).find(".top-pos-right").animate({width:270},500)
		$(this).find(".top-pos-bottom").animate({height:180},500)
		$(this).find(".bottom-pos-top").animate({height:180},500)
		$(this).find(".bottom-pos-left").animate({width:270},500)
	},function(){
		$(this).find(".top-pos-right").animate({width:0},500)
		$(this).find(".top-pos-bottom").animate({height:0},500)
		$(this).find(".bottom-pos-top").animate({height:0},500)
		$(this).find(".bottom-pos-left").animate({width:0},500)
	})
 
	// many图片的动画
	function many(type){
		var parent=type;
		var nn=0;
		var nt=0;
		// var tt=setInterval(lmove,1000)
		var ww=$(".fashion-content-center").width()
		function lmove(){
			nt=nn+1;
			if(nt>1){
				nt=0;
			}
			$(parent).find(".main").eq(nt).css("left",ww)
			$(parent).find(".main").eq(nn).animate({left:-ww})
			$(parent).find(".main").eq(nt).animate({left:0})
			$(parent).find(".buttons").eq(nn).css("background","#666")
			$(parent).find(".buttons").eq(nt).css("background","#e70050")
			nn=nt;
		}
		$(parent).find(".buttons").on("click",function(){
			lmove()
		})
		$(parent).find(".right").on("click",function(){
			lmove()
		})
		$(parent).find(".left").on("click",function(){
			nt=nn-1;
			if(nt<0){
				nt=1;
			}
			$(parent).find(".main").eq(nt).css("left",-ww)
			$(parent).find(".main").eq(nn).animate({left:ww})
			$(parent).find(".main").eq(nt).animate({left:0})
			$(parent).find(".buttons").eq(nn).css("background","#666")
			$(parent).find(".buttons").eq(nt).css("background","#e70050")
			nn=nt;
		})

	}
	var s=$(".fashion-content-center").get()
	for (var i = 0; i < s.length; i++) {
		many(s[i])
	}

	// 品牌的动画效果
	function brand(type){
		var parent=type;
		var nn=0;
		var nt=0;
		// var tt=setInterval(lmove,1000)
		var ww=$(".brand-box-big").width()
		console.log(ww)
		function lmove(){
			nt=nn+1;
			if(nt>=$(parent).find(".brand-box").length){
				nt=0;
			}
			$(parent).find(".brand-box").eq(nt).css("left",ww)
			$(parent).find(".brand-box").eq(nn).animate({left:-ww})
			$(parent).find(".brand-box").eq(nt).animate({left:0})
			nn=nt;
		}
		$(parent).find(".pos-san-right").on("click",function(){
			lmove()
		})
		$(parent).find(".pos-san-left").on("click",function(){
			nt=nn-1;
			if(nt<0){
				nt=1;
			}
			$(parent).find(".brand-box").eq(nt).css("left",-ww)
			$(parent).find(".brand-box").eq(nn).animate({left:ww})
			$(parent).find(".brand-box").eq(nt).animate({left:0})
			nn=nt;
		})

	}
	var s=$(".brand").get()
	for (var i = 0; i < s.length; i++) {
		brand(s[i])
	}
	
	
	$("img").lazyload({
		threshold:300,
		event:"scroll",
		// effect:"fadeIn"
		effect:"slideDown"
	})
	

	// 楼层跳转
	var cheight=document.documentElement.clientHeight;
	var nheight;
	var now;
	for (var i = 0; i < $(".fashion-products").length; i++) {
		var juli=$(".fashion-products").eq(i).position();
		$(".fashion-products").eq(i).prop("h",juli.top);
	}
	$(window).on("scroll",function(){
		var top=$(window).scrollTop()
		if(top>=$(".fashion-products").first().prop("h")-300){
			$(".floor-nav").css("display","block")
			nheight=$(".floor-nav").height();
			$(".floor-nav").css("top",(cheight-nheight)/2+"px")
		}
		if(top<$(".fashion-products").first().prop("h")-300){
			$(".floor-nav").css("display","none")
		}
		for (var i = 0; i < $(".fashion-products").length; i++) {
			if(top>=$(".fashion-products").eq(i).prop("h")-200){
				$(".floor-lis").eq(i).css("background","#e81960").siblings().css("background","")
				$(".floor-lis").eq(i).find("a").css("display","block").end().siblings().find("a").css("display","none")
			}
		}
	})


		$(".floor-lis").on("click",function(){
			var index=$(this).index();
			var hh=$(".fashion-products").eq(index).prop("h")
			var top=$(window).scrollTop()
			var src={aa:top}
			$(src).animate({aa:hh},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
			$(this).css("background","#e81960").siblings().css("background","")
			$(this).find("a").css("display","block").end().siblings().find("a").css("display","none")
			now=index;
		})


		$(".floor-lis").hover(function(){
			$(this).css("background","#e81960")
			$(this).find("a").css("display","block")
		},function(){
			if($(this).index()==now){
				return;
			}
			$(this).css("background","")
			$(this).find("a").css("display","none")
		})
	


	$.backTop($("floor_lis").last(),1000)


})