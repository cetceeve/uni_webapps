Array.prototype.shuffle = function() {
  let a = this;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function shuffleArray() {
  $('#output').text(parseArray($('#input').val()).shuffle());
}

function parseArray(csv) {
  let list = csv.split(",");
  $('#output').text(list);
  return list;
}
