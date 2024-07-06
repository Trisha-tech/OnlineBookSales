document.addEventListener('DOMContentLoaded', function() {
    let countdownElement = document.getElementById('countdown');
    let countdownValue = parseInt(countdownElement.textContent);

    let countdownInterval = setInterval(function() {
        countdownValue -= 1;
        countdownElement.textContent = countdownValue;

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'index.html';
        }
    }, 1000);
});
