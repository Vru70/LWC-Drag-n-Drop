/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 06-01-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   06-01-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, track } from 'lwc';
import NAME from '@salesforce/schema/Account.Name';
import PHONE from '@salesforce/schema/Account.Phone';
export default class DropComp extends LightningElement
{
    @track firlds = [NAME, PHONE];
    @track accountId;
    dropAction(event)
    {
        this.accountId = event.dataTransfer.getData("accountId");
    }
    allowDrop(event)
    {
        event.preventDefault();
    }
}