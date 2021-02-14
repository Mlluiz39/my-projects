const calcular = document.querySelector("#calcular");
const calcularN2 = document.querySelector("#calcularN2");
const mediaFinal = document.querySelector("#mediaFinal");

function calculaN1() {
  let at1 = document.querySelector("#a1").value;
  let at2 = document.querySelector("#a2").value;
  let at3 = document.querySelector("#a3").value;
  let at4 = document.querySelector("#a4").value;
  let resultado =
    ((parseFloat(at1) + parseFloat(at2) + parseFloat(at3) + parseFloat(at4)) /
      4) *
    0.4;

  document.querySelector(
    "#resultado"
  ).textContent = `Média da N1 é = ${resultado.toFixed(1)}`;
}

function calculaN2() {
  let n2f = document.querySelector("#n2").value;

  let resultadoN2 = n2f * 0.6;

  document.querySelector(
    "#resultadoN2"
  ).textContent = `Média da N2 é = ${resultadoN2.toFixed(1)}`;
}

function calculoFinal() {
  let mediafn1 = document.querySelector("#mf1").value;
  let mediafn2 = document.querySelector("#mf2").value;

  let resultadofinal = parseFloat(mediafn1) + parseFloat(mediafn2);

  document.querySelector(
    "#resultadofinal"
  ).textContent = `Sua Média final é ${resultadofinal.toFixed(1)}`;
}

 
 
