function getInputFieldValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const inputValue = parseFloat(inputFieldString);
  inputField.value = "";
  return inputValue;
}
