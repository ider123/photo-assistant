const prompts = [
  "Take a photo of whatever you're drinking — coffee, water, or even nothing but your hand.",
  "Look at your feet — snap where they are right now. Carpet, gym, or sidewalk.",
  "Photograph anything with light on it — your phone, your shoes, your hand.",
  "Turn around. What’s behind you? Capture it in a quiet, cinematic way.",
  "Photograph your shadow or reflection — window, wall, mirror, anything.",
  "Snap a cozy corner around you. Chair, blanket, parked car — your moment.",
  "Look down. What’s on the floor near you? Frame it like a moody scene.",
  "Take a picture of your hand holding something: keys, snack, dumbbell — whatever’s there.",
  "Shoot the ground or floor you’re walking on right now.",
  "Photograph what you're listening to — a speaker, your AirPods, or the silence.",
  "Shoot a detail on your outfit: a sleeve, a shoelace, your bag strap.",
  "Frame your drink, your snack, or just the empty table near you.",
  "Take a photo of your current view — front seat, bedroom, gym mat, wherever.",
  "Photograph light and shadow somewhere nearby — the softer, the better.",
  "Take a still shot of your shoes like they’re in a magazine.",
  "Capture something blurry on purpose — a moving hand, a car, the sky.",
  "Look for symmetry around you. Shoot anything balanced — tiles, poles, shelves.",
  "Get creative — tilt your phone and frame from a weird angle.",
  "Zoom in close on a texture — your shirt, your skin, your environment.",
  "Final step: record a 10-second video of your mood, movement, or energy."
];

let currentStep = 0;

function capturePrompt() {
  const promptBox = document.getElementById('promptBox');
  const stepCounter = document.getElementById('stepCounter');

  if (currentStep < prompts.length) {
    const prompt = prompts[currentStep];
    currentStep++;

    promptBox.classList.remove('fade-in');
    void promptBox.offsetWidth;
    promptBox.textContent = prompt;
    promptBox.classList.add('fade-in');

    stepCounter.textContent = `Step ${currentStep} of ${prompts.length}`;
  } else {
    promptBox.textContent = "You're done! Great job.";
    stepCounter.textContent = "";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', capturePrompt);
  document.getElementById('promptBox').addEventListener('click', capturePrompt);

  // Start with first prompt
  capturePrompt();
});
