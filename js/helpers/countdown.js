export const countdownInterval = () => {
    const countdownText = document.getElementById("countdown-text");
    let countdown = 3;
    setInterval(() => {
        countdownText.textContent = `${countdown}sn içinde yönlendiriliyorsunuz!`;
        countdown--;
        countdown < 0 && clearInterval(countdownInterval)
    }, 1000);
}