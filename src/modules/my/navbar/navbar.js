import { LightningElement, api } from 'lwc';

export default class Navbar extends LightningElement {
    activePage = 'home';

    @api
    set page(value) {
        this.activePage = value;
    }

    get page() {
        return this.activePage;
    }

    connectedCallback(){
        console.log('connectedCallback: ', this.template.querySelector(this.activePage));

        if(!this.template.querySelector(this.activePage)) return;

        if(!this.template.querySelector(this.activePage).classList.contains('.active'))
            this.template.querySelector(this.activePage).classList.add('.active');
    }

    renderedCallback(){
        console.log('renderedCallback: ', this.template.querySelector(this.activePage));
    }

    handleClick(event){
        var clickedItem = event.currentTarget.dataset.name;
        event.preventDefault();

        this.template.querySelectorAll('.slds-col').forEach(function(item) {
            var itemName = item.dataset.name;
            if(itemName === clickedItem) item.classList.add('active');
            else if(item.classList.contains('active')) item.classList.remove('active');
        });

        const selectEvent = new CustomEvent('pagechange', {
            detail: clickedItem
        });

        this.dispatchEvent(selectEvent);
    }
}
