function checkAge(year) {
  if (parseInt(year) > 2000) {
    alert("Not old enouph!");
    disableSubmitButton();
  } else {
    enableSubmitButton();
  }
}

function checkPasswords(pass1, pass2) {
  if (pass1 !== pass2) {
    document.getElementById('passwordError').value = "Passwords do not match!";
    disableSubmitButton();
  } else {
    document.getElementById('passwordError').value = "";
    enableSubmitButton();
  }
}

function updateSliderResult(value) {
  document.getElementById('sliderResult').value = value;
}

function checkLP(value) {
  if (parseInt(value) < 50) {
    alert("Do more stuff!");
  }
}

function disableSubmitButton() {
  document.getElementById('submitbutton').disabled = true;
}

function enableSubmitButton() {
  document.getElementById('submitbutton').disabled = false;
}
