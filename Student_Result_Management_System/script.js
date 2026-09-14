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
        if(student.id === studentId){
            idMatchStudent = student;
        }
    });

    if(idMatchStudent){
        return idMatchStudent;
    }else{
        return "Student Not Found";
    }


}

console.log(findStudent(students, 3));
