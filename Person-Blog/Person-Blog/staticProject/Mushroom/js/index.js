/*
    Ģ���֣���վ��ҳjs��Ч
	���ߣ�����
	ʱ�䣺2015/10/23

*/
/*�����ĵ��������ʾ�����ؿ�ʼ*/
var oValue=$(".Search_box input.txt").val();
$(".Search_box input.txt").focus(function(){
     if($(this).val()==oValue){
          $(this).val("");
	 }
});
$(".Search_box input.txt").blur(function(){
   if($(this).val()==""){
      $(this).val(oValue);
   }
});
/*�����ĵ��������ʾ�����ؽ���*/
/*����������ʾ�������ʷ��¼��ʼ*/


/**����������ʾ�������ʷ��¼����*/
/*�����򵼺���js���ֿ�ʼ*/
var oValue=$(".mainCon .search input.txt").val();
$(".mainCon .search input.txt").focus(function(){
	if($(this).val()==oValue){
       $(this).val("");
	}
});
$(".mainCon .search input.txt").blur(function(){
    if($(this).val()==""){
       $(this).val(oValue)
	}
});
// ������������������������
$(function(){
    $(window).scroll(function(){
	    console.log($(this).scrollTop());
		var top=$(this).scrollTop();
		if(top>=500)
		{
			$("#scrollNav").show();
		}else{
		    $("#scrollNav").hide();
		}
		
	}).trigger("scroll");
});

/*�����򵼺���js���ֽ���*/
/*�Ҳ���������غ���ʾ��ʼ*/

/*�Ҳ���������غ���ʾ����*/
/*bannerͼ����Ŀ�ʼ*/
var _index=0;  // ����һ������_index����ʹ���кŵ�ֵΪ0����ǰһ�ŵ����к�
var _qindex=0;  // ���кŶ�Ӧ��ͼƬ,ǰһ��ͼƬ�����к�
var clearTime = null;  // ����һ������,������ǵĶ�ʱ��������갴����ťʱ�����Զ��ֲ�������ͻ

$(".But span").mouseover(function(){
	clearInterval(clearTime); // �����ʱ���������ϵ���ťʱ����ͣ�Զ����ţ���ʾ��ǰ��Ӧ���кŵ�ͼƬ
   // ����껬����ťʱ����ʾ����ɫ siblings�ҵ�������֮���ͬ�ȼ�span��ǩ��Ԫ��
    _index=$(this).index();// ��ȡ���к�$(this)���������껬�����span��ǩ�����һ�ȡ����һ�����к�
    scrollPlay();  // ���ù����ĺ������������ҹ���,���ò��ŵķ���
   _qindex=_index;  //����ǰ��һ��ͼƬ��������һ�ŵ�ͼƬ��ǰһ��ͼƬ���ѵ�ǰͼƬ�����кŵ�ֵ��Ϊ��һ�ε�ǰһ�����к�
    //alert(_index);
}).mouseout(function(){
   autoPlay(); //������ʱ��
});
/*��ҳ�ֲ���Ч�Ľ���*/
// ���л���ť
$(".middle a.next").click(function(){
    _index++;   // ���кż�1
	if(_index>5){  // �����ť���кŴ���5�Ļ�����ô��ǰ�����к�Ϊ0
	  _index=0;   // ��ǰ��һ�����к�Ϊ0
	  _qindex=5;  // ǰһ�����к�Ϊ5
	}
	scrollPlay();
    _qindex=_index;  // �����ڵ����кŸ�����ǰ��һ�����кţ�ǰһ�����кŵ���������һ���˵� ,����Ҫע����ǰ�Ĭ�ϵ�a�����������ת�����Ե�a��������Ҫôд#Ҫôд���һjavasript:void(0)

});

$(".middle a.pre").click(function(){
    _index--;
	if(_index<0){  // ������к�С��0�Ļ�������ť�����һ�ţ�ͼƬ������
        _qindex=0; // ǰ���һ�����к�Ϊ0
		_index=5;  // ��ǰ����һ�����к�Ϊ5��


	}
	 scrollPlay();
     _qindex=_index;
      
});
autoPlay();// һ��ʼ��ִ�ж���
// �Զ��ֲ�����һ������,ִ�����ҵ�ͼƬ
function autoPlay(){
	// ���ö�ʱ��
	clearTime=setInterval(function(){
	    _index++;
        if(_index>5){  // �����ť���кŴ���5�Ļ�����ô��ǰ�����к�Ϊ0
	   _index=0;   // ��ǰ��һ�����к�Ϊ0
	   _qindex=5;  // ǰһ�����к�Ϊ5
	 }
	 scrollPlay();
     _qindex=_index;  // �����ڵ����кŸ�����ǰ��һ�����кţ�ǰһ�����кŵ���������һ���˵� ,����Ҫ

	 },2000);
}

// ��װһ������������ͬ�Ĵ������װ����
function scrollPlay(){
	$(".But span").eq(_index).addClass("hover").siblings("span").removeClass("hover");//���л���ť����µİ�Ť���Ӧ
	if(_index==0 && _qindex==5){
          $(".scroll img").eq(_qindex).animate({"left":"-715px"},300);
		  $(".scroll img").eq(_index).css("left","715px").animate({"left":"0px"},300);
	}else if(_index==5 && _qindex==0){
	   prev();
	    
	}
	
	  else if(_index>_qindex){  // �����ǰ�ĵ����ť������кŴ���֮ǰ�İ�ť���кţ�������
      //document.title="ǰ"+_qindex+"��"+_index;
      next();     // ���������Ƶķ���
  
   }else if(_index<_qindex){  // �����ǰ�İ�ťʱС��֮ǰ�İ�ť��ͼƬ������
      prev();    // ������ǰ�ƶ��ķ���
    }
}

// ����һ���ƶ���Ҳ���������ƶ������԰����ϵĴ����ڽ��з�װ����װ��һ������
function next(){
    $(".scroll img").eq(_qindex).animate({"left":"-715px"},300);  // ���_qindex=0������ǵ�һ��ͼƬ,�ҵ�������ͼƬ�����Ұ���������820px,��ǰһ��ͼƬ����
    $(".scroll img").eq(_index).css("left","715").animate({"left":"0px"},300); // ��������Ҫ�ҵ�����ͼƬʱ���뵱ǰ���������ͬ�����к�ʱ��Ȼ��������Ƴ���,�ѵ�ǰ��һ��ͼƬ���Ƴ���,���Ҳ��һ������һ����ʽ����֤ͼƬ���ұ߳���
  

};
// ��һ�ţ�����
function prev(){
   $(".scroll img").eq(_qindex).animate({"left":"715px"},300);   // ͼƬ�����ƣ�ǰһ�ŵ�ͼƬ������
   $(".scroll img").eq(_index).css("left","-715px").animate({"left":"0px"},300);     // �����ƶ�֮ǰ��Ҫȷ��һ���Ƿ�����ߣ��������ǰ����CSS��ʽ����һ�£���֤ͼƬʱ����߳�����
}
// ��ť����ʾ����
$(".middle").hover(function(){
	 //������ȥʱ��ʾ���ҵİ�ť
	 $("a.prev,a.next").show();
},function(){
      // ����ƿ�ʱ�������ҵİ�ť
	  $("a.prev,a.next").hide();
});


/*bannerͼ����Ľ���*/
