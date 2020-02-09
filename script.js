// task 1 --------------------
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
const a = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [4, 5, 6],
  ['d', 'e', 'f'],
  [7, 8, 9],
];

function f1() {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      result += a[i][k] + ' ';
    }
    result += '<br>';
  }
  document.querySelector('.out-1').innerHTML = result;
}
document.querySelector('.btn-1').onclick = f1;


// task 2 --------------------
// Выведите на страницу символ 3 из массива a.
function f2() {
  document.querySelector('.out-2').innerHTML = a[0][2];
}
document.querySelector('.btn-2').onclick = f2;


// task 3 --------------------
// Выведите на страницу символ e из массива a.
function f3() {
  document.querySelector('.out-3').innerHTML = a[3][1];
}
document.querySelector('.btn-3').onclick = f3;

// task 4 --------------------
// Выведите на страницу содержимое третьего вложенного массива в массиве a.
function f4() {
  document.querySelector('.out-4').innerHTML = a[3];
}
document.querySelector('.btn-4').onclick = f4;

// task 5 --------------------
// Выведите на страницу только первые элементы вложенных массивов массива a.
function f5() {
  document.querySelector('.out-5').innerHTML = a[0][0] + ' ' + a[1][0] + ' ' + a[2][0] + ' ' + a[3][0] + ' ' + a[4][0];
}
document.querySelector('.btn-5').onclick = f5;

// task 6 --------------------
// Выведите на страницу только четные вложенные массивы массива a.
function f6() {
  let out = document.querySelector('.out-6');
  let result = '';
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      if (a[i][k] % 2 === 0) {
        result += a[i][k] + ' ';
      }
    }
  }
  out.innerHTML = result;
}
document.querySelector('.btn-6').onclick = f6;

// task 7 --------------------
// Выведите на страницу только числа из массива a.
function f7() {
  let out = document.querySelector('.out-7');
  let result = '';
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      if (typeof a[i][k] === 'number') {
        result += a[i][k] + ' ';
      }
    }
  }
  out.innerHTML = result;
}
document.querySelector('.btn-7').onclick = f7;

// task 8 --------------------
// Выведите на страницу длины вложенных массивов в массив a.
function f8() {
  let out = document.querySelector('.out-8');
  let count = 1;
  for (let i = 0; i < a.length; i++) {
    out.innerHTML += 'Длина вложенного массива ' + count + ' = ' + a[i].length + '<br>';
    count++;
  }
}
document.querySelector('.btn-8').onclick = f8;

// task 9 --------------------
// Выведите на страницу элементы массива a в обратном порядке, т.е.
function f9() {
  let out = document.querySelector('.out-9');
  let result = '';
  for (let i = a.length - 1; i >= 0; i--) {
    for (let k = a[i].length - 1; k >= 0; k--) {
      result += a[i][k];
    }
  }
  out.innerHTML = result;
}
document.querySelector('.btn-9').onclick = f9;

// task 10 --------------------
// Выведите на страницу элементы массива a в обратном порядке, т.е.
function f10() {
  let out = document.querySelector('.out-10');
  let result = '';
  for (let i = 0; i < a.length; i++) {
    for (let k = a[i].length - 1; k >= 0; k--) {
      result += a[i][k] + ' ';
    }
    result += '<br>';
  }
  out.innerHTML = result;
}
document.querySelector('.btn-10').onclick = f10;

// task 11 --------------------
// Создайте массив шахматную доску.Белые - 0, черные - 1. Выведите на страницу.
function f11() {
  let out = document.querySelector('.out-11');
  let a = [0, 1];
  let result = '';
  for (let i = 0; i < 8; i++) {
    for (let k = 0; k < 4; k++) {
      if (i == 0 || i % 2 == 0) {
        result += a[0] + ' ' + a[1] + ' ';
      } else {
        result += a[1] + ' ' + a[0] + ' ';
      }
    }
    result += '<br>';
  }
  out.innerHTML = result;
}
document.querySelector('.btn-11').onclick = f11;

// task 12 --------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закрашенные нужным цветом.
function f12() {
  let out = document.querySelector('.out-12');
  let result = '';
  let arr = [0, 1];

  let whiteSector = document.createElement('div');
  whiteSector.style.width = '32px';
  whiteSector.style.height = '32px';
  whiteSector.style.display = 'inline-block';
  whiteSector.style.background = 'tomato';
  // let whiteScale = out.appendChild(whiteSector);

  let blackSector = document.createElement('div');
  blackSector.style.width = '32px';
  blackSector.style.height = '32px';
  blackSector.style.display = 'inline-block';
  blackSector.style.background = 'black';
  // let blackScale = out.appendChild(blackSector);

  for (let i = 0; i < 8; i++) {

    result += '<br>';
  }

  out.innerHTML = result;
}
document.querySelector('.btn-12').onclick = f12;



// task 13 --------------------

// task 14 --------------------

// task 15 --------------------