import { LightningElement } from 'lwc';

export default class Container extends LightningElement {
    activePage = 'calendar';
    isRendering = false;

    handlePageChange(event){
        const page = event.detail;
        event.preventDefault();

        console.log('page: ' + page);
        this.activePage = page;
    }

    connectedCallback(){
        this.isRendering = true;
        console.log('rendering');
    }

    alreadyRendered = false;
    renderedCallback(){
        if(this.alreadyRendered) return;
        this.alreadyRendered = true;

        setTimeout(() => {
            this.isRendering = false;
            console.log('render');
        }, 3000);
    }

    get showHome(){
        return this.activePage === 'home';
    }

    get showCart(){
        return this.activePage === 'cart';
    }

    get showCalendar(){
        return this.activePage === 'calendar';
    }

    get showProfile(){
        return this.activePage === 'profile';
    }

    get showNavbar(){
        return ['home','cart','calendar','profile'].includes(this.activePage);
    }

}
