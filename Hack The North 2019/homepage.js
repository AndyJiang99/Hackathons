  var db = firebase.database();
  
  var customerID = document.querySelector("#customer");
  var password = document.querySelector("#password");
  var enterBtn = document.querySelector(".submit");

  enterBtn.addEventListener('click', function() {
    if(customerID.value.length == 0 || password.value.length == 0) {
      toggleErrorBox(true);
    }
    else {
      checkCustomerState(customerID.value, password.value);
    }
  });
