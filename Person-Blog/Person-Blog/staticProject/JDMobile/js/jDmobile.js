/*
    author:zhenchuan.wang
    descoration:手机网站京东首页js
    swiper:轮播使用的是swrper插件
	布局方式：使用百分比进行页面自适应布局
 * 
 * 
 * */
window.onload = function(){
	//头部轮播开始
	$("body").scrollTop("0px");//页面滚动条滚动到顶部
	var mySwiper = new Swiper('.slider-touch',{
		autoplay:1000, // 可选选项，自动滑动，手指触屏滑动会会停止自动轮播
		initialSlide:0,  // 初始为第一个，初始显示的li索引
		autoplayDisableOnInteraction : false, // 手指触屏滑动之后，重新开启自动轮播
		speed:500,       // 滑动的速度
		grabCursor : true,  // 鼠标抓手形状，触屏时，看不见
		pagination : '.swiper-pagination',  // 分页器
		loop : true,   // 循环，无缝滚动，自动在li列表的前面添加最后一个，在列表后面添加第一个，注意最外层的宽度，一定要设置大一些
        //effect : 'fade',  // 淡入淡出
        observer:true,    // 当节点被修改时候自动更新swiper
        observeParents:true, // 当容器container宽度改变的时候(window.onresize)自动更新swiper,或者自适应窗口
	});
	//头部轮播结束
	// 广告轮播开始
	var mySwiper1 = new Swiper('.advert-adv-partOne',{
		autoplay:1000, // 可选选项，自动滑动，手指触屏滑动会会停止自动轮播
		initialSlide:0,  // 初始为第一个，初始显示的li索引
        //autoplayDisableOnInteraction : false, // 手指触屏滑动之后，重新开启自动轮播
		speed:1000,       // 滑动的速度
		grabCursor : true,  // 鼠标抓手形状，触屏时，看不见
		pagination : '.swiper-pagination-partOne',  // 分页器
		loop : true,   // 循环，无缝滚动，自动在li列表的前面添加最后一个，在列表后面添加第一个，注意最外层的宽度，一定要设置大一些
        effect : 'fade',  // 淡入淡出
        observer:true,    // 当节点被修改时候自动更新swiper
        observeParents:true, // 当容器container宽度改变的时候(window.onresize)自动更新swiper,或者自适应窗口
	});
	// 广告轮播结束
	//特色市场广告轮播开始
	var mySwiper2 = new Swiper('.advert-adv-partTwo',{
		autoplay:1000, // 可选选项，自动滑动，手指触屏滑动会会停止自动轮播
		initialSlide:0,  // 初始为第一个，初始显示的li索引
        //autoplayDisableOnInteraction : false, // 手指触屏滑动之后，重新开启自动轮播
		speed:1000,       // 滑动的速度
		grabCursor : true,  // 鼠标抓手形状，触屏时，看不见
		pagination : '.swiper-pagination-partTwo',  // 分页器
		loop : true,   // 循环，无缝滚动，自动在li列表的前面添加最后一个，在列表后面添加第一个，注意最外层的宽度，一定要设置大一些
        effect : 'fade',  // 淡入淡出
        observer:true,    // 当节点被修改时候自动更新swiper
        observeParents:true, // 当容器container宽度改变的时候(window.onresize)自动更新swiper,或者自适应窗口
	});
	//特色市场广告轮播结束
	//主题街广告轮播开始
	var mySwiper3 = new Swiper('.advert-pro-advThree',{
		autoplay:1000, // 可选选项，自动滑动，手指触屏滑动会会停止自动轮播
		initialSlide:0,  // 初始为第一个，初始显示的li索引
        //autoplayDisableOnInteraction : false, // 手指触屏滑动之后，重新开启自动轮播
		speed:1000,       // 滑动的速度
		grabCursor : true,  // 鼠标抓手形状，触屏时，看不见
		pagination : '.swiper-pagination-partThree',  // 分页器
		loop : true,   // 循环，无缝滚动，自动在li列表的前面添加最后一个，在列表后面添加第一个，注意最外层的宽度，一定要设置大一些
        effect : 'fade',  // 淡入淡出
        observer:true,    // 当节点被修改时候自动更新swiper
        observeParents:true, // 当容器container宽度改变的时候(window.onresize)自动更新swiper,或者自适应窗口
	});
	//主题街广告轮播结束
	//掌上秒杀滑动开始
     var mySwiper4 = new Swiper('.secskill-content', {
		initialSlide :0,  //初始显示的li的索引
		speed : 1000,     //滑动的速度
		observer:true,    //当li节点被修改的时候自动更新Swiper
		observeParents:true,  //当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper	
		slidesPerView : 3,    //设置slider容器能够同时显示的slides数量(carousel模式)
	 });
	//掌上秒杀滑动结束
	//京东头部搜索滚动条滑动变颜色开始
	/*
	 * js写法 吸顶盒做法
	var search = document.getElementById("search");
	var returnTop = document.getElementById("returnTop");
	window.onscroll = function(){
		var scrollTop = document.body.scrollTop;
		if(scrollTop>100){
			search.style.background="rgba(208,55,67,0.85)";
			search.style.transition="all 1s ease";
		}else{
			search.style.background="rgba(0,0,0,0)";
			search.style.transition="all 1s ease";
		}
		if(scrollTop>500){
			returnTop.style.display="block";
		}else{
			returnTop.style.display="none";
		}
	 }
	 returnTop.onclick=function(){
		document.body.scrollTop=0;
	 }*/
	 // jquery写法
	 var returnTop = $("#returnTop");  // 获取底部回到顶部按钮
	 var scrollTop = $("body").scrollTop();
	 var backTop = $("#backtop");
	 window.onscroll=function(){
	 	   var search = $("#search");  // 获取头部搜索框
	 	   var returnTop = $("#returnTop");  // 获取底部回到顶部按钮
	 	   var scrollTop = $("body").scrollTop(); // 获取body的滚动高度
	 	   if(scrollTop>100){
	 	   	  search.css({"background":"rgba(208,55,67,0.85)","transition":"all 1s ease"});
	 	   	  returnTop.fadeIn();
	 	   }else{
	 	   	  search.css({"background":"rgba(0,0,0,0)","transition":"all 1s ease"});
	 	   	  returnTop.fadeOut();
	 	   }
	 }
	 returnTop.click(function(){
	 	 $("body").stop(true,true).animate({"scrollTop":"0px"},1000);
	 });
	 backTop.click(function(){
	 	 $("body").stop(true,true).animate({"scrollTop":"0px"},1000);
	 });
	//京东头部搜索滚动条滑动颜色结束
	// 倒计时开始
	// 设置结束时间
	var endTime = new Date();
	endTime.setFullYear(2016);
	endTime.setMonth(8);
	endTime.setDate(20);
	endTime.setHours(6);
	endTime.setMinutes(0);
	endTime.setSeconds(0);
	var endTimer = endTime.getTime(); // 获取结束时间
	//console.log(endTimer);
	var secskillHour = document.getElementById("secskill-hour"); // 获取小时
	var secskillMin = document.getElementById("secskill-min");  // 获取分钟
	var secskillSec = document.getElementById("secskill-sec"); // 获取秒
	// 转换时间
	function changeTime(time,obj1,obj2,obj3){  // obj1代表小时，obj2代表分钟，obj3代表秒
		 var nowTime = new Date();   // 获取当前的时间
		 var sec = (time-nowTime.getTime())/1000;   // 设置的时间，结束时间-当前时间,获取的是毫秒,要把它转化成秒
	     //console.log(sec);
	     if(sec > 0){
	     	 var hour = Math.floor(sec/3600);  // 获取小时，Math.floor()向下取整
	     	 var sec = sec%3600;                   // 剩下多少秒钟
	     	 var min = Math.floor(sec/60);    // 分钟
	     	 var sec = Math.floor(sec%60);        // 秒
	     	 obj1.innerHTML =addZero(hour,2);
	     	 obj2.innerHTML =addZero(min,2);
	     	 obj3.innerHTML =addZero(sec,2);
	     }else{
	     	clearInterval(timer);
	     }
	}
	// 设置定时器器
	var timer = setInterval(function(){
		changeTime(endTimer,secskillHour,secskillMin,secskillSec);
	},1000);
	changeTime(endTimer,secskillHour,secskillMin,secskillSec);
	// 倒计时结束
	
	// 补零功能
	function addZero(time,n){
		var str = ''+time;
		while(str.length<n){
			str = "0"+time;
		}
		return str;
	}
}

