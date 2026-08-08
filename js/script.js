// --- EDIT ME: paste your Google Form link here once it's created ---
const RSVP_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf4ucFcFtlOm_1DDrqxwPBv-mdug6APlX7qrDrkdCtBiMnirg/viewform";

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // RSVP link wiring
  const rsvpLink = document.getElementById("rsvpLink");
  const rsvpNote = document.querySelector(".rsvp-note");
  if (RSVP_FORM_URL) {
    rsvpLink.href = RSVP_FORM_URL;
    if (rsvpNote) rsvpNote.remove();
  }

  // Countdown to ceremony start: Saturday 5 September 2026, 14:00
  const weddingDate = new Date("2026-09-05T14:00:00");
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      daysEl.textContent = "0";
      hoursEl.textContent = "0";
      minsEl.textContent = "0";
      secsEl.textContent = "0";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = mins;
    secsEl.textContent = secs;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
