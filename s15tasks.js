// console log two variables 

var a = 10;
var b = 20;

console.log(a, b);


// create a function that takes two parameters, adds them together and then times them by another number. 

var k = myFunction(4, 3);
document.getElementById("demo").innerHTML = k;

function myFunction(a, b) {
    return (a + b)*2;
}

// create two new string variables  and  concat them into  1 string console log.

var y = "welcome";
var x = "to";
var z = "my";
var v = "page";

console.log(y, x, z, v );

// create an empty string variable . then assign it a new  string value. then assign it to that value plus a new value.

var name = "";
console.log(name);

var firstname = "Toby"
console.log(firstname);

var lastname = "Harris";

var name = firstname + " " +lastname;

console.log(name);


// create a function that will compare two variables to see if they match and alert the user  to say if they do or don’t match



function comparefunc(){

    let num1 = document.getElementById("num1").value;

    let num2 = document.getElementById("num2").value;

    let result = (num1 == num2) ? "Good Job":"They are not the same";
    
    document.getElementById("compare").innerHTML = result;
   }



