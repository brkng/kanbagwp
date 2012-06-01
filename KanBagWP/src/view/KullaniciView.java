package view;

import java.io.IOException;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.KanBagiscisi;
import model.Kullanici;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import security.SessionClientData;
import service.KanBagiscisiService;
import service.KullaniciService;

@Controller
public class KullaniciView {
	
	@Autowired
	private KanBagiscisiService kanBagServ;
	
	@Autowired
	private KullaniciService kulServ;
	
	
	@RequestMapping(value="/kullanici")
	public ModelAndView testing(){
		return new ModelAndView("kullanici");
	}
	
	
	@RequestMapping(value="/cikis")
	public void cikis(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		
		SessionClientData scd = new SessionClientData();	
		req.getSession().removeAttribute("scd");
		JSONObject obj = new JSONObject();
		obj.put("success", true);
		resp.getWriter().print(obj);
		
	}
	
	
	
	@RequestMapping(value="/kullanicibilgilerigetir")
	public void kulbilgetir(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		 
		
		SessionClientData scd = (SessionClientData) req.getSession().getAttribute("scd");
		
		Kullanici kullanici=new Kullanici();
		KanBagiscisi kanbagiscisi=new KanBagiscisi();
		
		kullanici=kulServ.getKullaniciByName(scd.getUsername());
		kanbagiscisi=kanBagServ.getKanBagiscisiByUsername(scd.getUsername());
		
		
		JSONObject obj = new JSONObject();
		
		obj.put("username", kullanici.getUsername());
		obj.put("kangrubu", kanbagiscisi.getKangrubu());
		obj.put("sonbagistarihi", kanbagiscisi.getSonkanbagistarihi().toString());
		obj.put("isim",kanbagiscisi.getIsimsoyisim());
		
		if(scd != null)
		{
			obj.put("success", true);
		}
		else
		{
			obj.put("success", false);
		}

		resp.getWriter().print(obj);
	}

	
}
