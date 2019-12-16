// Init Zfont plugin and bind to Zdog
Zfont.init(Zdog);

const textSize = 92;
// const textSize = 184 * 2;
const frontColor = "#f7c44c";
// const secondColor = "#ea0af1";
const secondColor = "#5854FF";
// console.log(window.innerHeight);
let drag = true;
if (window.innerHeight < 600) {
  drag = false;
}

var illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  // dragRotate: drag,
  dragRotate: false,
  rotate: { x: -0.32, y: 0.64, z: 0 },
  //   resize: true,
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});
const font = new Zdog.Font({
  src: "./fonts/FredokaOne-Regular.ttf"
});

const orbitronFont = new Zdog.Font({
  src: "./fonts/orbitron-regular.ttf"
});

// const twiddleFont = new Zdog.Font({
//   src: "./fonts/Twiddlestix.otf"
// });

const subDylanFont = new Zdog.Font({
  src: "./fonts/SB.ttf"
});

const quartzFont = new Zdog.Font({
  src: "./fonts/SF-Quartzite.ttf"
});

var sub = new Zdog.TextGroup({
  addTo: illo,
  font: font,
  // Pass an array as the text value for multiline text:
  value: ["FIRST", "DANCE"],
  fontSize: textSize + 16,
  textAlign: "center",
  textBaseline: "middle",
  color: secondColor,
  fill: true
});

// Duplicate the subtitle to create a shadow effect
var subShadow = sub.copyGraph({
  translate: { z: 10 },
  color: frontColor
});

var illoThree = new Zdog.Illustration({
  element: ".zdog-canvas-three",
  dragRotate: drag,
  rotate: { x: -0.64, y: 0.32, z: 0 },
  //   resize: true,
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});

var subThree = new Zdog.TextGroup({
  addTo: illoThree,
  font: subDylanFont,
  // Pass an array as the text value for multiline text:
  value: ["NuMartha"],
  // value: ["MARTHA"],
  // value: ["jennifer", "loveless"],
  fontSize: textSize + 64,
  textAlign: "center",
  textBaseline: "middle",
  color: secondColor,
  fill: true
});

// Duplicate the subtitle to create a shadow effect
var subShadowThree = subThree.copyGraph({
  translate: { z: 10 },
  color: frontColor
});

var illoFour = new Zdog.Illustration({
  element: ".zdog-canvas-four",
  dragRotate: drag,
  rotate: { x: 0.64, y: -0.32, z: 0 },
  //   resize: true,
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});

var subFour = new Zdog.TextGroup({
  addTo: illoFour,
  font: orbitronFont,
  value: ["ISA"],
  fontSize: textSize + 16,
  textAlign: "center",
  textBaseline: "middle",
  color: secondColor,
  fill: true
});
//duplicate shadow for 3d effect
var subShadowFour = subFour.copyGraph({
  translate: { z: 10 },
  color: frontColor
});
//illo5
var illoFive = new Zdog.Illustration({
  element: ".zdog-canvas-five",
  dragRotate: drag,
  rotate: { x: 0.32, y: -0.64, z: 0 }
});

var subFive = new Zdog.TextGroup({
  addTo: illoFive,
  font: quartzFont,
  value: ["DEJAAN"],
  fontSize: textSize,
  textAlign: "center",
  textBaseline: "middle",
  color: secondColor,
  fill: true
});

// Duplicate the subtitle to create a shadow effect
var subShadowFive = subFive.copyGraph({
  translate: { z: 10 },
  color: frontColor
});

//illo 6
var illoSix = new Zdog.Illustration({
  element: ".zdog-canvas-six",
  dragRotate: drag,
  rotate: { x: 0.32, y: -0.64, z: 0 },
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});

var subSix = new Zdog.TextGroup({
  addTo: illoSix,
  font: font,
  value: ["kickonline", "djs"],
  fontSize: textSize - 16,
  textAlign: "center",
  textBaseline: "middle",
  color: secondColor,
  fill: true
});

// Duplicate the subtitle to create a shadow effect
var subShadowSix = subSix.copyGraph({
  translate: { z: 10 },
  color: frontColor
});

// Settings for the wave animation
var t = 0;
var tStep = 5;
var amplitude = 1;
var frequency = 160;

function wave(group) {
  group.children.forEach(shape => {
    var x = shape.translate.x + t;
    shape.translate.y += amplitude * Math.cos(x / frequency);
  });
}

// Animation loop
function animate() {
  wave(sub);
  wave(subShadow);

  illo.rotate.y += 0.004;

  illoThree.rotate.z += 0.004;

  illoFour.rotate.x += 0.004;

  illoFive.rotate.y += -0.004;
  illoFive.rotate.z += -0.004;

  illoSix.rotate.z += -0.004;

  t += tStep;
  //   illo.translate.x += 0.3 * Math.sign(Math.random() - 0.5);
  illo.updateRenderGraph();
  illoThree.updateRenderGraph();
  illoFour.updateRenderGraph();
  illoFive.updateRenderGraph();
  illoSix.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();

window.onload = function(e) {
  let clock = document.querySelector(".clock"),
    eventTime = moment("01-01-2020 00:00:01", "DD-MM-YYYY HH:mm:ss").unix(),
    currentTime = moment().unix(),
    diffTime = eventTime - currentTime,
    duration = moment.duration(diffTime * 1000, "milliseconds"),
    interval = 1000;

  // if time to countdown
  if (diffTime > 0) {
    // Show clock

    var months = document.querySelectorAll(".months")[0],
      days = document.querySelectorAll(".days")[0],
      hours = document.querySelectorAll(".hours")[0],
      minutes = document.querySelectorAll(".minutes")[0],
      seconds = document.querySelectorAll(".seconds")[0],
      monthsTwo = document.querySelectorAll(".months")[1],
      daysTwo = document.querySelectorAll(".days")[1],
      hoursTwo = document.querySelectorAll(".hours")[1],
      minutesTwo = document.querySelectorAll(".minutes")[1],
      secondsTwo = document.querySelectorAll(".seconds")[1];

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
      if (mo > 0) {
        months.textContent = mo + "mo";
      }
      if (d > 0) {
        days.textContent = d + "d";
      }
      hours.textContent = h + "h";
      minutes.textContent = mi + "m";
      seconds.textContent = s + "s";
      monthsTwo.textContent = mo + "mo";
      daysTwo.textContent = d + "d";
      hoursTwo.textContent = h + "h";
      minutesTwo.textContent = mi + "m";
      secondsTwo.textContent = s + "s";
    }, interval);
  }
};
