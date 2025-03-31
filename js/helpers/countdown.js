export const countdownInterval = () => {
    const countdownText = document.getElementById("countdown-text");
    let countdown = 3;
    setInterval(() => {
        countdownText.textContent = `You are being redirected within seconds... ${countdown}`;
        countdown--;
        countdown < 0 && clearInterval(countdownInterval)
    }, 1000);
}