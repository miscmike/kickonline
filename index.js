// Init Zfont plugin and bind to Zdog
Zfont.init(Zdog);

const textSize = 96;
const frontColor = " #f7c44c";
// const secondColor = "#ea0af1";
const secondColor = "#5854FF";

// pink and yellow
// dodger blue => #5854FF
// pink => #ea0af1
// yellow => #f7c44c
// rgb(75,172,230) = #4bace6
// #62d3af
// Create Zdog Illustration
// https://zzz.dog/api#illustration
var illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  //   dragRotate: true,
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
const font = new Zdog.Font({
  src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf"
});

const diamondFont = new Zdog.Font({
  src: "https://ucarecdn.com/b933af13-797f-455d-9936-167f26451609/diamond.ttf"
});

const twiddleFont = new Zdog.Font({
  src:
    "https://ucarecdn.com/a8c8d117-a8d6-4234-9023-460307e806bf/Twiddlestix.otf"
});

const subDylanFont = new Zdog.Font({
  src: "https://ucarecdn.com/c373df43-d4e7-42f0-af16-cfe0ecef0f7a/SB.ttf"
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
  fill: true,
  DragEvent: true
});

// Duplicate the subtitle to create a shadow effect
var subShadow = sub.copyGraph({
  translate: { z: 10 },
  color: frontColor
});

var illoThree = new Zdog.Illustration({
  element: ".zdog-canvas-three",
  //   dragRotate: true,
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
  value: ["MARTHA"],
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
  //   dragRotate: true,
  rotate: { x: 0.64, y: -0.32, z: 0 },
  //   resize: true,
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});

var subFour = new Zdog.TextGroup({
  addTo: illoFour,
  font: diamondFont,
  // Pass an array as the text value for multiline text:
  value: ["EDDY", "DIAMOND"],
  // value: ["eddy", "diamond"],
  fontSize: textSize + 32,
  textAlign: "center",
  textBaseline: "middle",
  color: secondColor,
  fill: true
});

// Duplicate the subtitle to create a shadow effect
var subShadowFour = subFour.copyGraph({
  translate: { z: 10 },
  color: frontColor
});
//illo5
var illoFive = new Zdog.Illustration({
  element: ".zdog-canvas-five",
  //   dragRotate: true,
  rotate: { x: 0.32, y: -0.64, z: 0 }
  //   resize: true,
  // onResize: function(width, height) {
  //   var minSize = Math.min(width, height);
  //   this.zoom = minSize / 420;
  // }
});

var subFive = new Zdog.TextGroup({
  addTo: illoFive,
  font: twiddleFont,
  // Pass an array as the text value for multiline text:
  value: ["DEJAAN"],
  // value: ["dejaan"],
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
  //   dragRotate: true,
  rotate: { x: 0.32, y: -0.64, z: 0 },
  //   resize: true,
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});

var subSix = new Zdog.TextGroup({
  addTo: illoSix,
  font: font,
  // Pass an array as the text value for multiline text:
  value: ["misc", "mike"],
  fontSize: textSize,
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
  // wave(title);
  // wave(titleShadow);
  wave(sub);
  wave(subShadow);
  // wave(subTwo);
  // wave(subShadowTwo);

  //   sub.value[0] = sub.value[0] + "a";
  illo.rotate.y += 0.004;
  // illoTwo.rotate.x += 0.002;
  illoThree.rotate.z += 0.004;
  // illoThree.rotate.y += -0.002;
  illoFour.rotate.x += 0.004;
  // illoFour.rotate.y += -0.002;
  // illoFive.rotate.x += 0.01;
  illoFive.rotate.y += -0.004;
  illoFive.rotate.z += -0.004;
  // illoSix.rotate.x += 0.01;
  illoSix.rotate.z += -0.004;
  // illoSeven.rotate.x += 0.002;
  // illoSeven.rotate.y += -0.002;

  t += tStep;
  //   illo.translate.x += 1;
  //   illo.transform.opacity +
  //   illo.translate.x += 0.3 * Math.sign(Math.random() - 0.5);
  illo.updateRenderGraph();
  // illoTwo.updateRenderGraph();
  illoThree.updateRenderGraph();
  illoFour.updateRenderGraph();
  illoFive.updateRenderGraph();
  illoSix.updateRenderGraph();
  // illoSeven.updateRenderGraph();
  requestAnimationFrame(animate);
}
// illo.translate.x += -600;

animate();

window.onload = function(e) {
  let clock = document.querySelector("#clock"),
    eventTime = moment("01-01-2020 00:00:01", "DD-MM-YYYY HH:mm:ss").unix(),
    currentTime = moment().unix(),
    diffTime = eventTime - currentTime,
    duration = moment.duration(diffTime * 1000, "milliseconds"),
    interval = 1000;
  // this.console.log(diffTime);

  // if time to countdown
  if (diffTime > 0) {
    // Show clock

    var months = document.querySelector(".months"),
      days = document.querySelector(".days"),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds"),
      left = document.getElementById("leftDot");

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
      // left.style.paddingRight = "50vw";
      // left.style.paddingRight = `${Math.floor(200 * Math.random())}px`;
      // left.style.paddingRight = `${95 *
      //   (duration.asMilliseconds() / 6572755000)}%`;
    }, interval);
    console.log(duration.asMilliseconds());
    console.log(6572755000);
    console.log(duration.asMilliseconds() / 6572755000);
  }
};
