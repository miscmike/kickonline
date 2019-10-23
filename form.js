document.forms[0].onsubmit = function(event) {
  event.preventDefault();
  hideForm(event);
};

// console.log(document.forms[0]);

function hideForm(event) {
  let form = document.getElementById("form-div");
  console.log(form.classList);
  form.classList.toggle("inactive");
  let clock = document.getElementById("clock");
  setTimeout(function() {
    // form.style.display = "none";
    clock.classList.toggle("active");
    clock.classList.toggle("inactive");
    clock.style.transform = "translateY(-100px)";
  }, 3000);
  //   event.target.style.transform = "opacity";
  //   event.target.style.display = "none";
}
