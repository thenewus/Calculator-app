const changeBtn = document.querySelector(".toggle-btn")
const body = document.body;
let currentMode = "light-theme"; //initial mode

changeBtn.onclick = function() {
  // Remove the current mode class
  body.classList.remove(currentMode);

  // Toggle between modes
  if (currentMode === "light-theme") {
    currentMode = "white-theme";
  } else if (currentMode === "white-theme") {
    currentMode = "purple-theme";
  } else {
    currentMode = "light-theme"; // Cycle back to the initial mode
  }

  // Add the new mode class
  body.classList.add(currentMode);
};

