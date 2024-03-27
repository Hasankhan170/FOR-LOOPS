// Q.1 
// for(let i = 1; i <= 5; i++){
//     console.log("hello world", i)
// }
// done 

// Q.2

// for(let i=1 ; i <= 10 ;i++){
//    console.log(i)
// }
// done 

// Q.3

// const userInput = +prompt("enter a table number")
// const times = +prompt("length of multiple table")

// for(let i = 1; i <= times ; i++){
//     console.log(`${userInput}*${i} = ${userInput*i}`)
// }
// done 

// Q.4

// const ol = document.querySelector("ol");
// const array = ["banana" , "apple" , "grapes" , "strawberry"];

// for(let i = 0; i < array.length ; i++){
//     ol.innerHTML += `<li>${array[i]}</li>`
// }

// done 

// Q.5

// const fruits = ["banana" , "apple" , "grapes" , "strawberry"];

// const ol = document.querySelector("ol");

// const ul = document.querySelector("ul");

// for(let i = 0; i < fruits.length; i++){
//     ol.innerHTML += `<li>${fruits[i]}</li>`
//     ul.innerHTML += `<li> element at index ${i} is ${fruits[i]}</li>`

// }

// done 

// Q.6

// const head = document.querySelector("h1");
// const ul = document.querySelector("ul");

// let empty = +prompt("enter a number")

// head.innerHTML = `Numbers of items : ${empty}`

// for(let i = 1; i <= empty ; i++){
    
// let items = prompt("enter numbers")
// ul.innerHTML += `<li>${items}</li>`

// }

// done 


// Q.7

// document.write("Counting :")
// for(let i= 1; i<= 15 ; i++){
//     document.write(i + ", ")
// }


// document.write("<br>")
// document.write("<br>")



// document.write("Reverse Counting :")
// for(let j = 10 ; j >= 1 ; j--){
//     document.write(j + ",")
// }

// document.write("<br>")
// document.write("<br>")


// document.write("Even :")
// for(let k = 0 ; k <= 20 ; k+=2){
//     document.write(k + ",")
// }

// document.write("<br>")
// document.write("<br>")


// document.write("Odd :")
// for(let l = 1 ; l <= 19 ; l+=2){
//     document.write(l + ",")
// }

// document.write("<br>")
// document.write("<br>")

// const series = (2,4,6,8,10,12,14,16,18,20)
// document.write("Series :")
// for(let m = 2 ; m <= 20 ; m+=2){
//     document.write(m + "k,")
// }

// done 

// Q.8

// const A =["cookie" , "chips" , "patties" , "cake"]
// const userInput = prompt("please place order")
// const found = false;

// for(let i = 0; i < A.length ; i++){
//     if(A[i]===userInput){
//         found = true;
//         break;
//     }
// }
// if(found){
//     console.log(userInput + "is found in the list!")
// }else{
//     console.log(userInput + "is not found in list!")
// }

// not done 

// Q.9

// var A = [90,67,109,672,787,653];
// var largestNumber = Math.max(...A)

// document.write("THE LARGEST NUMBER OF ARRAY IS" +largestNumber)
// done 

// Q.10

// var A = [90,67,109,672,787,653];
// var smallNumber = Math.min(...A)

// document.write("THE LARGEST NUMBER OF ARRAY IS" +smallNumber)
// done 



// Q.11

// var A = [90,67,109,672,787,653];
// var largestNumber = Math.max(...A)
// var smallNumber = Math.min(...A)


// document.write("THE LARGEST NUMBER OF ARRAY IS" +largestNumber)
// document.write("<br>")
// document.write("THE LARGEST NUMBER OF ARRAY IS" +smallNumber)


// done 

// Q.12


// for(let i=1; i<=100 ; i++){
//     if(i % 5===0){
//         console.log(i)
//     }
// }

// done 


// Q.14

// var score = [45,89,55,12,32,43]
// var stopValue = prompt("enter a stop value")

// for(let i=0; i < stopValue.length ; i++){
//     if(score[i] <= stopValue)
//     console.log(score[i])
// }
// done 


// Q.15

// var a = [[1,2,3],[4,5,6],[7,8,9]]

// for(let i = 0 ; i < a.length; i++){
//     for(let j = 0; j < a[i].length ; j++){
//         document.write(a[i][j])
//     }
// }
// done 

// Q.16

// var num = parseFloat(prompt("Enter a number"));

// while(num > 0){
//     console.log(num);
//     num -= 0.5;
// }

// done 


// Q.17

// for(let num = 0 ; num <= 20 ; num++){
//     if(num % 2 === 0){
//         console.log (num + "is even")
//     }else{
//         console.log(num + "is odd")
//     }
// }
// done 


// Q.18

// let product = 1

// for(let num = 1 ; num <= 7 ; num+=2){
//     product*=num
// }
// console.log("the product of the odd integer form 1 to 7 is" +" " +product)
// done 


// Q.19

// let initailStar = 7

// for(let i = initailStar; i > 0; i--){
//     let line = ""
//     for(let j =0; j < i; j++){
//         line +="*"
//     }
//     console.log(line)
// }
// done

// Q.20