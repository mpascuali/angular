package br.com.angular.servlet;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/pegarResposta")
public class MinhaServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public MinhaServlet() {
		super();
	}

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		System.out.println("Chegou");
		res.getWriter().write("Resposta do Servidor!");
	}

}
