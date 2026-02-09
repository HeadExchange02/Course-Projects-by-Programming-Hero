//Diclaring Object
const student = {
    name: "Azmir Antor",
    studentID: 120686,
    address: "Dhaka",
    isSingle: true,
    isMarried: false,
    skills: ["Python", "NodeJS", "MongoDB", "HTML", "CSS", "TailWinds",],
    scores: [7, 8, 7.5, 9, 8.25, 9.2],

    //Object in Object
    profetion: {
        currentlyWorking: true,
        position: "Junior developer",
        salary: 50000,

        car: {
            model: "BMW",
            color: "Grey",
            price: 4500000,

            menufecturer: {
                company: "BMW",
                location: "USA",
            }
        }
    }
}

console.log(typeof student);
console.log(typeof student.scores);
console.log(typeof student.studentID);
console.log(typeof student.name);
console.log(typeof student.isMarried);
console.log(typeof student.skills);

console.log(typeof student.profetion);
console.log(typeof student.profetion.currentlyWorking);
console.log(typeof student.profetion.salary);

console.log(typeof student.profetion.car.menufecturer.company);