package view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller(value = "genController")
//@RequestMapping("/sistem")
public class GenView {
	
	@RequestMapping(value="/kayit")
	public ModelAndView kayit(){
		return new ModelAndView("kayit");
	}
	
	@RequestMapping(value="/anasayfa")
	public ModelAndView testing(){
		return new ModelAndView("anasayfa");
	}

}
