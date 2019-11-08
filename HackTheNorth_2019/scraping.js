var finalArray = []

// Values for API Calls

var customerID = "995562d6-7a30-43d2-9c63-4172f641fcb5";
var myInit = {
    method: 'GET',
    headers: {
        'Authorization': APIKEY
    }
};
var basicInfo = "";
var accountInfo = "/accounts";
var transactionInfo = "/transactions";

// Local storage values for balances
var totalIncome = 0;
var monthlyIncome = 0;
var totalAccountBalance = 0;
var totalCCBalance = 0;

const info1 = new Request('https://api.td-davinci.com/api/customers/' + customerID  + basicInfo, myInit);
    fetch(info1)
    .then(response => response.json())
    .then(json => {
        // the json variable contains the response from the API
        totalIncome = json["result"]["totalIncome"];
        // console.log(totalIncome);
        monthlyIncome = totalIncome / 12;
});


const info2 = new Request('https://api.td-davinci.com/api/customers/' + customerID  + accountInfo, myInit);
    fetch(info2)
    .then(response => response.json())
    .then(json => {
        // the json variable contains the response from the API
        // console.log(json);

        const numberOfBankAccounts = (json["result"]["bankAccounts"]).length;
        for (let i = 0; i < numberOfBankAccounts; i++){
            totalAccountBalance += json["result"]["bankAccounts"][i]["balance"];
        }
        totalAccountBalance = totalAccountBalance.toFixed(2);
        console.log(totalAccountBalance);


        const numberOfCreditAccounts = (json["result"]["creditCardAccounts"]).length;
        for (let i = 0; i < numberOfCreditAccounts; i++){
            totalCCBalance += json["result"]["creditCardAccounts"][i]["balance"];
        }
        totalCCBalance = totalCCBalance.toFixed(2);
        // console.log(totalCCBalance);
});

// var array = {
//     "January": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "February": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "March": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "April": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "May": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "June": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "July": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "August": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0},
//     "September": {"Fashion": 0, "Electronics": 0, "Food": 0, "HomeImprovement": 0, "Office": 0}
// }

var array = [];

var marchshopping = 0;
var marchentertainment = 0;
var marchbillUtils = 0;
var marchfoodDining = 0;
var marchautoTransport = 0;

var aprilshopping = 0;
var aprilentertainment = 0;
var aprilbillUtils = 0;
var aprilfoodDining = 0;
var aprilautoTransport = 0;

var mayshopping = 0;
var mayentertainment = 0;
var maybillUtils = 0;
var mayfoodDining = 0;
var mayautoTransport = 0;

var juneshopping = 0;
var juneentertainment = 0;
var junebillUtils = 0;
var junefoodDining = 0;
var juneautoTransport = 0;

var juneshopping = 0;
var juneentertainment = 0;
var junebillUtils = 0;
var junefoodDining = 0;
var juneautoTransport = 0;

var julyshopping = 0;
var julyentertainment = 0;
var julybillUtils = 0;
var julyfoodDining = 0;
var julyautoTransport = 0;

var augustshopping = 0;
var augustentertainment = 0;
var augustbillUtils = 0;
var augustfoodDining = 0;
var augustautoTransport = 0;

var septshopping = 0;
var septentertainment = 0;
var septbillUtils = 0;
var septfoodDining = 0;
var septautoTransport = 0;

const info3 = new Request('https://api.td-davinci.com/api/customers/' + customerID  + transactionInfo, myInit);
    fetch(info3)
    .then(response => response.json())
    .then(json => {
        // the json variable contains the response from the API
        console.log(json);
        const numberOfTransaction = (json["result"]).length;
        for (let i = 0; i < numberOfTransaction; i++){
            const date = json["result"][i]["originationDateTime"];
            const month = (date[5]).toString() + (date[6].toString());

            if (month == "10" || month == "11" || month == "12"){
                continue
            }

            const amount = json["result"][i]["currencyAmount"];
            const category = json["result"][i]["categoryTags"][0];
            

            const object = [month, category, amount];
            array.push(object);
        }

        for (let i = 0; i < array.length; i++){
            if (array[i][0] == 03){
                if (array[i][1] == "Food and Dining"){
                    marchfoodDining += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Auto and Transport"){
                    marchautoTransport += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Entertainment"){
                    marchentertainment += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Shopping"){
                    marchshopping += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Bills and Utilities"){
                    marchbillUtils += Math.abs(array[i][2]);
                }
            }

            else if (array[i][0] == 04){
                if (array[i][1] == "Food and Dining"){
                    aprilfoodDining += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Auto and Transport"){
                    aprilautoTransport += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Entertainment"){
                    aprilentertainment += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Shopping"){
                    aprilshopping += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Bills and Utilities"){
                    aprilbillUtils += Math.abs(array[i][2]);
                }
            }

            else if (array[i][0] == 05){
                if (array[i][1] == "Food and Dining"){
                    mayfoodDining += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Auto and Transport"){
                    mayautoTransport += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Entertainment"){
                    mayentertainment += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Shopping"){
                    mayshopping += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Bills and Utilities"){
                    maybillUtils += Math.abs(array[i][2]);
                }
            }

            else if (array[i][0] == 06){
                if (array[i][1] == "Food and Dining"){
                    junefoodDining += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Auto and Transport"){
                    juneautoTransport += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Entertainment"){
                    juneentertainment += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Shopping"){
                    juneshopping += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Bills and Utilities"){
                    junebillUtils += Math.abs(array[i][2]);
                }
            }

            else if (array[i][0] == 07){
                if (array[i][1] == "Food and Dining"){
                    julyfoodDining += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Auto and Transport"){
                    julyautoTransport += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Entertainment"){
                    julyentertainment += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Shopping"){
                    julyshopping += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Bills and Utilities"){
                    julybillUtils += Math.abs(array[i][2]);
                }
            }

            else if (array[i][0] == 08){
                if (array[i][1] == "Food and Dining"){
                    augustfoodDining += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Auto and Transport"){
                    augustautoTransport += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Entertainment"){
                    augustentertainment += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Shopping"){
                    augustshopping += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Bills and Utilities"){
                    augustbillUtils += Math.abs(array[i][2]);
                }
            }

            else if (array[i][0] == 09){
                if (array[i][1] == "Food and Dining"){
                    septfoodDining += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Auto and Transport"){
                    septautoTransport += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Entertainment"){
                    septentertainment += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Shopping"){
                    septshopping += Math.abs(array[i][2]);
                }
                else if (array[i][1] == "Bills and Utilities"){
                    septbillUtils += Math.abs(array[i][2]);
                }
            }
        }
        console.log(septfoodDining);
        console.log(septautoTransport);
        console.log(septentertainment);
        console.log(septshopping);
        console.log(septbillUtils);

    finalArray = [{"March": {"Food": marchfoodDining, "Auto": marchautoTransport, "Entertainment": marchentertainment, "Shopping": marchshopping, "Bills": marchbillUtils}},
    {"April": {"Food": aprilfoodDining, "Auto": aprilautoTransport, "Entertainment": aprilentertainment, "Shopping": aprilshopping, "Bills": aprilbillUtils}},
    {"May": {"Food": mayfoodDining, "Auto": mayautoTransport, "Entertainment": mayentertainment, "Shopping": mayshopping, "Bills": maybillUtils}},
    {"June": {"Food": junefoodDining, "Auto": juneautoTransport, "Entertainment": juneentertainment, "Shopping": juneshopping, "Bills": junebillUtils}},
    {"July": {"Food": julyfoodDining, "Auto": julyautoTransport, "Entertainment": julyentertainment, "Shopping": julyshopping, "Bills": julybillUtils}},
    {"August": {"Food": augustfoodDining, "Auto": augustautoTransport, "Entertainment": augustentertainment, "Shopping": augustshopping, "Bills": augustbillUtils}},
    {"September": {"Food": septfoodDining, "Auto": septautoTransport, "Entertainment": septentertainment, "Shopping": septshopping, "Bills": septbillUtils}}
    ]
    console.log(finalArray);

});

