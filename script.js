document.addEventListener("DOMContentLoaded", () => {
//9
let toggle = document.querySelector('[data-js="t9-toggle"]');
let text = document.querySelector('[data-js="t9-text"]');

function ShowText() {
    if (text.hidden) {
    text.hidden = false;
    toggle.textContent = 'Скрыть';
  } else {
    text.hidden = true;
    toggle.textContent = 'Показать';
  }
}
toggle.addEventListener('click', ShowText);

//1
let button = document.querySelector('[data-js="t1-btn"]');
let hexOutput = document.querySelector('[data-js="t1-hex"]');

button.onclick = function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    let hex = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    
    button.style.backgroundColor = hex;
    hexOutput.innerHTML = hex;
}

//2
let input = document.querySelector('[data-js="t2-input"]');
let count = document.querySelector('[data-js="t2-count"]');
addEventListener('input', function(){
let length = input.value.length;
count.textContent = length;
})

//3
//3 - ИСПРАВЛЕННЫЙ КОД
let input3 = document.querySelector('#task-3 [data-js="t3-input"]');
let button3 = document.querySelector('#task-3 [data-js="t3-add"]');
let list3 = document.querySelector('#task-3 [data-js="t3-list"]');

console.log('input 3-й задачи:', input3);
console.log('button 3-й задачи:', button3);
console.log('list 3-й задачи:', list3);

button3.onclick = function() {
    let text = input3.value;
    
    if (text.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = text;
        list3.appendChild(li);
        input3.value = '';
        console.log('Добавлено!');
    }
}

//4
//4 - Счётчик (короткий вариант)
let minusBtn = document.querySelector('#task-4 [data-js="t4-minus"]');
let plusBtn = document.querySelector('#task-4 [data-js="t4-plus"]');
let resetBtn = document.querySelector('#task-4 [data-js="t4-reset"]');
let counterOut = document.querySelector('#task-4 [data-js="t4-out"]');

let count2 = 0;

function updateCounter(value) {
    count2 = value;
    counterOut.textContent = count2;
}

minusBtn.onclick = () => updateCounter(count2 - 1);
plusBtn.onclick = () => updateCounter(count2 + 1);
resetBtn.onclick = () => updateCounter(0);
  
//5
let openBtn = document.querySelector('#task-5 [data-js="t5-open"]');
let modal = document.querySelector('#task-5 [data-js="t5-modal"]');
let closeBtn = document.querySelector('#task-5 [data-js="t5-close"]');
let backdrop = document.querySelector('#task-5 [data-js="t5-backdrop"]');

function openModal() {
    modal.hidden = false;
}

function closeModal() {
    modal.hidden = true;
}

openBtn.onclick = openModal;
closeBtn.onclick = closeModal;

//6
let tabs = document.querySelectorAll('#task-6 .tab');
let panes = document.querySelectorAll('#task-6 .pane');

for (let tab of tabs) {
    tab.onclick = function() {
        // Убираем активный класс у всех
        for (let t of tabs) t.classList.remove('is-active');
        for (let p of panes) p.classList.remove('is-active');
        
        // Добавляем активный класс текущей вкладке
        this.classList.add('is-active');
        
        // Показываем нужную панель
        let tabName = this.dataset.tab;
        document.querySelector('#task-6 [data-pane="' + tabName + '"]').classList.add('is-active');
    }
}
//7
let input7 = document.querySelector('#task-7 [data-js="t7-input"]');
let button7 = document.querySelector('#task-7 [data-js="t7-run"]');
let output7 = document.querySelector('#task-7 [data-js="t7-out"]');

button7.onclick = function() {
    let text = input7.value;
    
    // Разворачиваем строку
    let reversed = text.split('').reverse().join('');
    
    // Показываем результат
    output7.textContent = reversed;
}
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
});
