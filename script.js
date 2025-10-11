// Countdown Timer
const countdownElement = document.getElementById('countdown');

// Set the date we're counting down to (update this as needed)
const eventDate = new Date('November 8, 2025 17:00:00 GMT+0530'); // Adjust the date/time if needed

function updateCountdown() {
  const now = new Date();
  const timeRemaining = eventDate - now;

  if (timeRemaining <= 0) {
    countdownElement.textContent = "The event is happening now!";
    clearInterval(countdownInterval);
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();
