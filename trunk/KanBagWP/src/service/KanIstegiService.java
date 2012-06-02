package service;

import java.util.List;

import net.sf.json.JSONObject;

import model.Kanistegi;

public interface KanIstegiService {
	
	public List<Kanistegi> listKanIstegi();
	
	public Kanistegi getKanIstegiByKanIstegiId(int kanIstegiId);
	
	public List<Kanistegi> getKanIstegiBySemt(String semt);
	
	public Kanistegi saveKanIstegi(Kanistegi kanIstegi);

	public void deleteKanIstegi(int kanIstegiId);
	
	public JSONObject listkanIstegiAsJson();
}
