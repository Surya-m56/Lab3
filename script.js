document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const billalInput = document.getElementById('bill');
    const percentInput = document.getElementById('tip');

    
    const chargesOutput = document.getElementById('charges');
    const chargesOut = document.getElementById('percent');


    const totalbillOutput = document.getElementById('totalbill');
    const form_tip = document.getElementById('form_tip');

    // Add an event listener to respond to user input
    form_tip.addEventListener('input', calculateTip);

    // Define a function to calculate and display tip charges and total bill amount
    function calculateTip() {
        const billValue = parseFloat(billalInput.value);
        const percentValue = parseInt(percentInput.value);
        const tippercentVAlue=parseInt(chargesOut.value)
        if (!isNaN(billValue)) {
            const tip = (billValue * percentValue) / 100;
            const total = billValue + tip;
            chargesOutput.value = tip.toFixed(2);
            totalbillOutput.value = total.toFixed(2);
            chargesOut.value=percentValue;
        } else {
            chargesOutput.value = '';
            totalbillOutput.value = '';
        }
    }
});