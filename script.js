const prompts = [
  "Take a cozy photo of your bed just after you wake up.",
  "Photograph your morning coffee by a window with soft light.",
  "Capture sunlight hitting the floor or a wall.",
  "Shoot your shoes walking on a textured path.",
  "Find a quiet bench or chair and shoot it in calm light.",
  "Take a photo of your hand holding something meaningful.",
  "Photograph shadows dancing on a wall.",
  "Capture a street scene that feels cinematic.",
  "Take a picture of a door, gate, or entryway with mood.",
  "Photograph someone walking away in soft focus."
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
