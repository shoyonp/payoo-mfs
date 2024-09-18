// add money to the account
/**
 * s-1: add event handler prevent page relode form submit
 * s-2: get money to be added to the account balance
 */

// step 1: add an evenet hander to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page relode after form submit
    event.preventDefault();

    // setp-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);
})