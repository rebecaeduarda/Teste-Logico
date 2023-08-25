// QUESITO UM
verResposta1.addEventListener("click", somar);

function somar() {
    let n1 = Number(document.getElementById('numero1').value);
    let n2 = Number(document.getElementById('numero1').value);
    let soma = n1+n2;
    resposta1.innerHTML = soma;
}

// QUESITO DOIS
verResposta2.addEventListener(`click`, colorir);

function colorir(){
    cardVermelho.style.backgroundColor = 'red';
}

// QUESITO TRÊS

verResposta3.addEventListener("click", listaDeRepeticao);
function listaDeRepeticao() {
    for (let i = 0; i<=5; i++){
        resposta3.innerText += `${i}\n`; 
    }
}

// QUESITO QUATRO

verResposta4.addEventListener("click", verificarMedia);
function verificarMedia() {
    let mediaAluno = Number.parseFloat(media.value);
    if (media.value >= 6){
        resposta4.innerHTML = 'Resposta: Aprovado'
    } else {
        resposta4.innerHTML = 'Resposta: Reprovado'
    }
}