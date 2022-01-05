import { LightningElement, api } from 'lwc';

export default class CartItem extends LightningElement {
    @api name;
    @api quantity;
    @api image;
    @api unitPrice;

    handleAdd(){
        this.quantity++;
    }

    handleRemove(){
        if(this.quantity < 1){
            this.dispatchEvent(new CustomEvent('remove'));
            return;
        }
        this.quantity--;
    }
}
