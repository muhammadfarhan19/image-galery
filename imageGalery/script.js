const container = document.querySelector('.container');
const display = document.querySelector('.display');
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', (e) => {
    if (e.target.className == 'thumb') {
        display.src = e.target.src;
        display.classList.add('fade');
        setTimeout(() => {
            display.classList.remove('fade');
        }, 500);
        thumbs.forEach((thumb) => {
            thumb.className = 'thumb'
        });
        e.target.classList.add('active')
    }
});