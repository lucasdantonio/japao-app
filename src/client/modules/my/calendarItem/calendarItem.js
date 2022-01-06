import { LightningElement, api } from 'lwc';

export default class CalendarItem extends LightningElement {
    @api orderNumber;
    @api totalPrice;
    @api shop;
    @api effectiveDate;
    @api effectiveTime;
}
