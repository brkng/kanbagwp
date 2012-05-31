package view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class KullaniciView {
	
	
	@RequestMapping(value="/kullanici")
	public ModelAndView testing(){
		return new ModelAndView("kullanici");
	}

	
}
