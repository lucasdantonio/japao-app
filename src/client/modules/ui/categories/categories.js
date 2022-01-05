import { LightningElement } from 'lwc';

const _categories = [
    {
        "id": "1",
        "nome": "Pães",
        "imagem": "../../../resources/pao-frances.jpg"
    },{
        "id": "2",
        "nome": "Frios",
        "imagem": "../../../resources/frios.jpg"
    },{
        "id": "3",
        "nome": "Doces",
        "imagem": "../../../resources/doces.jpg"
    },{
        "id": "4",
        "nome": "Bebidas",
        "imagem": "../../../resources/bebidas.jpg"
    },{
        "id": "5",
        "nome": "Salgados",
        "imagem": "../../../resources/salgados.jpg"
    },{
        "id": "6",
        "nome": "Cigarros",
        "imagem": "../../../resources/cigarros.jpg"
    }
];

export default class Categories extends LightningElement {
    categories = _categories;
}
