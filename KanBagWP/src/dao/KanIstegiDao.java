package dao;

import java.util.List;

import model.KanIstegi;


public interface KanIstegiDao {
	
	public List<KanIstegi> listKanIstegi();
	
	public KanIstegi getKanIstegiByKanIstegiId(int kanIstegiId);
	
	public List<KanIstegi> getKanIstegiBySemt(String semt);
	
	public KanIstegi saveKanIstegi(KanIstegi kanIstegi);

	public void deleteKanIstegi(int kanIstegiId);	
}
