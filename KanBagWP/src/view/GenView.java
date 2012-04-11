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

	@RequestMapping(value="/deneme")
	public ModelAndView deneme(){
		return new ModelAndView("deneme");
	}
	
	@RequestMapping(value="/anaicerik")
	public ModelAndView anaicerik(){
		return new ModelAndView("anaicerik");
	}
	
	@RequestMapping(value="/sss")
	public ModelAndView sss(){
		return new ModelAndView("sss");
	}
}
