package service;

import java.util.List;

import model.Kullanici;
import net.sf.json.JSONObject;

public interface KullaniciService {
	public List<Kullanici> listKullanicilar();
	
	public List<Kullanici> getKullaniciByKullaniciId(int kullaniciId);
	
	public Kullanici getKullaniciByName(String name);
	
	
	public void saveKullanici(Kullanici kullanici);
	
	//this functions are for Ext Crud datagrid!
	public List<Kullanici> create(Object data);
	public List<Kullanici> update(Object data);
	public void delete(Object data);
	
	//its for Ext GridPanel
	public JSONObject listKullaniciAsJson();
	
	
	public JSONObject getKullaniciByKullaniciIdAsJson(int kullaniciId);
	public JSONObject getKullaniciByKullaniciUsernameAsJson(String username);
}
