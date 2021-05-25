/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-26-2021
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
        event.dataTransfer.setData("divId", event.target.id); //method sets the drag operation's drag data to the specified data and type
    }

    allowDrop(event)
    {
        event.preventDefault();
    }

    drop(event)
    {
        event.preventDefault();
        var divId = event.dataTransfer.getData("divId"); //is used to hold the data that is being dragged during a drag and drop operation
        var draggedElement = this.template.querySelector('#' + divId); // Use these methods to look for the elements that your component rendered. 
        draggedElement.classList.add('completed'); // Use add() and remove() to add CSS classes to and remove CSS classes from the class list of an element
        event.target.appendChild(draggedElement); //method allows you to add a node to the end of the list of child nodes of a specified parent node
    }
} 