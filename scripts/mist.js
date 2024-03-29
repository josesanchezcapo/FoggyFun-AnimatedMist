function createFog() {
    const fogLayer = document.querySelector('.fog-layer');
    const numFogs = 30; // Adjust the number of fog elements
  
    for (let i = 0; i < numFogs; i++) {
      const fog = document.createElement('div');
      fog.classList.add('fog');
      fog.style.left = `${Math.random() * 100}%`;
      fog.style.animationDuration = `${Math.random() * 20 + 5}s`; // Adjust fog animation duration
      fogLayer.appendChild(fog);
    }
  }
  
  createFog();
  