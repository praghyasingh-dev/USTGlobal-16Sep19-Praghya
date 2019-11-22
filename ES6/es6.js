const message = new Promise(function(resolve,reject){
    if(30>10){

        resolve([{
            name : 'praghya',
            age : 22
        },{
            name : 'ram',
            age : 16
        },{
            name : 'sita',
            age : 7
        }])
       
    }
    else{
        reject('Failed')
    }
})

message.then(function(msg)
{
    console.log('success message -',msg);
}).catch(function(err){
    console.log('failure message-',err)
})

//CLOSURES
function outerFunction(counter){
    function innerFunction(){
        let count;
        count = counter + 10
        return count
    }
    return innerFunction
}
let innerFunc = outerFunction(20)
let counter = innerFunc()
console.log('counter value = ',counter)


//Object Distructuring

const person = {
                 name : 'raj',
                 age : 22,
                 weight : 36
}

console.log('value',let{name,age}=person);


//combining more than 1 objects

const person1 = {
    name : 'rajuuuu',
    age : 22,
    weight : 36
}
const person2 = {
    name : 'ramuuuuuuu',
    age : 22,
    weight : 36
}
