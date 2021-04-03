function mediaTotal() {

  let at1 = document.querySelector("#a1").value;
  let at2 = document.querySelector("#a2").value;
  let at3 = document.querySelector("#a3").value;
  let at4 = document.querySelector("#a4").value;

  let resultado = ((parseFloat(at1) + parseFloat(at2) + parseFloat(at3) + parseFloat(at4)) / 4) * 0.4;

  let at22 = document.querySelector("#n2").value;
  let n2f = at22 * 0.6;

  let total = parseFloat(resultado) + parseFloat(n2f);

  if (total >= 6) {
    return document.querySelector("#resultadofinal").textContent = `Aprovado com a média ${total}`
  } else {
    return document.querySelector("#resultadofinal").textContent = `Reprovado com a média ${total}`
  }
};

document.getElementById('confirm').onreset = function () {

  return confirm ("Gostaria de apagar as notas digitadas?");
};
