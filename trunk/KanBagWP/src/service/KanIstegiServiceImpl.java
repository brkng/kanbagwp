package service;

import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.KanIstegiDao;

import model.Hastane;
import model.Kanistegi;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
public class KanIstegiServiceImpl implements KanIstegiService {

	@Autowired
	private KanIstegiDao kanIstegiDao;
	
	@Override
	public List<Kanistegi> listKanIstegi() {
		return kanIstegiDao.listKanIstegi();
	}

	@Override
	public Kanistegi getKanIstegiByKanIstegiId(int kanIstegiId) {
		return kanIstegiDao.getKanIstegiByKanIstegiId(kanIstegiId);
	}

	@Override
	public List<Kanistegi> getKanIstegiBySemt(String semt) {
		return kanIstegiDao.getKanIstegiBySemt(semt);
	}

	@Override
	public Kanistegi saveKanIstegi(Kanistegi kanIstegi) {
		return kanIstegiDao.saveKanIstegi(kanIstegi);
	}

	@Override
	public void deleteKanIstegi(int kanIstegiId) {
		kanIstegiDao.deleteKanIstegi(kanIstegiId);
	}

	@Override
	public JSONObject listkanIstegiAsJson() {
		
		List<Kanistegi> lst = kanIstegiDao.listKanIstegi();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		JSONArray arr = new JSONArray();		

		
		
		for(Kanistegi kan:lst){
			
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
			
			System.out.println("+++ Json İstek id:"+kan.getId());
			arr.add(obj);
		}
		
		JSONObject o = new JSONObject();
		o.put("data", arr);
		return o;
	}
}
