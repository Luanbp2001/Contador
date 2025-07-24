const dataInput = document.getElementById("dataFundacao");
const resultado = document.getElementById("resultado");
const entidade = document.querySelector(".entidade");
const dataPadrao = "2023-02-22";

function typeEvent() {
  let event = "";
  if (dataInput.value === "2023-02-22") {
    event = "Em relação ao PG: ";
  } else if (dataInput.value === "2023-04-22") {
    event = "Em relação aos idosos: ";
  } else {
    event = "Uma data qualquer: ";
  }
  entidade.innerHTML = `${event}`;
}

function atualizarTempo() {
  typeEvent();
  let valorData = dataInput.value;

  // Se o campo estiver vazio, usa a data padrão
  if (!valorData) {
    valorData = dataPadrao;
    dataInput.value = dataPadrao; // também coloca no input visualmente
  }

  const dataFundacao = new Date(valorData);
  const agora = new Date();

  let anos = agora.getFullYear() - dataFundacao.getFullYear();
  let meses = agora.getMonth() - dataFundacao.getMonth();
  let dias = agora.getDate() - dataFundacao.getDate();
  let horas = agora.getHours() - dataFundacao.getHours();
  let minutos = agora.getMinutes() - dataFundacao.getMinutes();
  let segundos = agora.getSeconds() - dataFundacao.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  resultado.textContent = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Define valor inicial
dataInput.value = dataPadrao;

// Atualiza a cada segundo
dataInput.addEventListener("change", atualizarTempo);
setInterval(atualizarTempo, 1000);
atualizarTempo();
