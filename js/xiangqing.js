//左侧导航效果
$('.smallnav .first').hover(function(){
	$('.left-nav').css('display','block');
},function(){
})

$('.left-nav').hover(function(){
},function(){
	$('.left-nav').css('display','none')
})



//放大镜效果
var small=document.querySelector('.smallbox');
var big=document.querySelector('.bigbox');
var blue=document.querySelector('.blue');
var bigimg=document.querySelector('.big_img');
var ffa=document.querySelector('.fangfain');
		
		
$('.smallbox').hover(function(){
	$('.blue').css('display','block');
	$('.bigbox').css('display','block');
},function(){
	$('.blue').css('display','none');
	$('.bigbox').css('display','none');
})


small.onmousemove=function(ev){
	var ev=ev||event;
	var x=ev.pageX-small.offsetLeft-ffa.offsetLeft-blue.offsetWidth/2;
	var y=ev.pageY-small.offsetTop-ffa.offsetTop-blue.offsetHeight/2;
	
	if(x<0){
		x=0;
	}
	if(x>small.offsetWidth-blue.offsetWidth){
		x=small.offsetWidth-blue.offsetWidth;
	}
	if(y<0){
		y=0;
	}
	if(y>small.offsetHeight-blue.offsetHeight){
		y=small.offsetHeight-blue.offsetHeight;
	}
	
	var biliX=x/small.offsetWidth;
	var biliY=y/small.offsetHeight;
			
	blue.style.left=x+'px';
	blue.style.top=y+'px';
		
	var imgX= -biliX*bigimg.offsetWidth;
	var imgY= -biliY*bigimg.offsetHeight;
			
	bigimg.style.left=imgX+'px';
	bigimg.style.top=imgY+'px';	
}


//微信图标效果
$('.weixintubiao').hover(function(){
	$('.weixintbbox').css('display','block')
},function(){
	$('.weixintbbox').css('display','none')
})

$('.fenxiang').hover(function(){
	$('.fenxiangbox').css('display','block')
},function(){
	$('.fenxiangbox').css('display','none')
})


//手机下单效果
$('.shoujixiadan a').hover(function(){
	$('.befor').css('display','none');
	$('.after').css('display','block');
	$('.bigerweima').css('display','block');
},function(){
	$('.befor').css('display','block');
	$('.after').css('display','none');
	$('.bigerweima').css('display','none');
})



//吸顶效果
var t=$('.shangpinjieshaobox').offset().top;
$(document).scroll(function(){
	var m=$(document).scrollTop();
	if(m>t){
		$('.xidingbox').addClass('fix');
	}else{
		$('.xidingbox').removeClass('fix');
	}
})






