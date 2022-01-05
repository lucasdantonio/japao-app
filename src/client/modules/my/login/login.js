import { LightningElement } from 'lwc';

export default class Login extends LightningElement {
    
    usuario;
    senha;
    error = false;
    message = '';
    severity = '';

    alreadyConnected = false;
    connectedCallback(){
        if(this.alreadyConnected) return;
        this.alreadyConnected = true;

    }

    async handleLogin(){
        var success;
        this.error = false;

        if(!this.usuario || !this.senha) {
            this.error = true;
            this.severity = 'warning';
            this.message = 'Preencha os campos: Usuário e Senha!';
            return;
        }

        success = false;

        if(this.usuario == 'Lucas' && this.senha == '123'){
            this.severity = 'success';
            this.message = 'Logado com sucesso!';
            this.error = true;
            
            const selectEvent = new CustomEvent('login', {
                detail: true
            });
            this.dispatchEvent(selectEvent);
            return;
        }

        this.message = 'Usuário e/ou senha incorreto(s)';
        this.severity = 'error';
        this.error = true;
        return;

        const userObject = await this.login(this.usuario, this.senha);
        console.log('userObject: ', userObject);
        if(userObject && userObject.firstName){
            success = true;
            this.showToast();
        }

        if(!success) return;

        const selectEvent = new CustomEvent('login', {
            detail: success
        });

        this.dispatchEvent(selectEvent);
    }

    async login(usuario, senha){
        const URL_TO_FETCH = '/api/v1/user/' + usuario + '&' + senha;
        return fetch(URL_TO_FETCH)
        .then(response => response.json())
        .then(function(response) {
            return response;
        }).catch(function(error) {
            console.log(error);
        });    
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Get Help',
            message:
                'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
        });
        this.dispatchEvent(event);
    }

    genericOnChange(event){
        this[event.target.name] = event.target.value;
    }

}
