# language: pt
Funcionalidade: Aprender Cucumber

	Cenário: Testes Iniciais
		Dado que criei o arquivo certo
		Quando executa-lo
		Então deve ter sucesso
	
	Cenário: Deve incrementar O Contador
		Dado que o valor do contador é 15
		Quando eu incrementar em 3
		Então o valor do contador será 18
		
	Cenário: Deve incrementar O Contador
		Dado que o valor do contador é 123
		Quando eu incrementar em 35
		Então o valor do contador será 158
	
	Cenário: Deve Calcular atraso na entrega
		Dado que a entrega é dia 05/04/2018
		Quando a entrega atrasar em 2 dia
		Então a entrega será efetuada em 07/04/2018
		
	Cenário: Deve Calcular atraso na entrega da China
		Dado que a entrega é dia 05/04/2018
		Quando a entrega atrasar em 2 meses
		Então a entrega será efetuada em 05/06/2018