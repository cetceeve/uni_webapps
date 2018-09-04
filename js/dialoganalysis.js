var mText;

function analyseText(text) {
  mText = text;
  checkLength();
  checkChars();
  checkWords();
  checkSpecials();
}

// Länge des eingegebenen Textes
function checkLength() {
  document.getElementById('textlength').value = mText.length;
}

// Anzahl der unterschiedlichen Zeichen (ohne Leerzeichen)
function checkChars() {
  let chars = [];
  let text = mText.replace(/ /g, "");
  for (let i = 0; i < text.length; i++) {
    if (!contains(text.charAt(i), chars)) {
      chars.push(text.charAt(i));
    }
  }
  document.getElementById('chars').value = chars.length;
}

function contains(c, text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === c) {
      return true;
    }
  }
  return false;
}

// Anzahl der Wörter
function checkWords() {
  document.getElementById('words').value = mText.split(" ").length;
}


// Anzahl der Sonderzeichen und Zahlen (bzw. Nichtbuchstaben ( a-z , A-Z ))
function checkSpecials() {
  document.getElementById('special').value = mText.replace(/[a-zA-Z]/g, "").length;
}
