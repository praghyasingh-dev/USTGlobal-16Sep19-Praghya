/* let h1Element = document.getElementById('demo')
console.log('element =',h1Element)
console.log('element text content properrty=',h1Element.textContent)
h1Element.textContent = 'good evening'
console.log('====================================')
let buttonElement = document.createElement('button')
buttonElement.textContent = 'click me'
console.log('button element',buttonElement)


document.body.appendChild(buttonElement);      //making unordered list
let ulElement = document.createElement('ul') 
let li1Element = document.createElement('li')
let li2Element = document.createElement('li')
let li3Element = document.createElement('li')
li1Element.textContent = 'java';
li2Element.textContent = 'sql';
li3Element.textContent = 'javascript';

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)
ulElement.appendChild(li3Element)
document.body.appendChild(ulElement)


h1Element.style.color = 'red' 
  //text colour

  h1Element.style.fontSize = '50px' */

  function showMessage(){
      alert('hi hello welcome!!!!!!!!!!!')
  }

  function changeColor(){
   let pElement = document.getElementById('mover')
   pElement.style.color = 'red' 
  }
  function removeColor(){
    let pElement = document.getElementById('mover')
    pElement.style.color = 'green' 
  }

  function printHello(){
      console.log('hello')
      let userName = document.getElementById('username').value
      document.getElementById('showusername').textContent = userName;
  }


  let name = 'rakesh'
  let age = 21
  let phoneno = 648837382
  console.log('name is'+name+'age is' +age+'phone no is'+phoneno)
  console.log(`name is ${name} age is ${age} phone no is${phoneno}`)
  console.log(`2+2=${2+2}`)


  //document.getElementById('b1') disabled =false
