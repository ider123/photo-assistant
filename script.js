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
  "Shoot your workspace like a film set.",
  "Frame your bike with golden hour light.",
  "Find a moment of stillness in a busy place.",
  "Photograph something out of focus on purpose.",
  "Capture repeating patterns in architecture.",
  "Shoot from ground level for a dramatic angle.",
  "Photograph the view through something — a window, gate, or hands.",
  "Capture your shadow interacting with the world.",
  "Shoot your feet walking a path.",
  "Photograph a scene that feels cinematic.",
  "Capture a candid moment of someone else’s day."
];

function getDailyPromptIndex() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1); // Jan 1
  const dayOfYear = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return dayOfYear % prompts.length;
}

function capturePrompt() {
  const prompt = prompts[getDailyPromptIndex()];
  const promptBox = document.getElementById('promptBox');

  promptBox.classList.remove('fade-in');
  void promptBox.offsetWidth;
  promptBox.textContent = prompt;
  promptBox.classList.add('fade-in');
}
