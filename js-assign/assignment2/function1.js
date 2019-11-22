//use all for ways of function
//Question1- Find a factorial of the number------------------------------------------------------------------------

//Named Function--------------------------
function factorial(x)
{
    if(x===0)
    {
        return 1;
    }
    return x*factorial(x-1);
}
console.log('factorial of 5=',factorial(5));


//function expression(anonymus)-------------
var fact = function(y)
    { if (y===0)
        {
        return 1;
        } 
    return y * fact (y-1);
}
var value = fact(4);
console.log(' fact of 4 value=',value);

//self invoked function---------------
(function(fact){
    { if (y===0)
        {
        return 1;
        } 
    return y * fact (y-1);
}

    console.log('value of fact=',fact);
})
fact(4)

//fat arrow----------------------

var fact1 = (p)=>{ 
   { if (p===0)
        {
        return 1;
        } 
    return p * fact1 (p-1);
}
    console.log('value=',);
}
fact1(3)

var factorial1 = (fact)
//Question 2 find fabonacci series--------------------------------------------------------------------------------
//named fuction
function fabonacci(num){
    var x = 0;
    var y = 1;
    console.log(x);
    console.log(y);
    for(var i=0;i<num-2;i++){
        var z = x + y;
        console.log(z);
        x = y;
        y = z;
    }
}


//Question 3 find circumference of a  circle--------------------------------------------------------------------------------
//named fuction



//function expression
var circumferenceOfCircle=function(rd){
    return Math.round(2*3.14*rd)

}
var radius = 5
console.log('circume of circle',circumferenceOfCircle)



//Question 4 write a function add number in array and return total[10,20,30,40] return 100-------------------------------------------------------------------
//named fuction
function addArray(arr)
{
    var sum = 0;
    for(var i in arr)
    {
        sum += arr[i];

    }
    console.log(' addition os array element is=',sum);
}
var arr = [10,20,30,40];
addArray(arr);


//using function expression
var value = function(arr)
{
    var sum=0;
    for(var i in arr)
    {
        sum += arr[i];

    }
    return sum;
}
var addvalues = value (arr);
console.log(' addition os array element is=',addvalues);
//using fat array
var sum=(arr) =>{
    sum = 0
    for (var i in arr)
    {
        sum += arr[i]
    }
}
var arr = [10,20,30,40]
console.log(' addition os array element is=',sum(arr));




//question 5 check no. is prime number or not ---------------------------------------------------------------------------------------------------
//named fuction
function prime(num)
{
    if(num===0 || num===1)
    {
        return  false;
    }
    else if(num===2)
    {
        return true;
    }
    else{
        for(var i=2;i<=num/2;i++)
        {
            if(num%i===0)
            {
                return false;

            }
            else{
                return true;
            }
        }
    }
}
console.log(prime(2));


