package view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller(value = "doktorController")
public class DoktorView {
	@RequestMapping(value="/yonet")
	public ModelAndView testing(){
		return new ModelAndView("yonet");
	}
}
