let first = prompt();
let second = prompt();

document.getElementById('input1').value = first;
document.getElementById('input2').value = second;

document.getElementById('input1').value = second;
document.getElementById('input2').value = first;