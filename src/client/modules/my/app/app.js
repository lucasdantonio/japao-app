import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    isLoading = true;
    isLogged = false;
    /* isLogged = true; */
    /* isLoading = false; */

    connectedCallback(){
        this.loadComponent();
    }

    async loadComponent(){
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(5000);
        this.isLoading = false;
    }

    handleLogin(event){
        const isLogged = event.detail;
        this.isLoading = true;
        setTimeout(() => {
            this.isLogged = isLogged;
            this.isLoading = false;
        }, 3000);
    }

}
