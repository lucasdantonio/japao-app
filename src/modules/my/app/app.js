import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    /* isLoading = true; */
    isLoading = false;

    connectedCallback(){
        this.loadComponent();
    }

    async loadComponent(){
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(5000);
        this.isLoading = false;
    } 

}
