import { LightningElement, track } from 'lwc';

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
    @track category = 'Todos';

    connectedCallback(){
        this.today = this.buildToday();
    }

    buildToday(){
        var today = new Date();
        // Segunda, 17 de junho
        return dias[today.getDay()] + ', ' + today.getDate() + ' de ' + meses[today.getMonth()];
    }

    handleSelectCategory(event){
        const category = event.detail;
        event.preventDefault();

        console.log('category: ', category);

        this.category = category;
    }

}
