//используется для загрузочной страницы
document.getElementById('wrap').onclick = function() {
	open('html/index1.html', '_self');
}


document.getElementById('wrap').onmouseover = function() {
	document.getElementById('wrap').style.cursor = "pointer";
}