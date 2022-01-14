import { LightningElement, api, track } from 'lwc';

const _itemsGeral = [
    {
        "id": 1,
        "nome": "Pão francês",
        "descricao": "Também conhecido como pão cacetinho, pãozinho, pão de sal ou média, é um tipo de pão feito de farinha, sal, água e fermento.",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-frances.jpg"
    },{
        "id": 2,
        "nome": "Café expresso",
        "descricao": "Bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado.",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/cafe.png"
    },{
        "id": 3,
        "nome": "Pão de queijo",
        "descricao": "Um tipo de biscoito de polvilho azedo ou doce acrescido de ovos, sal, óleo vegetal e queijo, de consistência macia e elástica, existindo pequenas variações",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-queijo.png"
    },{
        "id": 4,
        "nome": "Bolo de chocolate",
        "descricao": "Bolo de chocolate",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/bolo-chocolate.jpg"
    },{
        "id": 5,
        "nome": "Bolo de cenoura",
        "descricao": "Bolo de cenoura com cobertura de chocolate",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/bolo-cenoura.jpg"
    },{
        "id": 6,
        "nome": "Bolo de morango",
        "descricao": "Bolo recheado com morango",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/bolo-morango.jpg"
    }
];

const _itemsPaes = [
    {
        "id": 1,
        "nome": "Pão francês",
        "descricao": "",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-frances.jpg"
    },{
        "id": 2,
        "nome": "Pão Cará",
        "descricao": "",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-cara.jpg"
    },{
        "id": 3,
        "nome": "Pão de Queijo",
        "descricao": "",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-queijo.png"
    },{
        "id": 4,
        "nome": "Baguete de Salame",
        "descricao": "",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/baguete-salame.png"
    }
];

export default class Items extends LightningElement {
    @track items;

    @api
    set category(value) {
        if(value == 'Todos' || !value){
            this.items = _itemsGeral;
        } else if(value == 'Pães') {
            this.items = _itemsPaes;
        } else {
            this.items = [];
        }
    }

    get category() {
        return this.items;
    }
}
