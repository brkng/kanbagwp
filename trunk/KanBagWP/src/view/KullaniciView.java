package view;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.KanBagiscisi;
import model.Kanistegi;
import model.Kullanici;
import model.Kullaniciistekleri;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import security.SessionClientData;
import service.KanBagiscisiService;
import service.KanIstegiService;
import service.KullaniciIstekleriService;
import service.KullaniciService;

@Controller
public class KullaniciView {
	
	@Autowired
	private KanBagiscisiService kanBagServ;
	
	@Autowired
	private KullaniciService kulServ;
	
	@Autowired
	private KullaniciIstekleriService kulisServ;
	
	@Autowired
	private KanIstegiService kanistegiServ;
	
	
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
	
	
	
	@RequestMapping(value="/kullanicininkanistekleri")
	public void istekleriCek(HttpServletRequest req, HttpServletResponse resp) throws IOException{		

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		JSONArray arr = new JSONArray();
		SessionClientData scd = (SessionClientData) req.getSession().getAttribute("scd");
		KanBagiscisi kb=new KanBagiscisi();
		kb=kanBagServ.getKanBagiscisiByUsername(scd.getUsername());
		List<Kullaniciistekleri> kullanicininistekleri = kulisServ.getKullaniciİstekleriBykid(kb.getKid());
		
		if(kullanicininistekleri.size()!=0)
		{
			for(Kullaniciistekleri ki: kullanicininistekleri)
			{
				Kanistegi kan=new Kanistegi();
				
				kan=kanistegiServ.getKanIstegiByKanIstegiId(ki.getIid());
				
				JSONObject obj = new JSONObject();

				obj.put("id", kan.getId());
				obj.put("hid", kan.getHastaneId());
				obj.put("sure", kan.getSure());
				obj.put("isteknotu", kan.getIstekNotu());
				obj.put("kangrubu", kan.getKanGrubu());
				obj.put("semt", kan.getSemt());
				
				try{
					obj.put("koyuldugutarih", formatter.format(kan.getKoyulduguTarih()));
				}
				catch(Exception e)
				{
					obj.put("koyuldugutarih","");
				}
				
				
				try{
					obj.put("kaldirildigitarih", formatter.format(kan.getKaldirildigiTarih()));
				}
				catch(Exception e)
				{
					obj.put("kaldirildigitarih","");
				}
				
				arr.add(obj);				
			}
			JSONObject o = new JSONObject();
			o.put("data", arr);
			resp.getWriter().print(o);
		}
	}
	
	
	
	@RequestMapping(value="/kullanicibilgilerigetir")
	public void kulbilgetir(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		 
		
		SessionClientData scd = (SessionClientData) req.getSession().getAttribute("scd");
		
		Kullanici kullanici=new Kullanici();
		KanBagiscisi kanbagiscisi=new KanBagiscisi();
		List<Kullaniciistekleri> kulis=new ArrayList<Kullaniciistekleri>();
		List<Kanistegi> kanistekleri=new ArrayList<Kanistegi>();
		
		
		kullanici=kulServ.getKullaniciByName(scd.getUsername());
		kanbagiscisi=kanBagServ.getKanBagiscisiByUsername(scd.getUsername());
		
		
		//Kullanıcının olduğu istekleri aldım...
		kulis=kulisServ.getKullaniciİstekleriBykid(kanbagiscisi.getKid());
		JSONObject obj = new JSONObject();
		
		obj.put("isteksayisi", kulis.size());
		
		obj.put("username", kullanici.getUsername());
		obj.put("kangrubu", kanbagiscisi.getKangrubu());
		
		if(kanbagiscisi.getSonkanbagistarihi()!=null)
		{
			obj.put("sonbagistarihi", kanbagiscisi.getSonkanbagistarihi().toString());
		}
		else
		{
			obj.put("sonbagistarihi", "Bağış Yok");
		}
		obj.put("isim",kanbagiscisi.getIsimsoyisim());
		
		obj.put("success", true);

		resp.getWriter().print(obj);
	}

	
}
