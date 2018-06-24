
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

// var emailIcon = document.getElementById("emailIcon");
// for (elem of emailIcon) {
//   elem.addEventListener('mouseover', function() {
//     elem.style.backgroundColor = 'white';
//   })
//   elem.addEventListener('mouseout', function() {
//     elem.style.backgroundColor = 'none';
//   })
// };

// var emailIcon = document.getElementById("emailIcon");
// for (elem of emailIcon) {
//   elem.addEventListener('click', function() {
//     elem.style.backgroundColor = 'white';
//   })
//   elem.addEventListener('mouseout', function() {
//     elem.style.backgroundColor = 'none';
//   })
// };

var emailIcon = document.getElementById("emailIcon");
emailIcon.addEventListener('mouseover', function() {
    elem.style.backgroundColor = 'white';
  })
