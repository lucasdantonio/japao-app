import { LightningElement, api } from 'lwc';

export default class Categories extends LightningElement {
    
    @api id;
    @api nome;
    @api imagem;

    handleClick(event){
        const selectEvent = new CustomEvent('selectcategory', {
            detail: this.nome
        });

        this.dispatchEvent(selectEvent);
    }

}
