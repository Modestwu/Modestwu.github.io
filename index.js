
/*about切换*/
 var oAbout = document.getElementById('about'),
 	 oInfo = document.getElementById('ab-info'),
 	 aLi = oAbout.getElementsByTagName('li'),
 	 aInfo = oInfo.getElementsByTagName('div'),
 	 li_len = aLi.length
 	 arrCol = ['#bbb','#aaa','#272630'];

 	 for(var i = 0; i < li_len; i++){
 	 	aLi[i].index = i;
 	 	aLi[i].onclick = function(){
 	 		for(var i = 0; i < li_len; i++){
 	 			aLi[i].className ='';
 	 			aInfo[i].style.display = 'none';

 	 		}
 	 		this.className = 'active';
 	 		aInfo[this.index].style.display = 'block';
 	 		aInfo[this.index].style.color = arrCol[this.index];
 	 	}
 	 }
