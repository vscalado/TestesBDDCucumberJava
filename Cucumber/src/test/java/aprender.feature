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