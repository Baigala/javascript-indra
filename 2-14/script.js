// {} - (block)
// ternary operator ===> num < 0 ? console.log('sorog') : num % 1 === 0 ? console.log('buhel') : console.log('butarhai');

// switch case
// var Animal = 'Dog';
// switch (Animal) {
//   case 'Cow':
//   case 'Giraffe':
//   case 'Dog':
//   case 'Pig':
//     console.log('This animal is not extinct.');
//     break;
//   case 'Dinosaur':
//   default:
//     console.log('This animal is extinct.');
// }

// const city = "London";
// const getCountryByCity = () => {
// 	switch (city) {
// 		case "Edinburgh":
// 			return "Edinburgh is the capital city of Scotland";
// 		case "Madrid":
// 			return "Madrid is the capital city of Spain";
// 		case "London":
// 			return "London is the capital city of England";
// 		default:
// 			return "Cannot find which country this city is the capital of.";
// 	}
// };

// switch (true) {
// 	case !isDefined(user):
// 		throw new Error("User must be defined.");
// 	case !isString(user.firstName):
// 		throw new Error("User's first name must be a string");
// 	case !isValidEmail(user.email):
// 		throw new Error("User's email address must be a valid email address");
// 	case !isValidPhoneNumber(user.number):
// 		throw new Error("User's phone number must be a valid phone number");
// 	// ...lots more validation here
// 	default:
// 		return user;
// }

var str = "this is dummy text";
// console.log(str.slice(8, 13));  ===> [startIndex, endIndex[
// str.toUpperCase();
// trim() - ehend bolon suuld bga heregceegui hooson zainuudiig ustgaj ogno. trimStart() zuun taliin, trimEnd() baruun
// concat(anotherString) || str + str1 || concat("eddffadf") - 2 string torliin ogogdliig negtgene.
// replace(solih gej bga heseg, shineer orluulah heseg) str.replace(" ", "-"); => hamgiin ehend taarsan temdegtiin solino, replaceAll ni buh temdegtiig solij ogno.

// Bodlogo 1: Garaas too oruulaad buhel , butarhai , sorog esehiin shalgah
// var num = +prompt('number');
// if(num < 0){
//     console.log('sorog')
// } else if (num % 1 === 0) {
//     console.log('buhel')
// } else {
//     console.log('butarhai')
// }

// Bodlogo 2: Гараас нэр оруулаад, бүх эгшиг үсгүүдийг concat хийгээд консолд хэвлэ
var  ner = prompt("neree oruulna uu");
var egshig = "";
if(ner !== null) {
    for(var i = 0; i < ner.length; i++){
        if(ner[i] === "a" || ner[i] === "e" || ner[i] === "i" || ner[i] === "o" || ner[i] === "u") {
            egshig = egshig.concat(ner[i]);
        }
    }
    console.log(ner, egshig);
} else {
    console.log("neree oruulaagui bn");
};