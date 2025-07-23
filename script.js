const dataInput = document.getElementById("fundacao");
const resultadoDiv = document.getElementById("resultado");
const tipoEntidade = document.querySelector(".entidade");

function typeEvent() {
  let event = "";

  if (dataInput.value == "2023-02-22") {
    event = "Em relação ao PG: ";
  } else if (dataInput.value == "2023-04-22") {
    event = "Em relação aos idosos: ";
  } else {
    event = "Qualquer outra data:";
  }
  tipoEntidade.innerHTML = `${event}`;
}

// Função para atualizar o tempo em tempo real
function atualizarTempo() {
  typeEvent();
  const dataFundacao = new Date(dataInput.value);
  const agora = new Date();

  if (isNaN(dataFundacao)) return;

  let anos = agora.getFullYear() - dataFundacao.getFullYear();
  let meses = agora.getMonth() - dataFundacao.getMonth();
  let dias = agora.getDate() - dataFundacao.getDate();
  let horas = agora.getHours() - dataFundacao.getHours();
  let minutos = agora.getMinutes() - dataFundacao.getMinutes();
  let segundos = agora.getSeconds() - dataFundacao.getSeconds();

  // Ajustes para valores negativos
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

  resultadoDiv.innerHTML = `
    <strong>${anos}</strong> anos,
    <strong>${meses}</strong> meses,
    <strong>${dias}</strong> dias,
    <strong>${horas}</strong> horas,
    <strong>${minutos}</strong> minutos e
    <strong>${segundos}</strong> segundos
  `;
}

// Atualiza a cada segundo
setInterval(atualizarTempo, 1000);
dataInput.addEventListener("change", atualizarTempo);

// Atualiza imediatamente ao carregar
atualizarTempo();
