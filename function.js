//获取类名的兼容性函数、
//兼容问题：document.getElementsByClassName()  在IE6~~~8不支持
// window.onload=function(){
// function getClass(classname,obj){
// 	obj=obj||document;
// 	if(obj.getElementsByClassName){
// 		return obj.getElementsByClassName(classname);	
// 	}
// 	else{
// 		var arr=[];
// 		var objs=obj.getElementsByTagName('*');
// 		for (var i = 0; i < objs.length; i++) {
// 			if(objs[i].className==classname){
// 				arr.push(objs[i])
// 				}
// 			}	
// 			return arr
// 		}
// 	}
// var parent=document.getElementById('parent')
// var aa=getClass("box",parent)
// alert(aa)
// }





// window.onload=function(){

// 	function getClass(classname,obj){
// 	obj=obj||document;
// 	if(obj.getElementsByClassName){
// 		return obj.getElementsByClassName(classname);	
// 	}
// 	else{
// 		var arr=[];
// 		var objs=obj.getElementsByTagName('*');
// 		for (var i = 0; i < objs.length; i++) {
// 			if(checkClass(objs[i],classname)){
// 				arr.push(objs[i])
// 				}
// 			}	
// 			return arr
// 		}
// 	}
// 	function checkClass(obj,val){
// 		var classStr=obj.className;
// 		var classArr=classStr.split(" ");
// 		for (var i = 0; i < classArr.length; i++) {
// 			if(val==classArr[i]){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
// 	var parent=document.getElementById('parent')
// 	var aa=getClass("box",parent)
// 	alert(aa.length)
// }




//1、兼容问题：document.getElementsByClassName()  在IE6~~~8不支持
function getClass(classname,obj){
	obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);	
	}
	else{
		var arr=[];
		var objs=obj.getElementsByTagName('*');
		for (var i = 0; i < objs.length; i++) {
			if(checkClass(objs[i],classname)){
				arr.push(objs[i])
				}
			}	
			return arr
		}
	}
	function checkClass(obj,val){
		var classStr=obj.className;
		var classArr=classStr.split(" ");
		for (var i = 0; i < classArr.length; i++) {
			if(val==classArr[i]){
				return true;
			}
		}
		return false;
	}


//正确
// window.onload=function(){

// function getText(parent){
// 	if(parent.textContent){
// 		return parent.textContent 
// 	}else{
// 		return parent.innerText
// 	}
// }
// var parent=document.getElementById('parent')
// var obj=getText(parent)
// alert(obj)
// }



// window.onload=function(){
// function getStyle(classname,arr){
// 	if(getComputedStyle(classname,null)){
// 		return getComputedStyle(classname,null)[arr]
// 	}else{
// 		return classname.currentStyle[arr]
// 	}
// }
// var one=document.getElementById('one')
// var css=getStyle(one,"width")
// alert(css)
// }


//正确获取样式的兼容性
// window.onload=function(){
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}
// var one=document.getElementById('one')
// var css=getStyle(one,"width")
// alert(css)
// }



//设置或者获取文本内容。
function operateText(parent,val){
	if(val!=undefined){
		if(parent.textContent){
		return parent.textContent=val; 
	}else{
		return parent.innerText=val;
		}
	}else{
		if(parent.textContent){
		return parent.textContent 
	}else{
		return parent.innerText
		}
	}
}


function $(val,obj){
	if(typeof val=="string"){
			var obj=obj||document;
		// if(val)
		val=val.replace(/^\s*|\s*$/g,"")
		if(val.charAt(0)=="#"){
			return document.getElementById(val.slice(1))
		}else if(val.charAt(0)=="."){
			return getClass(val.slice(1),obj)
		}else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
			return obj.getElementsByTagName(val)
		}
	}else if(typeof val=="function"){
		window.onload=function(){
			val()
		}
	}
	
}






$(function(){

})


function aa(fun){
	
}
