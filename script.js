
document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const grossIncome = parseFloat(document.getElementById("grossIncome").value);
    const extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
    const ageGroup = document.getElementById("ageGroup").value;
    const totalDeductions = parseFloat(document.getElementById("totalDeductions").value) || 0;
  
    let taxRate = 0.20;
    let taxableIncome = grossIncome + extraIncome - totalDeductions;
    let taxAmount = taxableIncome * taxRate;
  
    document.getElementById("result").innerHTML = `Your tax amount is: ${taxAmount.toFixed(2)}`;
  });