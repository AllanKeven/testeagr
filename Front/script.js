async function buscarCep() {
    const cep = document.getElementById('cep').value;
    const resultado = document.getElementById('resultado');
  
    try {
      const response = await fetch(`http://localhost:3001/cep/${cep}`);
      const data = await response.json();
  
      if (data.erro) {
        resultado.innerHTML = '<p>CEP não encontrado.</p>';
      } else {
        resultado.innerHTML = `
          <h2>Endereço:</h2>
          <p>Logradouro: ${data.logradouro}</p>
          <p>Bairro: ${data.bairro}</p>
          <p>Cidade: ${data.localidade}</p>
          <p>Estado: ${data.uf}</p>
        `;
      }
    } catch (error) {
      resultado.innerHTML = '<p>Erro ao buscar o CEP.</p>';
    }
  }
  