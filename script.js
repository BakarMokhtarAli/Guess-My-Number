'use strict';

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0

console.log(secretNumber)

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage('🤦‍♂️ No Number');
    }else if(guess === secretNumber){
        displayMessage('✅ Correct Number');
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }
    } else if (guess !== secretNumber){
       document.querySelector('.message').textContent = guess > secretNumber ? '⬆ Too High!' : '⬇ Too Low!';
       if(score > 0 ){
        score --;
        document.querySelector('.score').textContent = score;
    }else{
        displayMessage('💥 You Lose!')
    }
    }
})

document.querySelector('.again').addEventListener('click',()=>{
    score = 20;
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor= '#222';
        document.querySelector('.number').style.width = '15rem';
})