package br.com.vitor.entidades;

import java.util.Date;

public class NotaAaluguel {
	
	private int preco;
	private Date dataEntrega;
	private int pontuacao;

	public int getPreco() {
		return preco;
	}

	public void setPreco(int preco) {
		this.preco = preco;
	}

	public Date getDataEntrega() {
		return dataEntrega;
	}

	public void setDataEntrega(Date time) {
		dataEntrega = time;
		
	}

	public Object getPontuacao() {
		return pontuacao;
	}
	
	public void setPontuacao(int pontuacao) {
		this.pontuacao = pontuacao;
	}

}
