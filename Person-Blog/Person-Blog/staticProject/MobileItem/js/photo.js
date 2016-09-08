/*
   author:zhenchuan.wang
   decor:手机相册js
   time:2016/7/9
   

*/


/*document.documentElement.clientWidth;获取屏幕的宽度*/
document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/3+"px"; //把屏幕平分成三分之一

/*动态的创建ul li列表开始*/
var aData=[];  // 用一数据给存储起来
for(var i=1;i<=16;i++)
{
	aData[i-1]="img/"+i+".jpg";
}
/*动态的创建ul li列表结束*/

create(aData);        // 执行函数
function open3D(obj)
{
	var aDiv=obj.getElementsByTagName("div");
	for(var i=0;i<aDiv.length;i++)
	{
		aDiv[i].style.transition="0.5s";
		aDiv[i].className="show";
	}
}
function clos3D(obj,oLi)
{
	var aDiv=obj.getElementsByTagName("div");
	aDiv[aDiv.length-1].addEventListener("webkitTransitionEnd",fn,false);
	aDiv[aDiv.length-1].addEventListener("transitionend",fn,false);
	for(var i=0;i<aDiv.length;i++)
	{
		aDiv[i].style.transition="0.5s";
		aDiv[i].className="";
	}
	function fn()
	{
		var oPage=document.getElementById("page");
		aDiv[aDiv.length-1].removeEventListener("webkitTransitionEnd",fn,false);
		aDiv[aDiv.length-1].removeEventListener("transitionend",fn,false);
		oLi.style.opacity=1;
		oPage.removeChild(obj);
	}
}
function create(aData)
{
	var oPage=document.getElementById("page");         
	var oList=document.getElementById("picList");
	var aLi=oList.getElementsByTagName("li");
	var aBtns=oPage.getElementsByClassName("btn");
	var aRecycle=oPage.getElementsByClassName("recycle");
	var aPicBox=oPage.getElementsByClassName("PicBox");
	var sHtml="";
	var aRemove=[];
	var bOff=true;
	for(var i=0;i<aData.length;i++)
	{
		sHtml+="<li style='background-image:url("+aData[i]+");'></li>"
	}
	oList.innerHTML=sHtml;
	toPosition();
	aBtns[1].addEventListener("touchend",fnEnd,false);
	aBtns[0].addEventListener("touchend",fnRemove,false);
	function toPosition()
	{
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].style.left=i%3+"rem";
			aLi[i].style.top=Math.floor(i/3)+"rem";
		}
	}
	function fnEnd()
	{
		if(bOff)
		{
			aBtns[1].innerHTML="取消";
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].index=i;
				aLi[i].addEventListener("touchend",fnSelected,false);
			}	
		}
		else
		{
			//alert(aRemove.length+"||"+aPicBox.length);
			/*aBtns[1].innerHTML="选择";
			aBtns[0].style.display="none";
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].style.opacity=1;
				aLi[i].removeEventListener("touchend",fnSelected,false);
			}	
			aRemove.length=0;*/
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].removeEventListener("touchend",fnSelected,false);
			}
			for(var i=0;i<aRemove.length;i++)
			{
				clos3D(aPicBox[i],aLi[aRemove[i]]);
			}
			aBtns[1].innerHTML="选择";
			aBtns[0].style.display="none";
			aRemove.length=0;
		}
		bOff=!bOff;
	}
	function fnSelected()
	{
		aRemove.push(this.index);
		this.style.opacity="0";
		aBtns[0].style.display="block";
		aRecycle[0].style.top=aRecycle[1].style.top="calc(100% - 0.4rem)";
		create3d(this);
	}	
	function create3d(oLi)
	{
		var oDiv=document.createElement("div");
		var oXy=getOffset(oLi);
		oDiv.className="PicBox";
		oDiv.style.backgroundImage=oLi.style.backgroundImage;
		oDiv.style.left=oXy.l+"px";
		oDiv.style.top=oXy.t+"px";
		oDiv.innerHTML='<div><div style="background-position:-0.1rem 0;"><div style="background-position:-0.2rem 0;"><div style="background-position:-0.3rem 0;"><div style="background-position:-0.4rem 0;"><div style="background-position:-0.5rem 0;"><div style="background-position:-0.6rem 0;"><div style="background-position:-0.7rem 0;"><div style="background-position:-0.8rem 0;"><div style="background-position:-0.9rem 0;"></div></div></div></div></div></div></div></div></div></div>';
		oPage.appendChild(oDiv);
		setTimeout(function(){
			open3D(oDiv);	
		},30);
	}
	function fnRemove()
	{
		aRemove=aRemove.sort(function(a,b){
			return a-b;
		});
		aRecycle[0].style.top=aRecycle[1].style.top="calc(100% - 0.6rem)";
		/*while(aRemove.length)
		{
			var iNub=aRemove.pop();
			fnDle(iNub);
			//oList.removeChild(aLi[iNub]);
		}*/
		for(var i=0;i<aRemove.length;i++)
		{
			fnDle(i);
		}
		//bOff=false;
		//toPosition();
		//fnEnd();
		setTimeout(function(){
			aRecycle[0].className=aRecycle[1].className="recycle recycleShow";	
			while(aRemove.length)
			{
				oPage.removeChild(aPicBox[aRemove.length-1]);
				var iNub=aRemove.pop();
				oList.removeChild(aLi[iNub]);
			}	
			toPosition();
			fnEnd();
		},650);
		setTimeout(function(){
			aRecycle[0].style.top=aRecycle[1].style.top="100%";	
		},1000);
	}
	function fnDle(i)
	{
		var oBj=aPicBox[i];
		var oLi=aLi[aRemove[i]];
		oBj.style.transition=".3s left,.5s 0.3s top";
		oBj.style.left="calc(50% - 0.5rem)";
		oBj.style.top="100%";
	}
}
function getOffset(obj)
{
	var l=0;
	var t=0;
	while(obj)
	{
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {l:l,t:t};
}