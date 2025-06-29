const startBtn = document.getElementById("startBtn");
const dateTimeInput = document.getElementById("datetime");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const endMessage = document.getElementById("endMessage");

let countdownInterval;

startBtn.addEventListener("click", () => {
  const selectedTime = new Date(dateTimeInput.value);
  const now = new Date();

  if (selectedTime <= now || isNaN(selectedTime)) {
    alert("Please select a valid future date and time.");
    return;
  }

  clearInterval(countdownInterval);
  endMessage.textContent = "";

  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = selectedTime - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      endMessage.textContent = "⏰ Time's up!";
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
});
