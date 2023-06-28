const myMessage = document.querySelector('.myMessage');
console.log(myMessage)


const myWork = document.querySelector('.myWork')
myMessage.innerText = 'This is a message in the DOM!'



setTimeout(function(){
    myWork.innerText = 'this will show after 10 seconds'
}, 10000 )


setTimeout(function(){
    myWork.innerText = ''
}, 13000 )

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    alert("button clicked!")
    .innerText = 'Button pressed'
});
    const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', function() {
  myMessage.innerText = ''
});


const inputBox = document.querySelector('.theInputValue');

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});


myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})


const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
const buttonElem = document.querySelector('#favfruits')
const fruitNameInput = document.querySelector('#favfruit')

buttonElem.addEventListener('click', ()=> {
    fruits.push(fruitNameInput.value)
    const li = document.createElement('li');
    li.innerText = fruitNameInput.value;
    fruitList.appendChild(li);
    console.log(fruits)
})