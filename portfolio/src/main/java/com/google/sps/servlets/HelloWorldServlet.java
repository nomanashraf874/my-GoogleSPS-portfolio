package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> greetings = new ArrayList<String>();

    greetings.add("Hello!");
    greetings.add("Bonjour!");
    greetings.add("Hola!");
    greetings.add("Guten tag!");
    greetings.add("Salve");
    
    String json = convertToJson(greetings);
    

    String type = "application/json;";
    response.setContentType(type);
    response.getWriter().println(json);
  }
  private String convertToJson(ArrayList<String> greetings) {
    String json = "{";
    json += "\"lang0\": ";
    json += "\"" + greetings.get(0) + "\"";
    json += ", ";
    json += "\"lang1\": ";
    json += "\"" + greetings.get(1) + "\"";
    json += ", ";
    json += "\"lang2\": ";
    json += greetings.get(2);
    json += ", ";
    json += "\"lang3\": ";
    json += greetings.get(3);
    json += ", ";
    json += "\"lang4\": ";
    json += greetings.get(4);
    json += "}";
    return json;
  }

}
