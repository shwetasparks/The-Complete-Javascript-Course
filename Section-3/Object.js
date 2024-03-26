const div = {
   firstName: "div",
   lastName: "kumar",
   age: 2023 - 2007,
   job: "student",
   friends: ["ritesh", "aditya", "lakshya"],
};
console.log(div);
console.log(div.job);
console.log(div["lastName"]);

const interestIn = prompt(
   "what else you know about div? Choose between firstName, lastName,age,job and friends"
);
console.log(div[interestIn]);

if(div[interestIn]){
    console.log(div[interestIn]);
}
else{
    console.log(div[interestOut]);
}
