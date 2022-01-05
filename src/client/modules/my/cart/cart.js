import { LightningElement, track } from 'lwc';

export default class Cart extends LightningElement {
    @track items = [
        {
            "id":"1",
            "name":"PÃO FRANCÊS",
            "unitPrice":0.50,
            "quantity":6,
            "image":"../../../resources/pao-frances.jpg"
        },{
            "id":"2",
            "name":"PÃO CARÁ",
            "unitPrice":1.50,
            "quantity":2,
            "image":"../../../resources/pao-cara.jpg"
        },{
            "id":"3",
            "name":"PÃO DE QUEIJO",
            "unitPrice":0.65,
            "quantity":10,
            "image":"../../../resources/pao-queijo.png"
        },{
            "id":"4",
            "name":"BAGUETE DE SALAME",
            "unitPrice":15.40,
            "quantity":1,
            "image":"../../../resources/baguete-salame.png"
        }
    ];

    get total(){
        var totalPrice = 27.90;
        for(const item in this.items){
            if(item !== undefined && item.unitPrice !== undefined){
                console.log(item.unitPrice);
                console.log(item.quantity);
                totalPrice += (item.unitPrice * item.quantity);
            }
        }
        return totalPrice;
    }

    handleRemove(event){
        var removedItem = event.currentTarget.dataset.name;
        this.items = this.items.filter(item => item.id !== removedItem);
    }
}
