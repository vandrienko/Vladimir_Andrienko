
//Кнопка
const btn = document.getElementById('btn');
 //выподающие меню
let select = document.getElementById('sel');
// Лейбл для вывода текста
let textOut = document.querySelector('.label_out'); 


//Вызов функций
sel.addEventListener('click', onBtnAndOff);
btn.addEventListener('click', myFunction);


function onBtnAndOff() {
    var choice = select.value;
    if (choice === 'task1') {
        enablElem (btn);
    } else if (choice === 'task2') {
        enablElem (btn);
    } else if (choice === 'task3') {
        enablElem (btn);
    } else {
        disablElem (btn);
    }
}

function myFunction() {
    var choice = select.value;
    if (choice === 'task1') {
        textOut.textContent = 'Вывод результата условие 1';
        task1();
    } else if (choice === 'task2') {        
        textOut.textContent = 'Вывод результата условие 2.';
        task2();
    } else if (choice === 'task3') {
        task3();
    } else {
        textOut.textContent = 'Выберете значеня';
    }
}

function task1() {
    let  inputData= document.getElementById('input_data').value;
    inputData >= 7 ? textOut.textContent = 'Привет' : textOut.textContent = 'Значение меньше 7';
}

function task2() {
    let inputData = document.getElementById('input_data').value;
    if (inputData === 'Вячеслав') {
        textOut.textContent = 'Привет ' + inputData;
    }
        else if (inputData === 'Viacheslav') {
        textOut.textContent = 'Hello ' + inputData;
    }
    else {
        textOut.textContent = 'Нет такого имени';
    }
}

function task3() {
let arr = document.getElementById('input_data').value.split(' ');
var add = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i] != 0 && arr[i] % 3 == 0) {
        add.push(arr[i])
    }
}
textOut.textContent = add;
}

function disablElem (teg) {
    teg.setAttribute("disabled", "disabled");
}

function enablElem (teg) {
    teg.removeAttribute("disabled", "disabled");
}