package view;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.KanBagiscisi;
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
import service.KanBagiscisiService;
import service.KanBagiscisiServiceImpl;

import bus.GenBUS;

@Controller(value = "adminController")
public class AdminView {
	
	
	
	@Autowired
	private KanBagiscisiService kanBagServ;
	
	
	@RequestMapping(value="/admin")
	public ModelAndView testing(){
		System.out.println("geldiii");
		return new ModelAndView("admin");
	}
	
	
	@RequestMapping(value="/loadStore")
	public void loadStore(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		 
		SessionClientData scd = (SessionClientData) req.getSession().getAttribute("scd");
		
		System.out.println("****Ýndiki user "+scd.getUsername());
		
		JSONObject sendJSON = new JSONObject();
		sendJSON = kanBagServ.listKanBagiscisisAsJson();
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
