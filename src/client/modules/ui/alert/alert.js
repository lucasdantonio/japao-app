import { LightningElement, api, track  } from 'lwc';
import 'alert.css';

export default class Alert extends LightningElement {
    
    @api message = 'Logado com sucesso!';
    @api severity = 'success';
    @api isclosable = false;
    @api showAlert = false;

    get isError(){
        return this.severity === 'error';
    }

    get isWarning(){
        return this.severity === 'warning';
    }

    get isInfo(){
        return this.severity === 'info';
    }

    get isSuccess(){
        return this.severity === 'success';
    }

    closeAlert(){
       this.showAlert = false; 
    }
}
