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
