package service;

import java.util.List;

import model.Kullaniciistekleri;

public interface KullaniciIstekleriService {
	
	public List<Kullaniciistekleri> getKullaniciİstekleriBykid(int kid);
	
	public Kullaniciistekleri saveKullaniciİstekleri(Kullaniciistekleri kullaniciistekleri);

	public void deleteKullaniciİstekleri(int id);
}
