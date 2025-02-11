let products=[
    {name:"Laptop", price:1200, category:"Electronics"},
    {name:"Phone", price:800, category:"Electronics"},
    {name:"Desk Chair", price:150,category:"Furniture"}
];
function getProductsByCategory(products, category){
    return products.filter(product=>product.category===category);//filter grabs things inside the array. using callback to filter category
}
console.log(getProductsByCategory(products,"Electronics"));