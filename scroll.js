let canvasArray = document.querySelectorAll(".zdog");
console.log(canvasArray);
window.addEventListener(
  "scroll",
  function(event) {
    canvasArray.forEach(function(canvas) {
      if (isInViewport(canvas)) {
        canvas.classList.add("active");
        canvas.classList.remove("inactive");
      } else {
        canvas.classList.add("inactive");
        canvas.classList.remove("active");
      }
    });
  },
  false
);

var isInViewport = function(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= -200 &&
    // bounding.left >= 0 &&
    bounding.bottom <= window.innerHeight + 200
  );
};
// var isInViewport = function(elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// };
