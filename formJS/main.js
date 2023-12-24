const form = document.getElementById('form-valido');
let formEvalido = false;

const valorA = document.querySelector('input[name="valor-A"]');
const valorB = document.querySelector('input[name="valor-B"]');

function validaForm() {
    //parseFloat vai fazer com que o valor do campo deixe de ser comparado como string e passe a ser numerico.
    const valorA = parseFloat(document.querySelector('input[name="valor-A"]').value);
    const valorB = parseFloat(document.querySelector('input[name="valor-B"]').value);  
    return valorB > valorA;
}

//Sempre que a página for carregada os campos estaram normais.
window.onload = function() {
    valorA.style.borderColor = 'black';
    valorB.style.borderColor = 'black';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formEvalido = validaForm();

    if (formEvalido) {
        const containerMensagemSucess = document.querySelector('.mensageSucess');
        containerMensagemSucess.innerHTML = 'Formulario validado tudo ok.';
        containerMensagemSucess.style.display = 'block';
        document.querySelector('.error').style.display = 'none';

        //Altera a borda para a cor verde
        valorA.style.borderColor = 'green';
        valorB.style.borderColor = 'green';

        // Limpa os campos A e B
        valorA.value = '';
        valorB.value = '';

    } else {
        const containerMensagemErro = document.querySelector('.error');
        containerMensagemErro.innerHTML = 'Erro na validação do formulário.';
        containerMensagemErro.style.display = 'block';
        document.querySelector('.mensageSucess').style.display = 'none';

        valorA.style.borderColor = 'red';
        valorB.style.borderColor = 'red';

        valorA.value = '';
        valorB.value = '';
    }
});