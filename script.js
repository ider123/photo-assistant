function capturePrompt() {
  const prompts = [
    "Capture your morning coffee",
    "Show your cozy corner",
    "Photograph something green",
    "Snap a photo of your shoes",
    "Document your lunch spot",
    "Catch the afternoon light",
    "Take a selfie with your current vibe",
    "Frame your favorite object nearby",
    "Zoom in on textures",
    "Show a quiet or busy moment"
  ];

  const stepText = document.getElementById("stepCounter");
  const promptBox = document.getElementById("promptBox");
  const currentStep = parseInt(stepText.innerText.match(/\d+/)[0]);

  if (currentStep <= 20) {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    promptBox.innerText = randomPrompt;
    stepText.innerText = `Step ${currentStep + 1} of 20`;
  } else {
    promptBox.innerText = "You're done! Now share your story.";
  }
}

// Optional: show video preview if user records
document.getElementById("videoInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  const video = document.getElementById("videoPreview");
  if (file) {
    video.src = URL.createObjectURL(file);
    video.style.display = "block";
  }
});
