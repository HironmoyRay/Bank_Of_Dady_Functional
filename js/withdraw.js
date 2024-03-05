document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValue("input-withdraw-field");
  if (isNaN(newWithdrawAmount)) {
    return alert("Invalid Withdraw Amount");
  }

  const previousTotalBalance = getElementFieldValue("total-balance-field");
  if (newWithdrawAmount > previousTotalBalance) {
    return alert("Insufficient Balance");
  } else {
    const updateTotalBalance = previousTotalBalance - newWithdrawAmount;
    setElementFieldValue("total-balance-field", updateTotalBalance);
  }

  const previousTotalWithdraw = getElementFieldValue("total-withdraw-field");
  const updateTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
  setElementFieldValue("total-withdraw-field", updateTotalWithdraw);
});
