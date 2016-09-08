/*触发热门选项，子导航栏开始*/
$(".left .left_list li").hover(function(){
   $(this).find(".case").show(); // 显示.left .left_list li下面的.case的盒子
   $(this).addClass("hover");// addClass的意思是相当于给li添加class=""hover
},function(){
   $(this).find(".case").hide(); // 隐藏
   $(this).removeClass("hover"); // 移除li class="hover"
});
/*触发热门选项，子导航栏结束*/
/*轮播图开始*/
var _index = 0;  // 定义当前的索引为0,获取当前的第一个序列号，声明一个初始值，初始化序列号
var timerPlay = null; // 声明一个变量为空
$(".lunbotu .ImgList").eq(0).show().siblings("div").hide();// 当进来的时候，找到序列号为0的，那张图片最开始显示的第一张图片第一张隐藏，把其他同等级的div进行隐藏，index就是获取默认索引下标的意思
$(".lunbotu ul.button li").hover(function(){
	 clearInterval(timePlay); // 当鼠标放上去时，显示当前索引的图片，清除定时器
	 _index = $(this).index();  // 获取当前li的序列号
	 $(this).addClass("hover").siblings().removeClass("hover"); //显示按钮，給当前的元素添加一个class="hover",动态的获取，鼠标放到按钮是，便会改变颜色但是无法做到互斥，理想状态是：当鼠标点另外一个按钮时，其他的变成黑色，siblings把它同等级的li 給remove,addClass("hover")去掉
     $(".lunbotu .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();
},function(){
   autoPlay(); // 当鼠标离开时的效果，当鼠标移开时，启动定时播放器  
});
function autoPlay(){  // 构建自动轮播函数 autoPlay是函数名
	timePlay = setInterval(function(){
	 _index++;  // 自动播放，那么就要设定自动的定时播放器，隔多少执行一次，要声明一个定时器
	 // 对序列号进行判断
	 if(_index<5){
		 $(".lunbotu ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");// 改变按钮的样式，eq表示等于当前这个序列号的，鼠标移到按钮时，索引自动加一
         $(".lunbotu .ImgList").eq(_index).fadeIn().siblings("div").fadeOut(); // 找到.lunbotu .ImgList找到同样的序列号，把图片进行显示出来
      }else{_index = -1;}
	},2000);
};
autoPlay(); // 调用和执行，只有函数的调用后，才能实现，只想函数里面的方法
/*轮播图结束*/
/*右边的广播的轮播效果*/
var _index2 = 0; // 声明一个序列号的变量
var timeInterval = null; // 定义一个变量用来保存定时，解决鼠标放到按钮上与自动播放发生冲突的问题
$("ul.PartScrollbut li").hover(function(){
	clearInterval(timeInterval);  // 清除定时器
   $(this).addClass("hover").siblings().removeClass("hover"); // 给当前那个鼠标滑上去添加一个li，添加一class="hover"的事件,其他的移除，解决了鼠标放上去，按钮显示颜色的问题
   _index2 = $(this).index(); // 获取当前的序列号，index()是一个方法                  
   $(".PartImg_Scorll").animate({left:"-"+_index2*245+"px"},1000);                // 图片的选中滚动，对图片进行位置的移动
   $(".PartScrollTxt li").eq(_index2).show().siblings().hide(); // 滚动的文字，序列号相同的li显示，其他的隐藏
},function(){
    autoPlay2();  // 当鼠标移开时，启动定时器
});
// 自动轮播 设置函数，函数名不要与上面的重复
function autoPlay2(){
         // 设置定时器，实现自动轮播
		 timeInterval=setInterval(function(){
		   _index2++; // 序列号在外面加一
		   if(_index2==4){_index2=-1;}
		   if(_index2==5){_index2=0;} // 当索引为5时,应该把索引值设置为-1，否则的话，他会执行到第六张，然后在回到第一张
		   if(_index2<=4){
		   //_index2++;   // 序列号加1
		   //alert(_index2);
		   $("ul.PartScrollbut li").eq(_index2).addClass("hover").siblings().removeClass("hover");
		   $(".PartImg_Scorll").animate({left:"-"+_index2*245+"px"},1000);
		   $(".PartScrollTxt li").eq(_index2).show().siblings().hide();   
		   }else{_index2=-1;}  // 对索引值进行判断，如果大于5的话，回到-1，索引为1，回到第一章图片
		 },1000)
		 
};  // 这个分号不能少
autoPlay2();
/*热门推荐选项卡的开始*/
$("ul.nav li").mouseover(function(){
   $(this).addClass("hover").siblings().removeClass("hover");  // 改变按钮的样式
   //$(this).index(); // 获取当前的序列号，根据它对应的序列号进行显示选项卡的内容
   $(".select .select_con").eq($(this).index()).show().siblings().hide(); // eq就是获取到当前的序列号，与index()相同的那一个如果eq里面是0，那么就是获取第一个div,是1的话，那么获取的话是第2个div，内容,改变内容区

});
/*热门推荐选项卡的结束*/
/*图片文字滑动的效果开始**/
$(".select .select_con ul.sel_imgList li").hover(function(){
    $(this).find("p").animate({height:"30px"},200)    // 在200毫秒内，把高度变成41px;,大括号，改变的是什么
},function(){
    $(this).find("p").animate({height:"0px"},200)
});
/*图片文字滑动的效果结束*/
/*海岛游js部分开始*/
$(".haidaoyou h2 ul li").mouseover(function(){
     $(this).addClass("hover").siblings().removeClass("hover");  // 改变按钮的样式
	 $(".con .right .select").eq($(this).index()).fadeIn().siblings().fadeOut();
});
/*海岛游js部分结束*/
/*图片文字滑动的效果开始*/
$(".right .select ul li").hover(function(){
    $(this).find("p").animate({height:"30px"},200)
},function(){
    $(this).find("p").animate({height:"0px"},200)
});
/*图片文字滑动的效果结束*/

/*省内旅游开始*/
$("h2 p.title a").mouseover(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   $(".mid .con").eq($(this).index()).show().siblings().hide();


});
/*省内旅游结束*/
/*图片滚动文字开始*/
$(".con ul li").hover(function(){
    $(this).find("p").animate({height:"30px"},200)
},function(){
    $(this).find("p").animate({height:"0px"},200)
});
/*图片滚动文字结束*/
/*国内旅游开始*/
$("h2 .title a").mouseover(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    $(".mid_area .con").eq($(this).index()).show().siblings().hide();
});
/*国内旅游结束*/