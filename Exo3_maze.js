let boundaries = document.getElementsByClassName("boundary");
let debut = document.getElementById("start");
let fin = document.getElementById("end");
let maze = document.getElementById("maze");
let i = 0;
let win = true;
let status = "";

debut.addEventListener("mouseover", function () {
  if (status != "Vous avez Perdue!" && status != "Vous avez gagné!") {
    status = 'Glissez la souris de "S" vers "E" sans toucher les bordures';
    debut.style.background = "#eeeeee";
    while (i < boundaries.length) {
      boundaries[i].addEventListener("mouseover", function () {
        if (status == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
          win = false;
          for(let j = 0; j < boundaries.length; j++){
            boundaries[j].style.background = "red";
          }
          status = "Vous avez Perdue!";
          stopPropagation();
        }
      });
      i++;
    }
  }
}
)



fin.addEventListener("mouseover", function () {

    if (win == true && status != "Vous avez Perdue!" && status != "") {
      fin.style.background = "#eeeeee";
      status = "Vous avez gagné!";
      for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.background = "green";
      }
  
      setTimeout(function() {
        alert("You win!");
      }, 100); 
    }
    win = true;
  });
  
  