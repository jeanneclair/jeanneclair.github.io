
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

var i = 0;
var txt = '#educator #lifeLongLearner #clarinetist #traveler'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter();



// var i1 = 0;
// var txt1 = '#educator #lifeLongLearner'; 
// var speed1 = 50; 

// function typeWriter1() {
//   if (i1 < txt1.length) {
//     document.getElementById("typed1").innerHTML += txt1.charAt(i1);
//     i1++;
//     setTimeout(typeWriter1, speed1);
//   }
// }
// window.onload = typeWriter1();

// var i2 = 0;
// var txt2 = '#clarinetist #traveler'; 
// var speed2 = 50; 

// function typeWriter2() {
//   if (i2 < txt2.length) {
//     document.getElementById("typed2").innerHTML += txt2.charAt(i2);
//     i2++;
//     setTimeout(typeWriter2, speed2);
//   }
// }
// window.onload = typeWriter2();


