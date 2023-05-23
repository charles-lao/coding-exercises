const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const slide = document.querySelector('#slide');


let currentSlide = 1;

rightArrow.addEventListener('click', (e) => {
    slide.style.opacity = 0;
   
    if(currentSlide == 3) {
        currentSlide = 1;
    } else {
        currentSlide++;
    }
    

    const changeSlide = () => {
        slide.style.background = `url("${currentSlide}.jpg")`;
        slide.style.backgroundSize = '100%';
        slide.style.opacity = 1;
    }

    setTimeout(changeSlide, 650);
    
});


leftArrow.addEventListener('click', (e) => {
    slide.style.opacity = 0;
   
    if(currentSlide == 1) {
        currentSlide = 3;
    } else {
        currentSlide--;
    }
    

    const changeSlide = () => {
        slide.style.background = `url("${currentSlide}.jpg")`;
        slide.style.backgroundSize = '100%';
        slide.style.opacity = 1;
    }

    setTimeout(changeSlide, 650);
    
});