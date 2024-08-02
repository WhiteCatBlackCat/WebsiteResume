// Animationstart Event
const box = document.getElementById("box");
const box1 = document.getElementById("box1");

box.addEventListener("animationstart", function (event) {
  box1.textContent = "";
});

// Animationend Event
box.addEventListener("animationend", function (event) {
  box1.textContent = "Welcome,";
});

// Slide
// DOM elements:
const items = document.querySelectorAll(".item:not(:first-child)");
const options = {
  threshold: 0.5
};

// Next, let’s create the actual observer instance as well as the callback function, which will need to loop over the any entries it’s observing and add the slide-in class to each one if it is intersecting. We will also pass in options object we just defined:
function addSlideIn(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    } else {
      // this else part is not compulsory
      entry.target.classList.remove("slide-in");
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options);

// Lastly, we need to loop over all the DOM nodes we selected with querySelectorAll and tell our observer to observe each of them:
items.forEach((item) => {
  observer.observe(item);
});

// Dark/Light Toggle
const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
  body.classList.toggle("dark-mode");

  const modeMessage = body.classList.contains("dark-mode")
    ? "Dark Mode"
    : "Light Mode";

  modeStatus.innerText = "Currently in " + modeMessage;
}

modeToggle.addEventListener("click", toggleMode);

//
