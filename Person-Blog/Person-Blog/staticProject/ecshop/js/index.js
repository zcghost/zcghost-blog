           /*
		        ���ߣ�����
                ʱ�䣺2015-10-1��
                ��ҳ��������ecshop��վ��ҳjs����
		   
		   */
		   /*������ڣ������ʱ��������ʧ���ƿ�ʱ�����ָֻ�*/
		   var d_Value = $(".search_case input.txt").val();
		   $(".search_case input.txt").focus(function(){
		       if($(this).val()==d_Value){  // focus��ʾ���㣬this��ͬ��$(".search_case input.txt")
                    $(this).val("");        // �����ǰ��ֵ���ڵ�ǰ������ֵʱ����������ֵ����Ϊ��
			   }	 
		   });
		   // ʧȥ����ʱ��������ƿ�ʱ
		   $(".search input.txt").blur(function(){
		       if($(this).val()==""){  // ����������ƿ�ʱ��Ϊ��ʱ�����������ʼֵ
			      $(this).val(d_Value);
			   }
		   });
		   /*������ڵ�������ȥ�������أ��ƿ�ʱ��������ڵ�������ʾ����*/
		   /*����������Ʒʱ����ʾ�����˵���ʼ*/
		   $("#nav .nav_box .left_nav").hover(function(){
		          $(this).find(".all_box").slideDown("slow");
		    },function(){
			      $(this).find(".all_box").slideUp("slow");
			});
		   /*����������Ʒʱ����ʾ�����˵�����*/
		   /*��꾭�����ﳵʱ����ʾ�������ʾ��ʼ*/
		    $(".right_nav").hover(function(){
			    $(this).find(".buycar_box").stop(true).slideDown("slow");
			},function(){
			    $(this).find(".buycar_box").stop(true).slideUp("slow");
			});
		    /*��꾭�����ﳵʱ����ʾ�������ʾ�����*/
			/*����ֲ���ʵ�ֿ�ʼ*/
			var _index=0;  // ����li�����кţ�Ĭ�ϳ�ʼΪ0
			var timePlay=null;  // ����һ����ʱ����ʱ�䲥�ŵĶ�ʱ�����ʼ�ǿյ�
			$("#Adv .ImgList").eq(0).show().siblings("div").hide(); //һ��������ʾ��һ�ŵ���Ƭ
			$("ul.button li").hover(function(){
			   // ��껬������
			clearInterval(timePlay);  // �����ʱ���������ŵ���ťʱ�������Զ����ֲ���Ȼ������ƿ�ʱ��������ʱ��
            _index=$(this).index(); // ��ȡ��ǰli���к�
            $(this).addClass("hover").siblings().removeClass("hover"); // ��ťѡ�е���ɫ������ȥ��ʾ��Ӧ��Hover,�ƿ�ʱ����ɫ��ʧ��ͬ�ȼ�������,��ʾ��ť
			$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();     //eq()��������ҵ�li�����к��뵱ǰ���ݶ�Ӧ��ImgList����Ƭ,����Ҫע�����ҵ��뵱ǰdivͬ�ȼ���Ԫ�أ������дdiv���ͻ�����⣬�����ť�ǣ���ťҲ�����أ���Ϊul ��divҲ��ͬ�ȼ���Ԫ�أ���ʾͼƬ

			},function(){
			   //����ƿ�ʱ
			    autoPlay();   // ������ƿ�ʱ����������������
			});
			// �Զ��ֲ�
			function autoPlay(){  // ����һ�Զ��ֲ��ĺ���
			   //alert("sss");
			   // ���ö�ʱ��
			 timePlay=setInterval(function(){
				 if(_index<6){
				    _index++;
			        $("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");    //��ť�Զ���ʵ���л� ��1000sִ��һ���������
			        $("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();
				 }else{_index=-1;}   // ע������Ҫ��ֵΪ-1.�Զ��ֲ����ǵ�һ��ͼƬ_index++�ͻ���1���������ŵ�һ��
			   },2000);
			   
			}; // һ��Ҫ�ӷֺ�
			autoPlay();   // ���ú�ִ�к���
			/*����ֲ���ʵ�ֽ���*/