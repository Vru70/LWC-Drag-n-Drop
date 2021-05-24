/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-24-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-24-2021   Vrushabh Uprikar   Initial Version
**/
public with sharing class AccountHelper 
{
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountLocations()
    {
        return[SELECT Id, Name, BillingStreet, BillingCity, 
                BillingState, BillingPostalCode, BillingCountry 
                FROM Account
                WHERE isDisplay__c = true];
    }
}