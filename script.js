const cozyPrompts = [
  "Photograph your morning drink next to soft shadows on the couch.",
  "Take a flat lay of your breakfast plate in natural window light.",
  "Capture your sneakers at the gym with dumbbells or weights nearby.",
  "Hold your iced coffee up against a blank wall with soft light.",
  "Snap a mirror selfie in your workout outfit before you train.",
  "Show your post-workout drink, towel, and gym floor gear.",
  "Photograph your home lunch plate from above with clean framing.",
  "Take a screen of your music playlist with your coffee setup beside it.",
  "Get a cozy shot of your legs resting after a workout session.",
  "Shoot your workout shoes on the gym floor, relaxed but focused.",
  "Photograph your face in the gym mirror with dim lighting.",
  "Shoot your pre-workout snack next to your gym gear.",
  "Photograph your reflection in a gym window or machine.",
  "Take a moody shot of your protein shake or blender bottle.",
  "Capture your arm or hand with gym texture in the background.",
  "Shoot your gym towel draped over a bench.",
  "Photograph your shoes stepping into the gym.",
  "Take a shot of your wristwatch or timer during cooldown.",
  "Zoom in close on a texture — your shirt, your skin, your environment.",
  "Final step: record a 10-second video of your mood, movement, or energy."
];

const spicyPrompts = [
  "Take a photo of your drink. If it’s just water again, I’m judging.",
  "Snap your shoes. If they’re still on the wrong feet, that’s on you.",
  "Photograph something dramatic — or pretend your life has meaning for 2 seconds.",
  "Find a shadow. Try not to trip while chasing aesthetic lighting.",
  "Take a picture of your hand doing something useful. Just once.",
  "Capture your view right now. Unless it's a mess — then zoom in.",
  "Snap your breakfast. Or whatever you lied about eating on Instagram.",
  "Take a blurry shot. It’s not art — your lens is dirty. Clean it.",
  "Frame your ‘outfit’ — if pajamas count, we support you (barely).",
  "Shoot your mirror selfie. Pretend you’re the main character. Again.",
  "Zoom into something random. Call it texture. We’ll pretend to believe you.",
  "Take a picture of something that makes you happy. No pressure.",
  "Point your camera at the floor and act mysterious. Emo points: 10/10.",
  "Photograph your snack. Or your hunger-induced rage — both work.",
  "Snap something that looks peaceful. Or fake it till you make it.",
  "Take a moody corner shot. Bonus if you look deep and misunderstood.",
  "Find light and pretend you know what ‘soft shadows’ mean.",
  "Frame your coffee like it’s a life choice. Judgment begins now.",
  "Get one aesthetic shot. Just one. I believe in you. Kinda.",
  "Final step: record a 10-sec video. You better SERVE. I’m watching."
];

let currentStep = 0;
let currentPrompts = cozyPrompts;

function capturePrompt() {
  const vibe = document.getElementById('vibeSelector').value;
  const promptBox = document.getElementById('promptBox');
  const stepCounter = document.getElementById('stepCounter');

  // Set the prompt list only once, at the beginning
  if (currentStep === 0) {
    if (vibe === "spicy") {
      currentPrompts = spicyPrompts;
    } else {
      currentPrompts = cozyPrompts;
    }
  }

  if (currentStep < currentPrompts.length) {
    const prompt = currentPrompts[currentStep];
    currentStep++;

    promptBox.classList.remove('fade-in');
    void promptBox.offsetWidth;
    promptBox.textContent = prompt;
    promptBox.classList.add('fade-in');

    stepCounter.textContent = `Step ${currentStep} of ${currentPrompts.length}`;
  } else {
    promptBox.textContent = "You're done! Time to record a short video.";
stepCounter.textContent = "";
videoSection.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', capturePrompt);
  document.getElementById('promptBox').addEventListener('click', capturePrompt);
});
// Camera handling
const cameraButton = document.getElementById('cameraButton');
const cameraInput = document.getElementById('cameraInput');
const photoPreview = document.getElementById('photoPreview');

cameraButton.addEventListener('click', () => {
  cameraInput.click();
});

cameraInput.addEventListener('change', () => {
  const file = cameraInput.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = '300px';
    img.style.marginTop = '10px';
    photoPreview.innerHTML = '';
    photoPreview.appendChild(img);
  }
});
// Video capture
const videoButton = document.getElementById('videoButton');
const videoSection = document.getElementById('videoSection');
const videoPreview = document.getElementById('videoPreview');

let mediaRecorder;
let videoChunks = [];

videoButton.addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  videoPreview.srcObject = stream;
  videoPreview.play();

  mediaRecorder = new MediaRecorder(stream);
  videoChunks = [];

  mediaRecorder.ondataavailable = event => videoChunks.push(event.data);

  mediaRecorder.onstop = () => {
    const videoBlob = new Blob(videoChunks, { type: 'video/mp4' });
    const videoURL = URL.createObjectURL(videoBlob);
    videoPreview.src = videoURL;
    videoPreview.srcObject = null;
  };

  mediaRecorder.start();

  // Stop after 10 seconds
  setTimeout(() => {
    mediaRecorder.stop();
    stream.getTracks().forEach(track => track.stop());
  }, 10000);
});
