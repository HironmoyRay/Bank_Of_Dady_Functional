document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValue("input-deposit-field");
  if (isNaN(newDepositAmount)) {
    return alert("Invalid Deposit Amount");
  }

  const previousTotalDeposit = getElementFieldValue("total-deposit-field");
  const updateDeposit = newDepositAmount + previousTotalDeposit;
  setElementFieldValue("total-deposit-field", updateDeposit);

  const previousTotalBalance = getElementFieldValue("total-balance-field");
  const updateBalance = newDepositAmount + previousTotalBalance;
  setElementFieldValue("total-balance-field", updateBalance);
});
