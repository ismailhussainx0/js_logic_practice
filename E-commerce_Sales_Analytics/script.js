const orders = [
  { id: 1, customer: "Ali", amount: 2500, status: "completed" },
  { id: 2, customer: "Sara", amount: 4000, status: "pending" },
  { id: 3, customer: "Ahmed", amount: 1500, status: "completed" },
  { id: 4, customer: "Zara", amount: 5000, status: "cancelled" },
  { id: 5, customer: "Usman", amount: 3000, status: "completed" },
];

// completed orders function
const getCompletedOrders = (orders) => {
  let completeOrders = orders.filter(function (item) {
    return item.status === "completed";
  });

  return completeOrders;
};

const trackCompleteOrders = getCompletedOrders(orders);
console.log(trackCompleteOrders);

// get total sales revenue
const getTotalRevenue = (orders) => {
  const completedOrders = getCompletedOrders(orders);

  let totalRevenue = completedOrders.reduce(function (accumulate, item) {
    return item.amount + accumulate;
  }, 0);

  return totalRevenue;
};

const totalSales = getTotalRevenue(orders);
console.log("Total Sales:", totalSales);

// ordered customers report
const orderedCustomerReport = (orders) => {
  const completeOrders = getCompletedOrders(orders);

  let customerReport = completeOrders.map(function (order) {
    return {
      name: order.customer,
      Amount: order.amount,
    };
  });

  return customerReport;
};

let completeOrderReport = orderedCustomerReport(orders);
console.log(completeOrderReport);

// highest order customer
const highestCompletedOrder = (orders) => {
  const completeOrders = getCompletedOrders(orders);

  let mostExpensiveOrder = 0;
  let highestOrder = null;

  completeOrders.forEach(function (order) {
    if (order.amount > mostExpensiveOrder) {
      mostExpensiveOrder = order.amount;
      highestOrder = order;
    }
  });

  return highestOrder;
};

const highestAmountOrder = highestCompletedOrder(orders);
console.log(highestAmountOrder);
