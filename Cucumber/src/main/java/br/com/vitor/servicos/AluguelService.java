package br.com.vitor.servicos;



import br.com.vitor.entidades.Filme;
import br.com.vitor.entidades.NotaAaluguel;
import br.com.vitor.entidades.TipoAluguel;
import br.com.vitor.utils.DateUtils;

public class AluguelService {
	public NotaAaluguel alugar(Filme filme, TipoAluguel tipo) {
		
		NotaAaluguel nota = new NotaAaluguel();
		switch (tipo) {
		case COMUM:
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DateUtils.obterDaraDiferencaDias(1));
			nota.setPontuacao(1);
			break;
			
		case EXTENDIDO:
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtils.obterDaraDiferencaDias(3));
			nota.setPontuacao(2);
			break;
				
		case SEMANAL:
			nota.setPreco(filme.getAluguel() * 3);
			nota.setDataEntrega(DateUtils.obterDaraDiferencaDias(7));
			nota.setPontuacao(3);
			break;
		}
		if(filme.getEstoque() == 0)
			throw new RuntimeException("Filme sem estoque");
		filme.setEstoque(filme.getEstoque() - 1);
		
		return nota;
	}
}
