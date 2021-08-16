

//const billItemTypeRadio = document.querySelector(".billItemTypeRadio");

const callTotalTwo = document.querySelector(".callTotalTwo");

const smsTotalTwo = document.querySelector(".smsTotalTwo");

//const totalTwo = document.querySelector(".totalTwo");

const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

const RadioBillTotalElement = document.querySelector(".totalTwo");

var billTotal1 = 0;

var billTotal2 = 0;

function radioBillAddBtnhs(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
  console.log(billItemType)
    
 

   // for (var i=0;i<billItems.length;i++){
        //var billItemType = billItems[i].trim();

        if (billItemType === "call"){
           billTotal1 += 2.75;

           var roundedBillCall = billTotal1.toFixed(2);
          callTotalTwo.innerHTML = roundedBillCall;

           //console.log(billTotal)
     }
      else if (billItemType === "sms"){
            billTotal2 += 0.75;

            var roundedBillsms = billTotal2.toFixed(2);
         smsTotalTwo.innerHTML = roundedBillsms;
        }
      // console.log(billTotal)
       
    
    }
    var roundedBillTotal = (billTotal1 + billTotal2 ).toFixed(2);
    RadioBillTotalElement.innerHTML = roundedBillTotal;
  }
    
radioBillAddBtn.addEventListener('click', radioBillAddBtnhs);

// get a reference to the sms or call radio buttons

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed


//in the event listener get the value from the billItemTypeRadio radio buttons


// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
