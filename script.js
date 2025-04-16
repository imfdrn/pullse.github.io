document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo-trigger");
    const audio = document.getElementById("secret-audio");

    let clickCount = 0;
    let clickTimer = null;

    logo.addEventListener("click", () => {
        clickCount++;

        if (clickCount === 3) {
            audio.play();
            clickCount = 0;
            clearTimeout(clickTimer);
        } else {
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 1500);
        }
    });
});