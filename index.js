const buttons = document.querySelectorAll('[role="button"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id.startsWith('add-one')) {
            incrementScore(button.id, 1);
        } else if (button.id.startsWith('add-two')) {
            incrementScore(button.id, 2);
        } else if (button.id.startsWith('add-three')) {
            incrementScore(button.id, 3);
        } else if (button.id === 'reset-score') {
            resetScores();
        }
    });

    button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            button.click();
        }
    });
});

function incrementScore(buttonId, value) {
    if (buttonId.includes('home')) {
        const homeScore = document.getElementById('home-score');
        homeScore.innerText = parseInt(homeScore.innerText) + value;
    } else if (buttonId.includes('guest')) {
        const guestScore = document.getElementById('guest-score');
        guestScore.innerText = parseInt(guestScore.innerText) + value;
    }
}

function resetScores() {
    document.getElementById('home-score').innerText = '0';
    document.getElementById('guest-score').innerText = '0';
}
