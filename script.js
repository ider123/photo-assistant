const prompts = [
  "Capture the morning light on your window.",
  "Find a cozy corner and snap the texture.",
  "Take a wide street shot with clean lines.",
  "Photograph your coffee setup like a scene from a movie.",
  "Frame a bike with soft backlight."
];

function capturePrompt() {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('promptBox').textContent = prompt;
}
