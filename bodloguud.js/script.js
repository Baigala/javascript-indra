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

// 1. 100 хүртэлх тоонуудаас бүх анхны тоонуудын нийлбэрийг ол.
// var niilber = 0;
// for (var too = 0; too <= 100; too++) {
//   var anhniiTooMon = true;
//   for (var i = 2; i <= too; i++) {
//     if (too % i === 0 && i !== too) {
//       anhniiTooMon = false;
//     }
//   }
//   if (anhniiTooMon === true) {
//     console.log(too);
//     niilber += too;
//   }
// }
// console.log(niilber);

// 2. 100 хүртэлх тоонуудаас бүх 7-д хуваагддаг тоонуудын нийлбэр.
// console.log("2 dahi bodlogo");
// var sum = 0;
// for (var too = 0; too <= 100; too++) {
//   if (too % 7 === 0) {
//     sum += too;
//   }
// }
// console.log(sum);

// 3. Гараас тоо үсэг холилдсон текст өгөгдсөн бол, тухайн текстийн
// тоо болон үсгүүдийг салгаж , тус тусад нь стринг болгож хадгал
// жишээ: gjskld4324jk234hj4vg23hj123 =>
// 4324234423123 , gjskldjkhjvghj
// console.log("3 dahi bodlogo");
// var text = prompt("textee oruulna uu");
// var tooSalgasan = "";
// var textSalgasan = "";
// for (var i = 0; i < text.length; i++) {
//   if (
//     text[i] == 0 ||
//     text[i] == 1 ||
//     text[i] == 2 ||
//     text[i] == 3 ||
//     text[i] == 4 ||
//     text[i] == 5 ||
//     text[i] == 6 ||
//     text[i] == 7 ||
//     text[i] == 8 ||
//     text[i] == 9
//   ) {
//     tooSalgasan += tooSalgasan + text[i];
//   } else {
//     textSalgasan = textSalgasan + text[i];
//   }
// }
// console.log(tooSalgasan);
// console.log(textSalgasan);

// 4. Гараас үг өгөгдсөн бол, тухайн үгэнд давтагдаагүй тоогоор
// хэдэн ширхэг эгшиг үсэг байгааг тоол
// Жишээ: presentation => e,a,i,o => 4 ширхэг эгшиг үсэг байна
// console.log("5 dahi bodlogo");
// function countVowels(ug) {
//   var egshig = "aeiou";
//   var count = 0;
//   for (let i = 0; i < egshig.length; i++) {
//     if (ug.toLowerCase().includes(egshig[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// function bubbleSort(arr){
//     var noChange;
//     for(var i = arr.length; i > 0; i--){
//         noChange = true;
//         for(var j = 0; j < i-1; j++){
//             console.log(arr, arr[j], arr[j+1]);
//             if(arr[j] > arr[j + 1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 noChange = false;
//             }
//         }
//         if(noChange){
//             break;
//         }
//         console.log("neg loop duuslaa.")
//     }
//     return arr;
// }
// console.log(bubbleSort([5, 65, 1, 2, 42, 15]));

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