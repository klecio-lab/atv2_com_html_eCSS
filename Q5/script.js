const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (event) => {
	event.preventDefault();
	
	// Obtém os valores dos campos do formulário
	const popA = parseFloat(document.getElementById('popA').value);
	const taxaA = parseFloat(document.getElementById('taxaA').value) / 100;
	const popB = parseFloat(document.getElementById('popB').value);
	const taxaB = parseFloat(document.getElementById('taxaB').value) / 100;

	// Valida as entradas do usuário
	if (isNaN(popA) || isNaN(taxaA) || isNaN(popB) || isNaN(taxaB) ||
		popA <= 0 || taxaA <= 0 || popB <= 0 || taxaB <= 0) {
		resultado.style.display = 'none';
		alert('Por favor, preencha todos os campos com valores válidos maiores que zero.');
		return;
	}

	// Calcula o número de anos necessários para a população de A ultrapassar ou igualar a população de B
	let anos = 0;
	let populacaoA = popA;
	let populacaoB = popB;
	while (populacaoA < populacaoB) {
		populacaoA *= 1 + taxaA;
		populacaoB *= 1 + taxaB;
		anos++;
	}

	// Exibe o resultado ao usuário
	resultado.innerHTML = `Em ${anos} anos, a população do país A (${populacaoA.toFixed(0)} habitantes) ultrapassará ou igualará a população do país B (${populacaoB.toFixed(0)} habitantes).`;
	resultado.style.display = 'block';
});

// Limpa o resultado e o formulário ao clicar no botão "Limpar"
document.getElementById('limpar').addEventListener('click', (event) => {
	event.preventDefault();
	formulario.reset();
	resultado.style.display = 'none';
});
