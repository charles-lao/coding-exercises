const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const slide = document.querySelector('#slide');
const slideBtn1 = document.querySelector('#sld-btn-1');
const slideBtn2 = document.querySelector('#sld-btn-2');
const slideBtn3 = document.querySelector('#sld-btn-3');


let currentSlide = 1;

const changeSlideBtns = (currSlide) => {
    switch (currSlide) {
        case 1:
            slideBtn1.textContent = '◉';
            slideBtn2.textContent = '◎';
            slideBtn3.textContent = '◎';
            break;
        case 2:
            slideBtn1.textContent = '◎';
            slideBtn2.textContent = '◉';
            slideBtn3.textContent = '◎';
            break;
        case 3:
            slideBtn1.textContent = '◎';
            slideBtn2.textContent = '◎';
            slideBtn3.textContent = '◉';
            break;
        default:
            break;
    }
}

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
        slide.style.backgroundPosition = 'center';
        slide.style.opacity = 1;
    }

    setTimeout(changeSlide, 650);

    changeSlideBtns(currentSlide);
    
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
        slide.style.backgroundPosition = 'center';
        slide.style.opacity = 1;
    }

    setTimeout(changeSlide, 650);

    changeSlideBtns(currentSlide);
    
});

slideBtn1.addEventListener('click', (e) => {
    slide.style.opacity = 0;
    currentSlide = 1;

    const changeSlide = () => {
        slide.style.background = `url("${currentSlide}.jpg")`;
        slide.style.backgroundSize = '100%';
        slide.style.backgroundPosition = 'center';
        slide.style.opacity = 1;
    }

    setTimeout(changeSlide, 650);

    changeSlideBtns(currentSlide);
});

slideBtn2.addEventListener('click', (e) => {
    slide.style.opacity = 0;
    currentSlide = 2;

    const changeSlide = () => {
        slide.style.background = `url("${currentSlide}.jpg")`;
        slide.style.backgroundSize = '100%';
        slide.style.backgroundPosition = 'center';
        slide.style.opacity = 1;
    }

    setTimeout(changeSlide, 650);

    changeSlideBtns(currentSlide);
});

slideBtn3.addEventListener('click', (e) => {
    slide.style.opacity = 0;
    currentSlide = 3;

    const changeSlide = () => {
        slide.style.background = `url("${currentSlide}.jpg")`;
        slide.style.backgroundSize = '100%';
        slide.style.backgroundPosition = 'center';
        slide.style.opacity = 1;
    }

    setTimeout(changeSlide, 650);

    changeSlideBtns(currentSlide);
});