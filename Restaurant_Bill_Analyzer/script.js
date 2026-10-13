const menuItems = [
    { name: "Burger", price: 500, quantity: 2 },
    { name: "Pizza", price: 1200, quantity: 1 },
    { name: "Fries", price: 250, quantity: 3 },
    { name: "Drink", price: 150, quantity: 2 }
];

//  TOTAL BILL USING REDUCE METHOD
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

        const itemAmount = item.price * item.quantity;

         return{
                name: item.name,
                price: itemAmount
            }
        

    });

    return totalAmount;
}

const subTotalOfitems = getItemSubtotals(menuItems);
console.log(subTotalOfitems);
