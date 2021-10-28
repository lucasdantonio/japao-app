import { LightningElement } from 'lwc';

export default class Container extends LightningElement {
    activePage = 'home';

    handlePageChange(event){
        const page = event.detail;
        event.preventDefault();

        console.log('page: ' + page);
        this.activePage = page;
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
