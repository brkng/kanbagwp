package context;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

import security.SessionClientData;

public class ApplicationContextProvider implements ApplicationContextAware{
	private static ApplicationContext context;
	public static ApplicationContext getContext() {
		return context;
	}

	public static SessionClientData getScdBean() {
		return (SessionClientData) context.getBean("scd");
		
	}
		

	@SuppressWarnings("static-access")
	public void setApplicationContext(ApplicationContext context) throws BeansException {
		this.context=context;
		
	}
	
}
