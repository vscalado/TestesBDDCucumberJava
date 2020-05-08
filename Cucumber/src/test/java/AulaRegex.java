
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AulaRegex {
	private String numtiket = "";
	
	@Dado("^que o ticket( especial)? é (A.\\d{3})$")
	public void queOTicketÉAF(String tipo, String tiket) throws Throwable {
		numtiket = tiket;
	}

	@Dado("^que o valor da passagem é R\\$ (\\d+),(\\d+)$")
	public void queOValorDaPassagemÉR$(int arg1, int arg2) throws Throwable {
	    
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
