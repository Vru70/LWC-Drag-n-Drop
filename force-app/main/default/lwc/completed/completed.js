/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-26-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-26-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext, publish, subscribe, unsubscribe } from 'lightning/messageService';
import DragDropChannel from "@salesforce/messageChannel/dragnDrop__c";
export default class Completed extends LightningElement
{
    draggedItem;
    draggedItemId;
    context = createMessageContext();
    subscription = null;
    @track lstPosts = [];

    constructor()
    {
        super();
        this.lstPosts.push('TODO TASK');

        if (this.subscription)
        {
            return;
        }
        this.subscription = subscribe(this.context, DragDropChannel, (message) => {
            if (message.upcomingToCompleted)
            {
                this.handleMessage(message);
            }
        });
    }

    handleMessage(message)
    {
        this.draggedItem = message.draggedItem;
        this.draggedItemId = message.itemId;
    }

    allowDrop(event)
    {
        event.preventDefault();
    }

    drop(event)
    {
        event.preventDefault();
        this.lstPosts.push(this.draggedItem);
        const message = {
            draggedItem: null,
            itemId: this.draggedItemId,
            upcomingToCompleted: false
        };
        publish(this.context, DragDropChannel, message);
    }

    disconnectedCallback()
    {
        releaseMessageContext(this.context);
    }
 }