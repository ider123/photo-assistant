const prompts = [
  "Capture golden sunlight hitting your coffee mug.",
  "Photograph shadows on a minimalist wall.",
  "Shoot your reflection in a rainy window.",
  "Find beauty in a quiet corner of your home.",
  "Frame your shoes walking through leaves or puddles.",
  "Photograph a plant in soft morning light.",
  "Take a photo of your desk from a cinematic angle.",
  "Capture someone walking into warm sunset light.",
  "Shoot a lonely road or alley with moody lighting.",
  "Photograph your hand holding something meaningful."
];

function capturePrompt() {
  const promptBox = document.getElementById('promptBox');
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];

  // Reset and trigger animation
  promptBox.classList.remove('fade-in');
  void promptBox.offsetWidth; // force reflow
  promptBox.textContent = prompt;
  promptBox.classList.add('fade-in');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', capturePrompt);
  document.getElementById('promptBox').addEventListener('click', capturePrompt);
  capturePrompt();
});
