class Carousel {
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.images = this.carousel.querySelectorAll('img');
        this.imageCount = this.images.length;
        this.currentImage = 0;
        this.initCarousel()
        this.autoShowCarousel()
    }
    initCarousel = () => {
        this.setImage(this.currentImage)
        const rightBtn = this.carousel.querySelector('.right-button')
        const leftBtn = this.carousel.querySelector('.left-button')
        rightBtn.addEventListener('click', this.nextImage)
        leftBtn.addEventListener('click', this.prevImage)
    }
    nextImage = () => {
        if (this.currentImage === this.imageCount -1) {
            this.currentImage = 0;
        } else {
            ++this.currentImage;
        }
    
        this.setImage(this.currentImage)
    }
    prevImage = () => {
        if (this.currentImage > 0) {
            --this.currentImage
        } else {
            this.currentImage = this.imageCount -1;
        }
        this.setImage(this.currentImage)
    }

    setImage = (index) => {
        Array.from(this.images).forEach(img => {
            img.style.display = 'none';
            TweenMax.to(img, .2, {width: 0, display: "none"});
        });
        const currentImage = Array.from(this.images)[index];
        TweenMax.to(currentImage, 1,{width: "100%", display: "block"});
    }
    autoShowCarousel = () => {
        setInterval( () => {
            if (this.currentImage === this.imageCount - 1) {
                this.currentImage = 0;
            } else {
                ++this.currentImage
            }
            this.setImage(this.currentImage)
        }, 3000) 
    }
}

let carousel = document.querySelector('.carousel');

const carouselObj = new Carousel(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
