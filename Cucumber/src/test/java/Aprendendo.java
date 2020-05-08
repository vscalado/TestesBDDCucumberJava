
import org.junit.Assert;


import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class Aprendendo {
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

	
}
