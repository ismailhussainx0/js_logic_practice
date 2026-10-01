const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 80000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 2500, stock: 20 },
    { id: 3, name: "Chair", category: "Furniture", price: 12000, stock: 8 },
    { id: 4, name: "Desk", category: "Furniture", price: 25000, stock: 3 },
    { id: 5, name: "Keyboard", category: "Electronics", price: 5000, stock: 0 }
];


const inventoryRecord = (products) => {

    
// count totalProducts
let totalProducts = 0;

products.forEach(function(product){
    totalProducts++;
})



// total stock count
let totalStock = 0

products.forEach(function(product){
    totalStock += product.stock;
})


// total inventory 
let totalInventory = 0;

products.forEach(function(product){
    let totalStockPrice = product.stock * product.price;
    totalInventory += totalStockPrice;
})


// out of stock products 
let outOfStockProduct = products.filter(function(product){
    return product.stock === 0;
})


// category summary 
const getCategorySummary = (products)  => {

    let inventorySummary = {};
    

    products.forEach(function(product){
        let productInventoryValue = product.stock * product.price;
        productInventoryValue += inventorySummary[product.price]; 

        if(inventorySummary[product.category]){
            inventorySummary[product.category] += productInventoryValue;
        }else{
            inventorySummary[product.category] = productInventoryValue;
        }
        
        

    })

    return inventorySummary;
}

return {
    totalProducts: totalProducts,
    totalStock: totalStock,
    totalInventory: totalInventory,
    outOfStockProduct: outOfStockProduct,
    categorySummary: getCategorySummary
}


}

inventoryDetails = inventoryRecord(products);
console.log(inventoryDetails);
