document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.cta-button');
    startButton.addEventListener('click', changeBackgroundColor);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    }
});