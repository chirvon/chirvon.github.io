//используется для страницы 01dep_00.html
//1. Руководство
// ***************************************************************************
//переменные и начальные данные
// массив СИЗ (с xls)

 // ***************************************************************************
 // 01 Руководство
// 00 Генеральный директор
 // ***************************************************************************
	var person_1 = {
		position: 'Генеральный директор', 
		naimenovanie:
					[
						'',//это для всех ШАПКА ТАБЛИЦЫ
						'Костюм ИТР из смесовых тканей или',
						'Костюм ИТР из хлопчатобумажных тканей',
						'Плащ для защиты от воды',
						'Ботинки кожаные с жестким подноском',
						'Очки защитные ',
						'Перчатки трикотажные с облегченным полимерным покрытием',
						'Каска защитная',
						'Подшлемник под каску',
						'Наушники противошумные с креплением на каску или',
						'Вкладыши противошумные',
						'Респиратор',
						'Кремы и эмульсии защитные',
						'Кремы для защиты ног от грибка',
						'Летом дополнительно:',
						'Рубашка из смесовых тканей',
						'Репелленты для защиты от кровососущих насекомых',
						'Зимой дополнительно:',
						'Костюм ИТР утепленный из смесовых тканей',
						'Белье нательное утепленное',
						'Подшлемник утепленный',
						'Перчатки защитные с полимерным покрытием, морозостойкие с утепляющими вкладышами',
						'Ботинки кожаные утепленные ИТР '
					],
		number: 
					[
						'Норма выдачи на год (единицы или комплекты)', //это для всех ШАПКА ТАБЛИЦЫ
						'1',
						'1',
						'До износа',
						'1 пара',
						'До износа',
						'4 пары',
						'1 на 3 года',
						'До износа',
						'До износа',
						'До износа',
						'До износа',
						'100 мл в 1 месяц',
						'100 мл в 1 месяц',
						'',
						'1 на 3 года',
						'200 мл в 1 месяц',
						'',
						'1 на 2 года',
						'2 комплекта',
						'1',
						'1 пара',
						'1 пара на 2,5 года'
					]
	};

	var listPositionDep01_Otd00_Ruk = {
		doljnost: //список должностей этого отдела
			[	
				'Генеральный директор'
			],
		linkFull: //ссылка где находятся полное описание СИЗ
			[
				'../html/01dep_00_full00.html'
			]
	};
 // ***************************************************************************
 // 01 Руководство
// 01 Директор
 // ***************************************************************************
	var person_2 = {
		position: 'Директор', 
		naimenovanie:
					[
						'',//это для всех ШАПКА ТАБЛИЦЫ
						'Костюм ИТР из смесовых тканей или',
						'Костюм ИТР из хлопчатобумажных тканей',
						'Плащ для защиты от воды',
						'Ботинки кожаные с жестким подноском',
						'Очки защитные ',
						'Перчатки трикотажные с облегченным полимерным покрытием',
						'Каска защитная',
						'Подшлемник под каску',
						'Наушники противошумные с креплением на каску или',
						'Вкладыши противошумные',
						'Респиратор',
						'Кремы и эмульсии защитные',
						'Кремы для защиты ног от грибка',
						'Летом дополнительно:',
						'Рубашка из смесовых тканей',
						'Репелленты для защиты от кровососущих насекомых',
						'Зимой дополнительно:',
						'Костюм ИТР утепленный из смесовых тканей',
						'Белье нательное утепленное',
						'Подшлемник утепленный',
						'Перчатки защитные с полимерным покрытием, морозостойкие с утепляющими вкладышами',
						'Ботинки кожаные утепленные ИТР '
					],
		number: 
					[
						'Норма выдачи на год (единицы или комплекты)', //это для всех ШАПКА ТАБЛИЦЫ
						'1',
						'1',
						'До износа',
						'1 пара',
						'До износа',
						'4 пары',
						'1 на 3 года',
						'До износа',
						'До износа',
						'До износа',
						'До износа',
						'100 мл в 1 месяц',
						'100 мл в 1 месяц',
						'',
						'1 на 3 года',
						'200 мл в 1 месяц',
						'',
						'1 на 2 года',
						'2 комплекта',
						'1',
						'1 пара',
						'1 пара на 2,5 года'
					]
	};

	var listPositionDep01_Otd01_Ruk = {
		doljnost: //список должностей этого отдела
			[	
				'Директор'
			],
		linkFull: //ссылка где находятся полное описание СИЗ
			[
				'../html/01dep_01_full00.html'
			]
	};

// *********
var posXListAfterTable = 800;
var arbitreCreateListHTML = 0; //арбитр, исп для удаления ранее созданых списков 
var arbitreTable = 0; //арбитр, исп для удаления ранее созданых таблиц 
var arbitreCreateTable = 0; //арбитр определения создания таблицы: первый раз	
var globalNumberPosition = 0; //сколько в списке должностей (используется для обработчика клика по списку)
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
        //00 Генеральный директор
 			if (paramValue == 'str_001') {
				restorePerson (listPositionDep01_Otd00_Ruk.linkFull[0], person_1);
			}           
        //01 Директор
            if (paramValue == 'str_002') {
				restorePerson (listPositionDep01_Otd01_Ruk.linkFull[0], person_2);
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
	console.log(ActivePosition.naimenovanie.length);
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
	    				td.style.color = '#ff6827'; //цвет красный
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
function cycleMain (){
	if (ActivePosition == 0) {// 0 Генеральный директор
			//создаем под должность таблицу
			linkFull.setAttribute('href', listPositionDep01_Otd00_Ruk.linkFull[0]);//поменяем ссылку ПОДРОБНО
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
			createTable (person_1, -100); //создадим таблицу для сотрудника
	}

	if (ActivePosition == 1) {// 1 Директор
			//создаем под должность таблицу
			linkFull.setAttribute('href', listPositionDep01_Otd01_Ruk.linkFull[0]);//поменяем ссылку ПОДРОБНО
			setActiveContentShort(); // отобразим wrapper СИЗ коротко
			createTable (person_2, -100); //создадим таблицу для сотрудника
	}
}

cycleMain (); 
