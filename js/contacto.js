//Funcion del Menu desplegable 
 function dropdownFunction(id) {
  document.getElementById(id).classList.toggle("show");
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
}
//Funcion del Modal 
function on(e) {
  if(e==='btnlourtec'){
    document.getElementById("modallourtec").style.display = "block";
  }else{
    document.getElementById("modalsdi").style.display = "block";
  }
}

function off() {
  document.getElementById("modallourtec").style.display = "none";
  document.getElementById("modalsdi").style.display = "none";
}

