import { LightningElement, api } from 'lwc';

export default class Categories extends LightningElement {
    
    @api id;
    @api nome;
    @api imagem;

}
