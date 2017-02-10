$('#foot').load('fthtml.html');
$('#top').load('gwlink.html');


//鼠标经过背景变色
$('.c-lbtn').hover(function(){
	$(this).css('background-position','0 -432px')
},function(){
	$(this).css('background-position','0 -252px')
})


$('.c-btn-big-right').hover(function(){
	$(this).css('background-position','0 36px')
},function(){
	$(this).css('background-position','0 0')
})