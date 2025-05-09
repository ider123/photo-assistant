const prompts = [
  "Photograph your morning drink next to soft shadows on the couch.",
  "Take a flat lay of your breakfast plate in natural window light.",
  "Capture your sneakers at the gym with dumbbells or weights nearby.",
  "Hold your iced coffee up against a blank wall with soft light.",
  "Snap a mirror selfie in your workout outfit before you train.",
  "Show your post-workout drink, towel, and gym floor gear.",
  "Photograph your home lunch plate from above with clean framing.",
  "Take a screen of your music playlist with your coffee setup beside it.",
  "Get a cozy shot of your legs resting after a workout session.",
  "Shoot your workout shoes on the gym floor, relaxed but focused."
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
