/*//for of loops
var brands = ['kingfisher','bisleri','aqua','kinley']
console.log('for of loop')
for( var element of brands)
{
   
    console.log('brand = ', element);
}
console.log('=========================');

//for -in loop for arrays
var brands1 = ['kingfisher','bisleri','aqua','kinley']
console.log('for in loop')
for(var index in brands1)
{
    console.log('brand = ', brands1[index]);
}
console.log('=========================');
//for -in loop for objects
var person = {
    name:'radha',
    age:7,
    color:'black'
}
console.log('for in loop')
for(var key in person){
    console.log('values = ', person[key]);

}
console.log('=========================');
//foreach loop for arrays only
console.log('foreach in loop')
var car=['bmw','audi','lemborgini']
car.forEach(function(value,index)
{
    console.log('car =',value);
}
);

//
console.log('=========================');
var items = [{ item:'ring',id:1, price:100},{item:'bangles',id:2, price:1000},
            {item:'bike',id:3, price:40000},{item:'jeans',id:4, price:500}]
 items.forEach(function(item,index)
{
    console.log('items =',item);
    console.log('index of item =',index);
})*/



var name;
var name='priti';
name='pallav';


//Console.log(name1)hoisting
let name1;
//let name1='saho';
name1 ="raja";

//const name2;
const name2='dream girl';
//name2='kabir';

console.log('=============using var keyword==============')
for(var i=0;i<5;i++)
{
    console.log('inside for loop',i);
}
console.log('outside for loop',i);



console.log('=============using let keyword==============')
for(let j=0;j<5;j++)
{
    console.log('inside for loop',j);
}
console.log('outside for loop',j);


