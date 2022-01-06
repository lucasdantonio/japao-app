import { LightningElement } from 'lwc';

export default class Calendar extends LightningElement {
    items = [
        {
            orderNumber: '000000001',
            totalPrice: 42.50,
            shop: 'Bella Vila',
            effectiveDate: '06/01/2022',
            effectiveTime: '09:15'
        },{
            orderNumber: '000000002',
            totalPrice: 14.90,
            shop: 'Bella Vila',
            effectiveDate: '06/01/2022',
            effectiveTime: '16:30'
        },{
            orderNumber: '000000003',
            totalPrice: 42.50,
            shop: 'Bella Vila',
            effectiveDate: '07/01/2022',
            effectiveTime: '09:15'
        },{
            orderNumber: '000000004',
            totalPrice: 14.90,
            shop: 'Bella Vila',
            effectiveDate: '07/01/2022',
            effectiveTime: '16:30'
        }
    ];
}
