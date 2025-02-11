let products=[
    {name:"Laptop", price:1200, category:"Electronics"},
    {name:"Phone", price:800, category:"Electronics"},
    {name:"Desk Chair", price:150,category:"Furniture"}
];
// function getProductsByCategory(products, category){
//     return products.filter(product=>product.category===category);//filter grabs things inside the array. using callback to filter category
// }
// console.log(getProductsByCategory(products,"Electronics")); use control and forward slash to comment out code

//Task 2

function applyDiscount(products,discountRate){
    return products.map(product=>({
        ...product,
        price:product.price-(product.price*discountRate)//overwrite price
    }
    ))
};//map applies to every single item in array
console.log(applyDiscount(products,.1))
// function sum3(x,y,z){
//     return x+y+z;
// }
// let numbers=[1,2,,4]

// console.log(sum3(...numbers));//elipse of numbers separates out numbers inside, ... also works with objects. use ... for objects in an array to be sed in function.


