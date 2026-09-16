const orders = [
    { id: 1, customer: "Ali", product: "Laptop", price: 80000, quantity: 1, status: "completed" },
    { id: 2, customer: "Ahmed", product: "Mouse", price: 2500, quantity: 2, status: "completed" },
    { id: 3, customer: "Sara", product: "Keyboard", price: 500000, quantity: 1, status: "cancelled" },
    { id: 4, customer: "Usman", product: "Headphones", price: 4000, quantity: 3, status: "completed" },
    { id: 5, customer: "Ayesha", product: "Monitor", price: 30000, quantity: 1, status: "completed" }
];

// Total Order Price
const calculateOrderTotal = (order) => {
    
    let totalPrice = order.price * order.quantity;
    return totalPrice;

}

console.log(calculateOrderTotal(orders[2]));


// Get Only Complete Orders
const getCompleteOrders = (orders) => {
    let completedOrders = orders.filter(function(order){
        return order.status === "completed";
    })

    return completedOrders;
}

console.log(getCompleteOrders(orders));


// Total Revenue
const totalRevenue = (orders) => {
    let revenue = 0;

    orders.forEach(function(order){
        let totalPrice = calculateOrderTotal(order);
        if(order.status === "completed"){
            revenue += totalPrice;
        }

    })

    return `Total Revenue: ${revenue}`;
}

console.log(totalRevenue(orders));


// Customer Spending
const getCustomerSpending = (orders) => {

    let completedOrders = getCompleteOrders(orders);

    let customerDetail = completedOrders.map(function(customer){
        let totalAmount = calculateOrderTotal(customer);
        return {
            customer: customer.customer,
            spending: totalAmount
        };

    })

    return customerDetail;
}
console.log(getCustomerSpending(orders));


// Highest Order Function
const highestOrderCustomer = (orders) => {

    let highestOrder = 0; 
    let highestOrderDetails;

    orders.forEach(function(order){

        let orderAmount = calculateOrderTotal(order);
        if(orderAmount > highestOrder && order.status !== "cancelled"){
            highestOrder = orderAmount;
            highestOrderDetails = order;
        };
    })

    return highestOrderDetails;
}

console.log(highestOrderCustomer(orders));