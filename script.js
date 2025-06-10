document.addEventListener('DOMContentLoaded', () => {
    // A little delay to let the user read the confession
    setTimeout(() => {
        document.getElementById('confession-content').classList.add('hidden');
        document.getElementById('proposal-container').classList.remove('hidden');
    }, 8000); // 8000 milliseconds = 8 seconds. Adjust as needed.

    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const proposalContainer = document.getElementById('proposal-container');
    const celebrationContainer = document.getElementById('celebration-container');

    // Make the 'No' button run away on hover
    noBtn.addEventListener('mouseover', () => {
        moveButtonRandomly(noBtn);
    });
    
    // Also make it run away on click, just in case they're fast!
    noBtn.addEventListener('click', () => {
        moveButtonRandomly(noBtn);
    });

    // Handle the 'Yes' click
    yesBtn.addEventListener('click', () => {
        proposalContainer.classList.add('hidden');
        celebrationContainer.classList.remove('hidden');
    });
});

function moveButtonRandomly(button) {
    // We need to set position to absolute to move it freely
    button.style.position = 'absolute';
    
    // Get window dimensions
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    
    // Get button dimensions
    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;
    
    // Calculate a random position, ensuring the button stays within the viewport
    const randomX = Math.max(0, Math.floor(Math.random() * (winWidth - btnWidth)));
    const randomY = Math.max(0, Math.floor(Math.random() * (winHeight - btnHeight)));
    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
