// const student = {
//   name: "Vasya",
//   specialty: "student",
//   amountMissingLessons: 6,
//   averagePoints: 5.5,
//   showInfo: function () {
//     console.log(this);
//   },
// };
// const student2 = {
//   name: "Vasya",
//   specialty: "engineer",
//   amountMissingLessons: 8,
//   averagePoints: 10.5,
// };
// const student3 = {
//   name: "Marina",
//   specialty: "doctor",
//   amountMissingLessons: 7,
//   averagePoints: 5.9,
// };

// student.showInfo.bind(student2)();
// student.showInfo.bind(student3)();

// student.showInfo.call(student2)();
// student.showInfo.call(student3)();

// student.showInfo.apply(student2)();
// student.showInfo.apply(student3)();

// Task 2
// function describe() {
//   console.log("This is a " + this.textContent);
// }

// document.querySelectorAll("button").forEach((button) => {
//   button.onclick = describe;
// });

//Task 3
function shop(itemName, priceKilo, amountItems) {
  return [itemName, priceKilo * amountItems];
}

let [item, worth] = shop("banana", 30, 4.5);
[item, worth] = shop("cherry", 58, 1.3);
[item, worth] = shop("orange", 89, 3.4);
console.log(item, worth);
