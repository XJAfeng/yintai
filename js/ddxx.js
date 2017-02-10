$('#foot').load('fthtml.html');
$('#top').load('gwlink.html');




//三角形旋转效果
var flag=true;
$('.yhq_xz').click(function(){
	if(flag){
		$(this).find('.yhq_sjx').addClass('yhq_xuanzhuan');
		$(this).parents('.yhq2').siblings('.yhq2box').slideDown(800).css({
			height:'72px',
			display:'block'
		})
		$(this).parents('.yhq3').siblings('.yhq3box').slideDown(800).css({
			height:'85px',
			display:'block'
		})
		$(this).parents('.yhq4').siblings('.yhq4box').slideDown(800).css({
			height:'124px',
			display:'block'
		})
		flag=false;
	}else{
		$(this).find('.yhq_sjx').removeClass('yhq_xuanzhuan');
		$(this).parents('.yhq2').siblings('.yhq2box').slideUp(800).css({
			height:'72px',
			display:'block'
		})
		$(this).parents('.yhq3').siblings('.yhq3box').slideUp(800).css({
			height:'85px',
			display:'block'
		})
		$(this).parents('.yhq4').siblings('.yhq4box').slideUp(800).css({
			height:'124px',
			display:'block'
		})
		$(this).next().slideUp()
		flag=true;
	}
})



//鼠标经过按钮背景变
$('.yhqbt-rt button,.box3top button,.yhqtoplt .J-UseJiFen2').hover(function(){
	$(this).css('background-position','0 -535px')
	$('.box3top button').css('background-position','0 -528px')
	$('.yhqtoplt .J-UseJiFen2').css('background-position','0 -528px')
},function(){
	$(this).css('background-position','0 -347px')
})


$('.paybottom .paybtmlt').hover(function(){
	$('.paybtmlt').css('background-position','0 -430px')
},function(){
	$('.paybtmlt').css('background-position','0 -301px')
})

$('.paybottom .paybtmrt').hover(function(){
	$(this).css('background-position','-147px -43px')
},function(){
	$(this).css('background-position',' 0px -43px')
})


















