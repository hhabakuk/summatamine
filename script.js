let sum;
const sumElement = document.getElementById("sum");
sumElement.textContent = `Teretulemast! Sisesta liidetavad ning ütlen sulle summa.`;

function getSum(arg1, arg2) {
  return arg1 + arg2;
}

function drawElements(arg1, arg2) {
  if (!arg1 || !arg2) {
    return (sumElement.textContent = `Ma ei saa öelda, mis summa on, kui sa ei ütle, mida liita!`);
  }
  sumElement.textContent = `Kui liita ${arg1} ja ${arg2}, saame ${sum}`;
}

function onAddBtnClick() {
  const firstValue = Number(document.getElementById("nr-1").value);
  const secondValue = Number(document.getElementById("nr-2").value);
  sum = getSum(firstValue, secondValue);

  drawElements(firstValue, secondValue);
}

document.getElementById("add-btn").onclick = onAddBtnClick;
