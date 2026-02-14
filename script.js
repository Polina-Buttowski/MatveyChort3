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
        for (let t of tabs) t.classList.remove('is-active');
        for (let p of panes) p.classList.remove('is-active');
    
        this.classList.add('is-active');
        
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

    let reversed = text.split('').reverse().join('');
    

    output7.textContent = reversed;
}

//8
let inputA = document.querySelector('#task-8 [data-js="t8-a"]');
let inputB = document.querySelector('#task-8 [data-js="t8-b"]');
let addBtn = document.querySelector('#task-8 [data-js="t8-add"]');
let mulBtn = document.querySelector('#task-8 [data-js="t8-mul"]');
let output = document.querySelector('#task-8 [data-js="t8-out"]');

function showEasterEgg() {
    let img = document.createElement('img');
    img.src = 'img/ahahah.jpg';
    img.style.position = 'fixed';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.zIndex = '9999';
    img.style.cursor = 'pointer';
    
    img.onclick = function() {
        document.body.removeChild(this);
    };
    

    document.body.appendChild(img);
}

addBtn.onclick = function() {
    let a = parseFloat(inputA.value);
    let b = parseFloat(inputB.value);
    
    // Проверка на пасхалку (6 и 7)
    if (a === 6 && b === 7) {
        showEasterEgg();
    } else {
        let result = a + b;
        output.textContent = isNaN(result) ? 'NaN' : result;
    }
}

mulBtn.onclick = function() {
    let a = parseFloat(inputA.value);
    let b = parseFloat(inputB.value);
    
    // Проверка на пасхалку (6 и 7)
    if (a === 6 && b === 7) {
        showEasterEgg();
    } else {
        let result = a * b;
        output.textContent = isNaN(result) ? 'NaN' : result;
    }
}

//14 
let button14 = document.querySelector('#task-14 [data-js="t14-next"]');
let output14 = document.querySelector('#task-14 [data-js="t14-out"]');

let quotes = [
    "и поесть в груше и после 1 пары съебать в пивоварню",
    "можно уйти пж",
    "я сегодня съела вафельки, бульдак, попкорн, яйца, онигири, еще буду есть бутеры и бекончик",
    "сикс севееен",
    "кому нужен какао",
    "полмна",
    "я хочу кофе. я в. ванпрайм",
    "я щас включу холоу",
    "дате орео",
    "тихо"
];

button14.onclick = function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    output14.textContent = quotes[randomIndex];
}



//15 - Перетаскивание
let item = document.querySelector('#task-15 [data-js="t15-item"]');
let area = document.querySelector('#task-15 [data-js="t15-area"]');
let coords = document.querySelector('#task-15 [data-js="t15-coords"]');

let shiftX, shiftY; 

item.onmousedown = function(event) {
    event.preventDefault(); 
    shiftX = event.clientX - item.getBoundingClientRect().left;
    shiftY = event.clientY - item.getBoundingClientRect().top;

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
}

function onMouseMove(event) {

    let left = event.clientX - shiftX;
    let top = event.clientY - shiftY;
    let areaRect = area.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    

    if (left < areaRect.left) left = areaRect.left;
    if (top < areaRect.top) top = areaRect.top;
    if (left + itemRect.width > areaRect.right) left = areaRect.right - itemRect.width;
    if (top + itemRect.height > areaRect.bottom) top = areaRect.bottom - itemRect.height;

    item.style.left = (left - areaRect.left) + 'px';
    item.style.top = (top - areaRect.top) + 'px';
    
    let x = Math.round(left - areaRect.left);
    let y = Math.round(top - areaRect.top);
    coords.textContent = 'x: ' + x + ', y: ' + y;
}

function onMouseUp() {
    document.onmousemove = null;
    document.onmouseup = null;
}

item.ondragstart = function() {
    return false;
}

//12
let plusBtn2 = document.querySelector('#task-12 [data-js="t12-plus"]');
let progressBar = document.querySelector('#task-12 [data-js="t12-bar"]');
let progressLabel = document.querySelector('#task-12 [data-js="t12-label"]');

let percent = 0;

plusBtn2.onclick = function() {
    if (percent < 100) {
        percent = percent + 10;
        if (percent > 100) percent = 100;
        
        progressBar.style.width = percent + '%';
        progressLabel.textContent = percent + '%';
    }
}

  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
});
