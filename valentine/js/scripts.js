const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainContainer = document.getElementById("mainContainer");
const successScreen = document.getElementById("successScreen");

// Logic to move the button to a random spot
function moveButton() {
  // Calculate boundaries to keep the button on screen
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Mobile Support: Move on touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

// Desktop Support: Move on hover
noBtn.addEventListener("mouseover", moveButton);

// "Yes" Click Action
yesBtn.addEventListener("click", () => {
  // 1. Get button position for the origin of confetti
  const rect = yesBtn.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  // 2. Trigger Rainbow Confetti
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { x, y },
    colors: [
      "#ff0000",
      "#ffa500",
      "#ffff00",
      "#008000",
      "#0000ff",
      "#4b0082",
      "#ee82ee",
    ],
    disableForReducedMotion: true,
  });

  // 3. Switch Content
  mainContainer.classList.add("hidden");
  successScreen.classList.remove("hidden");
});
