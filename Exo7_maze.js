let boundaries = document.getElementsByClassName("boundary");
let debut = document.getElementById("start");
let fin = document.getElementById("end");
let status = document.getElementById("status");
let maze = document.getElementById("maze");
let i = 0;
let win = true;
status.innerHTML = "Hello!";


debut.addEventListener("click", function () {
  status.innerHTML = 'Hello!';
  debut.style.background = "#88ff88";
  fin.style.background = "#8888ff";
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.background = "#eeeeee";
  }
});

debut.addEventListener("mouseover", function () {
 if(status.innerHTML != "Vous avez Perdue!" && status.innerHTML != "Vous avez gagne!"){
  status.innerHTML = 'Glissez la souris de "S" vers "E" sans toucher les bordures';
  debut.style.background = "#eeeeee"
  while (i < boundaries.length) {
    boundaries[i].addEventListener("mouseover", function () {
      if (status.innerHTML == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
        win = false;
        for (var j = 0; j < boundaries.length; j++) {
          boundaries[j].style.background = "red";
        }
        status.innerHTML = "You lose!";
        stopPropagation();
      }
    });
    i++;
  }
  maze.addEventListener("mouseleave", function () {
    if (status.innerHTML == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
      debut.style.background = "#88ff88";
      fin.style.background = "#8888ff";
      for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.background = "red";
      }
  
      setTimeout(function() {
        alert("You are outside! You lose!");
        status.innerHTML = 'Hello!';
      }, 0); 
    }
  });
  
 }
}
)

fin.addEventListener("mouseover", function () {

  if (win == true && status.innerHTML != "Vous avez Perdue!" && status.innerHTML != "Hello!") {
    fin.style.background = "#eeeeee"
    status.innerHTML = "You win!";
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].style.background = "green";
    }
  }
  win = true
});




let startTime = null;
let endTime = null;
let timerInterval;

const start = document.getElementById("start");
const end = document.getElementById("end");

const timerElement = document.getElementById("timer");

start.addEventListener("click", function () {
    startTime = new Date();
    endTime = null;
    clearInterval(timerInterval);
    timerElement.textContent = "Timer started.";
});

end.addEventListener("mouseenter", function () {
    if (startTime) {
        endTime = new Date();
        clearInterval(timerInterval);
        updateTimer();
    }
});

function updateTimer() {
    if (startTime && endTime) {
        const timeDifference = endTime - startTime; 
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        timerElement.textContent = `Time elapsed: ${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
    }
}


let wins = 0;
let losses = 0;
status.innerHTML = "Hello!";
let score = 0;
const scoreElement = document.getElementById("score");

debut.addEventListener("click", function () {
  resetMaze();
});

debut.addEventListener("mouseover", function () {
  if (status.innerHTML !== "Vous avez Perdue!" && status.innerHTML !== "Vous avez gagne!") {
    status.innerHTML = 'Glissez la souris from "S" to "E" without touching the boundaries';
    debut.style.background = "#eeeeee";
    setupBoundaryEventListeners();
  }
});

fin.addEventListener("mouseover", function () {
  if (win && status.innerHTML !== "Vous avez Perdue!" && status.innerHTML !== "Hello!") {
    fin.style.background = "#eeeeee";
    updateScore();
    status.innerHTML = "You win!";
    wins++;
    setBoundaryColors("green");
  } else {
    losses++;
  }
  win = true;
  updateResults();
});

function resetMaze() {
  status.innerHTML = "Hello!";
  debut.style.background = "#88ff88";
  fin.style.background = "#8888ff";
  setBoundaryColors("#eeeeee");
  score = 0;
  scoreElement.textContent = score;
}

function setupBoundaryEventListeners() {
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", function () {
      if (status.innerHTML === 'Glissez la souris from "S" to "E" without touching the boundaries') {
        loseGame();
      }
    });
  }
  maze.addEventListener("mouseleave", function () {
    if (status.innerHTML === 'Glissez la souris from "S" to "E" without touching the boundaries') {
      resetMaze();
      setTimeout(function () {
        alert("You are outside! You lose!");
      }, 0);
    }
  });
}

function loseGame() {
  win = false;
  setBoundaryColors("red");
  status.innerHTML = "You lose!";
  losses++;
  updateResults();
}

function setBoundaryColors(color) {
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].style.background = color;
  }
}

function updateScore() {
  fin.style.background = "#eeeeee";
  endTime = new Date();
  updateTimer();
  if (startTime && endTime) {
    const timeDifference = endTime - startTime;
    const seconds = Math.floor(timeDifference / 1000);
    score = 300 - seconds;
    if (score < 0) {
      score = 0;
    }
    scoreElement.textContent = `Score: ${score}`;
  }
}

function updateResults() {
  status.innerHTML = `Wins: ${wins}, Losses: ${losses}`;
}
