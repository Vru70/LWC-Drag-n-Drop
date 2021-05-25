/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-25-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-25-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Dragndrop extends LightningElement
{
    drag(event)
    {
        event.dataTransfer.setData("divId", event.target.id);
    }

    allowDrop(event)
    {
        event.preventDefault();
    }

    drop(event)
    {
        event.preventDefault();
        var divId = event.dataTransfer.getData("divId");
        var draggedElement = this.template.querySelector('#' + divId);
        draggedElement.classList.add('completed');
        event.target.appendChild(draggedElement);
    }
}