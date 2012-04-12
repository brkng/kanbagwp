package view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller(value = "adminController")
//@RequestMapping("/sistem")
public class AdminView {
	
	@RequestMapping(value="/admin")
	public ModelAndView testing(){
		return new ModelAndView("admin");
	}

}
