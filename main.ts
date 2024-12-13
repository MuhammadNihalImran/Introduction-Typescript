import inquirer from "inquirer";
import chalk from 'chalk';


// let answers =await inquirer.prompt({
//     name: "age",
//     type: "number",
//     message: "enter your age:"
// });

// console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old,") );


//addition and subtraction
// let num1:number = 5;
// let num2:number = 10;
// let cart:number = num1 + num2;
// console.log("cart:",cart);
// let num3:number = 3;
// let total:number = cart - num3;
// console.log("toatl:",total);


//multiplication and division
// let bages:number = 4;
// let apples:number = 5;
// let total_apples:number = bages * apples;
// console.log("toatl_apples:",total_apples);
// let eachBages:number = total_apples / bages;
// console.log("eachBages:",eachBages);


//power squre
// let layer:number = 5;
// let apple:number = 5;
// let power:number = layer**2;
// console.log("power:",power);


//remiander
// let remainder:number = apples % bages;
// console.log("remainder:", remainder);


//increment and decrement
// let a:number = 5;
// let b:number = 2;
// let c:number ;
// c = ++a + a++ + --b + b-- + a + b++ + b;
// console.log("c:",c);


// let result = 3 + 4 * 5;
// console.log("result:",result);
// result++
// console.log("result++:",result);



// const input1 = await inquirer.prompt({
//     name: "num1",
//     type: "number",
//     message: "Kindly enter your first number"
// });

// const input2 = await inquirer.prompt({
//     name: "num2",
//     type: "number",
//     message: "Kindly enter your second number"
// });

// let total_number:number = input1.num1 + input2.num2;
// console.log("total_number:",total_number);


// let weightInKg:number = 70;
// let heightInMeters:number = 1.75;
// let bmi:number = weightInKg / (heightInMeters *  heightInMeters);
// console.log(`your bmi is ${chalk.blue(bmi)}`);


//ternory operator
// let isHungry:boolean = true;
// let snack:string = isHungry ? "apple" : "water";
// console.log(`you should have some ${snack}.`)
// isHungry = false;
// let snack1:string = isHungry ? "apple" : "water";
// console.log(`you should have some ${snack1}.`);


//switch statement 
// let dayOff:string = "sunday";
// switch(dayOff){
//       case "saturday":
//       console.log("Go hiking.");
//       break;
//       case "sunday":
//       console.log("read a book.");
//       break;
//       default:
//       console.log("Work on a hobby.");
// };


//======================number game=========================================
// let guess:number = 7;
// let target:number = 5;
// if(guess < target){
//     console.log("your guess is too low.")
// }else if(guess > target){
//     console.log("your guess is too high")
// }else {
//     console.log("you guessed correctly!")
// }

// //friend checker game
// let isFriend:string = "Huzaifa";
// if(isFriend.toLowerCase() === "owais" || isFriend.toLowerCase() === "huzaifa"){
//     console.log(`${isFriend} is your friend.`);
// }else{
//     console.log(`${isFriend} is not your friend.`);
// }
// isFriend = "hamza";
// if(isFriend.toLowerCase() === "owais" || isFriend.toLowerCase() === "huzaifa"){
//     console.log(`${isFriend} is your friend.`);
// }else{
//     console.log(`${isFriend} is not your friend.`);
// }


// let isFriends = await inquirer.prompt({
//     name: "name",
//     type: "input",
//     message: "Enter your friend name:"
// });
// if (isFriends.name.toLowerCase() === "owais" || isFriends.name.toLowerCase() === "huzaifa") {
//     console.log(`${isFriends.name} is your friend.`);
//   } else {
//     console.log(`${isFriends.name} is not your friend.`);
//   }


//rock paper scissors
// let player1:string = "rock";
// let player2:string = "paper";
// const player1 = await inquirer.prompt({
//     name:"name",
//     type: "input",
//     message: "playerOne Enter rock or paper or scissors"
// });
// const player2 = await inquirer.prompt({
//     name:"name",
//     type: "input",
//     message: "playerTwo Enter rock or paper or scissors"
// });
// if(player1.name === player2.name){
//     console.log("It's a tie!")
// }else if((player1.name === "rock" && player2.name === "scissors") ||
// (player1.name === "paper" && player2.name === "rock")||
// (player1.name === "scissors" && player2.name === "paper")){
//     console.log("player 1 wins!");
// }else{
//     console.log("player 2 wins!");
// }

// let num1= await inquirer.prompt({
//    name : "name",
//    type: "any"
// });

// calculator
// let num1:any = &ast;
// let num2:any = 2 ;
// let num3:any= 3 ;
// let total:any = `${num2} ${num1} ${num3}`
// console.log("total",total);


// function halfFryEgg():number{
//     let cocked = 1 + 1.5 + 2;
//     //egg butter salt
//     return cocked;
// }
// let response:number = halfFryEgg();
// console.log(response);


// function halfFryEgg(egg:number, butter:number, salt:number):number{
//       return egg + butter + salt
// }
// let response = halfFryEgg(1, 1.5, 2);
// console.log(response);


// function addNamber(a:number, b:number):number{
//     return a + b ;
// }
// let response = addNamber(4,4)
// console.log(response)


// function calculateArea(width:number, height:number):number{
//     return width * height;
// }
// let response = calculateArea(100 , 50);
// console.log(response);



// function halfFryEgg(egg:number=1, butter:number=1.5, salt:number=2):number{
//     return egg + butter + salt
// }
// let respone = halfFryEgg(2,3,4);
// console.log(respone);


// function halfFryEgg(egg:number=1, ...ingredients:number[]){
//     console.log(egg);
//     console.log(...ingredients)
// }
// halfFryEgg(1,1.5,2,3,3);

// let halfFryEgg = ()=>1+1.5+4;
// let respone:number = halfFryEgg()
// console.log(respone);


// let halfFryEgg= (egg:number, butter:number, salt:number):number =>(
//     egg + butter + salt
//     )
//     let respone = halfFryEgg(1,2,4);
//     console.log(respone);

// let halfFryEgg = ():number=>{return 1+2+3}
// let response:number = halfFryEgg();
// console.log(response);


// let halfFryEgg = (egg:number, butter:number, salt:number):number=>{
//     let cocked = egg + butter + salt;
//     return cocked
// }
// console.log(halfFryEgg(1,2,3));

//iife
// (function(){
//     console.log("run immediately")
// })();



//recursive function
// function countdown(number:number):void{
//     if(number <= 0){
//         console.log("done!")
//         return;
//     }
//     console.log(number);
//     countdown(number - 1);
// }
// countdown(5);


// function factorial(n:number):number{
//     if(n===0){
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// let response = factorial(5);
// console.log(response)


// function processUserInput(callback:(number:string)=> void){
//     let name = "nihal";
//     callback(name);
// }
// processUserInput(function(name:string){
//     console.log("hello, " + name);
// })



// let input1 = await inquirer.prompt([{
//     name:"userAnswer",
//     type: "input",
//     message: "What is the capital of Pakistan?"
// }]);

// function quiz(question:string,correctAnswer:string){
//     if(input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
//         console.log("correctly!");
//     }else{
//         console.log("your answer is incorrect");
//     }
// }
// quiz("what is the capital of pakistan?","islamabad");


// function calculateProduct(num1:number,num2:number):number{
//     return num1 * num2;

// }
// let  result = calculateProduct(5,10);
// console.log("result:",result)



// function greet(name:string, greeting:string="Hello"){
//        return `${greeting} ${name}!` ;
// }
// let result = greet("Nihal","Hi");
// console.log(result);

// let addNumbers = (a:number,b:number)=>{
//     return a + b;
// }
// console.log(addNumbers(5,2));




// let sumAll = (...numbers: number[]) => {
//     let sum = numbers.reduce((acc, num) => acc + num, 0);
//     console.log(`Sum of numbers: ${sum}`);
// }

// sumAll(5, 4, 4, 5);


// function multiplier(num1: number) {
//     var product = (num2: number) => {
//         return num1 * num2;
//     };

//     return product;
// }

// // Example usage
// const  triple = multiplier(3);
// console.log(triple(4));
 


// let  factorial = (n: number): number => {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// // Example usage
// const result = factorial(5);
// console.log(result); // Output: 120



// let outerFunction = (num1: number) => {
//     const innerFunction = (num2: number) => {
//         return num2++;
//     }

//     const innerResult = innerFunction(num1); // Using innerFunction with num1
//     const outerResult = num1 * 3;

//     return { innerResult, outerResult };
// }

// // Example usage
// const results = outerFunction(5);
// console.log(results.innerResult); // Output: 5 (num1 incremented by 1)
// console.log(results.outerResult);


// const numbers = [1, 2, 3];

// const doubledNumbers = (...numbers: number[]): number[] =>
//   numbers.map((n) => n * 2);

// console.log(doubledNumbers(...numbers));

function simulateDelay(callback: () => void): void {
    setTimeout(() => {
        callback();
    }, 2000);
}

// simulateDelay(() => console.log("Data retrieved"));


// =============================== object  ===============================================
// let person: { name: string, age: number, address: string } = {
//     name: "Nihal Imran",
//     age: 25,  // Add the missing age property
//     address: "123 Main Street"  // Add the missing address property
// };
// person.age = 19
// console.log(person.name)
// console.log(person.age)
// console.log(person.address)



// type User = {
//     name:string;
//     age:number;
//     hasPet:boolean
// };

// let user1: User = {
//     name: "Nihal",
//     age: 19,
//     hasPet: false,
// }


// type operation = (x:number, y:number) => number;
// const add:operation = (x,y)=> x + y;
// const subtract:operation = (x , y)=> x  - y;
// console.log(add(5,2))
// console.log(subtract(5,2))



let drinkSize: "small" | "large" | "medium";
drinkSize = "medium";
drinkSize = "small";
// drinkSize = "mega"


type BeachGear = {
    sunscreen:boolean,
    towel:boolean,
}
type MountainGear = {
    waterBottle : boolean,
    map: boolean,
}
type AdventureGera = BeachGear & MountainGear;
let myGear:AdventureGera  = {
    sunscreen:true,
    towel:true,
    waterBottle : true,
    map: true,
}


let colors:string[] = ["red","green","blue"];
colors.push("pink"); //add in last in item
colors.unshift("purple");//add in first in itme
colors.pop();//remove last 
colors.shift();//remove first


let matrix: number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// console.log(matrix[1][2]);



type Book = {
    author:string,
    title:string,
    isbn:string,
};

let library: Book[] = [
    {title:"The Hobbit", author:"J.R.R Tolkien", isbn:"123456789"},
    {title:"1984", author:"George Orwell", isbn:"987654321"},
]
//add a new book to the list
library.push({
    title:"The Catcher in the ray",
     author:"J.D. salinger",
     isbn:"123459876",
    });

let foundBook = library.find(book => book.author === "George Orwell");
// console.log(foundBook);


let fruits:string[] = ["orange","apple","mango","banana"];
fruits.push("strawberry")
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift("graphs")
// console.log(fruits);
// console.log(fruits.length);
fruits.splice(1,1)
console.log(fruits);

let matrix1:number[][] = [
    [1,0.0],
    [0,1,0],
    [0,0,1]
]
function AllSumMatrix(){

    let sum = 0;
    for(let i = 0; i <matrix1.length; i++){
        for(let j = 0; j <matrix1[i].length; j++){
            console.log(matrix1[i][j])
            sum+=matrix1[i][j]
        }
    }
    // console.log("sum:",sum)
}
// AllSumMatrix();


type Books = {
  title:string,
  author:string,
  year:number,
}

let books:Books[] = [
    {
        title: "The Example Book",
        author: "John Doe",
        year: 2022
    },
    {
        title: "Another Book",
        author: "Jane Smith",
        year: 2020
    },
    {
        title: "Science Fiction Masterpiece",
        author: "Arthur C. Clarke",
        year: 1968
    },
] 
function yearDefined(){

    for(let book of books){
        
        if(book.year > 2000){
            // console.log(book)
        }
    }
}
yearDefined()

let findBook = books.find(book => book.author == "Jane Smith");
// console.log(findBook);



const numbers:number[] = [3, 5, 7, 9, 11];

const squares:number[] = numbers.map((number) => number ** 2);

console.log(squares);

function filterNumber(squares: number[]): void {
    const filteredNumbers = squares.filter(number => number > 50);
    console.log(filteredNumbers);
}

function AllSum(squares: number[]): void {
    const sumAll = squares.reduce((pre: number, curr: number) => {
        return pre + curr;
    }, 0);

    console.log("Sum of all numbers:", sumAll);
}
filterNumber(squares);



























// ====================================tuples======================
let coffeeOrder:[string,string] = ["Cappuccino", "Medium"];

// =====================================Enums======================
enum CoffeeType {
    Espresso,
    Latte,
    Cappuccino,
    Americano
}
let myCoffee:CoffeeType = CoffeeType.Latte;
// console.log(myCoffee);




// ==============================================looops=============================================



// ====================while loops=====================================================
// ap bus ka wait kr rahai hai or hr minut mein mein dekh rahai k bus ayi ya nhi ayi is concept ko while lopp khete hay
let  minutesUnitsBusArrives = 5 ;
while (minutesUnitsBusArrives > 0){
    // console.log(`Bus Arries in ${minutesUnitsBusArrives} minute`)
    minutesUnitsBusArrives--;
}



// =============================do while loop===========================================
function checkerBusArrival(){
    minutesUnitsBusArrives--;
    if(minutesUnitsBusArrives != 0){
        return 'checking for the bus'
    }else{return false}
}

do{
    // let  response = checkerBusArrival();
    // console.log(response)
}while(minutesUnitsBusArrives > 0);


// ===============================for loop=====================================================
// tum plants ko water de rahai ho ek end say start karte or dusre end tak nhi pochte jab tak water dete
for(let i=0; i<5; i++){
    //  console.log(`watering the plants ${i + 1}`)
}

// =============================for in loop====================================================
let person:any = {
    name:"nihal",
    age: 19,
    city: "karachi"
}

for(let key in person){
    // console.log(`${key}: ${person[key]}`)
}


// ======================for of loop====================================
let flavoures=["vanilla","chocolate","strawberry"]
for(let flavoure of flavoures){
    // console.log(flavoure);
}




// ---------------------------homework ----------------------------------------
// ----------------------question 1=========================
let movies:string[] = ["3 Idiots","dream vs everyone","Avengers","Dholl"]
   function moviseName(movies:string[]){
    for(let movie  of movies){
        // console.log("movies name:",movie);
    }
   }
   moviseName(movies);


// =============================question 2--------------------------------------------
let car = {
     make: "Toyota",
     model:"camry",
     year: 2020,
}
function carProperties(car: { [key: string]: string | number}){
     for(let key in car){
        console.log(`${key}:${car[key]}`);
     }
}
carProperties(car);



function checkNumberDivisible(){
    for(let i=0;i<100; i++){
 let output  = "";
 if(i % 3 ===0) output += "Fizz";
 if(i % 3 ===5) output += "Buzz";
 console.log(output || i);
             
}};
// checkNumberDivisible();

// let number:number = Number(await inquirer.prompt({
//     name: "number",
//     type: "number",
//     message: "Enter a number",
// }));


// console.log(number.num)
async function checkNumber (){
    let guessnumber:number = Math.floor(Math.random() * 10) + 1;
    console.log("guess number: " , guessnumber)
    let attempts:number=10;
    do {
        const userGuess = await inquirer.prompt({
            name: "guess",
            type: "number",
            message: `Guess the number (between 1 and 10). You have ${attempts} attempts:`,
        });

        if (userGuess.guess === guessnumber) {
            console.log("Congratulations! You guessed the correct number.");
            return;
        } else {
            console.log(`Incorrect guess. Try again.`);
            attempts--;
        }
    } while (attempts > 0);
}
checkNumber()