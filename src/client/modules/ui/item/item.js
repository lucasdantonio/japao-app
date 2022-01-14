import { LightningElement, api } from 'lwc';

export default class Item extends LightningElement {
    @api id;
    @api nome;
    @api descricao;
    @api estrelas;
    @api proximo;
    @api imagem;

    error = false;
    message = 'Produto adicionado ao carrinho!';
    severity = 'success';

    handleAdd(){

        if(!['Pão francês','Pão Cará','Pão de Queijo','Baguete de Salame'].includes(this.nome)){

            this.error = true;
            this.message = 'Falha ao adicionar produto!';
            this.severity = 'error';

            setTimeout(() => {
                this.error = false;
            }, 2000);

            return;
        }


        this.error = true;
        this.message = 'Produto adicionado ao carrinho!';
        this.severity = 'success';

        setTimeout(() => {
            this.error = false;
        }, 2000);
    }
}
