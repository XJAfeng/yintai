$('#foot').load('fthtml.html');
$('#top').load('gwlink.html')


//吸顶效果
var t=$('.jsxd-in').offset().top;
$(document).scroll(function(){
	var m=$(document).scrollTop();
//	alert()
			if(m<=100){
				$('.jsxd-in').addClass('fix2');
				
			}else{
				$('.jsxd-in').removeClass('fix2')
				
			}

})


//鼠标经过

$('.jsbtn').hover(function(){
	$(this).css('background-position','-147px 0')
},function(){
	$(this).css('background-position','0 0')
})

$('.liulanlist .lclist').hover(function(){
	$('.lclist').css('background-color','#F2F2F2').eq($(this).index()).css('background-color','#E1E1E1')
//	$(this).children('.ii').css('display','none').eq($(this).index()).css('display','block')
	$('.liulannev .llnav').css('display','none').eq($(this).index()).css('display','block')
})

$('.join .joinbox').hover(function(){
	$(this).css('background-position','0 -435px');
},function(){
	$(this).css('background-position','0 -304px')
//	$('.liulannev .llnav').css('display','none').eq($(this).index()).css('display','none')
})


$('.jsbtn').click(function(){
	$('.gwcbox').css('display','none')
	$('.ddxxbox').css('display','block')
})

































