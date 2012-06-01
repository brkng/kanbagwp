package dao;

import java.util.List;

import model.Kullaniciİstekleri;

public interface KullaniciIstekleriDao {
	
	public List<Kullaniciİstekleri> getKullaniciİstekleriBykid(int kid);
	
	public Kullaniciİstekleri saveKullaniciİstekleri(Kullaniciİstekleri kullaniciistekleri);

	public void deleteKullaniciİstekleri(int id);
}