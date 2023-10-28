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