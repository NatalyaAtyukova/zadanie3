function task1(){
  let arr1 = [1, 2, 3]
  let arr2 = new Array(1, 2, 3)
  let arr3 = Array.of(1, 2, 3)
  alert(arr1)
  alert(arr2)
  alert(arr3)
}

function task2(){
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  alert(arr)
  arr[4] = 111
  alert(arr)
}

function task3(){
  let arr = [1,2,3,4,5]
  alert(arr)
  alert("Длина: " + arr.length)
}

function task4(){
  let arr = [1,2,3,4,5]
  for (var i = 0; i < arr.length; i++) {
    alert(arr[i])
  }
}

function task5() {
  let arr1 = [1, 2, 3]
  let arr2 = [4, 5]
  alert("Первый массив:" + arr1)
  alert("Второй массив:" + arr2)
  let arr3 = arr1.concat(arr2)
  alert("Объединенный массив:" + arr3)
}

function task6() {
  let arr1 = [1, 2, 3]
  let arr2 = [4, 5]
  alert("Первый массив:" + arr1)
  alert("Второй массив:" + arr2)
  let arr3 = arr1.concat(arr2)
  alert("Объединенный массив:" + arr3)
  alert("Последнее значение: " + arr3.pop())
  alert("Массив после удаления: " + arr3)
}

function task8(){
  let arr1 = [1, 2, 3]
  let arr2 = [4, 5]
  alert("Первый массив:" + arr1)
  alert("Второй массив:" + arr2)
  let arr3 = arr1.concat(arr2)
  alert("Объединенный массив:" + arr3)
  let additionalElement = 111;
  alert("Элемент который будет добавлен: " + additionalElement)
  arr3.unshift(additionalElement)
  alert("Массив после добавления: " + arr3)
}

function task9(){
  let currentDate = new Date();
  alert(currentDate)
}

function task10(){
  let currentDate = new Date();
  alert(currentDate.getDate() + " " + getMonthNamingByNumber(currentDate.getMonth() + 1) + " " + currentDate.getFullYear() + " года")
}

function task11(){
  let firstNumber = getRandomInt(0, 50);
  alert("Первое число: " + firstNumber)
  let secondNumber = getRandomInt(0, 50);
  alert("Второе число: " + secondNumber)
  alert("Умножение:" + firstNumber * secondNumber)
}

function getMonthNamingByNumber(number){
  switch (number) {
    case 1:
      return "Января"
      break;
    case 2:
      return "Февраля"
      break;
    case 3:
      return "Марта"
      break;
    case 4:
      return "Апреля"
      break;
    case 5:
      return "Мая"
      break;
    case 6:
      return "Июня"
      break;
    case 7:
      return "Июля"
      break;
    case 8:
      return "Августа"
      break;
    case 9:
      return "Сентебря"
      break;
    case 10:
      return "Октября"
      break;
    case 11:
      return "Ноября"
      break;
    case 12:
      return "Декабря"
      break;
    default:
      return "Неверный номер"
    break;
  }
}

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
