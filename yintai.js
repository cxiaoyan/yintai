$(function(){
	//banner轮播
	var box=$(".pos-banner")[0]
	var width=parseInt(getStyle(box,'width'))
	var imgs=$(".pos-img")
	var btns=$(".btn")
	var now=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,2000)
	function move(){
		next=now+1;
		if (next>=imgs.length) {
			next=0;
		};
		
		imgs[next].style.left=width+"px"
		animate(imgs[now],{left:-width});
		animate(imgs[next],{left:0})
		// for (var i = 0; i < imgs.length; i++) {
		btns[now].style.background="#000"
		// };
		btns[next].style.background="red"
		now=next;
	}
	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move,2000)
	}
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i
		btns[i].onclick=function(){	
			btns[now].style.background="#000"
			btns[this.index].style.background="red"	
		if (this.index>now) {
			imgs[this.index].style.left=width+"px"
			animate(imgs[now],{left:-width})
			animate(imgs[this.index],{left:0}) 
			}else if (this.index<now) {
				next=now-1
				imgs[this.index].style.left=-width+"px"
				animate(imgs[now],{left:width})
				animate(imgs[this.index],{left:0}) 
			
				}
			now=this.index;
	
			}
		}


//选项卡(goods)
var topic=$(".topic")
var goods=$(".ad-left-goods")
var san=$(".triangle")
for (var i = 0; i < topic.length; i++) {
	topic[i].index=i
	topic[i].onmouseover=function(){
		for (var j = 0; j < topic.length; j++) {
			topic[j].className="topic"
			san[j].className="triangle"
			goods[j].className="ad-left-goods"
		}
		this.className="topic ad-left-nav-first"
		san[this.index].className="triangle show"
		goods[this.index].className="ad-left-goods start"
	}
	
}



var title=$(".top-nav-title")
var content=$(".bottom-content")
for (var i = 0; i < title.length; i++) {
	title[i].index=i
	title[i].onmouseover=function(){
		for (var i = 0; i < title.length; i++) {
			title[i].style.cssText="color:#333;font-weight:normal;border-bottom: 3px solid #000;"
			content[i].style.display="none"
		}
		this.style.cssText="color:#e5004b;font-weight: bold;border-bottom: 3px solid #e5004b;"
		content[this.index].style.display="block"
	}
}


//little-banner的无缝轮播
function xlunbo(type){
	// var box2=$(".fashion-content-center")[0]
	var parentbox=type
	var img=$(".main",parentbox)
	var btn=$(".buttons",parentbox)
	var left=$(".left",parentbox)[0]
	var right=$(".right",parentbox)[0]
	var n=0;
	var nt=0;
	var xwidth=parseInt(getStyle(parentbox,"width"))
	var tt=setInterval(xmove,2000)
	function xmove(){
		nt=n+1;
		if(nt>=img.length){
			nt=0;
		}
		img[nt].style.left=xwidth+"px"
		animate(img[n],{left:-xwidth},600)
		animate(img[nt],{left:0},600)
		btn[n].style.background="#666"
		btn[nt].style.background="#e70050"
		n=nt
	}
	parentbox.onmouseover=function(){
		clearInterval(tt)
	}
	parentbox.onmouseout=function(){
		tt=setInterval(xmove,2000)
	}
	right.onclick=function(){
		nt=n+1;
		if(nt>=img.length){
			nt=0;
		}
		img[nt].style.left=xwidth+"px"
		animate(img[n],{left:-xwidth},600)
		animate(img[nt],{left:0},600)
		btn[n].style.background="#666"
		btn[nt].style.background="#e70050"
		n=nt
	}
	left.onclick=function(){
		nt=n-1;
		if(nt<0){
			nt=img.length-1;
		}
		img[nt].style.left=-xwidth+"px"
		animate(img[n],{left:xwidth},600)
		animate(img[nt],{left:0},600)
		btn[n].style.background="#666"
		btn[nt].style.background="#e70050"
		n=nt
	}

	for (var i = 0; i < btn.length; i++) {
		btn[i].index=i
		btn[i].onclick=function(){
			btn[n].style.background="#666"
			btn[this.index].style.background="#e70050"
			img[this.index].style.left=xwidth+"px"
			animate(img[n],{left:-xwidth},600)
			animate(img[this.index],{left:0},600)
			n=this.index;

			}
		}
}
var parentbox=$(".fashion-content-center")
for (var i = 0; i < parentbox.length; i++) {
	xlunbo(parentbox[i])
}


function border(type){
	var parent=type;
	// var parent=$(".goods")[0]
	var topRight=$(".top-pos-right",parent)[0]
	var topBottom=$(".top-pos-bottom",parent)[0]
	var bottomTop=$(".bottom-pos-top",parent)[0]
	var bottomLeft=$(".bottom-pos-left",parent)[0]
	var w=parseInt(getStyle(parent,"width"))
	var h=parseInt(getStyle(parent,"height"))

	parent.onmouseover=function(){
		animate(topRight,{width:w+30},400)
		animate(topBottom,{height:h+30},400)
		animate(bottomTop,{height:h+30},400)
		animate(bottomLeft,{width:w+30},400)
	}
	parent.onmouseout=function(){
		animate(topRight,{width:0},400)
		animate(topBottom,{height:0},400)
		animate(bottomTop,{height:0},400)
		animate(bottomLeft,{width:0},400)
	}
}


var parent=$(".goods")
for (var i = 0; i < parent.length; i++) {
	border(parent[i])
}


function manyBorder(type){
	var parent=type;
	// var parent=$(".goods")[0]
	var topRight=$(".top-pos-right",parent)[0]
	var topBottom=$(".top-pos-bottom",parent)[0]
	var bottomTop=$(".bottom-pos-top",parent)[0]
	var bottomLeft=$(".bottom-pos-left",parent)[0]
	var w=parseInt(getStyle(parent,"width"))
	var h=parseInt(getStyle(parent,"height"))

	parent.onmouseover=function(){
		animate(topRight,{width:w},400)
		animate(topBottom,{height:h},400)
		animate(bottomTop,{height:h},400)
		animate(bottomLeft,{width:w},400)
	}
	parent.onmouseout=function(){
		animate(topRight,{width:0},400)
		animate(topBottom,{height:0},400)
		animate(bottomTop,{height:0},400)
		animate(bottomLeft,{width:0},400)
	}
}

var ss=$(".jiabox")
for (var i = 0; i < ss.length; i++) {
	manyBorder(ss[i])
}



function brandmove(type){
	var parent=type;	
	var brand=$(".brand-box-big",parent)[0]
	var brands=$(".brand-box",parent)
	var left=$(".pos-san-left",parent)[0]
	var right=$(".pos-san-right",parent)[0]
	var width=parseInt(getStyle(brand,"width"))
	var n=0;
	var next=0;
	// var t=setInterval(move,2000)
	function move(){
		next=n+1;
		if (next>=brands.length) {
			next=0;
		}
		brands[next].style.left=width+"px";
		animate(brands[n],{left:-width},500)
		animate(brands[next],{left:0},500)
		n=next;
	}
	right.onclick=function(){
		move()
	}
	left.onclick=function(){
		next=n-1;
		if (next<0) {
			next=brands.length-1;
		}
		brands[next].style.left=-width+"px";
		animate(brands[n],{left:width})
		animate(brands[next],{left:0})
		n=next;
	}
}
var aparent=$(".brand")
for (var i = 0; i < aparent.length; i++) {
	brandmove(aparent[i])

};


//nav的隐藏与显示。
var nav_sidenav=$(".nav-sidenav")
for (var i = 0; i < nav_sidenav.length; i++) {
	nav_sidenav[i].onmouseover=function(){
		var lie=$(".pos-nav-hidden",this)[0]
		lie.style.display="block"

	}
	nav_sidenav[i].onmouseout=function(){
		var lie=$(".pos-nav-hidden",this)[0]
		lie.style.display="none"

	}
}


//我的银泰的下拉菜单
var nav_box=$(".btcaidan")[0]
nav_box.onmouseover=function(){
	this.style.background="#fff"
	var bgimg=$(".top-left-img",this)[0]
	bgimg.style.background="url(images/top/04.png) 0 -17px"
	var pos_btcai=$(".pos-btcai",this)[0]
	var mei=$(".pos-btcai-lie",this)
	var meih=parseInt(getStyle(mei[0],"height"))
	var lt=mei.length*meih
	animate(pos_btcai,{height:lt},0)
}
nav_box.onmouseout=function(){
	this.style.background=""
	var bgimg=$(".top-left-img",this)[0]
	bgimg.style.background=""
	var pos_btcai=$(".pos-btcai",this)[0]
	animate(pos_btcai,{height:0},0)
}


//楼层跳转
	var floor_nav=$(".floor-nav")[0]
	var floor_lis=$(".floor-lis")
	var floor=$(".fashion-products")
	var cheight=document.documentElement.clientHeight;
	var nheight;
	var now;
	for (var i = 0; i < floor.length; i++) {
		floor[i].h=floor[i].offsetTop;
	}
	window.onscroll=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
		var top=obj.scrollTop;
		if(top>=floor[0].h-300){
			floor_nav.style.display="block"
			nheight=floor_nav.offsetHeight;
			floor_nav.style.top=(cheight-nheight)/2+"px";	
		}
		if(top<floor[0].h-300){
			floor_nav.style.display="none"
		}
		for (var i = 0; i < floor.length; i++) {
			if(top>=floor[i].h-200){
				for (var j = 0; j < floor_lis.length; j++) {
					floor_lis[j].style.background=""
					var aa=$("a",floor_lis[j])[0]
					aa.style.display="none"
				}
				floor_lis[i].style.background="#e81960"
				var aa=$("a",floor_lis[i])[0]
				aa.style.display="block"
			}
		}
	}
	for (var i = 0; i < floor_lis.length; i++) {
		floor_lis[i].index=i;
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floor[this.index].h})
			animate(document.documentElement,{scrollTop:floor[this.index].h})
			for (var j = 0; j < floor_lis.length; j++) {
				floor_lis[i].style.background=""
			}
			this.style.background="#e81960"
			now=this.index;
		}
		floor_lis[i].onmouseover=function(){
			this.style.background="#e81960"
			var a=$("a",this)[0]
			a.style.display="block"
		}
		floor_lis[i].onmouseout=function(){
			if(this.index==now){
				return;
			}
			this.style.background=""
			var a=$("a",this)[0]
			a.style.display="none"	
		}
	}

	floor_lis[9].onclick=function(){
		animate(document.body,{scrollTop:0},100)
		animate(document.documentElement,{scrollTop:0},100)
	}




	//微信下拉二维码：
	var weixin=$(".weixin")
	for (var i = 0; i < weixin.length; i++) {
		weixin[i].onmouseover=function(){
			var btweixin=$(".btweixin",this)[0]
			var a=$("a",btweixin)[0]
			var bgimg=$(".top-left-img",btweixin)[0]
			btweixin.style.display="block"
			a.style.color="#e5004f"
			bgimg.style.background="url(images/top/tubiao01.png) -175px -128px"
		}
		weixin[i].onmouseout=function(){
			var btweixin=$(".btweixin",this)[0]
			var a=$("a",btweixin)[0]
			var bgimg=$(".top-left-img",btweixin)[0]
			btweixin.style.display="none"
			a.style.color=""
			bgimg.style.background=""
		}
	};


	//银泰首页的移入移出效果：
	var index=$(".index")[0]
	index.onmouseover=function(){
		var p=$("p",this)[0]
		var a=$("a",this)[0]
		p.style.background="url(images/top/06.png)"
		a.style.color="#e81960"
	}
	index.onmouseout=function(){
		var p=$("p",this)[0]
		var a=$("a",this)[0]
		p.style.background=""
		a.style.color=""
	}
	


	$("img").lazyload({
		threshold:300,
		event:"scroll",
		effect:"fadeIn"
		// effect:"slideDown"
	})


// <!-- <img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px">
// 	<img src="jz.gif" alt="" data-original="1.jpg" class="lazy" width="300px" height="200px"> -->

})