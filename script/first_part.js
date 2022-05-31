//0)Создать переменную...
function zeroTask(a){
  if(typeof a == 'number'){
    return "Это число"
  }else if(typeof a == 'string'){
  return "Это строка"
  }else{
    return "Неизвестно"
  }
}

function firstTask(){
  let str=prompt("Введите одно из следующих слов: Дождь, Солнце, Снег", 0);
  switch(str){
    case "Дождь":
      alert("Сегодня дождливо");
    break;
    case "Солнце":
      alert("Сегодня солнечно");
    case "Снег":
      alert("Погода довольно снежная");
    default:
      alert("Я вас не понял");
    break;
  }
}

function secondTask(){
  let firstResult = "";
  let secondResult = "";
  let thirdResult = "";
  for (var i = 0; i < 40; i++) {
    firstResult += i + " ";
  }
  let k = 0;
  while(k < 40){
    secondResult += k + " ";
    k++;
  }
  let cnt = 0;
  do{
    thirdResult += cnt + " "
    cnt++;
  }while (cnt<40)
  alert(firstResult+'\n'+secondResult+'\n'+thirdResult)
}

function thirdTask(){
  while (true) {
    alert("Вирус")
  }
}

function forthTask(){
  let isNotRightValue = true
  while(isNotRightValue){
    let str = prompt("Введите число большее или равное 5", 0);
    if(str == null){
      isNotRightValue = false;
      continue;
    }
    let parsed = parseInt(str)
    if(isNaN(parsed)){
      alert("Это не число, повторите ввод");
      continue;
    }
    if(parsed < 5){
      alert("Это число меньше 5");
      continue;
    }else{
      alert("Успешно!");
      isNotRightValue = false;
    }
  }
}

function fifthTask(){
  let result = ""
  for (var i = 8; i < 21; i+=2) {
    result += i + " ";
  }
  alert(result)
}

function sixthTask(){
  var result = ""
  for (var i = 1; i < 8; i+=2) {
    if(i != 5) result+= i + " ";
  }
  alert(result);
}
