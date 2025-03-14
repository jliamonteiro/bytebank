let saldo = 3000;


const  elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent= saldo;
const elementoFormulario = document.querySelector('.block-novatransacao form');
elementoFormulario.addEventListener("submit", function(){
    event.preventDefault();
    if(!elementoFormulario.checkVisibility()){
        alert("Preencha todos os campos");
        return;
    }
})
