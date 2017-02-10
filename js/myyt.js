$('#top').load('yingru.html');
$('#foot').load('fthtml.html');

//左侧导航效果
$(' .leftnav .myytin').click(function(){
	$(this).find('a').css('background-position','0 70%').end().siblings('.myytin').find('a').css('background-position','0 49%');
	$('.yincangbox').css('display','none').eq($(this).index('.yincangbox')).css('display','block');
	$('.xiaoshi').css('display','none').eq($(this).index('.myytin')).css('display','block');
	$(this).next('.yincangbox').slideDown(1000).siblings('.yincangbox').slideUp();
})

//子菜单效果
$('.yincangbox ul .th').click(function(){
	$(this).css('color','#E5004F');
	$('.tuihuanhuo').css('display','block');
	$('.dindanzhongxin').css('display','none');
})

$('.yincangbox ul .dd').click(function(){
	$('.dindanzhongxin').css('display','block');
	$('.tuihuanhuo').css('display','none')
})

$('.yincangbox ul .zx').click(function(){
	$(this).css('color','#E5004F');
	$('.gg').css('color','#333');
	$('.zixunbox').css('display','block');
	$('.gonggao').css('display','none')
})

$('.yincangbox ul .gg').click(function(){
	$(this).css('color','#E5004F');
	$('.zx').css('color','#333333');
	$('.zixunbox').css('display','none');
	$('.gonggao').css('display','block')
})


$('.yihuifu').click(function(){
	$(this).css({
		borderBottom: '1px solid white'
	})
	$('.yihuifubox').css('display','block');
	$('.weihuifubox').css({
		display:'none',
		borderBottom: '1px solid #e1e1e1'
	});
})

$('.weihuifu').click(function(){
	$(this).css({
		borderBottom: '1px solid white'
	})
	$('.weihuifubox').css('display','block');
	$('.yihuifubox').css({
		display:'none',
		borderBottom: '1px solid #e1e1e1'
	});
})

$('.yincan3 .jb').click(function(){
	$('.gerenbox').css('display','none');
	$('.shouhuobox').css('display','none')
	$('.xiugaimima').css('display','none')
	$('.yanzhenbox').css('display','none')
	$('.zhifubox').css('display','none')
	$('.xinxibox').css('display','none')
	$('.jiben').css('display','none').eq($(this).index()).css('display','block');
	
})


$('.gerenbox').click(function(){
	$('.xiugaimima').css('display','none')
	$('.jiben').css('display','none');
	$('.yanzhenbox').css('display','none')
	$('.zhifubox').css('display','none')
	$('.xinxibox').css('display','none')
	$(this).css('display','block').eq($(this).index()).css('display','none');
	
})

$('.yincan3 .drass').click(function(){
	$('.gerenbox').css('display','none');
	$('.jiben').css('display','none');
	$('.xiugaimima').css('display','none')
	$('.yanzhenbox').css('display','none')
	$('.zhifubox').css('display','none')
	$('.xinxibox').css('display','none')
	$('.shouhuobox').css('display','block').eq($(this).index()).css('display','none');
	
})

$('.yincan3 .pass').click(function(){
	$('.gerenbox').css('display','none');
	$('.jiben').css('display','none');
	$('.shouhuobox').css('display','none')
	$('.yanzhenbox').css('display','none')
	$('.zhifubox').css('display','none')
	$('.xinxibox').css('display','none')
	$('.xiugaimima').css('display','block')
})

$('.yincan3 .phone').click(function(){
	$('.gerenbox').css('display','none');
	$('.jiben').css('display','none');
	$('.shouhuobox').css('display','none')
	$('.xiugaimima').css('display','none')
	$('.zhifubox').css('display','none')
	$('.xinxibox').css('display','none')
	$('.yanzhenbox').css('display','block')
})

$('.yincan3 .zhifu').click(function(){
	$('.gerenbox').css('display','none');
	$('.jiben').css('display','none');
	$('.shouhuobox').css('display','none');
	$('.xiugaimima').css('display','none');
	$('.yanzhenbox').css('display','none')
	$('.xinxibox').css('display','none')
	$('.zhifubox').css('display','block');
})

$('.yincan3 .bank').click(function(){
	$('.gerenbox').css('display','none');
	$('.jiben').css('display','none');
	$('.shouhuobox').css('display','none');
	$('.xiugaimima').css('display','none');
	$('.yanzhenbox').css('display','none')
	$('.zhifubox').css('display','none');
	$('.xinxibox').css('display','block')
})

$('.leftnav .mycar2').click(function(){
	$('.ytkabox2').css('display','block');
	$('.yincan3').css('display','none')
	$('.jiben').css('display','none')
	$('#content').css('height','923px')
	$('.contentbanxin').css('height','920px')
	$('.main').css('height','867px')
})


$('.wbd').click(function(){
	$('.ytkabox2').css('display','none');
	$('.bdbox2 .yihuifubox').css('display','block')
})































