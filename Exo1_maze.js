let boundaries = document.getElementsByClassName("boundary");
let debut = document.getElementById("start");
let fin = document.getElementById("end");
let maze = document.getElementById("maze");
let i = 0;
let win = true;
let status = "";


debut.addEventListener("mouseover", function () {
    if (status != "Vous avez Perdu !" && status != "Vous avez gagné !") {
      status = 'Glissez la souris de "S" vers "E" sans toucher les bordures';
      debut.style.backgroundColor = "#eeeeee";
      
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function () {
          if (status == 'Glissez la souris de "S" vers "E" sans toucher les bordures') {
            win = false;
            this.style.backgroundColor = "red";
            status = "Vous avez Perdu !";
            event.stopPropagation(); 
          }
        });
      }
    }
  });
  



