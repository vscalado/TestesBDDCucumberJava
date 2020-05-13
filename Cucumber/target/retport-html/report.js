$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/contas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"vitor.santos.calado@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"Nagilla2601\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7236688500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vitor.santos.calado@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 368551100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nagilla2601",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 198468700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 708973600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 62099500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 104549200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 363516700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 216812600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 1397584000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 40671300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 21,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "informo o usuário \"vitor.santos.calado@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "a senha \"Nagilla2601\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 26,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "sou notificar que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4893467400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vitor.santos.calado@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 421476400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nagilla2601",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 279156600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1007397100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 68208400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 137033500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 393322100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 477602200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificarQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 148109400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 32,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "informo o usuário \"vitor.santos.calado@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "a senha \"Nagilla2601\"",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 37,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 6276076900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vitor.santos.calado@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 791415900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nagilla2601",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 435139200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1105375900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 117578300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 174514000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 454631000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 517398700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 563062900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 76369700,
  "status": "passed"
});
});