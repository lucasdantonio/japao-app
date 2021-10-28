import { LightningElement } from 'lwc';

const meses = ["janeiro", 
               "fevereiro", 
               "março", 
               "abril", 
               "maio", 
               "junho", 
               "julho",
               "agosto",
               "setembro",
               "outubro",
               "novemro",
               "dezembro"];
const dias = ["Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sábado"];               

export default class Home extends LightningElement {
    
    today;

    connectedCallback(){
        this.today = this.buildToday();
    }

    buildToday(){
        var today = new Date();
        // Segunda, 17 de junho
        return dias[today.getDay()] + ', ' + today.getDate() + ' de ' + meses[today.getMonth()];
    }

}
