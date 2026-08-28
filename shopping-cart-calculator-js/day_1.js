const cart = [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 2500, quantity: 2 },
    { name: "Keyboard", price: 5000, quantity: 1 },
    { name: "Headphones", price: 4000, quantity: 2 }
];





const calculateCart = (shoppingCart) => {
    let totalPrice = 0;

    shoppingCart.forEach(function (item) {
        let price = item.price;
        let quantity = item.quantity;
        let quantityPriceMul = price * quantity;
        totalPrice += quantityPriceMul;
    })

    
    let afterDiscount = 0;
    if(totalPrice > 50000){
        afterDiscount = totalPrice * 0.10;
    }
    
    
    let finalBill = totalPrice - afterDiscount;
    
    const totalBill = {
        totalPrice: totalPrice,
        discountInTotal: afterDiscount,
        finalTotal: finalBill
    }

    return totalBill;


}

const totalShoppingPrice = calculateCart(cart);
console.log(totalShoppingPrice);