const slides = document.querySelectorAll(".slide");
let counter = 0;

// console.log(slides);
slides.forEach( 
        (slide, index) => {
            slide.style.left = `${index * 100}%`;
            console.log(index);
    }
)

const goPrev = () => {
    counter--;
    slideImage();
}
const goNext = () => {   
    if(counter < 3){
        counter++;
    }
    slideImage();
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}