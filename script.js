let rand=parseInt(Math.random()*100+1);
const userInput=document.querySelector(".guesshold")
const sub=document.querySelector("#sub")
const prevGuess=document.querySelector(".guesses")
const guessRemain=document.querySelector(".remaining")
const message=document.querySelector(".message")
const result=document.querySelector(".count")
let guesses=[]
let countGuess=1
let isGuess=true;
const p=document.createElement('p')
if(isGuess){
 sub.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validGuess(guess)
 });
}
function validGuess(guess){
   if(guess<0){
   alert(`please enter a valid number`);
   }
   else if(guess>100){
    alert(`please enter a valid number`);
   }
   else if(isNaN(guess)){
  alert(`${guess} is not a valid number`);
   }
   else{
    guesses.push(guess);
if(countGuess===11){
    showDetails(guess);
    displayMeassage(`game over,random number was ${rand}`)
    endGame();
}
else{
    showDetails(guess);
    acceptGuess(guess);
}   }

}
function acceptGuess(guess){
      if(guess===rand){
 displayMeassage('you guess it right')
 endGame();
      }
      else if(guess>rand){
        displayMeassage('number is too high')
      }
      else if(guess<rand){
        displayMeassage('number is too low')
      }
}
function showDetails(guess){
userInput.value=''
prevGuess.innerHTML+=`${guess+" "}`
countGuess++;
guessRemain.innerHTML=`${11-countGuess}`
}
function displayMeassage(mess){
    message.innerHTML=`<h2>${mess}</h2>`;
     
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled',"")
p.classList.add('button')
p.innerHTML=`<h2 id="newgame"> Start New Game</h2>`
result.appendChild(p)
isGuess=false;
newGame();
  }
  function newGame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
      rand=parseInt(Math.random()*100+1);
      guesses=[]
      countGuess=1
      message.innerHTML=''
     prevGuess.innerHTML=''
      guessRemain.innerHTML=`${11-countGuess}`
      userInput.removeAttribute('disabled')
      result.removeChild(p)
     isGuess=true;
    });
  }