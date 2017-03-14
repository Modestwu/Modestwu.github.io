
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

/*me github*/
var git = document.getElementById('fork');
window.onscroll = function(){
	 if(scrollY > 300){
 	// alert(pageYOffset);
 	// git.style.display = 'block';
 	git.style.opacity = 1;
 	git.style.transition ='2s';
 	git.style.left = '0';
 }else{
 	git.style.opacity= 0;
 	git.style.left ='-150px';
 }
}

