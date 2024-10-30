const no = document.getElementById("no");

// Set a minimum size for the element
const minSize = 50; // Minimum size in pixels

// Function to position the element randomly
function positionElement() {
    let x = Math.floor(Math.random() * (100 - minSize)); // Ensure the element stays within bounds
    let y = Math.floor(Math.random() * (100 - minSize));

    no.style.top = y + "%";
    no.style.left = x + "%";
}

// Add mouseover event listener for desktop
no.addEventListener("mouseover", positionElement);

// Add touchstart event listener for mobile
no.addEventListener("touchstart", function(event) {
    event.preventDefault(); // Prevent default touch behavior
    positionElement();
});

// Optional: Add a click event for better interaction on mobile
no.addEventListener("click", positionElement);
