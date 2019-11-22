//Named function

function add(num1,num2){
    console.log('sum=',num1 + num2)
}
//no method overloading
add(10,20)


//function expression(anonymus)
var sub = function(num1,num2)
{
    var subValue = num1 - num2;
    return subValue
}
var value = sub(90,80);
console.log('value=',value);

//function with fat arrow
console.log('===================');
console.log('hello');//semicoln is imp.....


//self invoked function
(function(num1,num2){
    console.log('value=',num1/num2);
})
(50,5)


//fat arrow------------------
console.log('===================');
var div5=(num1,num2)=>{
    console.log('value=',num1/num2);
}
div5(20,10)

console.log('===================');
var div1=num1=>{
    console.log('value=',num1);
}
div1(16)


console.log('===================');
var div2=num1=>console.log(num1);
div2(24)

console.log('===================');
var add7 = (num1,num2)=>num1+num2;
var value4=add(10,20);
console.log('value=',value4)
console.log('===================');
greeting('praghya');
function greeting(msg){
    console.log('hello=',msg);
}


console.log('===================');

var greet = function(msg)
{
    console.log('hi=',msg);
}
greet('radha');
console.log('===================');

var greets = (msg) =>{
    console.log('hi',msg);
}
greets('hifriend')

