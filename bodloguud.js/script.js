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

// function selectionSort(arr){

//     for(var i = 0; i < arr.lenght; i++){
//         var lowest = i;
//         for(var j = i+1;  j < arr.lenght;  j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         var temp = arr[i];
//         arr[i] = arr[lowest]; // 3, 13, 45, 3, 10
//         arr[lowest] = temp; // 3, 13, 45, 26, 10
//     }

//     return arr;
// }
// var select = selectionSort([26, 13, 45, 3, 10]);
// console.log(select);

// var too = prompt("toog oruul");
// var tooHuwaasan = too.split("");
// var tooHuwaagaadReversed = tooHuwaasan.reverse();
// var tooHuwaagaadReversedJoin = tooHuwaagaadReversed.join("");
// too === tooHuwaagaadReversedJoin ? console.log("palindrom too mon") : console.log("palindrom too bish");