package br.com.vitor.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.com.vitor.converters.DataConverter;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprendendoSteps {
	@Dado("^que criei o arquivo certo$")
	public void que_criei_o_arquivo_certo() throws Throwable {

	}

	@Quando("^executa-lo$")
	public void executa_lo() throws Throwable {

	}

	@Então("^deve ter sucesso$")
	public void deve_ter_sucesso() throws Throwable {

	}
	
	private int contador = 0;
	
	@Dado("^que o valor do contador é (\\d+)$")
	public void queOValorDoContadorÉ(int arg1) throws Throwable {
	    contador = arg1;
	}
	
	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int arg1) throws Throwable {
	    contador = contador + arg1;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void oValorDoContadorSerá(int arg1) throws Throwable {
		Assert.assertEquals(arg1, contador);
	}
	
	Date entrega = new Date();
	
	
	@Dado("^que a entrega é dia (.*)$")
	public void queAEntregaÉDia(@Transform(DataConverter.class) Date data) throws Throwable {
	    entrega = data;
	    System.out.println(entrega);
	}

	@Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int arg1, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")|tempo.equals("dia")) {
			cal.add(Calendar.DAY_OF_MONTH, arg1);
		}
		if(tempo.equals("meses")|tempo.equals("mes")) {
			cal.add(Calendar.MONTH, arg1);
		}
		entrega = cal.getTime();	    
	}

	@Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuadaEm(String data) throws Throwable {
	    DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	    String dataFormatada = format.format(entrega);
//	    System.out.println(dataFormatada);
//	    System.out.println(data);
	    Assert.assertEquals(data, dataFormatada);   
	}
	
	//###############################################################
	private String numtiket = "";
	
	@Dado("^que o ticket( especial)? é (A.\\d{3})$")
	public void queOTicketÉAF(String tipo, String tiket) throws Throwable {
		numtiket = tiket;
	}

	@Dado("^que o valor da passagem é R\\$ (.*)$")
	public void queOValorDaPassagemÉR$(Double numero) throws Throwable {
	    System.out.println(numero);
	}
	private String inNome = "";
	
	@Dado("^que o nome do passageiro é \"(.{5,20})\"$")
	public void queONomeDoPassageiroÉ(String nome) throws Throwable {
	    inNome = nome;
	}
	
	private int infone1, infone2 = 0;	
	
	@Dado("^que o telefone do passageiro é (9\\d{4})-(\\d{4})$")
	public void queOTelefoneDoPassageiroÉ(int fone1, int fone2) throws Throwable {
	    infone1 = fone1;
	    infone2 = fone2;
	}

	@Quando("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	  
	}

	@Então("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {
	    System.out.println(infone1);
	    System.out.println(infone2);
	    System.out.println(inNome);
	    System.out.println(numtiket);
	}
}
