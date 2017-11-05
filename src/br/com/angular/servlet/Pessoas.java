/*package br.com.angular.servlet;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/pessoas/")
public class Pessoas extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	public Pessoas() {
		super();
	}
	
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		res.setContentType("application/json");
		
		System.out.println(req.getParameter("codPessoa"));
		
		JSONObject bean = new JSONObject();
		JSONArray array = new JSONArray();
		bean.put("codPessoa", "789");
		bean.put("nome", "Márcio");
		bean.put("cidade","São Paulo");
		array.put(bean);
		
		bean = new JSONObject();
		bean.put("codPessoa", "456");
		bean.put("nome", "Juca");
		bean.put("cidade","Rio");
		array.put(bean);
		
		bean = new JSONObject();
		bean.put("codPessoa", "123");
		bean.put("nome", "Maria");
		bean.put("cidade","Santos");
		array.put(bean);
		
		res.getWriter().write(array.toString());
	}

}
*/