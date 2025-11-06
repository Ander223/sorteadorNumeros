function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value); // com a função document.getElementById('quantidade').value, consigo capturar o valor que esta no campo do ID quantidade e passar para quantidade e o parseInt garante que o que chegará será um int 
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    alert(`Quantidade ${quantidade}.`);
    alert(`Do número ${de}.`);
    alert(`Até número ${ate}.`);

}