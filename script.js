document.addEventListener("DOMContentLoaded", function(){
    const billInput=document.querySelector("#billAmount");
    const tipInput= document.querySelector ("#tipPercentage");
    const calculateBtn=document.querySelector("#calculateBtn");
    const result=document.querySelector("#result");

    calculateBtn.addEventListener("click",function(){
        const bill = Number (billInput.value);
        const tipPercent= Number(tipInput.value);

        if (isNaN(bill) || isNaN(tipPercent)) {
            result.innerText = "Please enter valid number.";
        }else{
            const tip = (bill * tipPercent) / 100;
            const total = bill + tip;
        
           result.innerText = `Tip: #${tip.toFixed(2)} \nTotal: #${total.toFixed(2)}`;
        }
    });
});