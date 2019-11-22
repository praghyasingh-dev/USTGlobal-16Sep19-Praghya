console.log('window object',window);
console.log('this keyword',this);
console.log(this===window);

/*window.alert('welcome to js class');//for alert
alert('welcome ust ana test yantra')


//for confirm method
let confirmInfo = confirm(' today,are you happy?');
console.log('confirm',confirmInfo);


//prompt method
let name = prompt('what is your name','praghya')
console.log('name=',name)
*/

const person = {
    firstName : 'alia',
    age : 26,
    lastName : 'kapoor',
    getName : function(){
        console.log('this keyword',this)
        return this.firstName + '' +this.lastName
    }
}

let fullName = person.getName()
console.log('full name =',fullName)