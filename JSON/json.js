const person ={
    name : 'radha',
    age : 21,
    color : 'white',
    address : {
        city : 'lucknow',
        state : 'u.p',
        pincode : 276001
    } ,
    hobbies : ['coding', 'singing' ,'dancing']
}
console.log('javascript person object' ,person)
const jsonObject = JSON.stringify(person)
console.log('JSON person Object' , jsonObject)



const javaScripPersontObject = JSON.parse(jsonObject)
console.log('Java script person Object after parse' , javaScripPersontObject)


localStorage.setItem('email','billgates@gmail.com')
const emailId = localStorage.getItem('email')
console.log('email id is',emailId)
localStorage.clear()

