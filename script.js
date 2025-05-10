function capturePrompt() {
  const prompts = [
    "Capture your morning coffee",
    "Show your cozy corner",
    "Photograph something green"
  ];

  const stepText = document.getElementById("stepCounter");
  const promptBox = document.getElementById("promptBox");
  const currentStep = parseInt(stepText.innerText.match(/\d+/)[0]);

  if (currentStep <= 20) {
    promptBox.innerText = prompts[Math.floor(Math.random() * prompts.length)];
    stepText.innerText = `Step ${currentStep + 1} of 20`;
  }
}

function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) minutes = '0' + minutes;
  clockElement.textContent = `${hours}:${minutes}`;
}

// Run clock on load and every minute
updateClock();
setInterval(updateClock, 60000);

// Battery logic
function applyBatteryStyle(level) {
  const fill = document.querySelector('.battery-fill');
  fill.style.width = level + '%';

  if (level > 50) {
    fill.style.background = '#0f0'; // Green
  } else if (level > 20) {
    fill.style.background = '#ffa500'; // Orange
  } else {
    fill.style.background = '#f00'; // Red
  }
}

function updateChargingStatus(battery) {
  const fill = document.querySelector('.battery-fill');
  if (battery.charging) {
    fill.style.animation = 'pulse 1.5s infinite ease-in-out';
  } else {
    fill.style.animation = 'none';
  }
}

if ('getBattery' in navigator) {
  navigator.getBattery().then(function(battery) {
    function updateBatteryLevel() {
      const level = Math.round(battery.level * 100);
      applyBatteryStyle(level);
    }

    updateBatteryLevel();
    updateChargingStatus(battery);

    battery.addEventListener('levelchange', updateBatteryLevel);
    battery.addEventListener('chargingchange', () => updateChargingStatus(battery));
  });
} else {
  // Fallback: simulate 34% battery
  const simulatedLevel = 34;
  applyBatteryStyle(simulatedLevel);
}
