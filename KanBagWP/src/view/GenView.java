package view;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Kullanici;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import service.KanBagiscisiService;
import service.KullaniciService;

import bus.GenBUS;

@Controller
public class GenView {
	
	
	@Autowired
	private GenBUS genBUS;
	
	@Autowired
	private KullaniciService kulServ;
	
	@RequestMapping(value="/login")
	public void loadStore(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		 
		Kullanici kullanici=new Kullanici();
		
		int rol;
		
		System.out.println("Username="+req.getParameter("uname"));
		System.out.println("Password="+req.getParameter("pass"));
		
		
		kullanici=kulServ.getKullaniciByName(req.getParameter("uname"));
		
//		System.out.println(kullanici.getUsername()+" isimli kullanicinin sifresi " +kullanici.getPassword());
		
		
		
		if(kullanici!=null)
		{
			kullanici.print();
			
			if(req.getParameter("pass").equals( kullanici.getPassword()))
			{
				//Doðru;
				rol=kullanici.getRolId();
			}
			else
			{
				//Þifre yanlýþ
				rol=-1;
			}
		}
		else
		{
			//Kullanýcý adý mevcut deðil
			rol=-2;
		}
		
		JSONObject obj = new JSONObject();
		

		obj.put("rol", rol);
		obj.put("success", true);

		resp.getWriter().print(obj);
	}
	
//	@RequestMapping(method = RequestMethod.GET)
//	public ModelAndView listKullanicilar(HttpServletRequest request ) {
//		Map<String, Object> model = new HashMap<String, Object>();
//		if(request.getParameter("name")!=null && (!(request.getParameter("articleId")).equals(""))){
//			 int articleId=Integer.parseInt(request.getParameter("articleId"));
//			 model.put("articles",  kanBagServ.getArticleByArticleId(articleId));
//		  }else{
//			  model.put("articles",  kanBagServ.listArticles());  
//		  }
//		return new ModelAndView("articlesList", model);
//	}
	
	
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
