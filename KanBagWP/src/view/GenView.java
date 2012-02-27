package view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller(value = "genController")
//@RequestMapping("/sistem")
public class GenView {
	
	@RequestMapping(value="/testing")
	public ModelAndView testing(){
		return new ModelAndView("testing");
	}

}
