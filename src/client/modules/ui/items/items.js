import { LightningElement } from 'lwc';

const _items = [
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
        "estrelas": 4,
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
        "nome": "Pão de queijo",
        "descricao": "Um tipo de biscoito de polvilho azedo ou doce acrescido de ovos, sal, óleo vegetal e queijo, de consistência macia e elástica, existindo pequenas variações",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-queijo.png"
    },{
        "id": 5,
        "nome": "Pão de queijo",
        "descricao": "Um tipo de biscoito de polvilho azedo ou doce acrescido de ovos, sal, óleo vegetal e queijo, de consistência macia e elástica, existindo pequenas variações",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-queijo.png"
    },{
        "id": 6,
        "nome": "Pão de queijo",
        "descricao": "Um tipo de biscoito de polvilho azedo ou doce acrescido de ovos, sal, óleo vegetal e queijo, de consistência macia e elástica, existindo pequenas variações",
        "estrelas": 5,
        "proximo": "Bela Vila - 300 metros",
        "imagem": "../../../resources/pao-queijo.png"
    }
]

export default class Items extends LightningElement {
    items = _items;


}
