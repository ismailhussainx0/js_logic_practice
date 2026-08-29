const expenses = [
    { title: "Food", category: "Food", amount: 1200 },
    { title: "Bus", category: "Transport", amount: 500 },
    { title: "Movie", category: "Entertainment", amount: 1500 },
    { title: "Lunch", category: "Food", amount: 800 },
    { title: "Uber", category: "Transport", amount: 700 }
];

const calculateExpenses = (expenses) => {

    let totalExpense = 0;
    let foodExpense = 0;
    let transportExpense = 0;
    let entertainmentExpense = 0;



    expenses.forEach(function (item) {
        totalExpense += item.amount;

        if (item.category === "Food") {
            foodExpense += item.amount;
        } else if (item.category === "Transport") {
            transportExpense += item.amount;
        } else if (item.category === "Entertainment") {
            entertainmentExpense += item.amount;
        }

    })



    const totalExpenseSummary = {
        Total: totalExpense,
        Food: foodExpense,
        Transport: transportExpense,
        Entertainment: entertainmentExpense
    }

    return totalExpenseSummary;




}

let summaryOfExpense = calculateExpenses(expenses);
console.log(summaryOfExpense);




// find hightes expense function
const findHighestExpense = (expenses) => {

    let highestExpense = 0;
    let expenseObj ;


    expenses.forEach(function(item){
        if(highestExpense < item.amount){
            highestExpense = item.amount;
            expenseObj = item;
        }
    })

    // expensive item object
   

    return expenseObj;

}

let findExpensiveItem = findHighestExpense(expenses);
console.log(findExpensiveItem);