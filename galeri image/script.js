const container = document.querySelector('.container');
const carImage = document.querySelectorAll('.cars-img');
const animeImage = document.querySelectorAll('.anime-img');
const allDisplay = document.querySelector('.display');
const display = document.querySelector('.display-img');
const imgOptionCar = document.querySelector('.car');
const imgOptionAnime = document.querySelector('.anime');
const title = document.querySelector('.title-display');
const smallTitle = document.querySelectorAll('h3');
const carsImageChecked = document.querySelector('.all-cars');
const animeImageChecked = document.querySelector('.all-anime');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});

animeImageChecked.className = 'hapus';

imgOptionAnime.addEventListener('click', () => {
    carsImageChecked.className = 'hapus';
    animeImageChecked.className = 'all-anime'
});

imgOptionCar.addEventListener('click', () => {
    animeImageChecked.className = 'hapus';
    carsImageChecked.className = 'all-cars';
});

allDisplay.style.opacity = '0';

container.addEventListener('click', function(e) {
        if (e.target.className == 'cars-img') {
            display.src = e.target.src;
            display.classList.add('fade');
            setTimeout(() => {
                display.classList.remove('fade');
            }, 500);
            carImage.forEach((el) => {
                el.className = 'cars-img'
            });
            e.target.classList.add('active-img')
            allDisplay.style.opacity = '1';
            title.innerHTML = smallTitle;
        } if (e.target.className == 'anime-img') {
            display.src = e.target.src;
            display.classList.add('fade');
            setTimeout(() => {
                display.classList.remove('fade');
            }, 500);
            animeImage.forEach((el) => {
                el.className = 'anime-img'
            });
            e.target.classList.add('active-img')
        }
});

