// script.js
document.addEventListener('DOMContentLoaded', () => {
    const rollBtn = document.getElementById('rollBtn');
    const quitBtn = document.getElementById('quitBtn');
    const die1 = document.getElementById('die1');
    const die2 = document.getElementById('die2');
    const message = document.getElementById('message');

    function rollDice() {
        // Add rolling animation
        die1.classList.add('rolling');
        die2.classList.add('rolling');

        // Generate random numbers
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        // Update dice display after animation
        setTimeout(() => {
            die1.textContent = roll1;
            die2.textContent = roll2;
            die1.classList.remove('rolling');
            die2.classList.remove('rolling');
            message.textContent = `You rolled: ${roll1} and ${roll2}`;
        }, 300);
    }

    rollBtn.addEventListener('click', () => {
        rollDice();
    });

    quitBtn.addEventListener('click', () => {
        die1.textContent = '?';
        die2.textContent = '?';
        message.textContent = 'Thanks for playing the game!';
        rollBtn.disabled = true;
        quitBtn.disabled = true;
    });
});
