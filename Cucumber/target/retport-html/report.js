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
formatter.scenarioOutline({
  "line": 17,
  "name": "Deve validar regras de cadastro de contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a menssagem \"\u003cmenssagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "menssagem"
      ],
      "line": 23,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;3"
    },
    {
      "cells": [
        "Conta de Teste",
        "Já existe uma conta com esse nome!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 674100,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
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
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7278558600,
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
  "duration": 523771900,
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
  "duration": 331577900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 767782800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 116977300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 133223100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 405643200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar regras de cadastro de contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a menssagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
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
  "duration": 374200600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 596730800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 20
    }
  ],
  "location": "InserirContasSteps.receboAMenssagem(String)"
});
formatter.result({
  "duration": 57583200,
  "status": "passed"
});
formatter.after({
  "duration": 416087400,
  "status": "passed"
});
formatter.after({
  "duration": 1217847700,
  "status": "passed"
});
formatter.before({
  "duration": 146400,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
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
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7348754800,
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
  "duration": 878747800,
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
  "duration": 220061100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1439510800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 150999400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 172368500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 396965700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras de cadastro de contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a menssagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 128720600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 594010500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 20
    }
  ],
  "location": "InserirContasSteps.receboAMenssagem(String)"
});
formatter.result({
  "duration": 69257500,
  "status": "passed"
});
formatter.after({
  "duration": 1066888200,
  "status": "passed"
});
formatter.after({
  "duration": 1088405700,
  "status": "passed"
});
formatter.before({
  "duration": 171100,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
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
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 7340282300,
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
  "duration": 525989600,
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
  "duration": 189669600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 760302100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 60433100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 227203200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 568511800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras de cadastro de contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a menssagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
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
  "duration": 448035800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 583297000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 20
    }
  ],
  "location": "InserirContasSteps.receboAMenssagem(String)"
});
formatter.result({
  "duration": 75190000,
  "status": "passed"
});
formatter.after({
  "duration": 609067100,
  "status": "passed"
});
formatter.after({
  "duration": 880148900,
  "status": "passed"
});
});