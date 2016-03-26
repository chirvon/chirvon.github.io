	

//обработка бокового меню по отделам
//в левом меню выбран первый пункт 

var arr = ['otdel2_1', 'otdel2_2', 'otdel2_3', 'otdel2_4', 'otdel2_5', 'otdel2_6', 'otdel2_7', 'otdel2_8', 'otdel2_9'];

function resetLeftMenu(leng){ // сброс выбраных в левом меню пунктов
	for (var i = 0; i < leng; i++) {
		document.getElementById(arr[i]).style.color='black';
		document.getElementById(arr[i]).style.textDecoration='none';
		document.getElementById(arr[i]).style.fontSize = '14px';
	}
}

function setLeftMenu(numOtdSet){ // установим новый отдел в левом меню пунктов
	document.getElementById(arr[numOtdSet-1]).style.color='blue';
   	document.getElementById(arr[numOtdSet-1]).style.textDecoration='underline';
   	document.getElementById(arr[numOtdSet-1]).style.fontSize = '16px';
	setOtdel = numOtdSet;
}



var setOtdel = 0; //хранит, какой отдел выбран в левом боковом меню
var numOtdel = 9; // количество отделов (левое боковое меню)
var statusRukovod_Rab = 1; // т.е по умолчанию активный руководитель
// спрятать элемент
//document.getElementById('box').style.display='none';

//**************************************************************************
//обработка кнопок руководитель и рабочие 

var newStatus = ['rabochie', 'rukovoditeli'];
function setStatusRukovod(i){
	if (i == 1) {
		statusRukovod_Rab = 1;
		document.getElementById(newStatus[i]).style.color='blue';
	   	document.getElementById(newStatus[i]).style.textDecoration='underline';
	   	document.getElementById(newStatus[i]).style.fontSize = '16px';
	   	document.getElementById(newStatus[i-1]).style.color='black';
	   	document.getElementById(newStatus[i-1]).style.textDecoration='none';
	   	document.getElementById(newStatus[i-1]).style.fontSize = '14px';
	}	
	else{
		statusRukovod_Rab = 0;
		document.getElementById(newStatus[i]).style.color='blue';
	   	document.getElementById(newStatus[i]).style.textDecoration='underline';
	   	document.getElementById(newStatus[i]).style.fontSize = '16px';
	   	document.getElementById(newStatus[i+1]).style.color='black';
	   	document.getElementById(newStatus[i+1]).style.textDecoration='none';
	   	document.getElementById(newStatus[i+1]).style.fontSize = '14px';
	}
	if (setOtdel > 0) {dispSotrudnik(setOtdel);} // отобразим правильный список сотрудников

}

setStatusRukovod(1); // установим первоначальные свойства для кнопок Руковод/Раб

document.getElementById('rukovoditeli').onclick = function() {
	setStatusRukovod(1);
}

document.getElementById('rabochie').onclick = function() {
	setStatusRukovod(0);
}
//*********************************************************************

//функция анализа выбранного отдела и состояния кнопки Руковод/Рабочий 
//и отображение правильного блока




var listNameOtdRukovod = ['null', 'otdel2_1_sotr_rukovod', 'otdel2_2_sotr_rukovod', 'otdel2_3_sotr_rukovod', 'otdel2_4_sotr_rukovod', 'otdel2_5_sotr_rukovod', 'otdel2_6_sotr_rukovod', 'otdel2_7_sotr_rukovod', 'otdel2_8_sotr_rukovod', 'otdel2_9_sotr_rukovod'];
var listNameOtdRab = ['null', 'otdel2_1_sotr_rab', 'otdel2_2_sotr_rab', 'otdel2_3_sotr_rab', 'otdel2_4_sotr_rab', 'otdel2_5_sotr_rab', 'otdel2_6_sotr_rab', 'otdel2_7_sotr_rab', 'otdel2_8_sotr_rab', 'otdel2_9_sotr_rab'];



function dispSotrudnik(otdel){
	//в цикле уберем всех сотрудников
	for (var i = 1; i < numOtdel+1; i++) {
			document.getElementById(listNameOtdRukovod[i]).style.display='none';
			document.getElementById(listNameOtdRab[i]).style.display='none';
		}
	if (otdel == 0) return;
	
	if (statusRukovod_Rab == 1) {
			document.getElementById(listNameOtdRukovod[otdel]).style.display='block';
			document.getElementById(listNameOtdRab[otdel]).style.display='none';
	}
	else {
			document.getElementById(listNameOtdRukovod[otdel]).style.display='none';
			document.getElementById(listNameOtdRab[otdel]).style.display='block';
	}
}



//*********************************************************************

   	dispSotrudnik(0); //начальная инициализация отображение списка сотрудников

//в левом меню выбран 1 пункт 
document.getElementById('otdel2_1').onclick = function() {
   	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
   	setLeftMenu(1);
   	// выведем список должностей данного отдела
   	dispSotrudnik(1);
}

document.getElementById('otdel2_2').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
  	setLeftMenu(2);
   	dispSotrudnik(2);
}

document.getElementById('otdel2_3').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
 	setLeftMenu(3);
 	dispSotrudnik(3);
}
document.getElementById('otdel2_4').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
 	setLeftMenu(4);
 	dispSotrudnik(4);
}
document.getElementById('otdel2_5').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
 	setLeftMenu(5);
 	dispSotrudnik(5);
}
document.getElementById('otdel2_6').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
 	setLeftMenu(6);
 	dispSotrudnik(6);
}
document.getElementById('otdel2_7').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
  	setLeftMenu(7);
  	dispSotrudnik(7);
}
document.getElementById('otdel2_8').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
 	setLeftMenu(8);
 	dispSotrudnik(8);
}
document.getElementById('otdel2_9').onclick = function() {
	resetLeftMenu(numOtdel); // сбросим остальные стили в исходное состояние
  	setLeftMenu(9);
  	dispSotrudnik(9);
}

function overColor(numOtdSet) { // возвращаем подкраску после того как курсор убрали
	for (var i = 0; i < 9; i++) {
		document.getElementById(arr[i]).style.color='black';
	}
	if (numOtdSet > 0) {
		document.getElementById(arr[numOtdSet-1]).style.color='blue';	
	}
}
// ************** при наведении курсора подсветить красным ***************
document.getElementById('otdel2_1').onmouseover = function() {
	document.getElementById('otdel2_1').style.color='red';
}
document.getElementById('otdel2_2').onmouseover = function() {
	document.getElementById('otdel2_2').style.color='red';
}
document.getElementById('otdel2_3').onmouseover = function() {
	document.getElementById('otdel2_3').style.color='red';
}
document.getElementById('otdel2_4').onmouseover = function() {
	document.getElementById('otdel2_4').style.color='red';
}
document.getElementById('otdel2_5').onmouseover = function() {
	document.getElementById('otdel2_5').style.color='red';
}
document.getElementById('otdel2_6').onmouseover = function() {
	document.getElementById('otdel2_6').style.color='red';
}
document.getElementById('otdel2_7').onmouseover = function() {
	document.getElementById('otdel2_7').style.color='red';
}
document.getElementById('otdel2_8').onmouseover = function() {
	document.getElementById('otdel2_8').style.color='red';
}
document.getElementById('otdel2_9').onmouseover = function() {
	document.getElementById('otdel2_9').style.color='red';
}

// ************** когда курсор уходит потушить ***************
document.getElementById('otdel2_1').onmouseout = function() {
	overColor(setOtdel);
}
document.getElementById('otdel2_2').onmouseout = function() {
	overColor(setOtdel);
}
document.getElementById('otdel2_3').onmouseout = function() {
	overColor(setOtdel);
}
document.getElementById('otdel2_4').onmouseout = function() {
	overColor(setOtdel);
}
document.getElementById('otdel2_5').onmouseout = function() {
	overColor(setOtdel);
}
document.getElementById('otdel2_6').onmouseout = function() {
	overColor(setOtdel);
}
document.getElementById('otdel2_7').onmouseout = function() {
	overColor(setOtdel);
}
document.getElementById('otdel2_8').onmouseout = function() {
	overColor(setOtdel);
}	
document.getElementById('otdel2_9').onmouseout = function() {
	overColor(setOtdel);
}

