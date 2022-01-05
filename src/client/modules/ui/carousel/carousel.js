import { LightningElement, track } from 'lwc';

export default class Carousel extends LightningElement {
    slideIndex;
    _interval;
    @track progress = 5000;
    alreadyRendered = false;

    renderedCallback(){
        if(this.alreadyRendered) return;
        this.alreadyRendered = true;

        this.showSlides();
        this._interval = setInterval(() => {
            this.progress = this.progress + 5000;
            this.next();
        }, this.progress);
    }

    disconnectedCallback(){
        clearInterval(this._interval);
    }

    showSlides(){
        var slides = this.template.querySelectorAll('.mySlides');
        var i;

        if(!this.slideIndex) this.slideIndex = 1;

        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }

        slides[this.slideIndex - 1].style.display = 'block';
    }

    prev(){
        var slides = this.template.querySelectorAll('.mySlides');
        if(this.slideIndex === 1) this.slideIndex = slides.length;
        else this.slideIndex--;

        this.showSlides();
    }

    next(){
        var slides = this.template.querySelectorAll('.mySlides');
        if(this.slideIndex === slides.length) this.slideIndex = 1;
        else this.slideIndex++;

        this.showSlides();
    }

    currentSlide(event){
        var btnName = event.target.dataset.name;
        this.slideIndex = btnName;
        this.showSlides();
    }


}
