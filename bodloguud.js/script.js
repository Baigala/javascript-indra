// https://leetcode.com/
// visualgo.net
// sum(n) = ((a(1) + a(n)) / 2) * n

// var student1 = {
//     ner: "a",
//     number: "99221111",
//     email: "a@gmail.com"
// }
// var student2 = {
//     ner: "b",
//     number: 90444444,
//     email: "b@gmail.com"
// }

// var students = [student1, student2, student3, student4, student5];
// var email = prompt("haih emailee oruulna u");
// var mobiUsers = [];
// var oldson = false;
// for(var i = 0; i < students.length; i++){
//     if(email == students[i].email){
//         console.log(students[i]);
//         oldson = true;
//     }
    
//     if(students[i].number.toString().split("").slice(0,2).join("") ==  "99" || students[i].number.toString().split("").slice(0, 2).join("") === "95"){
//         mobiUsers.push(students[i]);
//     }
// }
// if(!oldson){
//     alert("oldsongui.")
// }
// console.log(mobiUsers);

// 1. Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үрвэр 1000-с их бол үрвэрийг буцааж, 1000-с бага бол нийлбэрийг буцаах функц бич.
function ex1(num1, num2) {
  var urjwer = num1 * num2;
  if (urjwer > 1000) {
    return urjwer;
  }
  return num1 + num2;
}
console.log(ex1(2, 501));
// 2. 10 хүртэл давталт хийж, тоо тус бүрийг өмнөх тооны нийлбэртэй консолд хэвлэх функц бич
function ex2() {
  var sum = 0;
  for (var i = 0; i <= 10; i++) {
    sum += i;
    console.log(`${i} hurtelh toonii niilber: ${sum}`);
  }
}
console.log(ex2());
// 3. Гараас стринг өгөгдсөн бол тэгш индекс дээрх тэмдэгтүүдийг хэвлэх функц бич
function ex3(text) {
  for (var i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      console.log(text[i]);
    }
  }
}
console.log(ex3("absd"));
// 4. Гараас стринг болон индекс өгөгдсөн бол, стринг дотроос өгөгдсөн индекс хүртэлх тэмдэгтүүдийг устгаж, үлдсэн стрингийг буцаах функц бич
function ex4(text, index) {
  var removeText = "";
  var restText = "";
  for (var i = 0; i < text[index]; i++) {
    removeText += text[i];
  }
  restText = text.replace(removeText, "");
  return restText;
}
console.log(ex4("1234", 1));
// 5. Өгөгдсөн массивын эхний болон сүүлийнй элемент тэнцүү бол true, үгүй бол false буцаа
function ex5(arr) {
  var hariu;
  if (arr[0] === arr[arr.length - 1]) {
    hariu = true;
  } else {
    hariu = false;
  }
  return hariu;
}
console.log(ex5([1, 2, 1]));
//6. Өгөгдсөн массив дотроос 5-д хуваагддаг тоонуудын нийлбэрийг олж буцаа
function ex6(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (+arr[i] % 5 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(ex6([5, 0, 1, 5, 10]));

// 7. Өгүүлбэр болон үг гараас өгөгдсөн бол, үг нь өгүүлбэр дотор хэдэн удаа давтагдас орсныг тоолж буцаа.
//   оролт: sentence = "my name is narada. his name is john" , word = "is" garalt 3
function ex7(string, word) {
  return string.split(word).length - 1;
}
console.log(ex7("my name is narada. his name is john", "is"));
// 8. Дараах пирамидыг хэвлэх функц бич
// *
// **
// ***
// ****
// *****
function ex8() {
  var num = 5;
  var string = "";
  for (var i = 1; i <= num; i++) {
    for (var j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
console.log(ex8());
// 9. Өгөгдсөн тоог палиндром эсэхийг шалгах функц бич
function ex9(number) {
  var result = false;
  var numString = number.toString();
  if (number === +numString.split("").reverse().join("")) {
    result = true;
  }
  return result;
}
// 10. 2 ширхэг массив өгөгдсөн бол эхний массиваас зөвхөн сондгой, 2 дахь массиваас зөвхөн тэгш утгуудыг агуулсан шинэ массив үүсгэж буцаа
function ex10(arr1, arr2) {
  var arrNew = [];
  var sondgoi = [];
  var tegsh = [];
  for (var i = 0; i < arr1.length; i++) {
    if (+arr1[i] % 2 === 1) {
      sondgoi.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (+arr2[j] % 2 === 0) {
      tegsh.push(arr2[j]);
    }
  }
  arrNew = [...tegsh, ...sondgoi];
  return arrNew;
}
console.log(ex10([1, 2, 3, 4], [5, 6, 7, 8]));

// 11. Garaas too ogogdson bol tuhain too hurtel niilberuudiig olj bucaa.
function appUpTo(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(appUpTo(3));
// 12. Gurwaljnii suuri bolon ondor ogogdson bol, tuhain gurwaljnii talbaig olj bucaa.
function triArea(base, height) {
  return (base * height) / 2;
}
console.log(triArea(10, 10));
// 13. Dan Boolean utguud aguulsan massiv ogogdson bol, dotor ni niit heden shirheg true utga bgaag olj hariug bucaa.
function countTrue(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      sum++;
    }
  }
  return sum;
}
console.log(countTrue([true, false, true]));
// 14. Object awdag function bicij, keys bolon value tus tusad ni salgaj bucaah function bic.
function keyAndVal(obj) {
  var arr = [];
  var keyArr = [];
  var valueArr = [];

  for (var key in obj) {
    var value = obj[key];
    keyArr.push(key);
    valueArr.push(value);
  }
  arr.push(keyArr);
  arr.push(valueArr);
  return arr;
}
console.log(keyAndVal({ a: 1, b: 2, c: 3 }));
// 15. Massiviin ehnii element bolon urtiin hemjee ogogdson bol, ehnii elementiig urtiin hemjee hurtel urjuulen uldsen elementuudiig toocoj massiviig bucaa.
function createArr(el, len) {
  var arr = [];
  for (var i = 1; i <= len; i++) {
    arr.push(el * i);
  }
  return arr;
}

console.log(createArr(7, 6));
// 16. Haircagnii urt orgon ondriin hemjeeg aguulsan massivuud ogogdjee... niit haircagnuudiin ezelhuuniig bucaa.
function totalVolume(...boxes) {
  var sum = 0;
  for (var i = 0; i < boxes.length; i++) {
    var urjwer;

    if (boxes[i].length !== 0 && boxes[i].length === 3) {
      urjwer = 1;
      for (var j = 0; j < boxes[i].length; j++) {
        urjwer *= boxes[i][j];
      }
    } else {
      urjwer = 0;
    }
    sum += urjwer;
  }
  return sum;
}
console.log(totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]));
// 266
// 17. Massiv ogogdson bol element tus buriig hargalzah indexeer ni urjuulj urjweruudiin niilberiig bucaa.
function calcIndex(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i] * i;
  }
  return sum;
}
console.log(calcIndex([1, 2, 3, -4, 5]));
// 18. Ogogdson massiv dotorh sondgoi index bolgon sondgoi utga aguulj, tegsh index bolgon tegsh utga aguulj bwal tuhain massiv ni oncgoi massiv bolno. Herew oncgoi massiv taarwal true esreg tohioldold false utga bucaa.
function ex18(arr) {
  var countTrue = 0;
  var bool = false;
  for (var i = 0; i < arr.length; i++) {
    if (
      (i % 2 === 0 && arr[i] % 2 === 0) ||
      (i % 2 !== 0 && arr[i] % 2 !== 0)
    ) {
      countTrue++;
    }
  }
  if (countTrue === arr.length) {
    bool = true;
  }
  return bool;
}
console.log(ex18([2, 7, 4, 9, 6, 1, 6, 3]));
// 19. Massiv dotor number bolon string torliin toonuud ogogdjee. Zowhon number torliin toonuudiin niilberiig olj bucaa.
function ex19(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(ex19([1, 2, "3"]));
// 20. Massiv dotorh hamgiin suuliin elementees busad buh utguudiig negtgej, hamgiin suuliin elementtei taarj bga esehiig toocoj boolean utga bucaa.
function ex20(arr) {
  var bool = false;
  var sum = "";
  for (var i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  if (sum === arr[arr.length - 1]) {
    bool = true;
  }
  return bool;
}
console.log(ex20([1, 1, "11"]));
// 21. String torliin too ogogdjee. Buh tegsh cifruudiin niilberiig sondgoi cifruudiin niilbertei haricuulj tegsh cifruudiin niilber ih bol tegsh ih sondgoi ni ih bol sondgoi ih tencuu bol tencuu gsn utgiig bucaa.
function ex21(text) {
  var hariu;
  var tegsh = 0;
  var sondgoi = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] % 2 === 0) {
      tegsh += +text[i];
    } else {
      sondgoi += +text[i];
    }
  }
  console.log(sondgoi);
  console.log(tegsh);
  if (tegsh > sondgoi) {
    hariu = "tegsh ni ih";
  } else if (tegsh < sondgoi) {
    hariu = "sondgoi ni ih";
  } else {
    hariu = "tencuu";
  }
  return hariu;
}
console.log(ex21("22471"));

function bubbleSort(arr){
    var noChange;
    for(var i = arr.length; i > 0; i--){
        noChange = true;
        for(var j = 0; j < i-1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noChange = false;
            }
        }
        if(noChange){
            break;
        }
        console.log("neg loop duuslaa.")
    }
    return arr;
}
console.log(bubbleSort([5, 65, 1, 2, 42, 15]));

function selectionSort(arr) {
    // [56, 2, 0, 15, 6, 78, 12, 123]
    for (var i = 0; i < arr.length; i++) {
      var hamgiinBagaIndex = i;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[hamgiinBagaIndex] > arr[j]) {
          hamgiinBagaIndex = j;
        }
      }
      var temp = arr[hamgiinBagaIndex];
      arr[hamgiinBagaIndex] = arr[i];
      arr[i] = temp;
    }
  
    return arr;
  }
  console.log(selectionSort([56, 2, 0, 15, 6, 78, 12, 123]));