print("HI")
let inputView1 = document.getElementsByName('input1');
let inputView2 = document.getElementsByName('input2');
let selectorView = document.getElementsByName('selector');
let outputView = document.getElementsByName('result');
let res;

let selectedOption = selectorView.options[selectorView.seletedIndex].value;
switch (selectedOption) {
  case 0:
    res = inputView1.value + inputView2.value;
    break;
  case 1:
    res = inputView1.value + inputView2.value;
    break;
  case 2:
    res = inputView1.value * inputView2.value;
    break;
  case 3:
    res = inputView1.value / inputView2.value;
    break;
  default:

}

output.value = res;
print(res);
