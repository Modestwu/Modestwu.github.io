/*遍历生成菜单列表*/
var m_menu = document.getElementById('m_menu'),
	m_ul = m_menu.getElementsByTagName('ul')[0],
	
	str ='',
	m_arr = [['上衣','春上新','套装','卫衣'],
			 ['裙子','初春新品','连衣裙','美裙套装'],
			 ['裤子','打底裤','小脚裤','牛仔裤'],
			 ['内衣','热销榜','睡衣套装','内裤'],
			 ['女鞋','单鞋','运动鞋','小白鞋'],
			 ['男友','初春外套','牛仔裤','应季内搭'],
			 ['包包','单肩包','女包','男包'],
			 ['运动','运动卫衣','运动鞋','人气套装'],
			 ['美妆','补水保湿','面膜','BB霜'],
			 ['配饰','耳环新品','手表','墨镜'],
			 ['家居','新品','四件套','小家具'],
			 ['母婴','初春新品','童装','孕妇装'],
			 ['食品','休闲食品','进口食品','肉类'],
			 ['电器','手机','小家电','手机配件']];

	for(var i = 0; i < m_arr.length; i++){
		str += "<li>\
					<dl>\
						<dt><a href='#'>"+m_arr[i][0]+"</a></dt>\
						<dd><a href='#'>"+m_arr[i][1]+"</a></dd>\
						<dd><a href='#'>"+m_arr[i][2]+"</a></dd>\
						<dd><a href='#'>"+m_arr[i][3]+"</a></dd>\
					</dl>\
				</li>";
	}
	m_ul.innerHTML = str;
	var m_a = m_ul.getElementsByTagName('dd');
	// for(var j =0; j < 10; j++){
	// 	m_iNow =parseInt(Math.random()*50) ;
	// 	m_a[m_iNow].style.color= "#f07";
	// }
	m_a[0].className = 'bg_hot';
	m_a[4].className = 'bg_hot';
	m_a[12].className = 'bg_hot';
	m_a[24].className = 'bg_hot';


/*二级菜单的显示隐藏*/

var sub_menu = document.getElementById('sub_menu'),
	s_list = sub_menu.getElementsByTagName('div'),
	m_li = m_ul.getElementsByTagName('li');
   for(var i = 0; i < m_li.length; i++){
   	m_li[i].index = i;
   	m_li[i].onmouseover = function(){
   		for(var j = 0; j < m_li.length; j++){
   			s_list[j].style.display = 'none';
   		}
   		sub_menu.style.display='block';
   		s_list[this.index].style.display = 'block';
   	}
   	m_li[i].onmouseout = function(){
   		for(var j = 0; j < m_li.length; j++){
   			s_list[j].style.display = 'none';
   		}
   		sub_menu.style.display='none';
   	}
   }



/*轮播图*/
var tabpaly = document.getElementById('tabpaly'),
	ban = document.getElementById('banner'),
	autoImg =  tabpaly.getElementsByTagName('img')[0],
	dots = tabpaly.getElementsByTagName('div')[0].getElementsByTagName('a'),
	tab_arr = ['img/banner1.png','img/banner2.png','img/banner3.png','img/banner4.png','img/banner5.png'],
	tab_arrBg =['#fae6d4','#54b7f1','#f49496','#82d2f9','#bedeea'],
	num =0,
	len= tab_arr.length;
function fnTab(autoImg,dots, autoBan) {
	autoImg.src = tab_arr[num];
	for( var i = 0; i < len; i++){
		dots[i].className =''
	}
	dots[num].className = 'active';
	autoBan.style.backgroundColor = tab_arrBg[num];
	autoBan.style.opacity = 100;

}
fnTab(autoImg,dots,ban) ;
var timer = null;
function play(){
	clearInterval(timer);
	timer = setInterval(function(){
	
		num++;
		// if(num==len){
		// 	num=0;
		// }
		num %= len;
		fnTab(autoImg,dots,ban)
	},5000);
}
play();
tabpaly.onmouseover = function(){
	clearInterval(timer);

}

tabpaly.onmouseout = function(){

	play();
}

for(var i = 0; i <len; i++){
	dots[i].index = i ;
	dots[i].onmouseover= function(){
		for(var j = 0; j < len; j++){
			dots[j].className = '';
		}
		this.className = 'active';
		autoImg.src = tab_arr[this.index];
		ban.style.background = tab_arrBg[this.index];

	}
}