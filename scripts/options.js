/* 1. DEFAULT SETTINGS DEFINITION */
/* --------------------------- */
const settings = {
  timer: {
    rounds: 4,
    focusDuration: "25:00",
    shortBreakDuration: "05:00",
    longBreakDuration: "15:00",
  },
  blacklist: ["www.reddit.com", "www.youtube.com", "www.instagram.com"],
};

/* 2. EVENT HANDLERS */
/* --------------------------- */

function updateBlacklist() {
  const urlListDiv = document.getElementById("blacklistUrlList");

  let urlContentList = "";
  settings.blacklist.map((url) => {
    urlContentList += `
    <div>${url}<button id="${url}">Remove</button></div>
    `;
  });
  urlListDiv.innerHTML = urlContentList;

  settings.blacklist.map((url, index) => {
    document.getElementById(url).onclick = () => removeItemFromBlacklist(index);
  });
}

function removeItemFromBlacklist(index) {
  settings.blacklist.splice(index, 1);
  updateBlacklist();
}

function updateFocusDuration() {
  const min = document
    .getElementById("focusDurationMin")
    .value.padStart(2, "0");
  const sec = document
    .getElementById("focusDurationSec")
    .value.padStart(2, "0");
  settings.timer.focusDuration = `${min}:${sec}`;
}

function updateShortBreakDuration() {
  const min = document
    .getElementById("shortBreakDurationMin")
    .value.padStart(2, "0");
  const sec = document
    .getElementById("shortBreakDurationSec")
    .value.padStart(2, "0");
  settings.timer.shortBreakDuration = `${min}:${sec}`;
}

function updateLongBreakDuration() {
  const min = document
    .getElementById("longBreakDurationMin")
    .value.padStart(2, "0");
  const sec = document
    .getElementById("longBreakDurationSec")
    .value.padStart(2, "0");
  settings.timer.longBreakDuration = `${min}:${sec}`;
}

function updateNumberOfRounds(event) {
  settings.timer.rounds = parseInt(event.target.value);
}

function addItemToBlacklist() {
  const newBlacklistItem = document.getElementById("newBlacklistEntry").value;

  settings.blacklist.push(newBlacklistItem);

  updateBlacklist();
}

function saveSettings() {
  console.log(settings);
}

/* 3. ASSIGNING HANDLERS TO HTML ELEMENTS */
/* --------------------------- */
document.getElementById("numberRounds").onchange = updateNumberOfRounds;
document.getElementById("addNewBlacklistEntry").onclick = addItemToBlacklist;
document.getElementById("saveSettings").onclick = saveSettings;
document.getElementById("focusDurationMin").onchange = updateFocusDuration;
document.getElementById("focusDurationSec").onchange = updateFocusDuration;
document.getElementById("shortBreakDurationMin").onchange =
  updateShortBreakDuration;
document.getElementById("shortBreakDurationSec").onchange =
  updateShortBreakDuration;
document.getElementById("longBreakDurationMin").onchange =
  updateLongBreakDuration;
document.getElementById("longBreakDurationSec").onchange =
  updateLongBreakDuration;
document.getElementById("closeSettings").onclick = () => window.close();

/* 4. SCRIPT INITIALIZATION */
/* --------------------------- */
updateBlacklist();
