console.log("我是 JS !!!!!");

document.getElementById("box").innerHTML="RARARARARARARARA";

function exponential(a,b) {
    console.log(a + " 的 " + b + " 次方 = " + (a**b) );
}

exponential(2,16);

var car ={
    type:"YAMAHA",
    cc: "800",
    color: "Red",
    drive: function () {
        console.log("drive....");
    }
}

console.log(car.type);
console.log(car.cc);
console.log(car.color);
car.drive();


var box2 = document.getElementById("box2");
box2.onclick = function(){
    console.log("點擊");
}

box2.onmouseenter = () => {
    console.log("滑入");
}

var numberA = 123;
var numberB = 456;
var numberC = 789;
console.log(numberA);

var numbersObjects = {
    A:123,
    B:456,
    C:789
};
console.log(numbersObjects.B);

var numbersArrays =[123,456,789];
console.log(numbersArrays[2]);


var test1 = 100;
var test2 = 50;

console.log( test1 == test2 );
console.log( test1 != test2 );
console.log( test1 > test2);
console.log( test1 < test2);
console.log( test1 >= test2);
console.log( test1 >= test2+50);
console.log( test1 >= test2+51);