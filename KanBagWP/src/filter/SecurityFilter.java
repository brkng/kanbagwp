package filter;

import java.io.IOException;

import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import security.SessionClientData;

public class SecurityFilter implements Filter{

	private Log log = LogFactory.getLog(SecurityFilter.class);

	private final static String FILTER_APPLIED = "security_filter_applied";
//	static final String FILTER_APPLIED = "__spring_security_expired_session_filter_applied";

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {

		if (request.getAttribute(FILTER_APPLIED) != null) {
			chain.doFilter(request, response);
			return;
		}
		
		request.setAttribute(FILTER_APPLIED, Boolean.TRUE);
		
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		
		String page=req.getRequestURI();
		SessionClientData scd = (SessionClientData) req.getSession().getAttribute("scd");
		if (page.contains("lanKontrol")){
			chain.doFilter(request, response);
			return;
		}
//		if ((!page.contains("login"))&&((scd==null)||(scd.getGenUser()==null))){
//			System.out.println("Filtere takildimmm");
//			res.getWriter().write("<script>window.location = '/acil/gen/sistem/login.htm';</script>");
////			res.sendRedirect("login.htm");
//			return;
//		}
	
		System.out.println("Kurtuldummm filterden");
		chain.doFilter(request, response);
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}
	
	
}
