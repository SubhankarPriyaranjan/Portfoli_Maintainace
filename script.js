function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const heading = document.querySelector('.typing');
const text = heading .textContent; // Get the text content

function typeWrite(text, i = 0) {
  if (i < text.length) {
    heading.textContent = text.slice(0, i + 1); // Add one character
    setTimeout(typeWrite, 50, text, i + 1); // Recursive call with delay
  } else {
    setTimeout(deleteText, 1000); // Call delete function after delay
  }
}

function deleteText(i = text.length) {
  if (i > 1) {
    heading.textContent = text.slice(0, i - 1); // Remove one character
    setTimeout(deleteText, 50, i - 1); // Recursive call with delay
  } else {
    setTimeout(() => {
      heading.textContent = ''; // Clear text
      typeWrite(text); // Restart typing animation
    }, 1000);
  }
}

typeWrite(text); // Start the animation