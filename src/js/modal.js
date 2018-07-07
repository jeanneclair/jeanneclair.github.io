
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  else {
    myFunction()
  }
}

const openModalButton = document.getElementById("about-me-button");
const closeModalButton = document.getElementById("close-modal");

openModalButton.addEventListener("click", function () {
  document.querySelector("#modal-mask").classList.add("open");
})

closeModalButton.addEventListener("click", function() {
  document.querySelector("#modal-mask").classList.remove("open");
  
})

const openDetailsButton = document.getElementById("details-modal");

openDetailsButton.addEventListener("click", function(){
const para = document.getElementById("details-about-me");

  if (para.classList.contains("open")) {
    para.classList.remove("open");
    openDetailsButton.innerText = "Details";   
  } else { 
    para.classList.add("open");
    openDetailsButton.innerText = "Hide";
  }

open = !open; 
});