function getInputFieldValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const inputValue = parseFloat(inputFieldString);
  inputField.value = "";
  return inputValue;
}

function getElementFieldValue(elementFieldId) {
  const elementField = document.getElementById(elementFieldId);
  const elementFieldString = elementField.innerText;
  const elementFieldValue = parseFloat(elementFieldString);
  return elementFieldValue;
}

function setElementFieldValue(elementFieldId, total) {
  const elementField = document.getElementById(elementFieldId);
  elementField.innerText = total;
}
