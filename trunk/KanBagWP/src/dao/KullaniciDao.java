package dao;

import java.util.List;

import model.KanBagiscisi;
import model.Kullanici;

public interface KullaniciDao {
	
	public List<Kullanici> listKullanici();
	
	public Kullanici getKullaniciByKullaniciId(int kullaniciId);
	
	public Kullanici getKullaniciByUsername(String name);
	
	public Kullanici saveKullanici(Kullanici kullanici);

	public void deleteKullanici(int id);

	public Kullanici save(Kullanici kullanici);
}
