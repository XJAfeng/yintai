$('#top').load('splblink.html');
$('#foot').load('fthtml.html');


//按钮背景颜色
$('.c-lbt').hover(function(){
	$(this).css('background-position','0 -444px')
},function(){
	$(this).css('background-position','0 -305px')
})

//吸顶效果
//var t=$('.fixbox').offset().top;
$(document).scroll(function(){
	var m=$(document).scrollTop();
	if(m>930){
		$('.fixbox').addClass('fix');
	}else{
		$('.fixbox').removeClass('fix');
	}
})

//勾选效果
$('.fdli1 div i').hover(function(){
	$(this).css('background-position','-13px 3px')
},function(){
	$(this).css('background-position','0px 3px')
})

$('.smlt').hover(function(){
	$(this).css('background-position','-15px 0px')
},function(){
	$(this).css('background-position','0px 0px')
})

$('.smrt').hover(function(){
	$(this).css('background-position','15px 0px')
},function(){
	$(this).css('background-position','0px 0px')
})


$('.splbsm').hover(function(){
	$(this).css('border-color','#E5004F')
},function(){
	$(this).css('border-color','#f4f4f4')
})

$('.splbsm').hover(function(){
	$(this).css({
		boxShadow:'0 4px 4px #ddd',
		zIndex:4
	})
	$(this).children('.blockbox').css('display','block')
	
},function(){
	$(this).css({
		boxShadow:'',
		zIndex:1
	})
	$(this).children('.blockbox').css('display','none')
})





