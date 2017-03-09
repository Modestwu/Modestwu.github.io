
/*导航搜索框切换效果*/

 var oMenu = document.getElementById('menu'),
 	 oForm = document.getElementById('form'),
 	 me_li = oMenu.getElementsByTagName('li'),
 	 me_input = oForm.getElementsByTagName('input')[0],
 	 meLi_len = me_li.length,
 	 me_arr =['例如：荷棠鱼坊烤鱼 或 樱花日本料理',
 	 		  '例如：昌平区育新站龙旗广场',
 	 		  '例如：万达影院双人情侣券',
 	 		  '例如：东莞出事了，大老虎是谁',
 	 		  '例如：北京初春降雪，天气变幻莫测'],
 	 iNow = 0;

 // 初始化input内容
   me_input.value = me_arr[iNow];

// 实现点击搜索栏的li，选中的li有背景
 	 for(var i = 0; i < meLi_len; i++){
 	 	me_li[i].index = i;
 	 	me_li[i].onclick = function(){
 	 		for(var i = 0; i < meLi_len; i++){
 	 			me_li[i].className = '';
 	 			me_input.value ='';
 	 		}
 	 		this.className ='active';
 	 		iNow = this.index;
 	 		me_input.value = me_arr[iNow];
 	 		me_input.className = 'text';
 	 	}
 	 }


 //焦点判断
 me_input.onfocus = function(){
 	
 	if(this.value == me_arr[iNow]){
 		this.value = '';
 		this.className = 'colorBlack';
 	}
 }
 me_input.onblur = function(){
 	if(this.value == ''){
 		this.value = me_arr[iNow];
 		this.className = 'text';
 	}
 }


 /*搜索栏下方文字滚动 update*/
  var upDate = document.getElementById('update'),
  	  da_arr =[{'name':'萱萱','time':5,'title':'那些灿烂华美的瞬间...','url':'http://Modestwu.github.io'},
  	  		   {'name':'小丸子','time':14,'title':'那些灿烂华美的瞬间...','url':'http://Modestwu.github.io'},
  	  		   {'name':'隔壁老王','time':35,'title':'那些灿烂华美的瞬间...','url':'http://Modestwu.github.io'},
  	  		   {'name':'阿明','time':11,'title':'那些灿烂华美的瞬间...','url':'http://Modestwu.github.io'}],
  	  up_ul = upDate.getElementsByTagName('ul')[0],
  	  da_up = document.getElementById('date_up'),
  	  da_down =  document.getElementById('date_down');
  	  
  	  
  var str = ''
  	count = 0;
  	  for(var j = 0; j < da_arr.length; j++){
  	  	str += '<li><a href="'+da_arr[j].url+'#"><strong>'+da_arr[j].name+'</strong> <span>'+da_arr[j].time+'分钟前</span>写了一篇新文章：'+da_arr[j].title+'</a></li>';
  	  }
  	 up_ul.innerHTML = str;
  	 var up_li= up_ul.getElementsByTagName('li')[0],
  	 	iH=up_li.offsetHeight;

  	 	da_up.onclick = function(){
  	 		count --;
  	 		if(count < 0){
  	 			count = da_arr.length-1;
  	 		}
  	 		daMove(-count);
  	 	}
  	 	da_down.onclick = function(){
  	 		count++;
	  	 	if(count ==da_arr.length){
	  	 		count =0;
	  	 	};
  	 		daMove(count);
  	 	}

  	 	function daMove(){
  	 		
  	 	up_ul.style.top = -iH*count +'px';
  	 	up_ul.style.transition = '2s'; 
  	 	}
  	 	upDate.onmouseover = function(){
  	 		clearInterval(up_ul.timer);
  	 	}

  	 	upDate.onmouseout = function(){
  	 		palyInter();
  	 	}
  	 	function palyInter(){
  	 		clearInterval(up_ul.timer);
	  	 	up_ul.timer = setInterval(function(){
	  	 	up_ul.style.top = -iH*count +'px';
	  	 	up_ul.style.transition = '1s'; 
	  	 	count++;
	  	 	if(count ==da_arr.length){
	  	 		count =0;
	  	 	};
	  	 },10000);
  	 	}
  	  palyInter();


 /*选项卡切换*/
 var opt = document.getElementById('options'),
 	tabNav = opt.getElementsByTagName('ul')[0],
 	tabCont =document.getElementById('tabcont').getElementsByTagName('ul');
  opt2 = document.getElementById('options1'),
  tabNav2 = opt2.getElementsByTagName('ul')[0],
  tabCont2 =document.getElementById('tabcont2').getElementsByTagName('img');
 tab(tabNav,tabCont);
 tab(tabNav2,tabCont2);
 var count1=0;
 	function tab(obj1,obj2){
 		var tab_li = obj1.getElementsByTagName('li');
 			// tab_a =[];
 		// for(var i = 0; i < tab_li.length; i++){
 		// 	tab_a.push(tab_li[i].getElementsByTagName('a'));
 		// }
 		for(var i =0; i < tab_li.length; i++){
 			tab_li[i].index = i;
 			tab_li[i].onclick = function(){
 				for(var i =0; i < tab_li.length; i++){
 				tab_li[i].className = 'gradient fl';
 				tab_li[i].getElementsByTagName('a')[0].className = 'triangle_down_gray';				
 			  obj2[i].style.display = 'none';
      }
 			this.className = 'active fl';
 			count1 = this.index;
 			var tab_a=tab_li[count1].getElementsByTagName('a')[0];
 			tab_a.className = 'triangle_down_red';
      obj2[count1].style.display = 'block';
 		}
}
 	}