// Function to create fog elements
function createFog() {
    const fogLayer = document.querySelector('.fog-layer'); // Select the fog layer element
    const numFogs = 30; // Adjust the number of fog elements
  
    // Loop to create fog elements
    for (let i = 0; i < numFogs; i++) {
      const fog = document.createElement('div'); // Create a div element for fog
      fog.classList.add('fog'); // Add 'fog' class to the fog element
      fog.style.left = `${Math.random() * 100}%`; // Set a random horizontal position
      fog.style.animationDuration = `${Math.random() * 20 + 5}s`; // Set a random animation duration for fog movement
      fogLayer.appendChild(fog); // Append fog element to fog layer
    }
  }
  
  createFog(); // Call the createFog function to generate fog elements
  
  