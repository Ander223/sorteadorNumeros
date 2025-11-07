function sortear(){ //função que é chamada pelo index.html  ao clicar no botão                    // quantidade é quantos números o usuário deseja que seja sorteado
    let quantidade = parseInt(document.getElementById('quantidade').value); // com a função document.getElementById('quantidade').value, consigo capturar o valor que esta no campo do ID quantidade e passar para quantidade e o parseInt garante que o que chegará será um int 
    let de = parseInt(document.getElementById('de').value);  // UTILIZAMOS O ".VALUE" PARA RECUPERAR UM VALOR DE UM CAMPO DE TEXTO
    let ate = parseInt(document.getElementById('ate').value);  
    
    let sorteados = [];   // criando um  lista vazia
    let numero;

    for(let i = 0; i < quantidade; i ++){
        numero = obterNumeroAleatorio(de, ate);   // chama a função para gerar os numeros e salva em numero
                                           //sorteados.includes(numero) => enquanto o resultado der false o numero ainda não existe no array
        while(sorteados.includes(numero)){  //sorteados.includes(numero) => ".INCLUDES" irá verificar se o numero já esta na lista e se ja tiver chama a função  obterNumeroAleatorio(min, max);
            numero = obterNumeroAleatorio(de, ate);    // Para não ter numeros repetidos
        }
        sorteados.push(numero);       // push inseri o número sorteado na lista
    } 

    let resultado = document.getElementById('resultado'); // UTILIZAMOS O "GETELEMENTBYID" PARA ACESSAR E MANIPULAR ELEMENTOS PELO SEU ATRIBUTO ID
    resultado.innerHTML =`<label class="texto__paragrafo">Números sorteados:  ${ sorteados}</label>`;   // UTILIZAMOS O "INNERHTML" PARA INSERIR VALORES DENTRO DE UM ELEMENTO
    alterarStatusBotao();
    
}

function obterNumeroAleatorio(min, max){  //função que gera números aleatorios
    return Math.floor(Math.random() * (max - min) + min);  //(Math.random() * (max - min) + min => esta função gera números aleatorios entre dois valores. Já Math.floor gera números inteiros
}

function alterarStatusBotao(){              // função que habilita o botão REINICIAR
    let botao = document.getElementById('btn-reiniciar');  // pegua o elemento do botao 
    if(botao.classList.contains('container__botao-desabilitado')){  // verifica se na classList do botao cotém o elemento "container__botao-desabilitado"
        botao.classList.remove('container__botao-desabilitado');  //chama o botao.classList.remove e remove a propriedade desabilitado
        botao.classList.add('container__botao');//chama o botao.classList.add e adiciona a propriedade habilitado

    }else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado');
    }

}

function reiniciar(){  // função que é chamada pelo index.HTML  ao clicar no botão REINICIAR 
    document.getElementById('quantidade').value = '';  // atribui vazio para o input do elemento quantidade.    limpa os 3 campos inputs
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora </label>`;
    alterarStatusBotao();
}