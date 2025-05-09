const prompts = [
  "Photograph your coffee setup like a scene from a movie.",
  "Shoot your shoes from above like a journey.",
  "Capture a lonely bench in soft afternoon light.",
  "Photograph window reflections with street life behind.",
  "Take a close-up of your hands doing something — writing, making, reaching.",
  "Shoot a moody urban corner after rain.",
  "Find a shadow or light pattern and make it the subject.",
  "Capture someone mid-step, walking or biking.",
  "Photograph your morning coffee with dramatic shadows.",
  "Shoot your workspace like a film set."
];

function capturePrompt() {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  const promptBox = document.getElementById('promptBox');

  // Reset animation
  promptBox.classList.remove('fade-in');
  void promptBox.offsetWidth; // force reflow
  promptBox.textContent = prompt;
  promptBox.classList.add('fade-in');
}

// ALSO trigger when user taps the promptBox
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('promptBox').addEventListener('click', capturePrompt);
});
