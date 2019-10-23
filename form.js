// document.forms[0].onsubmit = function(event) {
//   //   event.preventDefault();
//   hideForm(event);
//   return false;
// };

// let button = document
//   .querySelectorAll("button")[0]
//   .addEventListener("click", hideForm);

function hideForm(event) {
  console.log("you're getting here");
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
