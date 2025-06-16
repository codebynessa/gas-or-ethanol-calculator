
            function calcularCombustivel() {
                // Remove classes de alerta anteriores para limpar o estado
                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.className = 'alert text-center mt-3'; 
                resultadoDiv.innerText = 'Preencha os valores e clique em Calcular.';

                const precoAlcoolInput = document.getElementById('precoAlcool');
                const precoGasolinaInput = document.getElementById('precoGasolina');

                // Usamos parseFloat para garantir que os valores sejam números com casas decimais
                const precoAlcool = parseFloat(precoAlcoolInput.value);
                const precoGasolina = parseFloat(precoGasolinaInput.value);

                // Validação das entradas
                if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
                    resultadoDiv.classList.add('alert-danger'); // Adiciona classe de alerta de erro
                    resultadoDiv.innerText = 'Por favor, digite preços válidos e maiores que zero para ambos os combustíveis.';
                    return; // Interrompe a função se a validação falhar
                }

                // Regra de cálculo: Álcool é vantajoso se o preço for até 70% do preço da gasolina
                const relacao = precoAlcool / precoGasolina;

                if (relacao < 0.7) {
                    resultadoDiv.classList.add('alert-success'); // Classe verde para sucesso
                    resultadoDiv.innerHTML = `**Abasteça com ÁLCOOL!** <br> (Relação: ${relacao.toFixed(2)})`;
                } else {
                    resultadoDiv.classList.add('alert-info'); // Classe azul para informação
                    resultadoDiv.innerHTML = `**Abasteça com GASOLINA!** <br> (Relação: ${relacao.toFixed(2)})`;
                }
            }
      