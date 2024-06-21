const botoes  = document.querySelectorAll(".botao");
const conteudo  = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
 tempo[0]. textContent = "Olá";
const tempoObjetivo1 = new Date(2007,06);
const tempoObjetivo2 = new Date(2024,06);
const agora = new Date();
let segundos ;
segundos = (tempoObjetivo1 - agora)/1000;
let minutos;
minutos = segundos/60;
let horas;
horas = minutos/60
let dias;
dias = horas/24
segundos=Math.floor(segundos);
minutos=Math.floor(minutos);
horas=Math.floor(horas);
dias=Math.floor(dias);
tempo[0].textContent = `faltam ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
tempo[1].  textContent = agora;
for (let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function(){
    for (j=0;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        conteudo[j].classList.remove("ativo")
    }
    botoes[i].classList.add("ativo")
    conteudo[i].classList.add("ativo")
  }
}