package state;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/login")
public class Servletlogin extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.getRequestDispatcher("login.jsp").forward(request,response);

       /*

        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<form method='post'>");
        out.print("<label> User Name:  <input type='text'  name='name'/> </label><br/>");
        out.print("<label> Password: <input type='password' name='password'/> </label> <br/>");
        out.print("<input type='submit' value='help'/>");
        out.print("</form>");
        out.print("</body> </html>");

        */
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String userName = request.getParameter("use_name");
        String  password = request.getParameter("pass");
        String remember = request.getParameter("remember");
        HttpSession session =request.getSession();

        if("mesfin".equals(userName) && "123".equals(password)) {

            session.setAttribute("user_info", userName);
            if ("yes".equals(remember)) {
                Cookie c = new Cookie("user", userName);
                c.setMaxAge(30*24*60);
                response.addCookie(c);

            }else{
                Cookie c = new Cookie("user" ,null);
                c.setMaxAge(0);
                response.addCookie(c);

            }
               response.sendRedirect("welcome.jsp");
        }

            else {
                session.setAttribute("err_msg", "user name or password is invalid");
                 response.sendRedirect("login");
            }
        }



          // RequestDispatcher dispatcher = request.getRequestDispatcher("/welcome");
          // dispatcher.forward(request,response);

     // request.getSession().setAttribute("youname", request.getParameter("name"));
      // response.sendRedirect("welcome");

    }


