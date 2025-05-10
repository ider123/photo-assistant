// PROMPTS
const cozyPrompts = [
  "Take a photo of your coffee",
  "Snap your book or journal",
  "Show your cozy corner",
  "Capture your morning light",
  "Photograph your outfit",
  "Share your breakfast scene",
  "Document your skincare products",
  "Capture your favorite mug",
  "Show the view outside your window",
  "Take a photo of your bed"
];

const spicyPrompts = [
  "Take a badass mirror selfie",
  "Snap your gym fit",
  "Capture your pre-workout drink",
  "Show your flex pose",
  "Take a photo of your shoes",
  "Capture sweat on your forehead",
  "Record your favorite machine",
  "Snap your post-workout meal",
  "Show off your muscle pump",
  "Take a photo of your headphones"
];

let currentStep = 1;

function capturePrompt() {
  const vibe = document.getElementById("vibeSelector").value;
  const stepText = document.getElementById("stepCounter");
  const promptBox = document.getElementById("promptBox");

  if (currentStep < 20) {
    const prompts = vibe === "spicy" ? spicyPrompts : cozyPrompts;
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    promptBox.innerText = randomPrompt;
    currentStep++;
    stepText.innerText = `Step ${currentStep} of 20`;
  } else if (currentStep === 20) {
    promptBox.innerText = "Now record a short 10-second video of your workout!";
    stepText.innerText = `Step 20 of 20`;
    currentStep++;
  } else {
    promptBox.innerText = "You're done for today!";
  }
}

// CLOCK
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) minutes = "0" + minutes;
  clockElement.textContent = `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 60000);

// BATTERY
navigator.getBattery().then(function (battery) {
  const fill = document.querySelector(".battery-fill");

  function updateBatteryLevel() {
    const level = Math.round(battery.level * 100);
    fill.style.width = level + "%";

    if (level > 50) {
      fill.style.background = "#0f0";
    } else if (level > 20) {
      fill.style.background = "#ffa500";
    } else {
      fill.style.background = "#f00";
    }
  }

  function updateChargingStatus() {
    if (battery.charging) {
      fill.style.animation = "pulse 1.5s infinite ease-in-out";
    } else {
      fill.style.animation = "none";
    }
  }

  updateBatteryLevel();
  updateChargingStatus();
  battery.addEventListener("levelchange", updateBatteryLevel);
  battery.addEventListener("chargingchange", updateChargingStatus);
});

// CAMERA BUTTON
document.getElementById("cameraButton").addEventListener("click", () => {
  document.getElementById("cameraInput").click();
});

// PREVIEW IMAGE
document.getElementById("cameraInput").addEventListener("change", function () {
  const preview = document.getElementById("photoPreview");
  preview.innerHTML = "";
  const file = this.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.maxWidth = "100%";
    img.style.marginTop = "10px";
    preview.appendChild(img);
  }
});
// ==== VIDEO RECORDING ====

let mediaRecorder;
let recordedChunks = [];

const recordButton = document.getElementById('recordButton');

recordButton.addEventListener('click', async () => {
  if (recordButton.textContent === 'Record Video') {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.style.width = '100%';
      document.getElementById('photoPreview').appendChild(video);
    };

    mediaRecorder.start();
    recordButton.textContent = 'Stop Recording';

    // Автоматаар 10 секунд болгоод зогсооно
    setTimeout(() => {
      if (mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        recordButton.textContent = 'Record Video';
      }
    }, 10000);
  } else {
    mediaRecorder.stop();
    recordButton.textContent = 'Record Video';
  }
});
const recordButton = document.getElementById("recordButton");

recordButton.addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const mediaRecorder = new MediaRecorder(stream);
  const chunks = [];

  mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: "video/webm" });
    const videoURL = URL.createObjectURL(blob);
    const video = document.createElement("video");
    video.src = videoURL;
    video.controls = true;
    video.style.maxWidth = "100%";
    document.getElementById("photoPreview").innerHTML = "";
    document.getElementById("photoPreview").appendChild(video);
  };

  mediaRecorder.start();
  setTimeout(() => mediaRecorder.stop(), 10000); // 10 seconds
});
