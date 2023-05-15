var aumentar = 0;
var maxPontos = 5;
var aumentar2 = 0;
var setsganhosA = 0;
var setsganhosB = 0;
var i = 1;

function aumentarPontos() {

if(setsganhosA == 3||setsganhosB == 3){

  return;

}

  aumentar++;
  if (aumentar === maxPontos || aumentar2 === maxPontos) {
    console.log("Entrou no if 1")
    document.getElementById("set" + i).innerHTML = `set ${i}: ${aumentar}`;



    document.getElementById("set1" + i).innerHTML = `set ${i}: ${aumentar2}`;


    console.log("Comp" + aumentar > aumentar2);
    console.log("Aumentar " + aumentar);
    console.log("Aumentar 2 " + aumentar2);


    if (aumentar > aumentar2) {
      console.log("Entrou aqui if A");
      setsganhosA++;
    } else {
      console.log("Entrou aqui else A");
      setsganhosB++;
    }
    document.getElementById("sg1").innerHTML = `Sets ganhos: ${setsganhosA}`;
    document.getElementById("sg2").innerHTML = `Sets ganhos: ${setsganhosB}`;

    if (setsganhosA == 3) {
      return document.getElementById("ganhou").innerHTML = "O time A ganhou. Parábens, quer o quê? Um biscoito? 🙄"
    }
    if (setsganhoB == 3) {
      return document.getElementById("ganhou").innerHTML = "O time B ganhou. Parábens, quer o quê? Um biscoito? 🙄"
    }

    aumentar = 0;
    aumentar2 = 0;
    i++;
  }
  document.getElementById('eq1').innerText = aumentar;
  document.getElementById('eq2').innerText = aumentar2;
}

function diminuirPontos() {
  if (aumentar > 0) {
    aumentar--;
  }
  document.getElementById('eq1').innerText = aumentar;
}

let setsganhoB;

function aumentarPontos2() {

  
if(setsganhosA == 3||setsganhosB == 3){

  return;

}
  aumentar2++;
  if (aumentar === maxPontos || aumentar2 === maxPontos) {
    console.log("Entrou no if 2")

    document.getElementById("set" + i).innerHTML = `set ${i}: ${aumentar}`;
    document.getElementById("set1" + i).innerHTML = `set ${i}: ${aumentar2}`;

    if (aumentar > aumentar2) {
      setsganhosA++;
      console.log("Entrou aqui if b");
    } else {
      console.log("Entrou aqui  else b");
      setsganhosB++;
    }
    document.getElementById("sg1").innerHTML = `Sets ganhos: ${setsganhosA}`;
    document.getElementById("sg2").innerHTML = `Sets ganhos: ${setsganhosB}`;

    console.log("setsganhosA" + setsganhosA)
    console.log("setsganhosB" + setsganhosB)

    if (setsganhosA == 3) {
      console.log("setsganhosA IF" + setsganhosA)
      document.getElementById("ganhou").innerHTML = "O time A ganhou. Parábens, quer o quê? Um biscoito? 🙄"
    }
    if (setsganhosB == 3) {
      console.log("setsganhosB IF" + setsganhosB)

      document.getElementById("ganhou").innerHTML = "O time B ganhou. Parábens, quer o quê? Um biscoito? 🙄"
    }

    aumentar2 = 0;
    aumentar = 0;
    i++;
  }
  document.getElementById('eq1').innerText = aumentar;
  document.getElementById('eq2').innerText = aumentar2;
}

function diminuirPontos2() {
  if (aumentar2 > 0) {
    aumentar2--;
  }
  document.getElementById('eq2').innerText = aumentar2;
}
