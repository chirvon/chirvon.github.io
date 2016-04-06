//обработка главных по цвету меню и загрузка pdf standart
function txtColor(color) {
	document.getElementById('sTxt1').style.color=color;
	document.getElementById('sTxt2').style.color=color;
}

// ************** при наведении курсора подсветить красным ***************
document.getElementById('sTxt1').onmouseover = function() {
	txtColor('#9b0816');
}
document.getElementById('sTxt2').onmouseover = function() {
	txtColor('#9b0816');
}
document.getElementById('sIco').onmouseover = function() {
	txtColor('#9b0816');
}

// ************** когда курсор уходит потушить ***************
document.getElementById('sTxt1').onmouseout = function() {
	txtColor('#070707');
}
document.getElementById('sTxt2').onmouseout = function() {
	txtColor('#070707');
}
document.getElementById('sIco').onmouseout = function() {
	txtColor('#070707');
}

document.getElementById('sIco').onclick = function() {
	open('../html/standart_k.pdf');
}
