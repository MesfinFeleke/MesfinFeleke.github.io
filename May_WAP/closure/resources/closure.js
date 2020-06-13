function pageLoad() {

    "use strict";
    const createButton = document.getElementById("create");
    createButton.onclick = createNewAccount;
    const clearButton = document.getElementById("clear");
    clearButton.onclick = clearText;

    const accountCreater = (function () {
        let acctName;
        let amount;

        return {
            createAcccount: function (name, amt) {
                acctName = name;
                amount = amt;
                return {
                    name: acctName, balance: amount
                };
            }
        }
    })();

    const accountList = [];

    function createNewAccount() {
        const newAccount = accountCreater.createAcccount(document.getElementById("account_name").value,
            document.getElementById("amount").value);
        accountList.push(newAccount);

        for (const account of accountList) {
            document.getElementById("display").value += `Account name: ${account.name}, Balance: ${account.balance}`

        }

    }

    function clearText() {
        document.getElementById("display").value = "";
    }
}
    window.onload = pageLoad;






