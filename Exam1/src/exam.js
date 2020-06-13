function pageLoad() {
    "use strict";

    const AddtoContact = document.getElementById("button");
    AddtoContact.onclick = addNewContacts;

    const AdressBook = (function () {
        let firstname;
        let lastname;
        let phoneNo;
        return {
            createAdress: function (fname, lname, phone) {
                firstname = fname;
                lastname = lname;
                phoneNo = phone;

                return {
                    First_Name: firstname, Last_Name: lastname, Ph: phoneNo
                };
            }
        }
    })();

    const store = [];

    function addNewContacts() {

        const first = document.getElementById("first").value;
        const last = document.getElementById("last").value;
        const phone = document.getElementById("phone").value;

        const newAdress = AdressBook.createAdress(first, last, phone);

        store.push(newAdress);
        for (const row  of store) {
            document.getElementById("display").value += ` name: ${row.First_Name} last Name: ${row.Last_Name}
            phone: ${row.Ph}`

        }

    }

}
    window.onload = pageLoad;
