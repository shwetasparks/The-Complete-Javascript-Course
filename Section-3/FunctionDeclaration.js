//Main difference bey
function calAge1(birthYear) {
   return (age = 2023 - birthYear);
}
let realAge = calAge1(2007);
console.log(realAge);

//Function expression

const calAge2 = function (birthYear) {
   return 2023 - birthYear;
};
let realAge2 = calAge2(2007);
console.log(realAge2);
