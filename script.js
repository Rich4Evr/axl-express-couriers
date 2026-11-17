const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const trackingForm = document.querySelector("#track-form");
const trackingInput = document.querySelector("#tracking-number");
const formMessage = document.querySelector("#form-message");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

trackingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const trackingNumber = trackingInput.value.trim();
  if (trackingNumber) {
    formMessage.textContent = `Thanks — “${trackingNumber}” is ready to connect to AXL tracking.`;
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
