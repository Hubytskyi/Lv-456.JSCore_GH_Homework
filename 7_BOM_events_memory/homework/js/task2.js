function changeCSS(){
	document.querySelector('button').onclick = function(){
		document.querySelector('p').style='color: orange; font-size: 20px; font-family: Comic Sans MS;';
	}
};
changeCSS();