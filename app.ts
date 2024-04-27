import {log} from "console";
import inquirer from "inquirer"

let currencyconvertor = {
  "USD":{
     "USD":1,
     "EUR":0.92,
     "PKR":278
  },
  "EUR":{
    "USD":1.08,
    "EUR":1,
    "PKR":300
 },
 "PKR":{
  "USD":0.0036,
  "EUR":0.0033,
  "PKR":1
},
}
//input prompt

const answer : {
  from:"USD" |"ERU" |"PKR",
  to:"USD" |"ERU" |"PKR",
  amount : number,
} = await inquirer.prompt(
  [
      { 
         name:"from",
         message:"Enter your Currency which you want to convert?",
         type: "list",
         choices:["USD","ERU","PKR"]
      },
      { 
        name: "to",
        message:"Select in which currency you want to convert?",
        type: "list",
        choices:["USD","ERU","PKR"]
     },
     { 
      name:"amount",
      message:"Enter your amount in number",
      type: "number",
      choices:["USD","ERU","PKR"]
     }

  ]   
    
)   

const{from,to,amount} = answer;

// conversion
if(from && to && amount){
    let result =currencyconvertor[from] [to] * amount;
   console.log(`Your conversion from ${from}to ${to} is ${result} `)
}else{
  console.log("invalid operator select")
}

     
        
     