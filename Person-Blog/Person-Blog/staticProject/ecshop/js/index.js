           /*
		        作者：王震川
                时间：2015-10-1日
                网页：描述：ecshop网站首页js代码
		   
		   */
		   /*输入框内，鼠标点击时，文字消失，移开时，文字恢复*/
		   var d_Value = $(".search_case input.txt").val();
		   $(".search_case input.txt").focus(function(){
		       if($(this).val()==d_Value){  // focus表示焦点，this等同于$(".search_case input.txt")
                    $(this).val("");        // 如果当前的值等于当前变量的值时，则输入框的值设置为空
			   }	 
		   });
		   // 失去焦点时，当鼠标移开时
		   $(".search input.txt").blur(function(){
		       if($(this).val()==""){  // 如果当焦点移开时，为空时，则给他赋初始值
			      $(this).val(d_Value);
			   }
		   });
		   /*输入框内的鼠标点上去文字隐藏，移开时，输入框内的文字显示结束*/
		   /*触发所有商品时，显示二级菜单开始*/
		   $("#nav .nav_box .left_nav").hover(function(){
		          $(this).find(".all_box").slideDown("slow");
		    },function(){
			      $(this).find(".all_box").slideUp("slow");
			});
		   /*触发所有商品时，显示二级菜单结束*/
		   /*鼠标经过购物车时，显示下面的显示框开始*/
		    $(".right_nav").hover(function(){
			    $(this).find(".buycar_box").stop(true).slideDown("slow");
			},function(){
			    $(this).find(".buycar_box").stop(true).slideUp("slow");
			});
		    /*鼠标经过购物车时，显示下面的显示框结束*/
			/*广告轮播的实现开始*/
			var _index=0;  // 定义li的序列号，默认初始为0
			var timePlay=null;  // 声明一个定时器按时间播放的定时器，最开始是空的
			$("#Adv .ImgList").eq(0).show().siblings("div").hide(); //一进来，显示第一张的照片
			$("ul.button li").hover(function(){
			   // 鼠标滑到上面
			clearInterval(timePlay);  // 清除定时器，当鼠标放到按钮时，不能自动的轮播，然后当鼠标移开时，启动定时器
            _index=$(this).index(); // 获取当前li序列号
            $(this).addClass("hover").siblings().removeClass("hover"); // 按钮选中的颜色，放上去显示对应的Hover,移开时，颜色消失，同等级的消除,显示按钮
			$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();     //eq()代表的是找到li的序列号与当前内容对应的ImgList的照片,这里要注意是找到与当前div同等级的元素，如果不写div，就会出问题，点击按钮是，按钮也会隐藏，因为ul 和div也是同等级的元素，显示图片

			},function(){
			   //鼠标移开时
			    autoPlay();   // 当鼠标移开时，调用启动播放器
			});
			// 自动轮播
			function autoPlay(){  // 构建一自动轮播的函数
			   //alert("sss");
			   // 设置定时器
			 timePlay=setInterval(function(){
				 if(_index<6){
				    _index++;
			        $("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");    //按钮自动的实现切换 隔1000s执行一下这个弹窗
			        $("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();
				 }else{_index=-1;}   // 注意这里要赋值为-1.自动轮播的是第一张图片_index++就会变成1，调到播放第一张
			   },2000);
			   
			}; // 一定要加分号
			autoPlay();   // 调用和执行函数
			/*广告轮播的实现结束*/