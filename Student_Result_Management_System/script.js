const students = [
    { id: 1, name: "Ali", marks: 85, attendance: 90 },
    { id: 2, name: "Ahmed", marks: 62, attendance: 75 },
    { id: 3, name: "Sara", marks: 45, attendance: 88 },
    { id: 4, name: "Usman", marks: 92, attendance: 95 },
    { id: 5, name: "Ayesha", marks: 70, attendance: 65 }
];


// find student
const findStudent = (students, studentId) => {
    let idMatchStudent;

    students.forEach(student => {
        if (student.id === studentId) {
            idMatchStudent = student;
        }
    });

    if (idMatchStudent) {
        return idMatchStudent;
    } else {
        return "Student Not Found";
    }


}

console.log(findStudent(students, 3));


// Students Grade Function
const calculateGrade = (marks) => {
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(students[3].marks));


// Student Result function
const getStudentResult = (student) => {

    const studentGrade = calculateGrade(student.marks);

    let status;
    if (studentGrade !== "F" && student.attendance >= 75) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    let studentResult = {
        Name: student.name,
        Marks: student.marks,
        Grade: studentGrade,
        Attendance: student.attendance,
        Status: status
    }

    return studentResult;

}

console.log(getStudentResult(students[3]));


// Get only passed students 
const getPassedStudents = (students) => {

    const passStudents = students.filter(function(student){
        return student.marks >= 50 && student.attendance >= 75;
    })

    return passStudents;
} 

console.log(getPassedStudents(students));


// generate sudent Result
const generateStudentReport = (students) => {
    let studentReport = students.map(function(student){
        let result = getStudentResult(student);
        return result;
    })

    return studentReport;
}

console.log(generateStudentReport(students));

