# language: pt

Funcionalidade: Locadora
		Como um usuário
		Quero cadastrar alugueis de Filmes
		Para controlar preços e datas de entrega
		
	Cenário: Deve alugar um filme comm sucesso
	
		Dado um filme com estoque de 2 unidades
		E que o preço de aluguel seja R$ 3
		Quando alugar
		Então o preço do aluguel será R$ 3
		E a data de entrega sera em 1 dia
		E o estoque do filme será 1 unidades
		
	Cenário: Não deve alugar um filme sem estoque
		
		Dado um filme com estoque de 0 unidades
		Quando alugar
		Então não será possivel por falta de estoque
		E o estoque do filme será 0 unidades
		
		
		
	Esquema do Cenário: Deve dar condições conforme tipo de aluguel
		Dado um filme com estoque de 2 unidades
		E que o preço de aluguel seja R$ <preco>
		E que o tipo do aluguel seja <tipo>
		Quando alugar
		Então o preço do aluguel será R$ <valor>
		E a data de entrega sera em <qntDias> dias
		E a pontuação recebida será de <pontuacao> pontos
		
	Exemplos:
		| preco | tipo      | valor | qntDias | pontuacao |
		|   4   | extendido |   8   |    3    |     2     |
		|   4   | comum     |   4   |    1    |     1     |
		|   10  | extendido |   20  |    3    |     2     |
		|   5   | semanal   |   15  |    7    |     3     |
	
#	Cenário: Deve dar condições especiais para categoria extendida
#		
#		Dado um filme com estoque de 2 unidades
#		E que o preço de aluguel seja R$ 4
#		E que o tipo do aluguel seja extendido
#		Quando alugar
#		Então o preço do aluguel será R$ 8
#		E a data de entrega sera em 3 dias
#		E a pontuação recebida será de 2 pontos
		
#	Cenário: Deve dar condições especiais para categoria comum
#		
#		Dado um filme com estoque de 2 unidades
#		E que o preço de aluguel seja R$ 4
#		E que o tipo do aluguel seja comum
#		Quando alugar
#		Então o preço do aluguel será R$ 4
#		E a data de entrega sera em 1 dia
#		E a pontuação recebida será de 1 ponto
