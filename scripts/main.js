const body = document.getElementsByTagName("body");
const btn = document.getElementById("container-btn");

btn.addEventListener("click", geraCores);

function geraCores() {
  const letters = "0123456789ABCDEF";
  let cores = "#";
  console.log("click");

  for (let i = 0; i < 6; i++) {
    cores += letters[Math.floor(Math.random() * 16)];
  }

  console.log(cores);
  trocaCores(cores);

  return cores;
}

function trocaCores(cor) {
  document.body.style.backgroundColor = cor;
}
