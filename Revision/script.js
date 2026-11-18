const students = [
  { name: "Ali", marks: 85, status: "pass" },
  { name: "Sara", marks: 45, status: "fail" },
  { name: "Ahmed", marks: 75, status: "pass" },
  { name: "Zara", marks: 90, status: "pass" },
  { name: "Usman", marks: 35, status: "fail" },
];

// Filtering pass students
const passingStudents = (students) => {
  let passedStudents = students.filter(function (student) {
    return student.status === "pass";
  });

  return passedStudents;
};

const passStudents = passingStudents(students);

console.log(passStudents);

// Pass students names
const getPassingStudentNames = (passStudents) => {
  let stdNames = passStudents.map(function (student) {
    return student.name;
  });

  return stdNames;
};
const passingStudentNames = getPassingStudentNames(passStudents);
console.log(passingStudentNames);

// REDUCE PRACTICE
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 20000 },
];

const calculateTotalPrice = (products) => {

  let totalPrice = products.reduce(function (total, product) {

    return total += product.price;

  }, 0);

  console.log(totalPrice);

};

calculateTotalPrice(products);
