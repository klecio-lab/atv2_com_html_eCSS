const notaForm = document.getElementById('notaForm');
const mensagem = document.getElementById('mensagem');

notaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const notaInput = document.getElementById('nota');
    const nota = parseFloat(notaInput.value);
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        mensagem.innerHTML = 'Nota inválida. Digite um valor entre 0 e 10.';
        notaInput.value = '';
        notaInput.focus();
    } else {
        mensagem.innerHTML = 'Nota válida!';
    }
});
