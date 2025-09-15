// --- Global Scope Variable ---
let globalCounter = 0;
const appName = "Interactive Page";

console.log(`--- Starting JavaScript Execution ---`);
console.log(`Global App Name: ${appName}`);

// --- Part 2: JavaScript Functions ---

/**
 * Calculates the volume of a rectangular prism.
 * @param {number} length - The length of the prism.
 * @param {number} width - The width of the prism.
 * @param {number} height - The height of the prism.
 * @returns {number} The calculated volume.
 */
function calculateVolume(length, width, height) {
  // Local scope variables
  const baseArea = length * width;
  const volume = baseArea * height;
  globalCounter++; // Modifies a global variable
  console.log(`Inside calculateVolume: Called ${globalCounter} times.`);
  return volume; // Returns a useful value
}

/**
 * Creates a formatted string for a user profile.
 * @param {string} name - The user's name.
 * @param {number} age - The user's age.
 * @param {string} city - The user's city.
 * @returns {string} A formatted profile string.
 */
function createUserProfile(name, age, city) {
  // Demonstrates string concatenation and return value
  return `Profile for ${name}: ${age} years old, from ${city}.`;
}

/**
 * Increments a counter and returns its new value.
 * Reusable for tracking events.
 * @returns {number} The updated counter value.
 */
function incrementGlobalCounter() {
  globalCounter++;
  console.log(`Counter updated to: ${globalCounter}`);
  return globalCounter; // Returns the updated value
}

// --- Part 3: Combining CSS Animations with JavaScript ---

// Get references to HTML elements
const interactiveBox = document.getElementById('interactiveBox');
const triggerAnimationBtn = document.getElementById('triggerAnimationBtn');
const showPopupBtn = document.getElementById('showPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const myPopup = document.getElementById('myPopup');

/**
 * Triggers a CSS animation on an element by adding a class.
 * @param {HTMLElement} element - The DOM element to animate.
 * @param {string} animationClass - The CSS class to add for the animation.
 * @param {number} duration - The duration in milliseconds before removing the class.
 */
function triggerCssAnimation(element, animationClass, duration) {
  if (element && animationClass) {
    console.log(`Adding class "${animationClass}" to element.`);
    element.classList.add(animationClass);

    // Automatically remove the class after the animation duration
    setTimeout(() => {
      element.classList.remove(animationClass);
      console.log(`Removed class "${animationClass}" after ${duration}ms.`);
    }, duration);
  } else {
    console.error("Animation element or class not provided.");
  }
}

/**
 * Toggles the visibility of a popup element by adding/removing a class.
 * @param {HTMLElement} popupElement - The popup element to control.
 * @param {string} visibleClass - The CSS class to make the popup visible.
 */
function togglePopupVisibility(popupElement, visibleClass) {
  if (popupElement) {
    if (popupElement.classList.contains(visibleClass)) {
      popupElement.classList.remove(visibleClass);
      console.log("Popup hidden.");
    } else {
      popupElement.classList.add(visibleClass);
      console.log("Popup shown.");
    }
  } else {
    console.error("Popup element not found.");
  }
}

// --- Event Listeners ---

// Event listener for running JS functions (Part 2)
document.getElementById('runJsFunctionsBtn').addEventListener('click', () => {
  console.log("\n--- Running JavaScript Functions Demo ---");

  // Using calculateVolume
  const boxVolume = calculateVolume(10, 5, 2); // length, width, height
  console.log(`Calculated Volume: ${boxVolume} cubic units.`);

  // Using createUserProfile
  const user1Profile = createUserProfile("Alice", 30, "Wonderland");
  console.log(user1Profile);

  // Demonstrating reuse and global scope modification
  incrementGlobalCounter(); // Called once
  incrementGlobalCounter(); // Called twice
  console.log(`Final Global Counter Value: ${globalCounter}`); // Demonstrates global scope
});

// Event listener for triggering the interactive box animation (Part 3)
triggerAnimationBtn.addEventListener('click', () => {
  console.log("\n--- Triggering Interactive Box Animation ---");
  // Call the reusable animation function
  // Element, CSS class, Duration in ms
  triggerCssAnimation(interactiveBox, 'animate-me', 1000);
});

// Event listeners for the popup (Part 3)
showPopupBtn.addEventListener('click', () => {
  console.log("\n--- Showing Popup ---");
  togglePopupVisibility(myPopup, 'visible');
});

closePopupBtn.addEventListener('click', () => {
  console.log("--- Closing Popup ---");
  togglePopupVisibility(myPopup, 'visible');
});

// Initial state check (optional, for confirming initial hidden state)
console.log(`Popup initial visibility: ${myPopup.classList.contains('visible') ? 'Visible' : 'Hidden'}`);
