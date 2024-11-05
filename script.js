function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    document.body.appendChild(heart);

    // Remove heart after animation completes
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Generate hearts continuously
setInterval(createHeart, 500);

document.getElementById('yesBtn').onclick = function() {
    document.getElementById('message').innerText = 'Will you be my girlfriend? ❤️';
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'block'; // Show No button
    showProposalResponses(); // Show Yes option for proposal
}

function moveNoButton() {
    const noButton = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 150); // Random x position
    const y = Math.random() * (window.innerHeight - 150); // Random y position
    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}

document.getElementById('noBtn').onclick = function() {
    // No action taken when the No button is clicked
};

document.getElementById('noBtn').onmouseover = function() {
    moveNoButton();
};

function respondToProposal(yesResponse) {
    if (yesResponse) {
        document.getElementById('message').innerText = 'Yay! Where should we go on our first date? 💕';
        const noButton = document.getElementById('noBtn');
        noButton.style.display = 'none'; // Hide the floating No button
        showFirstDateOptions();
    }
}

function showProposalResponses() {
    // Create Yes response button for the proposal
    const yesResponse = document.createElement('button');
    yesResponse.innerText = 'Yes! 💖';
    yesResponse.className = 'button';
    yesResponse.onclick = function() {
        respondToProposal(true); // Call respondToProposal on Yes
        yesResponse.style.display = 'none'; // Hide this button
    };
    document.body.appendChild(yesResponse);
}

function showFirstDateOptions() {
    // Create date options
    const options = ['Coffee ☕️', 'Bowling 🎳', 'Beach 🏖️', 'Ice Cream 🍦'];

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'button';
        button.innerText = option;
        button.onclick = function() {
            displayFinalMessage(option); // Display the final message with the chosen option
        };
        document.body.appendChild(button);
    });
}

function displayFinalMessage(choice) {
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.innerText = `Great choice! Let’s go for ${choice} on our first date! 💞`;
    finalMessage.style.display = 'block'; // Show the final message
    document.querySelectorAll('.button').forEach(btn => btn.style.display = 'none'); // Hide all buttons
}
