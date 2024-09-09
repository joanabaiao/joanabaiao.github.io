function myFunction() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}

document.getElementById("hamburger-button").addEventListener("click", myFunction);