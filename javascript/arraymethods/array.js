const hobbies = ['dancing','singing','sleeping','coding']
console.log(typeof hobbies);
//.isarray method
const isArrayOrNot = Array.isArray(hobbies)
console.log('hobbies array or not?',isArrayOrNot);



//.include method
const hasCoding = hobbies.includes('coding')
console.log(' coding is present or not?',hasCoding);
//.push method

hobbies.push('guitar','football')
console.log('after adding element',hobbies);
//.pop method
hobbies.pop()
console.log('after removing element',hobbies);

//.unshift method
hobbies.unshift('cooking','roaming');
console.log('after adding from first index',hobbies);
//.shift method

hobbies.shift()  
console.log('after remove from first index',hobbies);
//.splice method
hobbies.splice(1,2,'pubg','jimming');
console.log('after remove and adding from first index',hobbies);
//.slice method

const remove=hobbies.slice(2,4);
console.log('after remove and adding from first index',hobbies);
console.log('after remove and adding from slice first index',remove);
//.indexof
const indexOfJimming = hobbies.indexOf('jimming',2);
console.log('find the element indexs',indexOfJimming);

//.join using call back function
const stringHobby = hobbies.join('-');
console.log('it is string using separator',stringHobby);


// .map using call back function
const  number=[100,200,300,400]
const num1 = number.map(function(value,index)
{
    let newValue = value + 50
     return newValue
})
console.log('after mapping',num1);



// .map using fat arrow function

const num2 = number.map(value=> value + 50);

console.log('after mapping',num2);


// .filter using call back function

const num3 = number.filter(function(value,index)
{
    if(value >200)
        {
            return true
        }
        else{
            return false}
            
        }
    )
    

console.log('after mapping',num3);


csonsole.log('=====================================')
//.filter using fat arrow function
const number4 = number.filter(value => value >200)
console.log('after mapping',number4);


const items=[{
    name:'earring',
    id:1,
    price:5000
},
{
    name:'kajal',
    id:2,
    price:1000
},
{
    name:'trimmer',
    id:3, price:3000},
{
    name:'beardo',id:4,  price:250
}]
const num9 = items.map(function(name,id,price)
{
    let newValue = price + 300
     return newValue
}
console.log('values',num9);