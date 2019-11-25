$("#my-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    hideForm();
  });
});

function hideForm() {
  // console.log("you're getting here");
  let form = document.getElementById("form-div");
  console.log(form.classList);
  form.classList.toggle("inactive");
  let clock = document.getElementById("bottom-clock");
  console.log(clock);
  setTimeout(function() {
    // form.style.display = "none";
    clock.classList.toggle("active");
    clock.classList.toggle("inactive");
    clock.style.transform = "translateY(-200px)";
  }, 3000);
  //   event.target.style.transform = "opacity";
  //   event.target.style.display = "none";
}
