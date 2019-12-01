document.getElementById('button').onclick = function(){
	let selectName = document.getElementById('select__name');
	selectName.remove(selectName.selectedIndex);
};