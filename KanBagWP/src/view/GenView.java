package view;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.mail.*;
import javax.mail.internet.*;
import java.util.*;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.KanBagiscisi;
import model.Kullanici;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import security.SessionClientData;
import service.KanBagiscisiService;
import service.KullaniciService;

import bus.GenBUS;

@Controller
public class GenView {
	
	
	@Autowired
	private GenBUS genBUS;
	
	@Autowired
	private KullaniciService kulServ;
	
	@Autowired
	private KanBagiscisiService kanBagServ;
	
	@RequestMapping(value="/yenikullaniciekle")
	public void yenikullaniciekle(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		KanBagiscisi bagisci=new KanBagiscisi();
		Kullanici kullanici=new Kullanici();
		
		bagisci.setIsimsoyisim(req.getParameter("isimsoyisim"));
		bagisci.setKangrubu(req.getParameter("kangrubu"));
		bagisci.setEmail(req.getParameter("email"));
		bagisci.setTelefon(req.getParameter("telefon"));
		bagisci.setSemtid(req.getParameter("semt"));
		bagisci.setAdres(req.getParameter("adres"));
		
		kanBagServ.saveArticle(bagisci);
		
		//
		//bagisci.set(req.getParameter("sifre1"));
		//bagisci.setIsimsoyisim(req.getParameter("sifre2"));
		
		
		
		kullanici.setUsername(req.getParameter("email"));
		kullanici.setPassword(req.getParameter("sifre1"));
		kullanici.setRolId(2);
		
		kulServ.saveKullanici(kullanici);
	}
	
	private void Gonder(String toMail, String pass){
		final String username = "faridmovsumov@gmail.com";
		final String password = "";
 
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
 
		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });
 
		try {
 
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("info@microsoft.com"));
			message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(toMail));
			message.setSubject("Sanguis Kan Baðýþ Uygulamasý");
			message.setText("Merhaba,"+ "\n\n Þifreniz:"+pass);
 
			Transport.send(message);
 
			System.out.println("Done");
 
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
    }
	
	@RequestMapping(value="/sifregonder")
	public void sifregonder(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		 
		Kullanici kullanici=new Kullanici();
		
		String mail=req.getParameter("eposta");
		
		kullanici=kulServ.getKullaniciByName(mail);
		
		int cevap;

		if(kullanici!=null)
		{
			cevap=1;
			//Eposta Gonder
			Gonder(mail,kullanici.getPassword());
		}
		else
		{
			cevap=-1;
		}
		
		JSONObject obj = new JSONObject();
		
		obj.put("cevap", cevap);
		obj.put("success", true);

		resp.getWriter().print(obj);
	}
	
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
				
				
				SessionClientData scd = new SessionClientData();
				
				scd.setUsername(kullanici.getUsername());
				scd.setPassword(kullanici.getPassword());
				scd.setRoleId(kullanici.getRolId());
				
				scd.setSistemGirisZamani(Calendar.getInstance().getTime().toGMTString());
				
				req.getSession().setAttribute("scd", scd);
				
				
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
