package service;

import java.util.List;

import model.Kullaniciİstekleri;

public interface KullaniciIstekleriService {
	
	public List<Kullaniciİstekleri> getKullaniciİstekleriBykid(int kid);
	
	public Kullaniciİstekleri saveKullaniciİstekleri(Kullaniciİstekleri kullaniciistekleri);

	public void deleteKullaniciİstekleri(int id);
}
