const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const countdownDate = new Date("Jul 30, 2021 15:30:32");

setInterval(() => {
  const distance = Date.parse(countdownDate) - Date.parse(new Date());

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor((distance / 1000) % 60);

  Days.textContent = `${days}`;
  Hours.textContent = `${hours}`;
  Minutes.textContent = `${minutes}`;
  Seconds.textContent = `${seconds}`;
});
