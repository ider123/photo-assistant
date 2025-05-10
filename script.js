function capturePrompt() {
  const prompts = [
    "Capture your morning coffee",
    "Show your cozy corner",
    "Photograph something green"
  ];

  const stepText = document.getElementById("stepCounter");
  const promptBox = document.getElementById("promptBox");
  const currentStep = parseInt(stepText.innerText.match(/\d+/)[0]);

  if (currentStep <= 20) {
    promptBox.innerText = prompts[Math.floor(Math.random() * prompts.length)];
    stepText.innerText = `Step ${currentStep + 1} of 20`;
  }
}
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Convert to 12-hour format if you prefer
  // hours = hours % 12 || 12;

  // Pad with leading zeros
  if (minutes < 10) minutes = '0' + minutes;
  clockElement.textContent = `${hours}:${minutes}`;
}

// Run on load
updateClock();

// Update every minute
setInterval(updateClock, 60000);
