
let angle = 0; // Initial angle

function changeBoxShadow() {
    const sideImage = document.querySelector('.side_image');
    const boxShadowX = -12 * Math.sin(angle); // Adjust multiplier for the desired effect
    const boxShadowY = 1 * Math.cos(angle); // Adjust multiplier for the desired effect
    const boxShadowBlur = 199 * Math.sin(angle); // Adjust multiplier for the desired effect
    const boxShadow = `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px rgb(127 39 255)`; // Update box-shadow
    sideImage.style.boxShadow = boxShadow;
    angle += 0.01; // Increment angle for animation effect
}

// Call changeBoxShadow function at regular intervals
setInterval(changeBoxShadow, 20); // Adjust the interval for speed
