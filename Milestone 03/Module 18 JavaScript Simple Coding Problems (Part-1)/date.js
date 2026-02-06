const today = new Date();
const date = new Date("2062-10-09");
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2002, 0, 11);
console.log(specificDate);

specificDate.setMonth(2);
console.log(specificDate.toLocaleString("en-GB"));