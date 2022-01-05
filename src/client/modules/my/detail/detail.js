import { LightningElement, api } from 'lwc';

export default class Detail extends LightningElement {
    
    userName;
    userPicture;

    @api
    set name(value){
        this.userName = value;
    }

    get name(){
        return this.userName;
    }

    @api
    set picture(value){
        this.userPicture = value;
    }

    get picture(){
        return this.userPicture;
    }

    connectedCallback(){
        console.log('teste: ', 'detail');
    }

}
