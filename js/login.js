// console.log('button clicked');

// document.gteElementByID('id).addEvenetListener('click', fun)
// document.getElementById('button-login').addEventListener('click',function(){})

// search: form submit reloading the page

// step - 1  set evnent handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step - 2 prevent default behaviour (prevent reloading browser)
    event.preventDefault(); // <------- vejal to beginer
    console.log("login button clicked");

    // step - 3 get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
