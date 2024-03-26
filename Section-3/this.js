const div = {
   firstName: "div",
   lastName: "kumar",
   birthYear: 2007,
   job: "student",
   friends: ["ritesh", "aditya", "lakshya"],
   hasDriverLicense: true,

   calAge: function (birthYear) {
      return 2023 - birthYear;
   },
};


const calAge = function (birthYear) {
   return 2023 - birthYear;
};

console.log(div[calAge](2007));

