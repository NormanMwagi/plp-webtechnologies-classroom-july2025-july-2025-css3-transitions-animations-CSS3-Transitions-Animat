// ---------------- Part 2: Functions, Parameters & Scope ----------------

// Global variable
let animationCount = 0;

// Function with parameter & return value
function addNumbers(a, b) {
  return a + b; // returns sum
}

// Function to trigger animation using DOM manipulation
function triggerAnimation(element, className) {
  element.classList.add(className);

  // Remove the class after animation ends for reusability
  element.addEventListener("animationend", () => {
    element.classList.remove(className);
  }, { once: true });
}

// Local scope demo
function incrementCounter() {
  let localCount = 1; // Local variable
  animationCount += localCount;
  console.log("Total animations triggered:", animationCount);
}

// ---------------- Part 3: Integration ----------------

// Animate Box
const box = document.querySelector(".box");
document.getElementById("animateBtn").addEventListener("click", () => {
  triggerAnimation(box, "animate");
  incrementCounter();
});

// Flip Card
const card = document.querySelector(".card");
document.getElementById("flipBtn").addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// Modal Logic
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModal");
const closeModalBtn = document.getElementById("closeModal");

showModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
