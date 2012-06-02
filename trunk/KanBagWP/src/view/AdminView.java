package view;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.KanBagiscisi;
import model.Kanistegi;
import model.Kullaniciistekleri;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.sun.org.apache.xerces.internal.impl.xpath.regex.ParseException;

import security.SessionClientData;
import service.HastaneService;
import service.KanBagiscisiService;
import service.KanBagiscisiServiceImpl;
import service.KanIstegiService;
import service.KullaniciIstekleriService;

import bus.GenBUS;

@Controller(value = "adminController")
public class AdminView {



	@Autowired
	private KanBagiscisiService kanBagServ;

	@Autowired
	private HastaneService hastaneService;

	@Autowired
	private KanIstegiService kanistegiService; 

	@Autowired
	private KullaniciIstekleriService kulService;


	@RequestMapping(value="/admin")
	public ModelAndView testing(HttpServletRequest req, HttpServletResponse resp){

		SessionClientData scd = (SessionClientData) req.getSession().getAttribute("scd");

		if(scd!=null)
		{
			if(scd.getRoleId()==1)
			{
				System.out.println("-------Admin Girdi");
				System.out.println("-------Username:"+scd.getUsername());
				return new ModelAndView("admin");
			}
			else
			{
				System.out.println("-------YASAK ERİŞİM DENEMESİ!");
				return new ModelAndView("anasayfa");
			}
		}
		else
		{
			return new ModelAndView("../gen/anasayfa");
		}
	}


	@RequestMapping(value="/loadStore")
	public void loadStore(HttpServletRequest req, HttpServletResponse resp) throws IOException{		
		JSONObject sendJSON = new JSONObject();
		sendJSON = kanBagServ.listKanBagiscisisAsJson();
		resp.getWriter().print(sendJSON);
	}

	@RequestMapping(value="/isteklericek")
	public void istekleriCek(HttpServletRequest req, HttpServletResponse resp) throws IOException{		
		JSONObject sendJSON = new JSONObject();
		sendJSON = kanistegiService.listkanIstegiAsJson();
		resp.getWriter().print(sendJSON);
	}

	private void Gonder(String toMail, String note, String ad){
		final String username = "sanguiskanbagisuygulamasi@gmail.com";
		final String password = "sanguis12345";

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
			message.setSubject("[ACIL] Sanguis - Kan İsteği!");
			message.setText("Merhaba,"+ad+ "\n\n"+"Kan Grubu: "+note+" olan hastaya kan bağışında bulunmak için lütfen sisteme giriş yapın.");

			Transport.send(message);

			System.out.println("Done");

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
	}

	public void uygunKullanicilaraMailGonder(Kanistegi ki)
	{
		List<KanBagiscisi> bagiscilar = kanBagServ.getKanBagiscisiBySemtAndKanGrubu(ki.getSemt(), ki.getKanGrubu());

		Kullaniciistekleri istekler=new Kullaniciistekleri();

		for(KanBagiscisi kan:bagiscilar)
		{
			istekler.setKid(kan.getKid());
			istekler.setIid(ki.getId());

			kulService.saveKullaniciİstekleri(istekler);

			Gonder(kan.getEmail(), ki.getKanGrubu(),kan.getIsimsoyisim());
			System.out.println("***Mail");
			System.out.println(kan.getEmail());
		}
	}

	@RequestMapping(value="/istekolustur")
	public void istekOlustur(HttpServletRequest req, HttpServletResponse resp) throws IOException{	

		Kanistegi ki=new Kanistegi();

		ki.setHastaneId(Integer.parseInt(req.getParameter("hastaneid")));
		ki.setIstekNotu(req.getParameter("isteknotu"));
		ki.setKanGrubu(req.getParameter("kangrubu"));
		ki.setSemt(req.getParameter("semt"));
		ki.setSure(Integer.parseInt(req.getParameter("sure")));
		ki.setKoyulduguTarih(Calendar.getInstance().getTime());

		kanistegiService.saveKanIstegi(ki);

		uygunKullanicilaraMailGonder(ki);

		JSONObject obj = new JSONObject();
		obj.put("success", true);
		resp.getWriter().print(obj);
	}

	@RequestMapping(value="/hastanebilgilerinigetir")
	public void hastanebilgilerinigetir(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		JSONObject sendJSON = new JSONObject();
		sendJSON = hastaneService.listHastanesAsJson();
		resp.getWriter().print(sendJSON);
	}


	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView listArticles(HttpServletRequest request ) {
		Map<String, Object> model = new HashMap<String, Object>();
		if(request.getParameter("articleId")!=null && (!(request.getParameter("articleId")).equals(""))){
			int articleId=Integer.parseInt(request.getParameter("articleId"));
			model.put("articles",  kanBagServ.getArticleByArticleId(articleId));
		}else{
			model.put("articles",  kanBagServ.listArticles());  
		}
		return new ModelAndView("articlesList", model);
	}

	@RequestMapping(value="/list",method = RequestMethod.GET)
	public ModelAndView getGrid(){
		return new ModelAndView("list");
	}




	@RequestMapping(value="/searchForm",method=RequestMethod.GET)
	public ModelAndView searchForm(@ModelAttribute("article") KanBagiscisi article){
		return new ModelAndView("search");
	}

	@RequestMapping(value="/search")
	public void search(HttpServletRequest request, HttpServletResponse response) throws IOException{
		JSONObject sendJSON = new JSONObject();
		int articleId=Integer.parseInt(request.getParameter("articleId"));

		sendJSON = kanBagServ.getKanBagiscisiByArticleIdAsJson(articleId);

		System.out.println(sendJSON);

		response.getWriter().print(sendJSON);
	}


	@RequestMapping(value = "/searcharticle", method = RequestMethod.GET)
	public ModelAndView addArticle(@ModelAttribute("article") KanBagiscisi article) {
		return new ModelAndView("searcharticle");
	}

	@RequestMapping(value = "/searcharticle", method = RequestMethod.POST)
	public ModelAndView searchArticle(@ModelAttribute("article") KanBagiscisi  article) {		 

		return new ModelAndView("redirect:/articles.ajax?articleId="+article.getKid());
	}

	@RequestMapping(value="/savearticle", method = RequestMethod.GET)
	public ModelAndView saveArticleForm(@ModelAttribute("article") KanBagiscisi article){
		return new ModelAndView("savearticle");
	}

	@RequestMapping(value="/savearticle")
	public ModelAndView saveArticle(HttpServletRequest req, HttpServletResponse resp) throws ParseException{

		DateFormat formatter ; 
		Date addedDate ; 
		formatter = new SimpleDateFormat("yyyy-MM-dd");


		String articleName=req.getParameter("AName");
		String articleDesc=req.getParameter("ADesc");

		KanBagiscisi article = new KanBagiscisi();
		article.setIsimsoyisim(articleName);
		//		article.setArticleDesc(articleDesc);
		//		article.setAddedDate(addedDate);
		//		
		//		articleService.saveArticle(article);
		return new ModelAndView("redirect:/articles/list.ajax");
	}

	@RequestMapping(value="/CRUD",method=RequestMethod.GET)
	public ModelAndView CRUD(){
		return new ModelAndView("CRUD");
	}

	@RequestMapping(value="/article/view")
	public @ResponseBody Map<String,? extends Object> crud(){
		try{

			List<KanBagiscisi> articles = kanBagServ.listArticles();
			return getMap(articles);

		} catch (Exception e) {

			return getModelMapError("Veriyi geri getirirken hata olustu - load");
		}

	}

	@RequestMapping(value="/article/create")
	public @ResponseBody Map<String,? extends Object> create(@RequestParam Object data) throws Exception {
		try{
			List<KanBagiscisi> articles = kanBagServ.create(data); 
			return getMap(articles);
		} catch (Exception e) {
			return getModelMapError("Article olusturmada hata olustu");
		}
	}

	@RequestMapping(value="/article/update")
	public @ResponseBody Map<String,? extends Object> update(@RequestParam Object data) throws Exception {
		try{
			List<KanBagiscisi> articles = kanBagServ.update(data); 
			return getMap(articles);
		} catch (Exception e) {
			return getModelMapError("Article guncellemede hata olustu");
		}
	}

	@RequestMapping(value="/article/delete")
	public @ResponseBody Map<String,? extends Object> delete(@RequestParam Object data) throws Exception {

		try{
			kanBagServ.delete(data); //
			Map<String,Object> modelMap = new HashMap<String,Object>(3);
			modelMap.put("success", true);
			return modelMap;

		} catch (Exception e) {
			return getModelMapError("Veri silmede hata..");
		}
	}

	private Map<String,Object> getMap(List<KanBagiscisi> articles){
		Map<String,Object> modelMap = new HashMap<String,Object>(3);
		modelMap.put("total", articles.size());
		modelMap.put("data", articles);
		modelMap.put("success", true);

		return modelMap;
	}

	private Map<String,Object> getModelMapError(String msg){
		Map<String,Object> modelMap = new HashMap<String,Object>(2);
		modelMap.put("message", msg);
		modelMap.put("success", false);

		return modelMap;
	} 

}
