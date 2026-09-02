const employees = [
    { name: "Ali", department: "IT", salary: 60000, bonus: 5000 },
    { name: "Ahmed", department: "HR", salary: 50000, bonus: 3000 },
    { name: "Sara", department: "IT", salary: 80000, bonus: 10000 },
    { name: "Usman", department: "Sales", salary: 45000, bonus: 7000 },
    { name: "Ayesha", department: "HR", salary: 70000, bonus: 5000 }
];


// // Employee total salary function 1
const calculateEmployeeSalary = (employee) => {
    let bonusPlusSalary = employee.salary + employee.bonus;

    return bonusPlusSalary;

}

// Calculation Finance summay function 2
const calculatePayroll = (employees) => {

    // employess salary
    employees.forEach(function (emp) {
        console.log(calculateEmployeeSalary(emp));
    })





    //Company Total payroll
    let totalPayroll = 0;
    employees.forEach(function (emp) {
        let salaryBonusSum = calculateEmployeeSalary(emp);
        totalPayroll += salaryBonusSum;
    })


    // Department PayRoll

    let itDepartment = 0;
    let hrDepartment = 0;
    let salesDepartment = 0;

    employees.forEach(function (emp) {

        if (emp.department === "IT") {
            let totalAmount = calculateEmployeeSalary(emp);
            itDepartment += totalAmount
        } else if (emp.department === "HR") {
            let totalAmount = calculateEmployeeSalary(emp);
            hrDepartment += totalAmount;
        } else if (emp.department === "Sales") {
            let totalAmount = calculateEmployeeSalary(emp);
            salesDepartment += totalAmount;
        }


    })


    let totalPayrollSummary = {
        CompanyTotalPayRoll: totalPayroll,
        IT: itDepartment,
        HR: hrDepartment,
        Sales: salesDepartment
    };


    return totalPayrollSummary;

}

const findSalaryExpense = calculatePayroll(employees);
console.log(findSalaryExpense);



// highest salary employee
const findHighestSalaryEmp = (employees) => {

    let highestSalary = 0;
    let employeeDetails;

    employees.forEach(function (singleEmp) {

        let totalAmountGet = singleEmp.salary + singleEmp.bonus;
        if (totalAmountGet > highestSalary) {
            highestSalary = totalAmountGet;
            employeeDetails = singleEmp;
        }

    })

    return employeeDetails;


}

const higherSalaryEmp = findHighestSalaryEmp(employees);
console.log(higherSalaryEmp);





