/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 06-01-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-31-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
export default class DraggerComp extends LightningElement
{
    @wire(getAccountList) accList;
    handleDragStartEvnt(event)
    {
        event.dataTransfer.setData("accountId", event.target.dataset.item);
    }
    connectedCallback()
    {
        console.log('accList:', JSON.stringify(this.accList));
    }
    

}