const body = document.getElementById("body");

let timer = null;
let timeLeft = 25 * 60; // 25 minutes in seconds

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function showStartScreen() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  body.innerHTML = `
    <div class="timer">${formatTime(timeLeft)}</div>
    <button id="start">Start</button>
  `;
  document.getElementById("start").onclick = showTimerScreen;
}

function showTimerScreen() {
  body.innerHTML = `
    <div class="timer" id="timer">${formatTime(timeLeft)}</div>
    <button id="cancel">Cancel</button>
    <button id="skip">Skip</button>
  `;
  document.getElementById("cancel").onclick = showStartScreen;
  document.getElementById("skip").onclick = showCongratsScreen;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timer);
      showCongratsScreen();
    }
  }, 1000);
}

function showCongratsScreen() {
  clearInterval(timer);
  body.innerHTML = `
    <div class="timer">Congrats! Pomodoro complete!</div>
    <button id="restart">Restart</button>
  `;
  document.getElementById("restart").onclick = showStartScreen;
}

function showSettingsScreen() {
  chrome.runtime.openOptionsPage();
}

// Initialize
showStartScreen();
document.getElementById("settings").onclick = showSettingsScreen;
