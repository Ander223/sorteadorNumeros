function sortear(){                                       // quantidade é quantos números o usuário deseja que seja sorteado
    let quantidade = parseInt(document.getElementById('quantidade').value); // com a função document.getElementById('quantidade').value, consigo capturar o valor que esta no campo do ID quantidade e passar para quantidade e o parseInt garante que o que chegará será um int 
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];   // criando um  lista vazia
    let numero;

    for(let i = 0; i < quantidade; i ++){
        numero = obterNumeroAleatorio(de, ate);   // chama a função para gerar os numeros e salva em numero
        sorteados.push (numero);
    } 
    alert(sorteados);
    
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);  //(Math.random() * (max - min) + min => esta função gera números aleatorios entre dois valores. Já Math.floor gera números inteiros
}