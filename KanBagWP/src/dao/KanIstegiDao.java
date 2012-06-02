package dao;

import java.util.List;

import model.Kanistegi;


public interface KanIstegiDao {
	
	public List<Kanistegi> listKanIstegi();
	
	public Kanistegi getKanIstegiByKanIstegiId(int kanIstegiId);
	
	public List<Kanistegi> getKanIstegiBySemt(String semt);
	
	public Kanistegi saveKanIstegi(Kanistegi kanIstegi);

	public void deleteKanIstegi(int kanIstegiId);	
}
