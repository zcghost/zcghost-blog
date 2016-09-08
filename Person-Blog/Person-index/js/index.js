/*
   @:author:王震川
   @:descoration:博客主页面js
 * 
 * */
$(function(){
	 setTimeout(function(){ // 解决页面刷新不回到第一张图片的问题，当每次刷新时，让滚动条为0
				$(document).scrollTop(0);
			},50)
	 var windowHeight = $('body').height(); // 获取页面body的高度
	 var oLi = document.getElementsByTagName("li");
	 var index = 0;  // 定义一个索引
	 var Time = new Date();        // 当滚轮滚得特别快时，会错乱，那么要控制滚轮之间的时间差，获取当前页面的时间
	 $(".wrap .part1").addClass("first");  // 当页面一加载时，我给它加上一个名字
	 // 当页面缩小时，body的高度随着浏览器的变化而变化
	 $(window).resize(function(){
	 	 windowHeight = $('body').height();
	 	 $(document).scrollTop(windowHeight*index); // 防止当拖动的时候，页面图片的位置会变化，固定滚动图片的那个高度，滚动的高度随着页面的高度变化
	 });
	 
	 $(document).mousewheel(function(event,delta,deltaX,deltaY){
	 	   if(new Date()-Time>1000){  // 当滚动的时候，上下滚动的时间差大于800毫秒的时候，执行下面的动作，新的时间减去前面一个滚动的时间
	 	   	    Time = new Date();    //时间等于新的时间
	 	   	    delta == -1?index++:index--;
		 	    if(index>oLi.length-1){index = oLi.length-1;}
		 	    if(index<0){ index = 0;}
		 	    $(".wrap  .part").eq(index).siblings().removeClass("on"); //保持动画的同步， 当退出时，把前面的动画给移除掉，是在先执行鼠标滚轮动画之后，在执行这个
		 	    $(".nav ul li").eq(index).addClass("hover").siblings("li").removeClass("hover");
		 	    $('body,html').animate({'scrollTop':windowHeight*index},1000,function(){
		 	    	//当页面滚出以后，执行的动画
		 	    	$(".wrap  .part").eq(index).addClass("on");  // 当滑动到该页面时，给后面的区块添加一个动做,当动作执行完成后，执行一个回调函数
		 	    });
		 	  	
	 	   }
	  });
	       // 点击按钮时进行滚动
	 	   $(".nav ul li").click(function(){
	 	   	    index = $(this).index();
	 	   	    $(".wrap  .part").eq(index).siblings().removeClass("on"); //保持动画的同步， 当退出时，把前面的动画给移除掉，是在先执行鼠标滚轮动画之后，在执行这个
		 	    $(".nav ul li").eq(index).addClass("hover").siblings("li").removeClass("hover");
		 	    $('body,html').animate({'scrollTop':windowHeight*index},1000,function(){
		 	    //当页面滚出以后，执行的动画
		 	    $(".wrap  .part").eq(index).addClass("on");  // 当滑动到该页面时，给后面的区块添加一个动做,当动作执行完成后，执行一个回调函数	    	
		 	    });
	 	   });
	 	   // 点击按钮时进行滚动结束
	 	   //拖拽开始
	 	     var oL = $("#wrap-con ul li").size(); //计算li的个数
					     var lDeg = 360/oL;                // 360除以长度
						 var x1,x_,y1,y_; // x1代表前一个值
						 var roY = 0;
						 var roX = -10;
						 var p = null;
					     // 遍历li个数,可以用for循环，但jquery里面有一个方法each 
						      /*
					          $("#wrap ul li").each(function(i){  // i表示的数量
						      var a = oL-1-i;  // 图片是倒着出来，初始进场动画
					          $(this).css({
						      transition:"1s"+(a*2)+'s+transform',
						      transform:"rotateY("+i*lDeg+"deg) translateZ(350px)" // 给每一个加上一个度数
						    });
					       });*/
						   for (var i=oL-1;i>=0;i--){
				           $('#wrap-con  ul li').eq(i).css({
					       transition:"1s "+(oL-i)*0.15+"s transform,.5s "+(1+oL*0.15)+"s opacity",
					      'transform':'rotateY('+lDeg*i+'deg) translateZ(350px)'
				           });
			          }
					// 拖拽
					   $(document).mousedown(function(e){
						        // 清除定时器,当拖动得比较快时，清除上一次的定时器
								clearInterval(p);
						        x1 = e.clientX;  // 刚开始初始值
								y1 = e.clientY;  
					            $(document).bind('mousemove',function(e){ // 通过e获取鼠标当前的位置
							        //var x = e.clientX;  // 鼠标点下距离浏览器左边的距离
									//var y = e.clientY;  // 鼠标点下距离浏览器上边的距离
									x_ = e.clientX-x1;  // x_代表的是差值，现在的值减去之前的值
									y_ = e.clientY-y1;  // 鼠标的垂直
									y1 = e.clientY;
									x1 = e.clientX;     // 前一个值
                                    roY = roY+0.2*x_;   // 乘以一个小数，0.2减慢拖的速度，旋转y轴对应的是x轴的变化,水平方向的值
									roX = roX-0.2*y_;   // 垂直拖，x会发生变化
									$("#wrap-con ").css({
									     'transform':'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
									});
							    })
							  // 鼠标离开后，移除事件
							 }).mouseup(function(){
							       $(document).unbind("mousemove"); // 清除绑定
							       // 每隔30毫秒
								  p =  setInterval(function(){
									   if(Math.abs(x_)<0.2 && Math.abs(y_)<0.2){     // 有惯性了的
									     clearInterval(p); // 清除定时器
									   }
								       x_ = x_*0.95;
									   y_ = y_*0.95;
									   roY = roY + 0.2*x_;
									   roX = roX-0.2*y_;
									   $("#wrap-con ").css({'transform':'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'});
								   },30);
							 });
	 	   //拖拽结束
});

/*主页面的js结束*/




/*
	     e:event事件
	     d:参数，获取滚轮向上滚动还是向下滚动，向下-1，向上1
	     x，y:滚动的一个坐标
	     // 上下滚动
	      if(delta == -1){  // 当delta等于-1，说明鼠标往下滚，那么加一
	 	  	 index++;
	 	  	 $(".nav ul li").eq(index).addClass("hover").siblings("li").removeClass("hover");
	 	  	 $('body,html').animate({'scrollTop':windowHeight*index},1000);   // 页面滚动过的高度
	 	  }else{
	 	  	 index--;  // 当delta向上滚动时，则为1
	 	  	 $('body,html').animate({'scrollTop':windowHeight*index},1000);
	 	  	 $(".nav ul li").eq(index).addClass("hover").siblings("li").removeClass("hover");
	 	  	
	 	  }
	 	  // 结束
	 * */
