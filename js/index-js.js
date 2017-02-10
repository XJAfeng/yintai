var 	box=document.querySelector('#banner .nav')

		//轮播效果
		var arr=['url(img/1_.jpg)','url(img/5_.jpg)','url(img/3-3.jpg)'];
		var timer=setInterval(fun,2000);
		var num=0;
		function fun(){
			box.style.backgroundImage=arr[num];
			num++;
			if(num>=3){
				num=0;
			}
			
			$('.nav img').css('display','none').eq(num-1).css('display','block');
			$('.btnbox .btn').css('background','black').eq(num-1).css('background','deeppink');
		}
		
		$('#banner .nav').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(fun,2000);
		})
		
		$('.btn').hover(function(){
			clearInterval(timer);
			$('.btnbox .btn').css('background','black').eq($(this).index()-3).css('background','deeppink');
			$('.nav img').css('display','none').eq($(this).index()-3).css('display','block');
			$('#banner .nav').css('background',arr[$(this).index()]);
			console.log(arr[$(this).index()])
		},function(){
			$('.btnbox .btn').css('background','').eq($(this).index()-3).css('background','black');
			$('.nav img').css('display','block').eq($(this).index()-3).css('display','none');
			
		})
		

		//鼠标经过效果
		$('.huodong-title li').hover(function(){
			$('.huodong-boxin .huodong_i').css('display','none').eq($(this).index()).css('display','block');
			$('.huodong-title li').css('border-bottom','').eq($(this).index()).css('border-bottom','5px solid #E5004F');
			$('.huodong-title .titlein').css('display','none').eq($(this).index()).css('display','block')
			
		},function(){
			
		})
		
		//边框动画效果
			$(".donghua>div").mouseenter(one).append("<div class='border-top'></div><div class='border-left'></div><div class='border-right'></div><div class='border-bottom'></div>");
			$(".donghua>div").mouseleave(two)
					function one(){
						$(this).find('.border-bottom').width('100%')
						$(this).find('.border-top').width('100%')
						$(this).find('.border-left').height('100%')
						$(this).find('.border-right').height('100%')
					}
					function two(){
						$(this).find('.border-top,.border-bottom').width('0')
					
						$(this).find('.border-left,.border-right').height('0')
					}
		
		
		//鼠标经过--专柜
		$('.rlbox_title>li').hover(function(){
			$('.rlbox_title>li').css('border-bottom','none').eq($(this).index()).css('border-bottom','3px solid #E5004F');
			$('.rlbox_title li .titlein').css('display','none').eq($(this).index()).css('display','table-caption');
			$('.rlbox_in').css('display','none').eq($(this).index()).css('display','block');
		},function(){
			
		})
		
		//无缝轮播
		var w=$('.first1').width();
		var myL=0;
		var son=$('.first1').clone();
		$('.movenav').append(son);
		$('.btn1').click(function(){
			myL-=w;
			var index=$(this).index(".btn1");
			if(!$('.movenav').is(':animated')){
				if(myL<0){
					myL= 340;
					$('.movenav').eq(index).css({left:-myL+170+"px"})
				}
				$('.movenav').eq(index).animate({
					left:-myL+"px"
				},500)
			}
		})
		
		$(".btn2").click(function(){
			var index=$(this).index(".btn2");
			if(!$('.movenav').is(':animated')){
				num++;
				if(num>=3){
					myL=170;
					$('.movenav').eq(index).css({left:-myL+170+'px'});
				}
				$('.movenav').eq(index).animate({
					left:-myL+'px'
				},500)
				
			}
		})
		
		//方图轮播
		var n=0;
		$('.bigright').click(function(){
			n++;
			if(n>=1){
			    n=1;
			}
			$(this).prev().prev().css('display','none').eq(n).css('display','block');
			$(this).siblings('.dianjibox').find(".dianji").css('background','#323333').eq(n).css('background','#E5004F');
		})
		$('.bigleft').click(function(){
			n--;
			if(n<0){
				n=0;
			}
			$(this).prev().css('display','none').eq(n).css('display','block');
			$(this).siblings('.dianjibox').find(".dianji").css('background','#323333').eq(n).css('background','#E5004F')
			
		})
		
		
		//楼层效果
		$(document).scroll(function(){
			var a=$('body').scrollTop();
			if(a>500){
				$('.right_fixed').show(800);
			}else{
				$('.right_fixed').hide(800);
			}
		})
		
		$('.lcbtn').click(function(){
			var index=$(this).index('.lcbtn');
			var mtops=$('.shishang').eq(index).offset().top;
			$('html,body').animate({
				scrollTop:mtops
			})
		})
		
		$('.dingbu').click(function(){
			$('body,html').animate({
				scrollTop:'0px'
			})
		})
		
		$(document).scroll(function(){
			var tops=$(this).scrollTop();
			$('.shishang').each(function(i,obj){
				var btop=$(obj).offset().top-430;
				if(tops>=btop){
					$('.first').removeClass('span1').eq(i).addClass('span1')
				}
			})
		})
		




