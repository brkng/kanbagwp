package service;

import java.util.List;

import net.sf.json.JSONObject;

import model.KanIstegi;

public interface KanIstegiService {
	
	public List<KanIstegi> listKanIstegi();
	
	public KanIstegi getKanIstegiByKanIstegiId(int kanIstegiId);
	
	public List<KanIstegi> getKanIstegiBySemt(String semt);
	
	public KanIstegi saveKanIstegi(KanIstegi kanIstegi);

	public void deleteKanIstegi(int kanIstegiId);
	
	public JSONObject listkanIstegiAsJson();
}
