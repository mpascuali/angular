/*package br.com.angular.servlet;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/jsonExample")
public class JsonExample extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	public JsonExample() {
		super();
	}
	
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		res.setContentType("application/json");
		
		JSONObject bean = new JSONObject();
		JSONArray array = new JSONArray();
		bean.put("nome", "Márcio");
		bean.put("cidade","São Paulo");
		array.put(bean);
		
		bean = new JSONObject();
		bean.put("nome", "Juca");
		bean.put("cidade","Rio");
		array.put(bean);
		
		bean = new JSONObject();
		bean.put("nome", "Maria");
		bean.put("cidade","Santos");
		array.put(bean);
		
		res.getWriter().write(array.toString());
	}

}
*/