// 02 Управление по техническому развитию и подготовке производства

var posXListAfterTable = 800;
var arbitreCreateListHTML = 0; //арбитр, исп для удаления ранее созданых списков 
var arbitreTable = 0; //арбитр, исп для удаления ранее созданых таблиц 
var arbitreCreateTable = 0; //арбитр определения создания таблицы: первый раз	
var globalNumberPosition = 0; //сколько в списке должностей (используется для обработчика клика по списку)
var	globalNumberNotCreate = 200; //какой номер выбран в спике. что бы его потом не создавать
// ***************************************************************************


// ***************************************************************************
// ОБЪЯВЛЕНИЕ ВСЕХ ФУНКЦИЙ
// ***************************************************************************



//функция для чтения передаваемых параметров от страницы полный СИЗ
// function OnLoad() {
//     var paramValue = window.location.href.split("?")[1].split("=")[1];
//     //00 Главный инженер   
//  			if (paramValue == 'str_003') {
// 				restorePerson (listPositionDep02_Otd00_Ruk.linkFull[0], person_3);
// 			}           
//     //01 Отдел охраны труда и техники безопасности
//             if (paramValue == 'str_004') {
// 				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[0], person_4);
// 			}
//  			if (paramValue == 'str_005') {
// 				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[1], person_5);
// 			}
//  			if (paramValue == 'str_006') {
// 				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[2], person_6);
// 			}
//  			if (paramValue == 'str_007') {
// 				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[3], person_7);
// 			}
//  			if (paramValue == 'str_008') {
// 				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[4], person_8);
// 			}
//  			if (paramValue == 'str_009') {
// 				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[5], person_9);
// 			}
//  			if (paramValue == 'str_010') {
// 				restorePerson (listPositionDep02_Otd01_Ruk.linkFull[6], person_10);
// 			}
// 	//02 ТЕХНИЧЕСКИЙ ОТДЕЛ
// 			if (paramValue == 'str_011') {
// 				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[0], person_11);
// 			}
// 			if (paramValue == 'str_012') {
// 				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[1], person_12);
// 			}
// 			if (paramValue == 'str_013') {
// 				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[2], person_13);
// 			}
// 			if (paramValue == 'str_014') {
// 				restorePerson (listPositionDep02_Otd02_Ruk.linkFull[3], person_14);
// 			}
// 	//03 Отдел главного маркшейдера и геолога
// 			if (paramValue == 'str_015') {
// 				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[0], person_15);
// 			}
// 			if (paramValue == 'str_016') {
// 				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[1], person_16);
// 			}
// 			if (paramValue == 'str_017') {
// 				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[2], person_17);
// 			}
// 			if (paramValue == 'str_018') {
// 				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[3], person_18);
// 			}
// 			if (paramValue == 'str_019') {
// 				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[4], person_19);
// 			}
// 			if (paramValue == 'str_020') {
// 				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[5], person_20);
// 			}
// 			if (paramValue == 'str_021') {
// 				restorePerson (listPositionDep02_Otd03_Ruk.linkFull[6], person_21);
// 			}
// 			//Рабочие
// 			if (paramValue == 'str_022') {
// 				restorePerson (listPositionDep02_Otd03_Rab.linkFull[0], person_22);
// 				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
// 			}
// 	//04 Отдел главного механика и главного энергетика			
// 			if (paramValue == 'str_023') {
// 				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[0], person_23);
// 			}
// 			if (paramValue == 'str_024') {
// 				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[1], person_24);
// 			}
// 			if (paramValue == 'str_025') {
// 				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[2], person_25);
// 			}
// 			if (paramValue == 'str_026') {
// 				restorePerson (listPositionDep02_Otd04_Ruk.linkFull[3], person_26);
// 			}
// 			//Рабочие
// 			if (paramValue == 'str_027') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[0], person_27);
// 				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
// 			}
// 			if (paramValue == 'str_028') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[1], person_28);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_029') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[2], person_29);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_030') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[3], person_30);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_031') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[4], person_31);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_032') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[5], person_32);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_033') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[6], person_33);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_034_1') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[7], person_34_1);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_034_2') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[8], person_34_2);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_034_3') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[9], person_34_3);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_034_4') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[10], person_34_4);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_035') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[11], person_35);
// 				restorePersonRab();
// 			}
// 			if (paramValue == 'str_036') {
// 				restorePerson (listPositionDep02_Otd04_Rab.linkFull[12], person_36);
// 				restorePersonRab();
// 			}
// 	//05 Автотранспортный цех
// 			if (paramValue == 'str_037') {
// 				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[0], person_37);
// 			}
// 			if (paramValue == 'str_038') {
// 				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[1], person_38);
// 			}
// 			if (paramValue == 'str_039') {
// 				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[2], person_39);
// 			}
// 			if (paramValue == 'str_040') {
// 				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[3], person_40);
// 			}
// 			if (paramValue == 'str_041') {
// 				restorePerson (listPositionDep02_Otd05_Ruk.linkFull[4], person_41);
// 			}
// 	//06 Участок связи и коммуникаций
// 			if (paramValue == 'str_042') {
// 				restorePerson (listPositionDep02_Otd06_Ruk.linkFull[0], person_42);
// 			}

// 			//Рабочие
// 			if (paramValue == 'str_043') {
// 				restorePerson (listPositionDep02_Otd06_Rab.linkFull[0], person_43);
// 				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
// 			}
// 	//07 Испытательная лаборатория
// 			if (paramValue == 'str_044') {
// 				restorePerson (listPositionDep02_Otd07_Ruk.linkFull[0], person_44);
// 			}

// 			//Рабочие
// 			if (paramValue == 'str_045') {
// 				restorePerson (listPositionDep02_Otd07_Rab.linkFull[0], person_45);
// 				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
// 			}

// 			if (paramValue == 'str_046') {
// 				restorePerson (listPositionDep02_Otd07_Rab.linkFull[1], person_46);
// 				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
// 			}
// 	//08 Центр автоматизированных систем управления производством (АСУП)
// 			if (paramValue == 'str_047') {
// 				restorePerson (listPositionDep02_Otd08_Ruk.linkFull[0], person_47);
// 			}
// 			if (paramValue == 'str_048') {
// 				restorePerson (listPositionDep02_Otd08_Ruk.linkFull[1], person_48);
// 			}
// 			if (paramValue == 'str_049') {
// 				restorePerson (listPositionDep02_Otd08_Ruk.linkFull[2], person_49);
// 			}
// 	//09 Отдел технического контроля
// 			if (paramValue == 'str_050') {
// 				restorePerson (listPositionDep02_Otd09_Ruk.linkFull[0], person_50);
// 			}
// 			if (paramValue == 'str_051') {
// 				restorePerson (listPositionDep02_Otd09_Ruk.linkFull[1], person_51);
// 			}
// 			if (paramValue == 'str_052') {
// 				restorePerson (listPositionDep02_Otd09_Ruk.linkFull[2], person_52);
// 			}

// 			//Рабочие
// 			if (paramValue == 'str_053') {
// 				restorePerson (listPositionDep02_Otd09_Rab.linkFull[0], person_53);
// 				restorePersonRab();	//использовать дополнительно для РАБОЧИЕ
// 			}
// }


//запускаем отображение блока с полным описанием СИЗ для выбранной должности
function setActiveContentFull () {
	document.getElementById('ContentFull').style.display='block';
}

setActiveContentFull(); // отобразим wrapper СИЗ подробно

//linkFull.setAttribute('href', list.linkFull[0]);//поменяем ссылку ПОДРОБНО
//createTable (objectPersons.Person0, 0); //создадим таблицу для сотрудника 1



//удалим предыдущую таблицу
function deleteTable (){
	var wrapperTable = document.querySelector('.tableContent');
	var tableCur = wrapperTable.querySelector('table');
	wrapperTable.removeChild(tableCur);
	arbitreTable = 0;
}
// function editList(i) {
// 	var wrapperTable = document.querySelector('#ContentFull');
// 	var tableCur = wrapperTable.querySelector('ul');
// 	wrapperTable.removeChild(tableCur);
// }
// function deleteList (){
// 	var wrapperTable = document.querySelector('#ContentFull');
// 	var tableCur = wrapperTable.querySelector('ul');
// 	wrapperTable.removeChild(tableCur);
// 	if (arbitreTable == 1) {
// 		deleteTable ();
// 	}


// 	if (arbitreCreateListHTML == 1) {
// 		var wrapperTable = document.querySelector('#rightContent1');
// 		var tableCur = wrapperTable.querySelector('ul');
// 		wrapperTable.removeChild(tableCur);
// 		arbitreCreateListHTML == 0;
// 	}

// 	if (arbitreCreateListHTML == 2) {
// 		var wrapperTable = document.querySelector('#rightContent2');
// 		var tableCur = wrapperTable.querySelector('ul');
// 		wrapperTable.removeChild(tableCur);
// 		arbitreCreateListHTML == 0;
// 	}
// }
function createTable (ActivePosition, manualCorrectPosX) {
	var columns = 2; //кол-во столбцов
	var rows = ActivePosition.naimenovanie.length; //кол-во элементов в массиве naimenovanie
	//т.е. это кол-во создаваемых строк таблицы

	Name_Position.innerHTML = ActivePosition.position; //отобразим текущую должность (красным )
	var table = document.createElement("table");
		table.setAttribute("width", '100%');
	    //table.setAttribute("height", '30px');
  


/*


		var newBut = document.createElement('img');
		newBut.setAttribute('src','/img/img2.jpg');
		newBut.setAttribute('alt', 'img2');
		newBut.setAttribute('id', 'img2');
		newBut = document.getElementById('buts').appendChild(newBut);


*/



/*

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
*/
	var wrapper = document.querySelector('.tableContent'); //куда будем добавлять новый элемент
	//wrapper.appendChild(table);

	//увеличим wrapper под размер таблицы
	
	var sizeHeightTable =	50 * rows;// кол-во строк в таблице
	sizeHeightTable = sizeHeightTable + 70;

	if (sizeHeightTable < 400) {sizeHeightTable = 400;} //это минимальный размер

	var wrapper2 = document.querySelector('#ContentFull');
	if (rows > 65) {sizeHeightTable = sizeHeightTable - 300;}
	//wrapper2.style.height = sizeHeightTable + 'px';


	//перенесем список после таблицы под таблицу
	posXListAfterTable = sizeHeightTable - 150;
	
		if (rows > 65) {posXListAfterTable = posXListAfterTable - 200;}
	

	//перенесем нижний логотип
	var wrapper3 = document.querySelector('.footer');

	wrapper3.style.top = (posXListAfterTable - 280 + manualCorrectPosX + globalPosX) + 'px';


	//уберем фон для wrapper
	var wrapper4 = document.querySelector('.wrapper');
		wrapper4.style.background = 'none';

	arbitreTable = 1; //таблица создана (арбитр для последующего удаления)
}

//тут хранится ссылка на Должность (красная) и ее значение мы потом меняем
var Name_Position = document.querySelector('#Name_Position'); 

//ссылка Кратко
var linkFull = document.querySelector('#LinkPodrobno'); 

var globalPosX = 0;
// ***************************************************************************
// объявление переменных и функций закончено
// ТЕЛО ПРОГРАММЫ
// ***************************************************************************


function cycleMain (){

	//linkFull.setAttribute('href', listPositionDep02_Otd03_Ruk.linkFull[0]);//поменяем ссылку ПОДРОБНО
	setActiveContentFull(); // отобразим wrapper СИЗ коротко
	createTable (person_15, 5); //создадим таблицу для сотрудника
}

cycleMain (); 
