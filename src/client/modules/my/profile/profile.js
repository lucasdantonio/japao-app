import { LightningElement, track } from 'lwc';

export default class Profile extends LightningElement {
    
    name = 'User';
    picture = '../../../resources/default-user-image.png';
    @track selectedItem = 'details';

    handleSelect(event){
        const selected = event.detail.name;
        this.selectedItem = selected;
    }

    get isDetails(){
        return this.selectedItem === 'details';
    }

    get isNotifications(){
        return this.selectedItem === 'notifications';
    }

    get isPaymentMethods(){
        return this.selectedItem === 'paymentMethods';
    }

    get isFavorites(){
        return this.selectedItem === 'favorites';
    }

    get isAddress(){
        return this.selectedItem === 'address';
    }

    get isSettings(){
        return this.selectedItem === 'settings';
    }

}
