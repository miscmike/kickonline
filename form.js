document.forms[0].onsubmit = function(event) {
  event.preventDefault();
  hideForm(event);
};

console.log(document.forms[0]);

function hideForm(event) {
  event.target.classList.toggle("inactive");
  let clock = document.getElementById("clock");
  setTimeout(function() {
    event.target.style.display = "none";
    clock.classList.toggle("active");
    clock.classList.toggle("inactive");
  }, 3000);
  //   event.target.style.transform = "opacity";
  //   event.target.style.display = "none";
}
