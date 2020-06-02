function pageLoad() {

    "use strict";
    const createButton = document.getElementById("create");
    createButton.onclick = createNewAccount;

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
        document.getElementById("display").value = "";
        for (const account of accountList) {
            document.getElementById("display").value += `Account name: ${account.name}, Balance: ${account.balance}`

        }

    }
}
window.onload = pageLoad;






