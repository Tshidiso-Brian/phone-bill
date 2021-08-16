// get a reference to the sms or call radio buttons

const callBillItemTypeWithSettings = document.querySelector(".callBillItemTypeWithSettings");

const smsBillItemTypeWithSettings = document.querySelector(".smsBillItemTypeWithSettings");


// get refences to all the settings fields

const  callTotalSettings = document.querySelector(".callTotalSettings");

const  smsTotalSettings = document.querySelector(".smsTotalSettings");

const  totalSettings = document.querySelector(".totalSettings");

//const callCostSetting = document.querySelector(".callCostSetting");

//const smsCostSetting = document.querySelector(".smsCostSetting");

//const warningLevelSetting= document.querySelector(".warningLevelSetting");

//const criticalLevelSetting= document.querySelector(".criticalLevelSetting");
//get a reference to the add button

const  addingButton = document.querySelector(".addingButton");

//get a reference to the 'Update settings' button

 const  updateSettings = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

var billingTotal11 = 0;

var billingTotal22 = 0

//add an event listener for when the 'Update settings' button is pressed

const callCostSetting = document.querySelector(".callCostSetting");

const smsCostSetting = document.querySelector(".smsCostSetting");

const warningLevelSetting= document.querySelector(".warningLevelSetting");

const criticalLevelSetting= document.querySelector(".criticalLevelSetting");


updateSettings.addEventListener('click', updateSettingsButton);


  var callInput = 0;

  var smsInput = 0;

  var warningLevel = 0;

  var criticalLevels = 0;
  //callInput.value
function updateSettingsButton(){

  var callInputValue = callCostSetting.value

  var smsInputValue = smsCostSetting.value;

  var warningLevelInputValue =  warningLevelSetting.value;

  var criticalLevelInputValue = criticalLevelSetting.value;

  console.log(callInputValue)





}

  


//add an event listener for when the add button is pressed

addingButton.addEventListener('click', addingButtonRad);

function addingButtonRad (){

    var checkedRadioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    console.log(checkedRadioButton.value);

    if (checkedRadioButton){

        var billItemTypeWithSettings = checkedRadioButton.value;
     
//console.log(billItemTypeWithSettings)

     
     if (billItemTypeWithSettings === callInput){
         billingTotal11 += callInput ;

        var roundedBillCall11 = billingTotal11.toFixed(2);
        callTotalSettings.innerHTML = roundedBillCall11;
  
  } 
   else if (billItemTypeWithSettings === smsInput){
    billingTotal22 += smsInput ;

   var roundedBillCall22 = billingTotal22.toFixed(2);
   smsTotalSettings.innerHTML = roundedBillCall22; 
 }

 var roundedBillTotal12= (billingTotal11 + billingTotal22 ).toFixed(2);
 totalSettings.innerHTML = roundedBillTotal12;
    }
    

  } 
  console.log(totalSettings)




//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
