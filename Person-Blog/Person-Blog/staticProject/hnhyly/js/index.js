/*��������ѡ��ӵ�������ʼ*/
$(".left .left_list li").hover(function(){
   $(this).find(".case").show(); // ��ʾ.left .left_list li�����.case�ĺ���
   $(this).addClass("hover");// addClass����˼���൱�ڸ�li���class=""hover
},function(){
   $(this).find(".case").hide(); // ����
   $(this).removeClass("hover"); // �Ƴ�li class="hover"
});
/*��������ѡ��ӵ���������*/
/*�ֲ�ͼ��ʼ*/
var _index = 0;  // ���嵱ǰ������Ϊ0,��ȡ��ǰ�ĵ�һ�����кţ�����һ����ʼֵ����ʼ�����к�
var timerPlay = null; // ����һ������Ϊ��
$(".lunbotu .ImgList").eq(0).show().siblings("div").hide();// ��������ʱ���ҵ����к�Ϊ0�ģ�����ͼƬ�ʼ��ʾ�ĵ�һ��ͼƬ��һ�����أ�������ͬ�ȼ���div�������أ�index���ǻ�ȡĬ�������±����˼
$(".lunbotu ul.button li").hover(function(){
	 clearInterval(timePlay); // ��������ȥʱ����ʾ��ǰ������ͼƬ�������ʱ��
	 _index = $(this).index();  // ��ȡ��ǰli�����к�
	 $(this).addClass("hover").siblings().removeClass("hover"); //��ʾ��ť���o��ǰ��Ԫ�����һ��class="hover",��̬�Ļ�ȡ�����ŵ���ť�ǣ����ı���ɫ�����޷��������⣬����״̬�ǣ�����������һ����ťʱ�������ı�ɺ�ɫ��siblings����ͬ�ȼ���li �oremove,addClass("hover")ȥ��
     $(".lunbotu .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();
},function(){
   autoPlay(); // ������뿪ʱ��Ч����������ƿ�ʱ��������ʱ������  
});
function autoPlay(){  // �����Զ��ֲ����� autoPlay�Ǻ�����
	timePlay = setInterval(function(){
	 _index++;  // �Զ����ţ���ô��Ҫ�趨�Զ��Ķ�ʱ��������������ִ��һ�Σ�Ҫ����һ����ʱ��
	 // �����кŽ����ж�
	 if(_index<5){
		 $(".lunbotu ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");// �ı䰴ť����ʽ��eq��ʾ���ڵ�ǰ������кŵģ�����Ƶ���ťʱ�������Զ���һ
         $(".lunbotu .ImgList").eq(_index).fadeIn().siblings("div").fadeOut(); // �ҵ�.lunbotu .ImgList�ҵ�ͬ�������кţ���ͼƬ������ʾ����
      }else{_index = -1;}
	},2000);
};
autoPlay(); // ���ú�ִ�У�ֻ�к����ĵ��ú󣬲���ʵ�֣�ֻ�뺯������ķ���
/*�ֲ�ͼ����*/
/*�ұߵĹ㲥���ֲ�Ч��*/
var _index2 = 0; // ����һ�����кŵı���
var timeInterval = null; // ����һ�������������涨ʱ��������ŵ���ť�����Զ����ŷ�����ͻ������
$("ul.PartScrollbut li").hover(function(){
	clearInterval(timeInterval);  // �����ʱ��
   $(this).addClass("hover").siblings().removeClass("hover"); // ����ǰ�Ǹ���껬��ȥ���һ��li�����һclass="hover"���¼�,�������Ƴ��������������ȥ����ť��ʾ��ɫ������
   _index2 = $(this).index(); // ��ȡ��ǰ�����кţ�index()��һ������                  
   $(".PartImg_Scorll").animate({left:"-"+_index2*245+"px"},1000);                // ͼƬ��ѡ�й�������ͼƬ����λ�õ��ƶ�
   $(".PartScrollTxt li").eq(_index2).show().siblings().hide(); // ���������֣����к���ͬ��li��ʾ������������
},function(){
    autoPlay2();  // ������ƿ�ʱ��������ʱ��
});
// �Զ��ֲ� ���ú�������������Ҫ��������ظ�
function autoPlay2(){
         // ���ö�ʱ����ʵ���Զ��ֲ�
		 timeInterval=setInterval(function(){
		   _index2++; // ���к��������һ
		   if(_index2==4){_index2=-1;}
		   if(_index2==5){_index2=0;} // ������Ϊ5ʱ,Ӧ�ð�����ֵ����Ϊ-1������Ļ�������ִ�е������ţ�Ȼ���ڻص���һ��
		   if(_index2<=4){
		   //_index2++;   // ���кż�1
		   //alert(_index2);
		   $("ul.PartScrollbut li").eq(_index2).addClass("hover").siblings().removeClass("hover");
		   $(".PartImg_Scorll").animate({left:"-"+_index2*245+"px"},1000);
		   $(".PartScrollTxt li").eq(_index2).show().siblings().hide();   
		   }else{_index2=-1;}  // ������ֵ�����жϣ��������5�Ļ����ص�-1������Ϊ1���ص���һ��ͼƬ
		 },1000)
		 
};  // ����ֺŲ�����
autoPlay2();
/*�����Ƽ�ѡ��Ŀ�ʼ*/
$("ul.nav li").mouseover(function(){
   $(this).addClass("hover").siblings().removeClass("hover");  // �ı䰴ť����ʽ
   //$(this).index(); // ��ȡ��ǰ�����кţ���������Ӧ�����кŽ�����ʾѡ�������
   $(".select .select_con").eq($(this).index()).show().siblings().hide(); // eq���ǻ�ȡ����ǰ�����кţ���index()��ͬ����һ�����eq������0����ô���ǻ�ȡ��һ��div,��1�Ļ�����ô��ȡ�Ļ��ǵ�2��div������,�ı�������

});
/*�����Ƽ�ѡ��Ľ���*/
/*ͼƬ���ֻ�����Ч����ʼ**/
$(".select .select_con ul.sel_imgList li").hover(function(){
    $(this).find("p").animate({height:"30px"},200)    // ��200�����ڣ��Ѹ߶ȱ��41px;,�����ţ��ı����ʲô
},function(){
    $(this).find("p").animate({height:"0px"},200)
});
/*ͼƬ���ֻ�����Ч������*/
/*������js���ֿ�ʼ*/
$(".haidaoyou h2 ul li").mouseover(function(){
     $(this).addClass("hover").siblings().removeClass("hover");  // �ı䰴ť����ʽ
	 $(".con .right .select").eq($(this).index()).fadeIn().siblings().fadeOut();
});
/*������js���ֽ���*/
/*ͼƬ���ֻ�����Ч����ʼ*/
$(".right .select ul li").hover(function(){
    $(this).find("p").animate({height:"30px"},200)
},function(){
    $(this).find("p").animate({height:"0px"},200)
});
/*ͼƬ���ֻ�����Ч������*/

/*ʡ�����ο�ʼ*/
$("h2 p.title a").mouseover(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   $(".mid .con").eq($(this).index()).show().siblings().hide();


});
/*ʡ�����ν���*/
/*ͼƬ�������ֿ�ʼ*/
$(".con ul li").hover(function(){
    $(this).find("p").animate({height:"30px"},200)
},function(){
    $(this).find("p").animate({height:"0px"},200)
});
/*ͼƬ�������ֽ���*/
/*�������ο�ʼ*/
$("h2 .title a").mouseover(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    $(".mid_area .con").eq($(this).index()).show().siblings().hide();
});
/*�������ν���*/