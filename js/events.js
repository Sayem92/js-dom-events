console.log('This is separate js file');
// option 1 onclick directly on the HTML elements---------------------
// <button onclick="console.log(65)">Another Click</button>

// option 2 onclick function on the HTML elements---------------------
///////////////-------------------------we will use this some time--------------------
// <button onclick="makeRed()">Make Red</button> 
function makeRed(){
    document.body.style.backgroundColor= 'red';
}
//option 3 onclick outsite of function
const makeBlueButton= document.getElementById('make-blue');
makeBlueButton.onclick= makeBlue;

function makeBlue(){
    document.body.style.backgroundColor= 'blue';
}

// option 3 ar another system
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
  document.body.style.backgroundColor = 'purple';
}

//option 4 
const pinkButton=document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}
//option 4 ar another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
 document.body.style.backgroundColor = 'green'
})

///////////////-------------------------we will use this some time--------------------
// option 4 finnaly
document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})