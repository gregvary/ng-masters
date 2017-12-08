import { Injectable } from '@angular/core';
import { Occasion } from './occasion/occasion';
import { Transaction } from './transaction';
import { Person } from './person';
import { Item } from './item';



@Injectable()
export class SplitService {

  constructor() { }

  split(occ:Occasion){
      let personsWithCredit:Person[] = [];
      let personsWithDept:Person[] = [];

      let persons = occ.participants;
      let result:Transaction[] = [];

      //The contribution is the amount of money, that finally every Person should have paid
      let contribution = this.getTotalAmount(occ)/occ.participants.length;
    
      for (let i=0; i<persons.length; i++){
        let person = persons[i];
        //set 'contribution' as dept for everyone
        person.credit = person.credit - contribution;
    
        //sort person according to whether they have postive or negative credit
        if (person.credit >= 0){
          personsWithCredit.push(person);
        }else{
          personsWithDept.push(person);
        }
      }
    
      //if there is no one with dept, we are done
      if(personsWithDept.length==0){
        return result;
      }
    
       //make clones of the arrays, so we can make changes to the elements 
       //without affecting original Data (neccesary?)
       personsWithCredit = personsWithCredit.slice(0);
       personsWithDept = personsWithDept.slice(0);
       let indexCreditor = 0;
       let indexDeptor = 0;

       while (indexCreditor<personsWithCredit.length
              && indexDeptor<personsWithDept.length){

           let creditor = personsWithCredit[indexCreditor];
           let debtor = personsWithDept[indexDeptor];

           //if debt and credit are equal simply balance it. Then increment bot indices
           if (Math.abs(debtor.credit)==Math.abs(creditor.credit)){
            let transaction:Transaction = {debtor:debtor.name, creditor:creditor.name,amount:Math.round(Math.abs(debtor.credit) * 100) / 100};
             result.push(transaction);
             debtor.credit = 0;
             creditor.credit = 0;
             indexCreditor++;
             indexDeptor++;     
           }
           //if credit is bigger than dept, the debtor pays all his depts to the creditor
           //then we go to the next debtor (increment the deptors index only)
           else if( Math.abs(debtor.credit)<Math.abs(creditor.credit) ){
             let transaction:Transaction = {debtor:debtor.name, creditor:creditor.name,amount:Math.round(Math.abs(debtor.credit) * 100) / 100};
             result.push(transaction);
             creditor.credit += debtor.credit;
             debtor.credit = 0;
             indexDeptor++;
           }
           //if debt is higher than dept. The debtor balances the ceditors credit
           //then we go to the next creditor (increment the creditors index only)
           else{   
             let transaction:Transaction = {debtor:debtor.name, creditor:creditor.name,amount:Math.round(Math.abs(creditor.credit) * 100) / 100};
             result.push(transaction);
             debtor.credit += creditor.credit;
             creditor.credit = 0;
             indexCreditor++;    
           }
           
       }
       return result;
      
    }

    getTotalAmount(occ:Occasion):number{
      let totalAmount = 0;
          for (let i=0;i<occ.items.length;i++){
            totalAmount += occ.items[i].amount;
          }
      return totalAmount;    
    }

}
