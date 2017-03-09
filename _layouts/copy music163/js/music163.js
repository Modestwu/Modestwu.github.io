
/*点击登录出现下拉菜单*/

var logChoose = document.getElementById('loadchoose'),
	inList = document.getElementById('loadchoose').getElementsByTagName('div')[0];
	var timerlog = null;
	logChoose.onmouseover = function(){
		
		clearInterval(timerlog);
		inList.style.display = 'block';
	}
	inList.onmouseover = function(){
		// clearInterval(timerlog);
		// inList.style.display = 'block';
	}
	logChoose.onmouseout= function(){
		timerlog = setInterval(function(){
			inList.style.display = 'none';
		},100)
		
	}




/*轮播图*/
var autoBan = document.getElementById('index-ban'),
	 autoImg = document.getElementById('ban-pic'),
	 dots = autoBan.getElementsByTagName('li'),
	 prev = document.getElementById('ban-pr'),
	 next = document.getElementById('ban-ne');

var arr = ['image/banner/banner1.jpg','image/banner/banner2.jpg','image/banner/banner3.jpg','image/banner/banner4.jpg','image/banner/banner5.jpg'],
	arrBg = ['#838383','#fafcfb','#7c8d95','#e50126','#e2e2e2']
	num = 0,
	len =  arr.length;

function fnTab() {
	autoImg.src = arr[num];
	for( var i = 0; i < len; i++){
		dots[i].className =''
	}
	dots[num].className = 'active';
	autoBan.style.backgroundColor = arrBg[num];
	autoBan.style.opacity = 100;

}
fnTab() ;

prev.onclick = function(){
	num --;
	if(num<0){
		num = len - 1; 
	}
	fnTab();
}

next.onclick = function(){
	num ++;
	if(num > len-1){
		num = 0;
	}
	fnTab();
}

var timer = null;
function play(){
	clearInterval(timer);
	timer = setInterval(function(){
	
		num++;
		// if(num==len){
		// 	num=0;
		// }
		num %= len;
		fnTab();
	},3000);
}
play();

autoBan.onmouseover = function(){
	clearInterval(timer);

}

autoBan.onmouseout = function(){

	play();
}

/*点击圆点，转到对应图片*/
for(var i = 0; i <len; i++){
	dots[i].index = i ;
	dots[i].onclick= function(){
		for(var j = 0; j < len; j++){
			dots[j].className = '';
		}
		this.className = 'active';
		autoImg.src = arr[this.index];
		autoBan.style.background = arrBg[this.index];

	}
}


/*榜单鼠标触碰ol区域，出现播放、收藏、添加按钮*/

var topList = document.getElementById('mu-top'),
	top_li = topList.getElementsByTagName('li'),
	open =null,
	span = null;
	li_color = ['#e8e8e8', '#f5f4f4'],
	liLen = top_li.length;

	for(var i = 0; i < liLen; i++){
 top_li[i].onmouseover = function(){
		open = this.getElementsByTagName('div')[0];
 	
 	open.style.display = 'block';
 }
 top_li[i].onmouseout = function(){
		open = this.getElementsByTagName('div')[0];
 	
 	open.style.display = 'none';
 }
 }

 /*榜单 li的颜色*/
 for(var j = 0; j < liLen; j++){
 	open = top_li[j].getElementsByTagName('div')[0];
 	span = top_li[j].getElementsByTagName('span')[0];
 	if(j % 2 ==0){
 		top_li[j].style.backgroundColor = li_color[j % 2 ];
 		open.style.backgroundColor = li_color[j % 2 ];
 		span.style.backgroundColor = li_color[j % 2 ];
 	}else{
 		top_li[j].style.backgroundColor = li_color[j % 2 ];
 	}
 }

