import { LightningElement, api } from 'lwc';

export default class Item extends LightningElement {
    @api id;
    @api nome;
    @api descricao;
    @api estrelas;
    @api proximo;
    @api imagem;
}
