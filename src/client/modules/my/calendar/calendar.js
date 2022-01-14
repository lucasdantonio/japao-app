import { LightningElement } from 'lwc';

export default class Calendar extends LightningElement {
    items = [
        {
            orderNumber: '000000001',
            totalPrice: 27.90,
            shop: 'EC Teste',
            effectiveDate: '15/01/2022',
            effectiveTime: '09:15'
        },{
            orderNumber: '000000002',
            totalPrice: 18.05,
            shop: 'EC Teste',
            effectiveDate: '16/01/2022',
            effectiveTime: '09:15'
        },{
            orderNumber: '000000003',
            totalPrice: 27.90,
            shop: 'EC Teste',
            effectiveDate: '16/01/2022',
            effectiveTime: '09:15'
        }/* ,{
            orderNumber: '000000004',
            totalPrice: 14.90,
            shop: 'Bella Vila',
            effectiveDate: '07/01/2022',
            effectiveTime: '16:30'
        } */
    ];
}
