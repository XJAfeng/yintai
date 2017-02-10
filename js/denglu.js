//点击列表效果
$('.list li').click(function(){
	$('.list li').css('border-bottom-color','white').eq($(this).index()).css('border-bottom-color','#e5004f');
	$('.list li a').css('color','#999').eq($(this).index()).css('color','#333');
	$('.huzhaobox').css('display','none').eq($(this).index()).css('display','block');
})

//二维码效果
$('.erweimabox').hover(function(){
	$('.erweima').css({
		transform:" translateX(-70px)"
	});
	$('.shouji').css('opacity','1')},function(){
	$('.erweima').css({
		transform:" translateX(0px)"
		});
	$('.shouji').css('opacity','0');
})
