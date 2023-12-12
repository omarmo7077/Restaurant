

function getData() {
  var inputValue = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myInput2").value;

  console.log(inputValue);
  console.log(inputValue2);
}

function Forget() {
  document.getElementById("div2").style.display = "block";
  document.getElementById("div1").style.display = "none";
}

function Return() {
  document.getElementById("div2").style.display = "none";
  document.getElementById("div1").style.display = "block";
}

function EnterCode() {
  document.getElementById("Code").style.display = "block";
}
