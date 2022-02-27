'use strict';

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const gameBoard = document.querySelector(".game-board");
const restartEl = document.querySelector(".restart");
const resultEl = document.querySelector(".result");

const boxEl0 = document.querySelector(".box--0");
const boxEl1 = document.querySelector(".box--1");
const boxEl2 = document.querySelector(".box--2");
const boxEl3 = document.querySelector(".box--3");
const boxEl4 = document.querySelector(".box--4");
const boxEl5 = document.querySelector(".box--5");
const boxEl6 = document.querySelector(".box--6");
const boxEl7 = document.querySelector(".box--7");
const boxEl8 = document.querySelector(".box--8");


const iconEl0 = document.querySelector(".icon--0");
const iconEl1 = document.querySelector(".icon--1");
const iconEl2 = document.querySelector(".icon--2");
const iconEl3 = document.querySelector(".icon--3");
const iconEl4 = document.querySelector(".icon--4");
const iconEl5 = document.querySelector(".icon--5");
const iconEl6 = document.querySelector(".icon--6");
const iconEl7 = document.querySelector(".icon--7");
const iconEl8 = document.querySelector(".icon--8");

const playerX = document.querySelector(".player--0");
const playerO = document.querySelector(".player--1");

let activePlayer = playerX;
let row0 = [-1,-1,-1];
let row1 = [-1,-1,-1];
let row2 = [-1,-1,-1];
let col0 = [-1,-1,-1];
let col1 = [-1,-1,-1];
let col2 = [-1,-1,-1];
let winner = -1;

function restartGame() {
   restartEl.classList.add('hidden');
   iconEl0.src = "";
   iconEl1.src = "";
   iconEl2.src = "";
   iconEl3.src = "";
   iconEl4.src = "";
   iconEl5.src = "";
   iconEl6.src = "";
   iconEl7.src = "";
   iconEl8.src = "";
   gameBoard.classList.remove('hidden');
   right.classList.remove('winner');
   left.classList.remove('winner');
   right.classList.remove('loser');
   left.classList.remove('loser');
   right.classList.remove('no-winner');
   left.classList.remove('no-winner');
   left.classList.add('active');
   right.classList.remove('active');
   resultEl.classList.add('hidden');
   activePlayer = playerX;
   row0 = [-1,-1,-1];
   row1 = [-1,-1,-1];
   row2 = [-1,-1,-1];
   col0 = [-1,-1,-1];
   col1 = [-1,-1,-1];
   col2 = [-1,-1,-1];
   winner = -1
}

function switchPlayer() {
   activePlayer = activePlayer === playerO ? playerX : playerO;
   left.classList.toggle('active');
   right.classList.toggle('active');
}

function endGame() {
   gameBoard.classList.add('hidden');
   resultEl.classList.remove('hidden');
   if(winner === 0) {
      resultEl.textContent = "Player X is the winner!";
      left.classList.add('winner');
      right.classList.add('loser');
   } else if(winner === 1) {
      resultEl.textContent = "Player O is the winner!";
      right.classList.add('winner');
      left.classList.add('loser');
   } else {
      resultEl.textContent = "No winner!";
      right.classList.add('no-winner')
      left.classList.add('no-winner');
   }
   restartEl.classList.remove('hidden');
}

function checkForWinner() {
   for (let i = 0; i < 3; i++) {
      if (row0[i] === row1[i] && row1[i] === row2[i] && row0[i] === row2[i]) {
         if(row0[i] === 0 || row0[i] === 1) {
            winner = row0[i];
            return endGame();
         }
      } // check columns
      else if (col0[i] === col1[i] && col1[i] === col2[i] && col0[i] === col2[i]){
         if(col0[i] === 0 || col0[i] === 1) {  
            winner = col0[i];
            return endGame();
         }
      } // check rows
   }

   // check horizontals
   if(row0[0] === row1[1] && row0[0] === row2[2] && row1[1] === row2[2]) {
      if (row0[0] === 0 || row0[0] === 1) {
         winner = row0[0];
         return endGame();
      }
   }
   else if(row0[2] === row1[1] && row0[2] === row2[0] && row1[1] === row2[0]) {
      if (row0[2] === 0 || row0[2] === 1) {
         winner = row0[2];
         return endGame();
      }
   }

   checkForNoWinner();
}

function checkForNoWinner() {
   if (!(row0.includes(-1) || row1.includes(-1) || row2.includes(-1)) && winner === -1) {
      winner = -1;
      return endGame();
   }
}

restartEl.addEventListener('click', function() {
   restartGame();
})

boxEl0.addEventListener('click', function() {
   iconEl0.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row0[0] = activePlayer === playerX ? 0 : 1;
   col0[0] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

boxEl1.addEventListener('click', function() {
   iconEl1.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row0[1] = activePlayer === playerX ? 0 : 1;
   col1[0] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

 boxEl2.addEventListener('click', function() {
   iconEl2.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row0[2] = activePlayer === playerX ? 0 : 1;
   col2[0] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

 boxEl3.addEventListener('click', function() {
   iconEl3.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row1[0] = activePlayer === playerX ? 0 : 1;
   col0[1] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

 boxEl4.addEventListener('click', function() {
   iconEl4.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row1[1] = activePlayer === playerX ? 0 : 1;
   col1[1] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

 boxEl5.addEventListener('click', function() {
   iconEl5.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row1[2] = activePlayer === playerX ? 0 : 1;
   col2[1] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

 boxEl6.addEventListener('click', function() {
   iconEl6.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row2[0] = activePlayer === playerX ? 0 : 1;
   col0[2] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

 boxEl7.addEventListener('click', function() {
   iconEl7.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row2[1] = activePlayer === playerX ? 0 : 1;
   col1[2] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})

 boxEl8.addEventListener('click', function() {
   iconEl8.src = activePlayer === playerX ? "xIcon.jpg" : "oIcon.jpg";
   row2[2] = activePlayer === playerX ? 0 : 1;
   col2[2] = activePlayer === playerX ? 0 : 1;
   checkForWinner();
   switchPlayer();
})
