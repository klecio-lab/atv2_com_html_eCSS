const senhaForm = document.getElementById('senhaForm');
const mensagem = document.getElementById('mensagem');

senhaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const usuario = usuarioInput.value;
    const senha = senhaInput.value;
    
    if (senha === usuario) {
        mensagem.innerHTML = 'Erro: a senha não pode ser igual ao nome de usuário.';
        senhaInput.value = '';
        senhaInput.focus();
    } else {
        mensagem.innerHTML = 'Senha válida!';
    }
});
