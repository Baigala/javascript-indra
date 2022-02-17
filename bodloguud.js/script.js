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

// var x = 27;
// var arr = [];
// for(var i = 1; i <= x; i++){
//     if(x % i === 0){
//         arr.push(i);
//     }
// }
// console.log(arr);

// var x = "123456789";
// var sum = 0;
// for(var i = 0; i < x.length; i++){
//     if(+x[i] % 2 === 0){
//         sum += +x[i];
//     }
// }
// console.log(sum);

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

// var too = prompt("toog oruul");
// var tooHuwaasan = too.split("");
// var tooHuwaagaadReversed = tooHuwaasan.reverse();
// var tooHuwaagaadReversedJoin = tooHuwaagaadReversed.join("");
// too === tooHuwaagaadReversedJoin ? console.log("palindrom too mon") : console.log("palindrom too bish");