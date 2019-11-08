  // Your web app's Firebase configuration
  var firebaseConfig = {
    authDomain: "hackthenorth-2019-dcbab.firebaseapp.com",
    databaseURL: "https://hackthenorth-2019-dcbab.firebaseio.com",
    projectId: "hackthenorth-2019-dcbab",
    storageBucket: "",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function newCustomer(customerID, password) {
    var customer = db.ref('users/' + customerID);
    customer.set({
      balance: 0,
      budget: 0,
      password: password
    }, function(error) {
      if(error) {
        console.log(error);
      } else {
        console.log("New customer " + customerID + " created");
      }
    });
  }

  function setBalance(customerID, balance) {
    var customer = db.ref('users/' + customerID);
    customer.set({
      balance: balance
    }, function(error) {
      if(error) {
        console.log(error);
      } else {
        console.log("Balance set to " + customerID);
      }
    });
  }

  function getBalance(customerID) {
    var customer = db.ref('users/' + customerID);
    customer.once('value').then(function(snapshot) {
      return snapshot.val().balance;
    });
  }

  function deleteCustomer(customerID) {
    var deletedCustomer = db.ref('users/' + customerID);
    deletedCustomer.once('value').then(function(snapshot) {
      if(snapshot.val() === null) {
        console.log(customerID + " does not exist");
      } else {
        snapshot.ref.remove();
        console.log(customerID + " removed");
      }
    })
  }

  function checkCustomerState(custID, pw) {
    var custRef = firebase.database().ref('users/' + custID);
    custRef.once('value').then(function(snapshot) {
      if(snapshot.val() !== null) {
        var password = snapshot.val().password;
        var error = false;
        if(password !== pw) {
          console.log("Incorrect password.");
          error = true;
        } else {
          console.log("Login success");
          document.location.href = 'sliders.html';
        }
        toggleErrorBox(error);
      }
      else {
        console.log("User does not exist.");
        toggleErrorBox(true);
      }
    });
  }

  function toggleErrorBox(isError) {
    var box = document.querySelector(".error-message");
    if(isError)
      box.style.display = "block";
    else
      box.style.display = "none";
  }






