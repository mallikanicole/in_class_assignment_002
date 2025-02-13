// let products=[
//     {name:"Laptop", price:1200, category:"Electronics"},
//     {name:"Phone", price:800, category:"Electronics"},
//     {name:"Desk Chair", price:150,category:"Furniture"}
// ];
// console.log("OG list",products)
// function getProductsByCategory(products, category){
//     return products.filter(product=>product.category===category);//filter grabs things inside the array. using callback to filter category
// }
// console.log(getProductsByCategory(products,"Electronics")); use control and forward slash to comment out code

// Task 2

// function applyDiscount(products,discountRate){
//     return products.map(product=>({
//         ...product,
//         price:product.price-(product.price*discountRate)//overwrite price
//     }
//     ))
// };//map applies to every single item in array
// console.log("New List:", applyDiscount(products,.1))




// //...example
// // // function sum3(x,y,z){
// // //     return x+y+z;
// // }
// // let numbers=[1,2,,4]

// // console.log(sum3(...numbers));//elipse of numbers separates out numbers inside, ... also works with objects. use ... for objects in an array to be sed in function.


// //Task 3

// // let sales=[250,400,150,]

// // function calculateTotalRevenue(sales){
// //     return sales.reduce((total,sale)=>total+sale,0)//0 is starting point,start adding at 0
// // };//start runningtotal (sales, runningTotal) if already have running total
// // console.log(`Total Revenue 2024:$${calculateTotalRevenue}`)


// //Task 4

// let employee={name:"John Doe",salary:50000,position:"Manager"};

// function updateSalary(employee, percentageIncrease){
//     return employee.salary+=employee.salary*percentageIncrease;
// };//put function into other function to apply to all employees
// //+= is shorter for employee.salary=employee+employee.salary

// console.log(updateSalary(employee,.1))



//Task 5
let orders=[
    {id:101, customer:"Alice", total:350},
    {id:102, customer:"Bob", total:450},
    {id:103, customer:"Charlie", total:200}
]
function findOrder(orders, orderID){
    return orders.find(order=>order.id===orderID);
}
console.log(findOrder(orders, 102));

//Task 6 

let inventory={
    items:[],
    addItem(name,quantity){
        this.items.push({name,quantity});
    },
    removeLatestItem(){
        this.items.pop();
    },
    removeFirstItem(){
        this.items.shift();
    },
};
inventory.addItem("Monitor",5);
inventory.addItem("Keyboard",10);
inventory.addItem("Mouse",3);
console.log(JSON.stringify(inventory.items));

inventory.removeLatestItem();
console.log(JSON.stringify(inventory.items));//JSON.stringify resolves issue in Chrome/Firefox, turns into string to printout

inventory.removeFirstItem();
console.log(inventory.items)


//Task 7

//Same as Task 5
let employees=[
    {name:"Bob",position:"Designer",salary:6000},
    {name:"Alice",position:"Manager",salary:8000}
]

function findEmployee(employees, name){
    return employees.find(employee=>employee.name===name);
};//tweak function in task 5 to fit employees
console.log(findEmployee(name, 'Bob'));


//Task 8
let orders1=[{id:1, customer:"Alice"},{id:2,customer:"Bob"}];
let orders2=[{id:3,customer:"Charlie"},{id:4,customer:"David"}];

function mergeOrders(orderA,orderB){
    return[...orderA,...orderB];
}
console.log(mergeOrders(orders1,orders2)); 


//Extra
let employee= {name:"Alice",position:"Developer",salary:7000}
console.log(`${employee.name} is a ${employee.position} and makes $${parseFloat(employee.salary.toFixed(2))}`)