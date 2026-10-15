const menuItems = [
    { name: "Burger", price: 500, quantity: 3, status: "completed" },
    { name: "Fries", price: 250, quantity: 3, status: "cancelled" },
    { name: "Pizza", price: 1200, quantity: 1, status: "completed" },
    { name: "Drink", price: 150, quantity: 2, status: "completed" }
];

//  TOTAL BILL CALCULATE USING REDUCE METHOD
const calculateTotalBill = (menuItems) => {

    const totalBill = menuItems.reduce(function (totalPrice, menuItem) {

        let itemTotalAmount = menuItem.price * menuItem.quantity;
        return totalPrice + itemTotalAmount;

    }, 0)

    return totalBill;
}
const totalBill = calculateTotalBill(menuItems);
console.log(totalBill);


// SUBTOTAL USING MAP METHOD
const getItemSubtotals = (menuItems) => {

    let totalAmount = menuItems.map(function (item) {

        const itemSubTotal = item.price * item.quantity;

        return {
            name: item.name,
            subtotal: itemSubTotal
        }


    });

    return totalAmount;
}

const subTotalOfitems = getItemSubtotals(menuItems);
console.log(subTotalOfitems);


// COMPLETED ORDER TOTAL AMOUNT
const calculateCompletedOrder = (menuItems) => {

    let completedItems = menuItems.filter(function (item) {
        return item.status == "completed";
    })

    let completedOrderAmount = completedItems.reduce(function (totalAmount, item) {
        let itemTotalPrice = item.quantity * item.price;
        return totalAmount + itemTotalPrice;

    }, 0)


    return completedOrderAmount;
}

console.log(calculateCompletedOrder(menuItems));



// EXPENCIVE ITEM
const findMostExpensiveItem = (menuItems) => {

    let highestPrice = 0;
    let expensiveItem = null;

    menuItems.forEach(function (item) {

        let itemTotalBill = item.price * item.quantity;

        if (itemTotalBill > highestPrice) {
            highestPrice = itemTotalBill;
            expensiveItem = item;
        }

    })

    return expensiveItem;
}

const expensiveItem = findMostExpensiveItem(menuItems)
console.log((expensiveItem));
