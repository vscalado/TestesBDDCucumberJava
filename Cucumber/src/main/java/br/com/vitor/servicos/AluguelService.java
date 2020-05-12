package br.com.vitor.servicos;



import br.com.vitor.entidades.Filme;
import br.com.vitor.entidades.NotaAaluguel;
import br.com.vitor.utils.DateUtils;

public class AluguelService {
	public NotaAaluguel alugar(Filme filme, String tipo) {
		if(filme.getEstoque() == 0)
			throw new RuntimeException("Filme sem estoque");
		
		NotaAaluguel nota = new NotaAaluguel();
		if ("extendido".equals(tipo)) {
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtils.obterDaraDiferencaDias(3));
			nota.setPontuacao(2);
		} else if ("semanal".equals(tipo)){
			nota.setPreco(filme.getAluguel() * 3);
			nota.setDataEntrega(DateUtils.obterDaraDiferencaDias(7));
			nota.setPontuacao(3);
		} else {
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DateUtils.obterDaraDiferencaDias(1));
			nota.setPontuacao(1);
		}
		
		filme.setEstoque(filme.getEstoque() - 1);
		
		return nota;
	}
}
