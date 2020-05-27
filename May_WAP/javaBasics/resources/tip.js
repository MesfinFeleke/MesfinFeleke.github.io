

function calcTip() {
     const subtotalElem = document.getElementById('subtotal');
     const  tipElem = document.getElementById("tip");
     const totalElem = document.getElementById('total');
     tipElem.value = 0.2 * subtotalElem.value;
     const num = parseFloat(subtotalElem.value);
     const tip = parseFloat(tipElem.value);
     const total = num + tip;
     const totalTip = (0.625 * total)+total ;
    totalElem.innerHTML = '$' + totalTip;
}

function receipt(){

    const subtotalElem = document.getElementById('subtotal');
    const  tipElem = document.getElementById("tip");
    const totalElem = document.getElementById('total');
    tipElem.value = 0.2 * subtotalElem.value;
    const num = parseFloat(subtotalElem.value);
    const tip = parseFloat(tipElem.value);
    const total = num + tip;
    const totalTip = (0.625 * total)+total ;
    totalElem.innerHTML = '$' + totalTip;

     const receipvalue = document.getElementById("receipt");
    receipvalue.style.visibility= 'visible';
    receipvalue.value = `Thank you for dining with us ! 
                          subtotal: ${subtotalElem.value} 
                           tip : ${tipElem.value}
                            tax : 6.24 % 
                             total amount: ${totalTip}
                             
                       PLEASE COME AGAIN!`;

                      }