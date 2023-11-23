function convertCurrency() {
   
    var cadInput = document.getElementById("cadAmount");
    var usdInput = document.getElementById("usdAmount");

    var cadAmount = parseFloat(cadInput.value);
    var usdAmount = parseFloat(usdInput.value);

  
    if (isNaN(cadAmount) && isNaN(usdAmount)) {
        alert("Please enter a valid number for CAD or USD amount.");
        return false;
    }

    // Conversion rates 
    var cadToUsdRate = 0.75; // 1 CAD = 0.75 USD
    var usdToCadRate = 1.33; // 1 USD = 1.33 CAD

    // Convert CAD to USD
    if (!isNaN(cadAmount)) {
        var convertedAmount = (cadAmount * cadToUsdRate).toFixed(3);
        usdInput.value = convertedAmount;
    }

    // Convert USD to CAD
    if (!isNaN(usdAmount)) {
        var convertedAmount = (usdAmount * usdToCadRate).toFixed(3);
        cadInput.value = convertedAmount;
    }

    return false; 
}