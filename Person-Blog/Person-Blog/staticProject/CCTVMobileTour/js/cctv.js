/*
    @:author:zhenchuan.wang
	@:time:2016/7/5
	@:descoration:cctv五一一起游

开发坏境：editplus
运用的技术:javascript html5 css3 
开发周期：5天
项目描述:1:该小项目主要实现了一个景区的印象评分评价，导入视频/上传照片，评论，上传图片视频成功
         2:首页的出场动画，主要是css3的@keyframes 动画名称 animation transform translate rotate opacity -webkit-animation-fill-mode:forwards;  -webkit-transform-origin:left bottom  infinite alternate linear
	     3:景区的评分，提交时，必须评分之后，在可以提交，进行了js的判断
		 4:提交完成后，经过一个遮罩层，到达新闻线索，导入视频图片等，导入图片成功后，进行评论，在上传图片或者视频，进入首页，然后重新评价，再次进入评分系统
         
		 该项目的主要难点是：手机端的点击事件与pc端的有差别
		                     页面之间的跳转逻辑顺序的先后
                          



*/
// JavaScript Document
document.body.style.height=view().h+"px";
fnLoad();  // 调用函数
// 获取id
function id(obj) {
    return document.getElementById(obj);
}
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
// 获取可视的宽高开始
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
// 获取可视宽高的结束
// 添加class开始
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');  // 定义一个变量
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}
// 添加class结束
// 移除class开始
function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}
// 移除class结束
// 预加载开始
function fnLoad()
{
	var iTime=new Date().getTime();
	var oW=id("welcome");
	var arr=[""];
	var bImgLoad=true;
	var bTime=false;
	var oTimer=0;
	bind(oW,"webkitTransitionEnd",end);
	bind(oW,"transitionend",end);
	oTimer=setInterval(function(){
		if(new Date().getTime()-iTime>=5000)
		{
			bTime=true;
		}	
		if(bImgLoad&&bTime)
		{
			clearInterval(oTimer);
			oW.style.opacity=0;
		}
	},1000);
	function end()
	{
		removeClass(oW,"pageShow");
		fnTab();
	}
	/*for(var i=0;i<arr.length;i++)
	{
		var oImg=new Image();
		oImg.src=arr[i];
		oImg.onload=function()
		{
			
		}
		
	}*/
}
/*预加载结束*/
// 图片轮播切换开始
function fnTab()
{
	var oTab=id("tabPic");        // 获取图片列表的tabPic
	var oList=id("picList");      // 获取图片列表
	var aNav=oTab.getElementsByTagName("nav")[0].children;  // 获取按钮的
	var iNow=0;                  // 记录当前选中的第0个        
	var iX=0;                    // 定义一个变量记录一下     
	var iW=view().w;             // 宽度
	var oTimer=0;                 // 定时器
	var iStartTouchX=0;
	var iStartX=0;
	// 手指触发滑动事件
	bind(oTab,"touchstart",fnStart);
	// 手指触发移动事件
	bind(oTab,"touchmove",fnMove);
	// 手指弹起事件
	bind(oTab,"touchend",fnEnd);
	auto();
	if(!window.BfnScore)
	{
		fnScore();
		window.BfnScore=true;
	}
	function auto()
	{
		oTimer=setInterval(function(){  // 设置定时器
			iNow++;	
			iNow=iNow%aNav.length;
			tab();
		},2000);
	}
	function fnStart(ev)
	{
		oList.style.transition="none";
		ev=ev.changedTouches[0];        // 代表手指触发当前的列表
		iStartTouchX=ev.pageX;          // 获取手指的x轴的坐标
		iStartX=iX;
		clearInterval(oTimer);         // 清除定时器
	}
	function fnMove(ev)
	{
		ev=ev.changedTouches[0];
		var iDis=ev.pageX-iStartTouchX;    // 获取一个差值
		iX=iStartX+iDis;                   // 手指在屏幕上移动的 距离
		oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
	}
	function fnEnd()
	{
		iNow=iX/iW;
		iNow=-Math.round(iNow);
		if(iNow<0)
		{
			iNow=0;
		}
		if(iNow>aNav.length-1)
		{
			iNow=aNav.length-1;
		}
		tab();
		auto();
	}
	function tab()
	{
		iX=-iNow*iW;
		oList.style.transition="0.5s";
		oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
		for(var i=0;i<aNav.length;i++)
		{
			removeClass(aNav[i],"active");
		}
		addClass(aNav[iNow],"active");
	}
}
// 图片轮播切换结束
//评分开始
function fnScore()
{
	var oScore=id("score");
	var aLi=oScore.getElementsByTagName("li");
	var arr=["好失望","没有想象的那么差","很一般","良好","棒极了"];
	for(var i=0;i<aLi.length;i++)
	{
		fn(aLi[i]);
	}
	function fn(oLi)
	{
		var aNav=oLi.getElementsByTagName("a");
		var oInput=oLi.getElementsByTagName("input")[0];
		for(var i=0;i<aNav.length;i++)
		{
			aNav[i].index=i;
			bind(aNav[i],"touchstart",function(){
				for(var i=0;i<aNav.length;i++)
				{
					if(i<=this.index)
					{
						addClass(aNav[i],"active");
					}					
					else
					{
						removeClass(aNav[i],"active");
					}
				}
				oInput.value=arr[this.index];
			});
		}
	}

	fnIndex();
}
// 评分结束
// 信息开始
function fnInfo(oInfo,sInfo)
{
	oInfo.innerHTML=sInfo;
	oInfo.style.WebkitTransform="scale(1)";
	oInfo.style.opacity=1;
	setTimeout(function(){
		oInfo.style.WebkitTransform="scale(0)";
		oInfo.style.opacity=0;
	},1000);
}
function fnIndex()
{
	var oIndex=id("index");
	var oBtn=oIndex.getElementsByClassName("btn")[0];
	var oInfo=oIndex.getElementsByClassName("info")[0];
	var bScore=false;
	bind(oBtn,"touchend",fnEnd);
	function fnEnd()
	{
		bScore=fnScoreChecked();
		if(bScore)
		{
			if(bTag())
			{
				fnIndexOut();		
			}
			else
			{
				fnInfo(oInfo,"给景区添加标签");	
			}
		}
		else
		{
			fnInfo(oInfo,"给景区评分");
		}
	}
	function fnScoreChecked()
	{
		var oScore=id("score");
		var aInput=oScore.getElementsByTagName("input");
		for(var i=0;i<aInput.length;i++)
		{
			if(aInput[i].value==0)
			{
				return false;
			}
		}
		return true;
	}
	function bTag()
	{
		var oTag=id("indexTag");
		var aInput=oTag.getElementsByTagName("input");
		for(var i=0;i<aInput.length;i++)
		{
			if(aInput[i].checked)
			{
				return true;
			}
		}
		return false;
	}
}
function fnIndexOut()
{
	var oMask=id("mask");
	var oIndex=id("index");
	var oNew=id("news");
	addClass(oMask,"pageShow");
	addClass(oNew,"pageShow");
		fnNews();
	setTimeout(function(){
		oMask.style.opacity=1;	
		oIndex.style.WebkitFilter=oIndex.style.filter="blur(5px)";
	},14);
	setTimeout(function(){
		oNew.style.transition="0.5s";
		oMask.style.opacity=0;	
		oIndex.style.WebkitFilter=oIndex.style.filter="blur(0px)";	
		oNew.style.opacity=1;
		removeClass(oMask,"pageShow");
	},3000);
}
// 新闻开始
function fnNews()
{
	var oNews=id("news");
	var oInfo=oNews.getElementsByClassName("info")[0];
	var aInput=oNews.getElementsByTagName("input");
	aInput[0].onchange=function()
	{
		if(this.files[0].type.split("/")[0]=="video")
		{
			fnNewsOut();
			this.value="";
		}
		else
		{
			fnInfo(oInfo,"请上传视频");
		}
	};
	aInput[1].onchange=function()
	{
		if(this.files[0].type.split("/")[0]=="image")
		{
			fnNewsOut();
			this.value="";
		}
		else
		{
			fnInfo(oInfo,"请上传图片");
		}
	};
}
//新闻出去时
function fnNewsOut()
{
	var oNews=id("news");
	var oForm=id("form");
	addClass(oForm,"pageShow");
	oNews.style.cssText="";
	removeClass(oNews,"pageShow");
		formIn();
}
function formIn()
{
	var oForm=id("form");
	var oOver=id("over");
	var aFormTag=id("formTag").getElementsByTagName("label");
	var oBtn=oForm.getElementsByClassName("btn")[0];
	var bOff=false;
	for(var i=0;i<aFormTag.length;i++)
	{
		bind(aFormTag[i],"touchend",function(){
			bOff=true;
			addClass(oBtn,"submit");
		});
	}
	bind(oBtn,"touchend",function(){
		if(bOff)
		{
			for(var i=0;i<aFormTag.length;i++)
			{
				aFormTag[i].getElementsByTagName("input")[0].checked=false;
			}
			bOff=false;
			addClass(oOver,"pageShow");
			removeClass(oForm,"pageShow");
			removeClass(oBtn,"submit");
			over();
		}
	});
}
function over()
{
	var oOver=id("over");
	var oBtn=oOver.getElementsByClassName("btn")[0];
	bind(oBtn,"touchend",function()
	{
		removeClass(oOver,"pageShow");
	});
}