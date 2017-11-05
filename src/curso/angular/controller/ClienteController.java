package curso.angular.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import curso.angular.dao.DaoImplementacao;
import curso.angular.dao.DaoInterface;
import curso.angular.model.Cliente;

@Controller
@RequestMapping(value="/cliente")
public class ClienteController extends DaoImplementacao<Cliente> implements 
		DaoInterface<Cliente> {

	public ClienteController(Class<Cliente> persistenceClass) { 
		super(persistenceClass); 
	}
	  
	@RequestMapping(value="/listar", method=RequestMethod.GET, headers = "Accept=application/json") 
	@ResponseBody
	public String listar() throws Exception {
		List<Cliente> lista = new ArrayList<>();
		Cliente cli = new Cliente();
		cli.setId(10L);
		cli.setNome("Marcio");
		cli.setEndereco("Rua A");
		cli.setTelefone("11 99999 8888");
		lista.add(cli);
		
		cli = new Cliente();
		cli.setId(10L);
		cli.setNome("Juca");
		cli.setEndereco("Rua B");
		cli.setTelefone("11 8888 9797");
		lista.add(cli);
		return new Gson().toJson(lista); 
	}
}
