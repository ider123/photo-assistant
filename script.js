const prompts = [
  "Step 1: Photograph your morning drink next to soft shadows on the couch.",
  "Step 2: Take a flat lay of your breakfast plate in natural window light.",
  "Step 3: Capture your sneakers at the gym with dumbbells or weights nearby.",
  "Step 4: Snap a mirror selfie in your workout outfit before you train.",
  "Step 5: Show your post-workout drink, towel, and gym floor gear.",
  "Step 6: Take a screen of your music playlist with your coffee setup beside it.",
  "Step 7: Get a cozy shot of your legs resting after a workout session.",
  "Final Step: Record a short video of your last workout exercise."
];

let currentStep = 0;

function capturePrompt() {
  const promptBox = document.getElementById('promptBox');
  
  // Show the current prompt
  promptBox.classList.remove('fade-in');
  void promptBox.offsetWidth;
  promptBox.textContent = prompts[currentStep];
  promptBox.classList.add('fade-in');
  
  // Move to next step (but stop at the end)
  if (currentStep < prompts.length - 1) {
    currentStep++;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', capturePrompt);
  document.getElementById('promptBox').addEventListener('click', capturePrompt);
  
  // Start with first step
  capturePrompt();
});
