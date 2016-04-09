// 02 Управление по техническому развитию и подготовке производства

var posXListAfterTable = 800;
var arbitreCreateListHTML = 0; //арбитр, исп для удаления ранее созданых списков 
var arbitreTable = 0; //арбитр, исп для удаления ранее созданых таблиц 
var arbitreCreateTable = 0; //арбитр определения создания таблицы: первый раз	
var globalNumberPosition = 0; //сколько в списке должностей (используется для обработчика клика по списку)
var	globalNumberNotCreate = 200; //какой номер выбран в спике. что бы его потом не создавать
// ***************************************************************************

// ***************************************************************************
// 	ОБРАБОТКА ЧЕКБОКСА
// ***************************************************************************

function setCheckBox (s) {
	if (s == 1) {
		document.getElementById('Check_ruk').checked=true;
		document.getElementById('Check_ruk1').style.color='#08089b';//синий
		document.getElementById('Check_rab').checked=false;
		document.getElementById('Check_rab1').style.color='#070707';// черный
	}
	if (s == 2) {
		document.getElementById('Check_ruk').checked=false;
		document.getElementById('Check_ruk1').style.color='#070707';
		document.getElementById('Check_rab').checked=true;
		document.getElementById('Check_rab1').style.color='#08089b';			
	}

	if (s == 3) {
		document.getElementById('Check_ruk').disabled='disabled';// не активный
		document.getElementById('Check_ruk1').style.color='grey';
		document.getElementById('Check_rab').checked=true;
		document.getElementById('Check_rab1').style.color='#08089b';			
	}

	if (s == 4) {
		document.getElementById('Check_ruk').checked=true;
		document.getElementById('Check_ruk1').style.color='#08089b';//синий
		document.getElementById('Check_rab').disabled='disabled';// не активный
		document.getElementById('Check_rab1').style.color='grey';
	}
}

function setCursorCheckBox (){
	if (init == 3) {
		var some = document.getElementById('Check_ruk1');
		some.style.cursor = 'default';//задаем цвет по умолчанию
	}
	if (init == 4) {
		var some = document.getElementById('Check_rab1');
		some.style.cursor = 'default';//задаем цвет по умолчанию
	}
}

setCursorCheckBox(); //глушим курсор, если чек заблокирован

function setDisplayContentRukRab(s){ // управляем отображением блока с выводом списка должностей и мини описанием СИЗ
	if ((s == 1)||(s == 4)) { // руководители
		document.getElementById('rightContent1').style.display='block';
		document.getElementById('rightContent2').style.display='none';
	}
	if ((s == 2)||(s == 3)) { //рабочие
		document.getElementById('rightContent1').style.display='none';
		document.getElementById('rightContent2').style.display='block';
	}
}


//первичная инициализация
setCheckBox(init); //устанавливаем чек бокс (галку)

// управляем отображением блока с выводом списка должностей и мини описанием СИЗ
setDisplayContentRukRab(init);

document.getElementById('Check_ruk').onclick = function() {
	if (init < 3) { 
		init = 1;
		setCheckBox(init);		
		setDisplayContentRukRab(init);// управляем отображением блока с выводом списка должностей и мини описанием СИЗ
		resetStyleAfterCheck();
	}
	else {
	 	document.getElementById('Check_ruk').checked=true;
	}	
}

document.getElementById('Check_rab').onclick = function() {
	if (init < 3) {
		init = 2;
		setCheckBox(init);
		setDisplayContentRukRab(init);// управляем отображением блока с выводом списка должностей и мини описанием СИЗ
		resetStyleAfterCheck();
	}
	else {
	 	document.getElementById('Check_rab').checked=true;
	}
}

// ***************************************************************************
// ОБЪЯВЛЕНИЕ ВСЕХ ФУНКЦИЙ
// ***************************************************************************

//функция воостановления предыдущей страницы после переход с СИЗ Подробно
function restorePerson (list1, person){
	linkFull.setAttribute('href', list1);//поменяем ссылку ПОДРОБНО
	setActiveContentShort(); // отобразим wrapper СИЗ коротко
	createTable (person, 0); //создадим таблицу для сотрудника
}
//функция воостановления предыдущей страницы после переход с СИЗ Подробно для РАБОЧИЕ
function restorePersonRab () {
				init = 2;
				setCheckBox(init); //устанавливаем чек бокс (галку)
				// управляем отображением блока с выводом списка должностей и мини описанием СИЗ
				setDisplayContentRukRab(init);
				arbitreCreateTable = 1; //уже таблица создавалась
				var wrapperList = document.querySelector('#ContentShort');
				var listCur = wrapperList.querySelector('ul');
				wrapperList.removeChild(listCur);
				//делаем список должностей после таблицы
				createList(listPositionDep02_Otd03_Rab.doljnost, posXListAfterTable, "menu-item-ruk2");
}

//функция для чтения передаваемых параметров от страницы полный СИЗ
function OnLoad() {
    var paramValue = window.location.href.split("?")[1].split("=")[1];
    //00 Главный инженер   
 			if (paramValue == 'str_003') {
				restorePerson (listPositionDep02_Otd00_Ruk.linkFull[0], person_3);
			}           
    //01 Отдел охраны труда и техники безопасности
            if (paramValue == 'str_004') {
				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[0], person_4);
			}
 			if (paramValue == 'str_005') {
				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[1], person_5);
			}
 			if (paramValue == 'str_006') {
				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[2], person_6);
			}
 			if (paramValue == 'str_007') {
				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[3], person_7);
			}
 			if (paramValue == 'str_008') {
				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[4], person_8);
			}
 			if (paramValue == 'str_009') {
				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[5], person_9);
			}
 			if (paramValue == 'str_010') {
				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[6], person_10);
			}
	//02 ТЕХНИЧЕСКИЙ ОТДЕЛ
			if (paramValue == 'str_011') {
				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[0], person_11);
			}
			if (paramValue == 'str_012') {
				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[1], person_12);
			}
			if (paramValue == 'str_013') {
				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[2], person_13);
			}
			if (paramValue == 'str_014') {
				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[3], person_14);
			}
	//03 Отдел главного маркшейдера и геолога
			if (paramValue == 'str_015') {
				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[0], person_15);
			}
			if (paramValue == 'str_016') {
				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[1], person_16);
			}
			if (paramValue == 'str_017') {
				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[2], person_17);
			}
			if (paramValue == 'str_018') {
				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[3], person_18);
			}
			if (paramValue == 'str_019') {
				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[4], person_19);
			}
			if (paramValue == 'str_020') {
				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[5], person_20);
			}
			if (paramValue == 'str_021') {
				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[6], person_21);
			}
			//Рабочие
			if (paramValue == 'str_022') {
				restorePerson (listPositionDep02_Otd03_Rab.linkFull[0], person_22);
				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
			}
	//04 Отдел главного механика и главного энергетика			
			if (paramValue == 'str_023') {
				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[0], person_23);
			}
			if (paramValue == 'str_024') {
				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[1], person_24);
			}
			if (paramValue == 'str_025') {
				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[2], person_25);
			}
			if (paramValue == 'str_026') {
				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[3], person_26);
			}
			//Рабочие
			if (paramValue == 'str_027') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[0], person_27);
				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
			}
			if (paramValue == 'str_028') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[1], person_28);
				restorePersonRab();
			}
			if (paramValue == 'str_029') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[2], person_29);
				restorePersonRab();
			}
			if (paramValue == 'str_030') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[3], person_30);
				restorePersonRab();
			}
			if (paramValue == 'str_031') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[4], person_31);
				restorePersonRab();
			}
			if (paramValue == 'str_032') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[5], person_32);
				restorePersonRab();
			}
			if (paramValue == 'str_033') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[6], person_33);
				restorePersonRab();
			}
			if (paramValue == 'str_034_1') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[7], person_34_1);
				restorePersonRab();
			}
			if (paramValue == 'str_034_2') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[8], person_34_2);
				restorePersonRab();
			}
			if (paramValue == 'str_034_3') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[9], person_34_3);
				restorePersonRab();
			}
			if (paramValue == 'str_034_4') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[10], person_34_4);
				restorePersonRab();
			}
			if (paramValue == 'str_035') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[11], person_35);
				restorePersonRab();
			}
			if (paramValue == 'str_036') {
				restorePerson (listPositionDep02_Otd04_Rab.linkFull[12], person_36);
				restorePersonRab();
			}
	//05 Автотранспортный цех
			if (paramValue == 'str_037') {
				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[0], person_37);
			}
			if (paramValue == 'str_038') {
				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[1], person_38);
			}
			if (paramValue == 'str_039') {
				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[2], person_39);
			}
			if (paramValue == 'str_040') {
				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[3], person_40);
			}
			if (paramValue == 'str_041') {
				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[4], person_41);
			}
	//06 Участок связи и коммуникаций
			if (paramValue == 'str_042') {
				restorePerson (listPositionDep02_Otd06_Ruk.linkFull[0], person_42);
			}

			//Рабочие
			if (paramValue == 'str_043') {
				restorePerson (listPositionDep02_Otd06_Rab.linkFull[0], person_43);
				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
			}
	//07 Испытательная лаборатория
			if (paramValue == 'str_044') {
				restorePerson (listPositionDep02_Otd07_Ruk.linkFull[0], person_44);
			}

			//Рабочие
			if (paramValue == 'str_045') {
				restorePerson (listPositionDep02_Otd07_Rab.linkFull[0], person_45);
				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
			}

			if (paramValue == 'str_046') {
				restorePerson (listPositionDep02_Otd07_Rab.linkFull[1], person_46);
				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
			}
	//08 Центр автоматизированных систем управления производством (АСУП)
			if (paramValue == 'str_047') {
				restorePerson (listPositionDep02_Otd08_Ruk.linkFull[0], person_47);
			}
			if (paramValue == 'str_048') {
				restorePerson (listPositionDep02_Otd08_Ruk.linkFull[1], person_48);
			}
			if (paramValue == 'str_049') {
				restorePerson (listPositionDep02_Otd08_Ruk.linkFull[2], person_49);
			}
	//09 Отдел технического контроля
			if (paramValue == 'str_050') {
				restorePerson (listPositionDep02_Otd09_Ruk.linkFull[0], person_50);
			}
			if (paramValue == 'str_051') {
				restorePerson (listPositionDep02_Otd09_Ruk.linkFull[1], person_51);
			}
			if (paramValue == 'str_052') {
				restorePerson (listPositionDep02_Otd09_Ruk.linkFull[2], person_52);
			}

			//Рабочие
			if (paramValue == 'str_053') {
				restorePerson (listPositionDep02_Otd09_Rab.linkFull[0], person_53);
				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
			}
}

//обнуление после переключения Руководители/рабочие
function resetStyleAfterCheck(){
	document.getElementById('ContentShort').style.display='none';
	//вернем на исходную позицию нижний логотип
	var wrapper3 = document.querySelector('.footer');
	wrapper3.style.top = '135px';

	deleteList();
	arbitreCreateTable = 0;
	cycleMain ();

	//if (arbitreCreateTable == 1) { //значит таблица и список уже создавались, очистим от них
	/*			
			//удалим существующую таблицу
			var wrapperTable = document.querySelector('.tableContent');
			var tableCur = wrapperTable.querySelector('table');
			//wrapperTable.removeChild(tableCur);
	*/

	/*			

				//удалим список под таблицей
				var wrapper2 = document.querySelector('#ContentShort');
				var listCur = wrapper2.querySelector('ul');
				wrapper2.removeChild(listCur);
	*/
				// вернем обычный размер страницы после таблицы
			//	wrapper2.style.height = '400px';


			
			

			//вернем фон для для wrapper
			// var wrapper4 = document.querySelector('.wrapper');
			// 	wrapper4.style.background = 'url("../img/bg_img3.jpg") -195px 0 no-repeat;';	
}

//создание списка должностей с HTML (который первый, перед таблицей)
function createListHTML(listPosition, posX){
	//listPosition - для кого делаем список должностей после таблицы
	// posX позиция спика на экране 

	var numberPosition = listPosition.length;
 	
 	// смещаем Лого внизу т.к. список должностей длинный
	if (numberPosition > 4) globalPosX = 50;
	if (numberPosition > 6) globalPosX = 100;
	if (numberPosition > 9) globalPosX = 150;
	if (numberPosition > 11) globalPosX = 200;
	if (numberPosition > 14) globalPosX = 250;
	if (numberPosition > 16) globalPosX = 300;
	if (numberPosition > 18) globalPosX = 350;

	ul = document.createElement("ul");
	for (var i = 0; i < numberPosition; i++) {
			li = document.createElement("li");
			li.className = "menu-item-ruk";
			a_link = document.createElement("a");
			a_link.innerHTML = listPosition[i];
			a_link.setAttribute('href', '#');
	        li.appendChild(a_link);
	        ul.appendChild(li);
	}
	ul.style='margin-top:' + posX + 'px'; //на какой высоте выводить список должностей

	if ((init == 1)||(init == 4)) {
		var divContentShort = document.querySelector('#rightContent1');
		divContentShort.appendChild(ul); //добавим список должностей на wrapper после таблицы
		arbitreCreateListHTML = 1;
	}
	if ((init == 2)||(init == 3)) {
		var divContentShort = document.querySelector('#rightContent2');
		divContentShort.appendChild(ul); //добавим список должностей на wrapper после таблицы
		arbitreCreateListHTML = 2; 
	}
}

//запускаем отображение блока с кратким описанием СИЗ для выбранной должности
function setActiveContentShort () {
	document.getElementById('ContentShort').style.display='block';
	document.getElementById('rightContent1').style.display='none';
	document.getElementById('rightContent2').style.display='none';
}

//определяем какая должность нажата
function checkOnclickListPosition (selectorMenu, list, arbitre, objectPersons) { 
	//максимум 17 должностей в списке (можно будет увеличить)
	//globalNumberPosition - кол-во должностей в списке
	if (globalNumberPosition > 0) {selectorMenu[0].onclick = function() {
		globalNumberNotCreate = 0; //какой номер выбран в спике. что бы его потом не создавать
		linkFull.setAttribute('href', list.linkFull[0]);//поменяем ссылку ПОДРОБНО
		if (arbitre == 0) {//если первый раз, то 
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
		}
		else { //если второй раз, то
			deleteTable(); //удалим предыдущую таблицу
		}
		createTable (objectPersons.Person0, 0); //создадим таблицу для сотрудника 1
	}}
	if (globalNumberPosition > 1) {selectorMenu[1].onclick = function() {
		globalNumberNotCreate = 1; //какой номер выбран в спике. что бы его потом не создавать
		linkFull.setAttribute('href', list.linkFull[1]);
		if (arbitre == 0) {//если первый раз, то 
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
		}
		else { //если второй раз, то
			deleteTable(); //удалим предыдущую таблицу
		}
		createTable (objectPersons.Person1, 0); //создадим таблицу для сотрудника 2
	}}
	if (globalNumberPosition > 2) {selectorMenu[2].onclick = function() {
		globalNumberNotCreate = 2; //какой номер выбран в спике. что бы его потом не создавать
		linkFull.setAttribute('href', list.linkFull[2]);
		if (arbitre == 0) {//если первый раз, то 
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
		}
		else { //если второй раз, то
			deleteTable(); //удалим предыдущую таблицу
		}
		createTable (objectPersons.Person2, 0); //создадим таблицу для сотрудника 3
	}}
	if (globalNumberPosition > 3) {selectorMenu[3].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[3]);
		if (arbitre == 0) {//если первый раз, то 
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
		}
		else { //если второй раз, то
			deleteTable(); //удалим предыдущую таблицу
		}
		createTable (objectPersons.Person3, 0); //создадим таблицу для сотрудника 4
	}}
	if (globalNumberPosition > 4) {selectorMenu[4].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[4]);
		if (arbitre == 0) {//если первый раз, то 
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
		}
		else { //если второй раз, то
			deleteTable(); //удалим предыдущую таблицу
		}
		createTable (objectPersons.Person4, 0); //создадим таблицу для сотрудника 5
	}}
	if (globalNumberPosition > 5) {selectorMenu[5].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[5]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person5, 0);}
	}
	if (globalNumberPosition > 6) {selectorMenu[6].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[6]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person6, 0);}
	}
	if (globalNumberPosition > 7) {selectorMenu[7].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[7]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person7, 0);}
	}
	if (globalNumberPosition > 8) {selectorMenu[8].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[8]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person8, 0);}
	}
	if (globalNumberPosition > 9) {selectorMenu[9].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[9]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person9, 0);}
	}
	if (globalNumberPosition > 10) {selectorMenu[10].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[10]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person10, 0);}
	}
	if (globalNumberPosition > 11) {selectorMenu[11].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[11]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person11, 0);}
	}
	if (globalNumberPosition > 12) {selectorMenu[12].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[12]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person12, 0);}
	}
	if (globalNumberPosition > 13) {selectorMenu[13].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[13]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person13, 0);}
	}
	if (globalNumberPosition > 14) {selectorMenu[14].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[14]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person14, 0);}
	}
	if (globalNumberPosition > 15) {selectorMenu[15].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[15]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person15, 0);}
	}
	if (globalNumberPosition > 16) {selectorMenu[16].onclick = function() {
		linkFull.setAttribute('href', list.linkFull[16]);
		if (arbitre == 0) {setActiveContentShort();}
		else {deleteTable();}
		createTable (objectPersons.Person16, 0);}
	}
}

//удалим предыдущую таблицу
function deleteTable (){
	var wrapperTable = document.querySelector('.tableContent');
	var tableCur = wrapperTable.querySelector('table');
	wrapperTable.removeChild(tableCur);
	arbitreTable = 0;
}


function editList(i) {
	var wrapperTable = document.querySelector('#ContentShort');
	var tableCur = wrapperTable.querySelector('ul');
	wrapperTable.removeChild(tableCur);
}


function deleteList (){
	var wrapperTable = document.querySelector('#ContentShort');
	var tableCur = wrapperTable.querySelector('ul');
	wrapperTable.removeChild(tableCur);
	if (arbitreTable == 1) {
		deleteTable ();
	}


	if (arbitreCreateListHTML == 1) {
		var wrapperTable = document.querySelector('#rightContent1');
		var tableCur = wrapperTable.querySelector('ul');
		wrapperTable.removeChild(tableCur);
		arbitreCreateListHTML == 0;
	}

	if (arbitreCreateListHTML == 2) {
		var wrapperTable = document.querySelector('#rightContent2');
		var tableCur = wrapperTable.querySelector('ul');
		wrapperTable.removeChild(tableCur);
		arbitreCreateListHTML == 0;
	}
}

function createTable (ActivePosition, manualCorrectPosX) {
	var columns = 2; //кол-во столбцов
	var rows = ActivePosition.naimenovanie.length; //кол-во элементов в массиве naimenovanie
	//т.е. это кол-во создаваемых строк таблицы

	Name_Position.innerHTML = ActivePosition.position; //отобразим текущую должность (красным )
	var table = document.createElement("table");
		table.setAttribute("width", '100%');
	    //table.setAttribute("height", '30px');
  
		for (var i = 0; i < rows; i++) {
	        tr = document.createElement("tr");
	        for (var j = 0; j < columns; j++) {
	          td = document.createElement("td");

	   			if (j == 0) {
	    			text = document.createTextNode(ActivePosition.naimenovanie[i]);
	    			td.setAttribute("width", '70%');
	    			
	    			td.setAttribute("height", '40px'); //межстрочный интервал
					
					td.style="text-align:left"; //выравнивание
	    			td.style.fontFamily = "Calibri";
	    			if (i == 0) {td.style.fontSize = '14px';} //шапка таблицы
	    			else {td.style.fontSize = '18px';}
	 				td.style.color = 'black'; //цвет
	 				//td.style.fontWeight="900";
	    		}
				if (j == 1) {
	    			text = document.createTextNode(ActivePosition.number[i]);
	    			td.setAttribute("width", '25%');
	    			td.style="text-align:center"; //выравнивание по центру
	    			td.style.fontFamily = "Calibri";
	    			if (i == 0) {//шапка таблицы
	    				td.style.fontSize = '14px';
	    				td.style.color = 'black';
	    			} 
	    			else 
	    			{	td.style.fontSize = '18px';
	    				td.style.color = '#f77746'; //цвет красный
	    				td.style.fontWeight="bold";
	    			}
			
	    		}
	          td.appendChild(text);
	          tr.appendChild(td);
	        }
	        table.appendChild(tr);
	      }

	var wrapper = document.querySelector('.tableContent'); //куда будем добавлять новый элемент
	wrapper.appendChild(table);

	//увеличим wrapper под размер таблицы
	
	var sizeHeightTable =	50 * rows;// кол-во строк в таблице
	sizeHeightTable = sizeHeightTable + 70;

	if (sizeHeightTable < 400) {sizeHeightTable = 400;} //это минимальный размер

	var wrapper2 = document.querySelector('#ContentShort');
	if (rows > 65) {sizeHeightTable = sizeHeightTable - 300;}
	wrapper2.style.height = sizeHeightTable + 'px';


	//перенесем список после таблицы под таблицу
	posXListAfterTable = sizeHeightTable - 150;
	var wrapper2 = document.querySelector('#ContentShort');
	var listCur = wrapper2.querySelector('ul');
	if (manualCorrectPosX >= 0) {
		//на какой высоте выводить список должностей
		if (rows > 65) {posXListAfterTable = posXListAfterTable - 200;}
		listCur.style='margin-top:' + posXListAfterTable + 'px';
	} 


	//перенесем нижний логотип
	var wrapper3 = document.querySelector('.footer');

	wrapper3.style.top = (posXListAfterTable - 280 + manualCorrectPosX + globalPosX) + 'px';


	//уберем фон для wrapper
	var wrapper4 = document.querySelector('.wrapper');
		wrapper4.style.background = 'none';

	arbitreTable = 1; //таблица создана (арбитр для последующего удаления)
}

//делаем список должностей после таблицы
function createList(listPosition, posX, classNam){
	//listPosition - для кого делаем список должностей после таблицы
	// posX позиция спика на экране 

	var numberPosition = listPosition.length;
	ul = document.createElement("ul");
	for (var i = 0; i < numberPosition; i++) {
				
				li = document.createElement("li");
				li.className = classNam;
				a_link = document.createElement("a");
				a_link.innerHTML = listPosition[i];
				a_link.setAttribute('href', '#');
		        li.appendChild(a_link);
		        ul.appendChild(li);
		   
	}
	
	ul.style='margin-top:' + posX + 'px'; //на какой высоте выводить список должностей

	var divContentShort = document.querySelector('#ContentShort');
	divContentShort.appendChild(ul); //добавим список должностей на wrapper после таблицы
}

//тут хранится ссылка на Должность (красная) и ее значение мы потом меняем
var Name_Position = document.querySelector('#Name_Position'); 

//ссылка ПОДРОБНО
var linkFull = document.querySelector('#LinkPodrobno'); 

var globalPosX = 0;
// ***************************************************************************
// объявление переменных и функций закончено
// ТЕЛО ПРОГРАММЫ
// ***************************************************************************

	// определяем какой сейчас активный отдел ActivePosition и для него делаем список
		// 0 Главный инженер
		// 1 Отдел охраны труда и техники безопасности
		// 2 Технический отдел
		// 3 Отдел главного маркшейдера и геолога
		// 4 Отдел главного механика и главного энергетика
		// 5 Автотранспортный цех
		// 6 Участок связи и коммуникаций
		// 7 Испытательная лаборатория
		// 8 Центр автоматизированных систем управления производством (АСУП)
		// 9 Отдел технического контроля

function cycleMain (){

	if (ActivePosition == 0) {// 0 Главный инженер
			//создаем под должность таблицу
			linkFull.setAttribute('href', listPositionDep02_Otd00_Ruk.linkFull[0]);//поменяем ссылку ПОДРОБНО
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
			createTable (person_3, -100); //создадим таблицу для сотрудника
	}

	if (ActivePosition == 1) {// 1 Отдел охраны труда и техники безопасности
		//сколько в списке должностей
		globalNumberPosition = listPositionDep02_Otd01_Ruk.doljnost.length; 

		//делаем список должностей вместо HTML
		createListHTML(listPositionDep02_Otd01_Ruk.doljnost, 5);

		//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
		var objPerson = {
			Person0: person_4, //person_4 - глобальный объект
			Person1: person_5,
			Person2: person_6,
			Person3: person_7,
			Person4: person_8,
			Person5: person_9,
			Person6: person_10
		}

		//определяем какая должность нажата и создаем под нее таблицу
		var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
		checkOnclickListPosition (tmpSelector, listPositionDep02_Otd01_Ruk,	arbitreCreateTable, objPerson);
		arbitreCreateTable = 1; //уже таблица создавалась

		//делаем список должностей после таблицы
		createList(listPositionDep02_Otd01_Ruk.doljnost, posXListAfterTable, 
				"menu-item-ruk2");
		//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу
		var tmpSelector2 = document.querySelectorAll('.menu-item-ruk2 a');
		checkOnclickListPosition (tmpSelector2, listPositionDep02_Otd01_Ruk, arbitreCreateTable, objPerson);
	}

	if (ActivePosition == 2) {// 2 Технический отдел
		//сколько в списке должностей
		globalNumberPosition = listPositionDep02_Otd02_Ruk.doljnost.length; 
		//делаем список должностей вместо HTML
		createListHTML(listPositionDep02_Otd02_Ruk.doljnost, 5);

		//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
		var objPerson = {
			Person0: person_11, //person_11 - глобальный объект
			Person1: person_12,
			Person2: person_13,
			Person3: person_14
		}

		//определяем какая должность нажата и создаем под нее таблицу
		var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
		checkOnclickListPosition (tmpSelector, listPositionDep02_Otd02_Ruk,	arbitreCreateTable, objPerson);

		arbitreCreateTable = 1; //уже таблица создавалась

		//делаем список должностей после таблицы
		createList(listPositionDep02_Otd02_Ruk.doljnost, posXListAfterTable, 
				"menu-item-ruk2");
		
		//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

		tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
		checkOnclickListPosition (tmpSelector, listPositionDep02_Otd02_Ruk,	arbitreCreateTable, objPerson);
	}

	if (ActivePosition == 3) {// 3 Отдел главного маркшейдера и геолога
		//Руководители или Рабочие
		if (init == 1) {//Руководители
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd03_Ruk.doljnost.length; 
			//делаем список должностей вместо HTML
			createListHTML(listPositionDep02_Otd03_Ruk.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_15, //person_15 - глобальный объект
				Person1: person_16,
				Person2: person_17,
				Person3: person_18,
				Person4: person_19,
				Person5: person_20,
				Person6: person_21
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd03_Ruk,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd03_Ruk.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd03_Ruk,	arbitreCreateTable, objPerson);
		}
		if (init == 2) {// Рабочие
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd03_Rab.doljnost.length; 
			//делаем список должностей вместо HTML

			createListHTML(listPositionDep02_Otd03_Rab.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_22
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd03_Rab,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd03_Rab.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd03_Rab,	arbitreCreateTable, objPerson);
		}
	}

	if (ActivePosition == 4) {// 4 Отдел главного механика и главного энергетика
		//Руководители или Рабочие
		if (init == 1) {//Руководители
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd04_Ruk.doljnost.length; 
			//делаем список должностей вместо HTML
			createListHTML(listPositionDep02_Otd04_Ruk.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_23, 
				Person1: person_24,
				Person2: person_25,
				Person3: person_26
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd04_Ruk,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd04_Ruk.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd04_Ruk,	arbitreCreateTable, objPerson);
		}
		if (init == 2) {// Рабочие
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd04_Rab.doljnost.length; 
			//делаем список должностей вместо HTML

			createListHTML(listPositionDep02_Otd04_Rab.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_27, 
				Person1: person_28,
				Person2: person_29,
				Person3: person_30,
				Person4: person_31,
				Person5: person_32,
				Person6: person_33,
				Person7: person_34_1,
				Person8: person_34_2,
				Person9: person_34_3,
				Person10: person_34_4,
				Person11: person_35,
				Person12: person_36
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd04_Rab,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd04_Rab.doljnost, posXListAfterTable, "menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd04_Rab,	arbitreCreateTable, objPerson);
		}
	}

	if (ActivePosition == 5) {// 5 Автотранспортный цех
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd05_Ruk.doljnost.length; 
			//делаем список должностей вместо HTML
			createListHTML(listPositionDep02_Otd05_Ruk.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_37, 
				Person1: person_38,
				Person2: person_39,
				Person3: person_40,
				Person4: person_41
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd05_Ruk,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd05_Ruk.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd05_Ruk,	arbitreCreateTable, objPerson);
	}

	if (ActivePosition == 6) {// 6 Участок связи и коммуникаций
		//Руководители или Рабочие
		if (init == 1) {//Руководители
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd06_Ruk.doljnost.length; 
			//делаем список должностей вместо HTML
			createListHTML(listPositionDep02_Otd06_Ruk.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_42
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd06_Ruk,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd06_Ruk.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd06_Ruk,	arbitreCreateTable, objPerson);
		}
		if (init == 2) {// Рабочие
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd06_Rab.doljnost.length; 
			//делаем список должностей вместо HTML

			createListHTML(listPositionDep02_Otd06_Rab.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_43
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd06_Rab,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd06_Rab.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd06_Rab,	arbitreCreateTable, objPerson);
		}
	}

	if (ActivePosition == 7) {// 7 Испытательная лаборатория
		//Руководители или Рабочие
		if (init == 1) {//Руководители
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd07_Ruk.doljnost.length; 
			//делаем список должностей вместо HTML
			createListHTML(listPositionDep02_Otd07_Ruk.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_44
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd07_Ruk,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd07_Ruk.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd07_Ruk,	arbitreCreateTable, objPerson);
		}
		if (init == 2) {// Рабочие
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd07_Rab.doljnost.length; 
			//делаем список должностей вместо HTML

			createListHTML(listPositionDep02_Otd07_Rab.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_45,
				Person1: person_46
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd07_Rab,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd07_Rab.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd07_Rab,	arbitreCreateTable, objPerson);
		}
	}

	if (ActivePosition == 8) {// 8 Центр автоматизированных систем управления производством (АСУП)
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd08_Ruk.doljnost.length; 
			//делаем список должностей вместо HTML
			createListHTML(listPositionDep02_Otd08_Ruk.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_47, 
				Person1: person_48,
				Person2: person_49
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd08_Ruk,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd08_Ruk.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd08_Ruk,	arbitreCreateTable, objPerson);
	}

	if (ActivePosition == 9) {// 9 Отдел технического контроля
		//Руководители или Рабочие
		if (init == 1) {//Руководители
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd09_Ruk.doljnost.length; 
			//делаем список должностей вместо HTML
			createListHTML(listPositionDep02_Otd09_Ruk.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_50,
				Person1: person_51,
				Person2: person_52
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd09_Ruk,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd09_Ruk.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd09_Ruk,	arbitreCreateTable, objPerson);
		}
		if (init == 2) {// Рабочие
			//сколько в списке должностей
			globalNumberPosition = listPositionDep02_Otd09_Rab.doljnost.length; 
			//делаем список должностей вместо HTML

			createListHTML(listPositionDep02_Otd09_Rab.doljnost, 5);

			//создаем объект с полным описанием для таблицы (которую создаем при проверке клика на должности)
			var objPerson = {
				Person0: person_53
			}

			//определяем какая должность нажата и создаем под нее таблицу
			var tmpSelector = document.querySelectorAll('.menu-item-ruk a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd09_Rab,	arbitreCreateTable, objPerson);

			arbitreCreateTable = 1; //уже таблица создавалась

			//делаем список должностей после таблицы
			createList(listPositionDep02_Otd09_Rab.doljnost, posXListAfterTable, 
					"menu-item-ruk2");
			//определяем какая должность нажата (под таблицей) и создаем под нее новую таблицу

			tmpSelector = document.querySelectorAll('.menu-item-ruk2 a');
			checkOnclickListPosition (tmpSelector, listPositionDep02_Otd09_Rab,	arbitreCreateTable, objPerson);
		}
	}
}

cycleMain (); 
