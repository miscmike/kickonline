// Init Zfont plugin and bind to Zdog
Zfont.init(Zdog);

// Create Zdog Illustration
// https://zzz.dog/api#illustration
var illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  rotate: { x: -0.32, y: 0.64, z: 0 },
  //   resize: true,
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});

// Create a Font object
// You can use any .ttf or .otf font!
// https://github.com/jaames/zfont#zdogfont
var font = new Zdog.Font({
  src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf"
});

// Create a TextGroup object for the title
// https://github.com/jaames/zfont#zdogtextgroup
var title = new Zdog.TextGroup({
  addTo: illo,
  font: font,
  value: "Zfont",
  fontSize: 24,
  translate: { y: -100 },
  textAlign: "left",
  textBaseline: "middle",
  color: "#fff"
  //   fill: true
});

// Duplicate the title to create a shadow effect
var titleShadow = title.copyGraph({
  translate: { z: -6, y: -100 },
  color: "#aab"
});

var titleShadowTwo = title.copyGraph({
  translate: { z: -12, y: -100 },
  color: "#aab"
});

// Create a TextGroup object for the subtitle
// https://github.com/jaames/zfont#zdogtextgroup
var sub = new Zdog.TextGroup({
  addTo: illo,
  font: font,
  // Pass an array as the text value for multiline text:
  value: ["FIRST", "DANCE"],
  fontSize: 128,
  textAlign: "center",
  textBaseline: "middle",
  color: "#ea0af1",
  fill: true
});

// Duplicate the subtitle to create a shadow effect
var subShadow = sub.copyGraph({
  translate: { z: 10 },
  color: "#FFF"
});

// Settings for the wave animation
var t = 0;
var tStep = 5;
var amplitude = 1;
var frequency = 160;

// Wave function
// This loops through every shape in a TextGroup and modifies its position according to a sine wave
function wave(group) {
  group.children.forEach(shape => {
    var x = shape.translate.x + t;
    shape.translate.y += amplitude * Math.sin(x / frequency);
  });
}

// Animation loop
function animate() {
  wave(title);
  wave(titleShadow);
  wave(sub);
  wave(subShadow);

  //   sub.value[0] = sub.value[0] + "a";

  t += tStep;
  //   illo.translate.x += 1;
  //   illo.transform.opacity +
  //   illo.translate.x += 0.3 * Math.sign(Math.random() - 0.5);
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
// illo.translate.x += -600;

animate();

window.onload = function(e) {
  let clock = document.querySelector("#clock"),
    eventTime = moment("12-12-2019 00:00:01", "DD-MM-YYYY HH:mm:ss").unix(),
    currentTime = moment().unix(),
    diffTime = eventTime - currentTime,
    duration = moment.duration(diffTime * 1000, "milliseconds"),
    interval = 1000;
  this.console.log(diffTime);

  // if time to countdown
  if (diffTime > 0) {
    // Show clock

    var months = document.querySelector(".months"),
      days = document.querySelector(".days"),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds");
    // h = $('<div class="hours" ></div>').appendTo($clock),
    // m = $('<div class="minutes" ></div>').appendTo($clock),
    // s = $('<div class="seconds" ></div>').appendTo($clock);

    setInterval(function() {
      duration = moment.duration(
        duration.asMilliseconds() - interval,
        "milliseconds"
      );
      var mo = moment.duration(duration).months(),
        d = moment.duration(duration).days(),
        h = moment.duration(duration).hours(),
        mi = moment.duration(duration).minutes(),
        s = moment.duration(duration).seconds();

      // show how many hours, minutes and seconds are left
      months.textContent = mo + "m";
      days.textContent = d + "d";
      hours.textContent = h + "h";
      minutes.textContent = mi + "m";
      seconds.textContent = s + "s";
    }, interval);
  }
};
