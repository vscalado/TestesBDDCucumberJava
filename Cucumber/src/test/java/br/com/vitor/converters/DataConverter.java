package br.com.vitor.converters;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import cucumber.api.Transformer;

public class DataConverter extends Transformer<Date>{

	@Override
	public Date transform(String value) {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		try {
			Date retorno = format.parse(value);
			return retorno;
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
		
	}

}
