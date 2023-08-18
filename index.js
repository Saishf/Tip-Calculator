const btnE1 = document.getElementById("calculate")
const billinput = document.getElementById("bill")
const tipinput = document.getElementById("tip")
const totalSpan = document.getElementById("total")


function  calculateTotal(){
    const billvalue = billinput.value;
    const tipvalue = tipinput.value;
    const totalvalue = billvalue * ( 1 + tipvalue / 100);
    totalSpan.innerText = totalvalue.toFixed(2)
}

btnE1.addEventListener("click", calculateTotal)
