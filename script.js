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
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr[i] = [];
    for (let k = 0; k < 4; k++) {
      arr[i].push(0);
      arr[i].push(1);
    }
    if (arr[i] == arr[1] || 
        arr[i] == arr[3] || 
        arr[i] == arr[5] || 
        arr[i] == arr[7]
        ) {
      arr[i].reverse();
    }
  }
  
  let field = document.querySelector('.field');
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] == 0) {
        let white = document.createElement('div')
        white.classList.add('white');
        field.append(white);
      } else {
        let black = document.createElement('div');
        black.classList.add('black');
        field.append(black);
      }
    }
  }
}
f12();

// task 13 --------------------
// Создайте массив, который подходит под следующие условия:
let b = [
  [, 4],
  [],
  [],
  [, , 5]
];
console.log(b[0][1]);
console.log(b[3][2]);

// task 14 --------------------
// Создайте массив, который подходит под следующие условия:
let c = [
  [, 4],
  [],
  5
];
console.log(c[0][1]);
console.log(c[2]);

// task 15 --------------------
// Создайте массив, который подходит под следующие условия:
let d = [
  [, 4],
  [],
  [, , , 5],
  [],
  [],
  [],
  [4, 5]
];
console.log(d[0][1]);
console.log(d[2][3]);
console.log(d[6]);

// task 16 --------------------
// Создайте массив, который подходит под следующие условия:
let e = [
  [, 4],
  [],
  [, , ,5],
  [],
  [],
  [],
  [
    [, 6]
  ]
];
console.log(e[0][1]);
console.log(e[2][3]);
console.log(e[6][0][1]);
// task 17 --------------------
// Создайте массив, который подходит под следующие условия:
// let f = [
//   [
//     [, [, , ,]]
//   ]
// ];
// console.log(f[0][1][3]);

// task 18 --------------------
// Создайте массив, который подходит под следующие условия:

//Task 19
//Выведите на страницу сумму элементов массива a(только чисел).

//Task 20
//Создайте массив, который эмулирует доску для крестиков - ноликов, 
//напишите все возможные выиграшные комбинации, 
//т.е.a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.