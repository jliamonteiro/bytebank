let saldo = 3000;


const  elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent= saldo;
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(!elementoFormulario.checkVisibility()){
        alert("Preencha todos os campos");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if( tipoTransacao == "Depósito"){
        saldo += parseFloat(valor);
        // caso o valor tivesse sido mantido sem esse parse float na frente, o javascript iria 
        // concatenar o saldo e o valor ao invés de fzr adição, pois a váriavel esta no tipo string, 
        // e o js caso tenha um sinal de aição, vai priorizar a concatenação ao ivés do cálculo
    }else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }else{
        alert("Tipo de transação inválido");
        return;
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao)
    elementoFormulario.reset();


})
