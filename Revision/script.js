
const students = [
    { name: "Ali", marks: 85, status: "pass" },
    { name: "Sara", marks: 45, status: "fail" },
    { name: "Ahmed", marks: 75, status: "pass" },
    { name: "Zara", marks: 90, status: "pass" },
    { name: "Usman", marks: 35, status: "fail" }
];



const passingStudents = (students) => {

    let passedStudents = students.filter(function(student){
        
        return student.status = "pass";


    })






}