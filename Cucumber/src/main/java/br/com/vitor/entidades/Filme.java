package br.com.vitor.entidades;

public class Filme {

	private int estoque;
	private int aluguel;
	
	public void setEstoque(int arg1) {
		this.estoque = arg1;		
	}

	public void setAlugeul(int arg1) {
		this.aluguel = arg1;
	}

	public int getAluguel() {
		
		return aluguel;
	}

	public int getEstoque() {
		return estoque;
	}

}
