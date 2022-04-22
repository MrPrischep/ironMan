const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const avengers = document.querySelector('.avengers');
const slides = document.querySelectorAll('.slide');
const navElements = document.querySelectorAll('.navElem');
// const mainBlocks = document.querySelectorAll('.main-block');

/* SLIDER */
let activeSlide = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up');
});

downButton.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
})

function changeSlide(direction) {

    if (direction === 'up') {
        activeSlide++;

        if (activeSlide === slidesCount) {
            activeSlide = 0;
        }

    } else if (direction === 'down') {
        activeSlide--;

        if (activeSlide < 0) {
            activeSlide = slidesCount - 1;
        }
        
    }

    const height = avengers.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
    sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}

/* costumes SLIDES */
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

/* NAVIGATOR */
for (const navElem of navElements) {
    navElem.addEventListener('click', () => {
        clearActiveElement();
        navElem.classList.add('active');
    })
}

function clearActiveElement() {
    navElements.forEach((navElem) => {
        navElem.classList.remove('active');
    })
}

function mouselog(event) {
    if (event.target.classList.value === "about_me") {
        clearActiveElement();
        navElements[0].classList.add('active');
        navElements[6].classList.add('active');
    } else if (event.target.classList.value === "avengers") {
        clearActiveElement();
        navElements[1].classList.add('active');
        navElements[7].classList.add('active');
    } else if (event.target.classList.value === "films") {
        clearActiveElement();
        navElements[2].classList.add('active');
        navElements[8].classList.add('active');
    } else if (event.target.classList.value === "practice") {
        clearActiveElement();
        navElements[3].classList.add('active');
        navElements[9].classList.add('active');
    } else if (event.target.classList.value === "friends") {
        clearActiveElement();
        navElements[4].classList.add('active');
        navElements[10].classList.add('active');
    } else if (event.target.classList.value === "footer") {
        clearActiveElement();
        navElements[5].classList.add('active');
        navElements[11].classList.add('active');
    }
}