alert('Boas vindas ao jogo do número secreto!');
let numMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Se o chute for igual ao número secreto
while (chute != numeroSecreto) {
    
    chute = prompt('Escolha um número entre 1 e ' +numMaximo);
    
    if (chute == numeroSecreto) {
       
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que '+chute);
        } else {
            alert('O número secreto é maior que '+chute);
    
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert('Isso aí! Você descobriu o número secreto: ' +numeroSecreto+ ' com ' +tentativas+' '+palavraTentativa);
