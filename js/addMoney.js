/**
 * 1. add evet listener to the add Money button ( from submit )
 *  make sure to prevent default so that page dosen't relodes
 * 2. get the money user wants to add
 * also, get the pin number provided
 * 3. verify the pin number. for, wrong pin number ==> failed to add
 * for right pin number, allow to the number to the account balance
 *
 * 4. get the current balance
 *
 * 5. add money to be added  with the current balance
 *
 * 6. display/update the balance in the DOM/UI
 *
 */

document.getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("input-pin-number").value;
    
    if(pinNumber === '1234'){
        // add money to the number
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber =  parseFloat(balance);
        
        // new number
        const newBalance = balanceNumber + addMoneyNumber;
        
        // update the DOM with updated balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Faild to add money. Plesse try again later')
    }
  });
