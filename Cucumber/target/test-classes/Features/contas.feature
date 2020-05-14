#language: pt
Funcionalidade: Cadastro de contas

Como um usuário 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

	Contexto:
		Dado que estou acessando a aplicação
		Quando informo o usuário "vitor.santos.calado@gmail.com"
		E a senha "Nagilla2601"
		E seleciono entrar
		Então visualizo a página inicial		
		Quando seleciono Contas
		E seleciono Adicionar
		
	Esquema do Cenário: Deve validar regras de cadastro de contas
		Quando informo a conta "<conta>"
		E seleciono Salvar
		Então recebo a menssagem "<menssagem>"
		
	Exemplos:
		| conta         | menssagem                          |
		|Conta de Teste | Conta adicionada com sucesso!      |
		|               | Informe o nome da conta            |
		|Conta de Teste | Já existe uma conta com esse nome! |
		
	@ignore
	Cenário: Deve inserir uma conta com sucesso
		E informo a conta "Conta de Teste"
		E seleciono Salvar
		Então a conta é inserida com sucesso
	@ignore
	Cenário: Não deve inserir uma conta sem nome
		E informo a conta ""
		E seleciono Salvar
	  Então sou notificar que o nome da conta é obrigatório
	@ignore
	Cenário: Não deve inserir uma conta com nome já existente
		E informo a conta "Conta de Teste"
		E seleciono Salvar
		Então sou notificado que já existe uma conta com esse nome