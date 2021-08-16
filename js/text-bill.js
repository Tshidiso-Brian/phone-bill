// get a reference to the textbox where the bill type is to be entered

const billTypeTexter = document.querySelector(".billTypeText");

//get a reference to the add button

const addToBillBtn = document.querySelector(".addToBillBtn");

const  callTotalOne = document.querySelector(".callTotalOne");

const  smsTotalOne = document.querySelector(".smsTotalOne");

const  totalOne = document.querySelector(".totalOne");

//create a variable that will keep track of the total bill

var billingTotal1= 0;

var billingTotal2= 0 

//add an event listener for when the add button is pressed



function radioBillAddingBtn(){

    var billTypeText = billTypeTexter.value;

   // console.log(billTypeText)

    //for (var i=0;i<billTypeText.length;i++){
       // var billTyping = billTypeText[i].trim();
        if (billTypeText === "call"){
            billingTotal1 += 2.75;

            var roundedBillCalls = billingTotal1.toFixed(2);
            callTotalOne.innerHTML = roundedBillCalls;

            
        }
        else if (billTypeText === "sms"){
            billingTotal2 += 0.75;
            
            var roundedBillCalls = billingTotal2.toFixed(2);
            smsTotalOne.innerHTML = roundedBillCalls;

        }
    
    
    //round to two decimals
    var roundedBillTotals = (billingTotal1 + billingTotal2 ).toFixed(2);
    totalOne.innerHTML = roundedBillTotals;
}


//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
addToBillBtn.addEventListener('click', radioBillAddingBtn);