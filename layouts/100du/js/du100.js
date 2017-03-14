
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


/*知道分子和侧边栏抢券儿 选项卡切换*/

 var advice = document.getElementById('advice'),
     adv_ul = advice.getElementsByTagName('ul')[0],
     advice_ul = document.getElementById('advice_info').getElementsByTagName('ul');
     
     tab1_nav =document.getElementById('tab1_nav'),
     tab1_ul = tab1_nav.getElementsByTagName('ul')[0],
     tab1_cont = document.getElementById('tab1_cont').getElementsByTagName('ul');

  tab1(adv_ul ,advice_ul);
  tab1(tab1_ul,tab1_cont);


    function tab1(obj1,obj2){
      var tab1_li = obj1.getElementsByTagName('li');
        for(var i = 0; i < tab1_li.length; i++){
          tab1_li[i].index = i;
            tab1_li[i].onmouseover = function(){
              for(var i = 0; i < tab1_li.length; i++){
                tab1_li[i].className = 'gradient';
                tab1_li[i].getElementsByTagName('a')[0].className = 'triangle_down_gray';
                obj2[i].style.display = 'none';
              }
              this.className = 'active';
              this.getElementsByTagName('a')[0].className = 'triangle_down_red';
              obj2[this.index].style.display = 'block';
            }
        }
    }




/*精彩推荐图片切换*/
var fade = document.getElementById('fade'),
    fa_ul = fade.getElementsByTagName('ul')[0],
    u_li = fa_ul.getElementsByTagName('li'),
    fa_ol = fade.getElementsByTagName('ol')[0],
    o_li = fa_ol.getElementsByTagName('li'),
    oP = fade.getElementsByTagName('p')[0],
    fa_arr =['爸爸去哪儿啦~','人像摄影中的观影感','娇柔妩媚、美艳大方'];
var fa_Now = 0,
    fa_timer = null;

  function fadeShow(){
    for(var i = 0; i < u_li.length; i++){
      if(i != fa_Now ){
        u_li[i].style.zIndex = 1;
        o_li[i].className ='';        
      }else{
        u_li[fa_Now].style.zIndex = 2;
        o_li[i].className ='active';
        oP.innerHTML =fa_arr[fa_Now];
      }     
    }
  }
  fadeShow();

  for(var i = 0; i < u_li.length; i++){
    o_li[i].index = i;
    o_li[i].onclick = function(){
      fa_Now = this.index;
      fadeShow();
    }
  }

//实现自动播放
function faPlay(){
   clearInterval(fa_timer);
  fa_timer = setInterval(function(){
    fa_Now ++;
    // if(fa_Now == u_li.length){
    //   fa_Now = 0;
    // }
    fa_Now %= u_li.length;
    fadeShow();

    },3000);
}

faPlay();
fade.onmouseover = function(){
  clearInterval(fa_timer);
}
fade.onmouseout = function(){
 faPlay();
}


/*日历部分*/

var calendar = document.getElementById('calendar'),
    day_h = calendar.getElementsByTagName('h3')[0],
    day_span = day_h.getElementsByTagName('span'),
    ca_ol = calendar.getElementsByTagName('ol')[0],
    ca_li = calendar.getElementsByTagName('li'),
    ca_img = ca_ol.getElementsByClassName('img'),

    to_info = document.getElementById('toinfo'),
    to_img = to_info.getElementsByTagName('img')[0],
    to_p = to_info.getElementsByTagName('p')[0],
    to_str = to_info.getElementsByTagName('strong')[0];
    
    // 得到li的索引值，用于匹配星期
    for( var j = 0; j < ca_li.length; j++){
              ca_li[j].index = j;
    }

      for( var i = 0; i < ca_img.length; i++){
        // ca_img[i].index = i;
        ca_img[i].onmouseover = function(){

           var iTop = this.parentNode.offsetTop,
               iLeft = this.parentNode.offsetLeft
               eq = this.parentNode.index;

          to_info.style.left= iLeft+48 +'px';
          to_info.style.top = iTop-30 +'px';
          to_info.style.display = 'block';
          to_info.style.zIndex = 3;
            // console.log(eq)
          to_img.src = this.src;
          to_p.innerHTML = this.name;
          to_str.innerHTML = day_span[eq%7].innerHTML;
       }
       ca_img[i].onmouseout = function(){
          to_info.style.display = 'none';
       }
      }
 
/*bbs论坛 高亮显示*/

var b_list = document.getElementById('b_list'),
    bbs_li = b_list.getElementsByTagName('li');

    for( var i = 0; i < bbs_li.length; i++){
      bbs_li[i].index = i ;
      bbs_li[i].onmouseover = function(){
        for( var i = 0; i < bbs_li.length; i++){
          bbs_li[i].className ='';
        }
        this.className = 'active';
      }
    }

/*红人烧客鼠标显示效果*/
var red_hot = document.getElementById('hot'),
    red_li = red_hot.getElementsByTagName('li'),
    p = red_li[2].getElementsByTagName('p')[0];
    var red_oP ,
    red_arr = ['',
               '用户名：1<br>区域：浙江<br> 人气2233',
               '用户名：性感宝贝<br>区域：朝阳CBD<br>人气：1234',
               '用户名：3<br>区域：未知<br>人气：34',
               '用户名：4<br>区域：未知<br>人气：334',
               '用户名：5<br>区域：未知<br>人气：3343',
               '用户名：6<br>区域：未知<br>人气：3134',
               '用户名：7<br>区域：未知<br>人气：334',
               '用户名：8<br>区域：未知<br>人气：334',
               '用户名：9<br>区域：未知<br>人气：334',
               '用户名：10<br>区域：未知<br>人气：334'];

    for( var k = 0; k < red_li.length; k++){
      red_li[k].index = k;
      red_li[k].onmouseover = function(){
        if(this.index ==0){
          return;
        }
        for( var k = 0; k < red_li.length; k++){
         red_oP =red_li[k].getElementsByTagName('p')[0];
         if(red_oP){
           //red_oP.style.display = 'none';
           red_li[k].removeChild(red_oP);
          }     
        }
        p.style.width = this.offsetWidth -12 +'px';
        p.style.height = this.offsetHeight -12 +'px';
        p.innerHTML = red_arr[this.index];
      this.appendChild(p);
      }
    }


