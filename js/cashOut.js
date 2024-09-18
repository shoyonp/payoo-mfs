document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    
    // wrong way to verify pin number
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        
        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;

        // update the UI
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
       alert('Faild to cash out. Please try again later.') 
    }
})