
function pageLoad() {
    "use strict";

    const AddtoContact = document.getElementById("btn_add");
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

        const first = document.getElementById("first_name").value;
        const last = document.getElementById("last_name").value;
        const phone = document.getElementById("phone").value;

        const newAdress = AdressBook.createAdress(first, last, phone);

        store.push(newAdress);
        for (const row  of store) {


            var x=document.getElementById('contacts').insertRow(0);
            var n = x.insertCell(0);
            var l = x.insertCell(1);
            var p = x.insertCell(1);

            n.innerHTML= `${row.First_Name}`;
            l.innerHTML= `${row.Last_Name}`;
            p.innerHTML= `${row.Ph}`;

         //   document.getElementById("display").value += ` name: ${row.First_Name} last Name: ${row.Last_Name}
         //   phone: ${row.Ph}`

        }

    }

}
window.onload = pageLoad;
