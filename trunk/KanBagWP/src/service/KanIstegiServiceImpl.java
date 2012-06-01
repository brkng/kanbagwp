package service;

import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.KanIstegiDao;

import model.Hastane;
import model.KanIstegi;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
public class KanIstegiServiceImpl implements KanIstegiService {

	@Autowired
	private KanIstegiDao kanIstegiDao;
	
	@Override
	public List<KanIstegi> listKanIstegi() {
		return kanIstegiDao.listKanIstegi();
	}

	@Override
	public KanIstegi getKanIstegiByKanIstegiId(int kanIstegiId) {
		return kanIstegiDao.getKanIstegiByKanIstegiId(kanIstegiId);
	}

	@Override
	public List<KanIstegi> getKanIstegiBySemt(String semt) {
		return kanIstegiDao.getKanIstegiBySemt(semt);
	}

	@Override
	public KanIstegi saveKanIstegi(KanIstegi kanIstegi) {
		return kanIstegiDao.saveKanIstegi(kanIstegi);
	}

	@Override
	public void deleteKanIstegi(int kanIstegiId) {
		kanIstegiDao.deleteKanIstegi(kanIstegiId);
	}

	@Override
	public JSONObject listkanIstegiAsJson() {
		
		List<KanIstegi> lst = kanIstegiDao.listKanIstegi();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		JSONArray arr = new JSONArray();		

		for(KanIstegi kan:lst){
			
			JSONObject obj = new JSONObject();

			obj.put("id", kan.getId());
			obj.put("hastaneid", kan.getHastaneId());
			obj.put("sure", kan.getSure());
			obj.put("isteknotu", kan.getIstekNotu());
			obj.put("kangrubu", kan.getKanGrubu());
			
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
		return o;
	}
}
