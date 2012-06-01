package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.KullaniciIstekleriDao;

import model.Kullaniciİstekleri;

@Service
public class KullaniciıstekleriServiceImpl implements KullaniciIstekleriService {
	
	@Autowired
	private KullaniciIstekleriDao kulisDao;

	@Override
	public List<Kullaniciİstekleri> getKullaniciİstekleriBykid(int kid) {
		return kulisDao.getKullaniciİstekleriBykid(kid);
	}

	@Override
	public Kullaniciİstekleri saveKullaniciİstekleri(
			Kullaniciİstekleri kullaniciistekleri) {
		return kulisDao.saveKullaniciİstekleri(kullaniciistekleri);
	}

	@Override
	public void deleteKullaniciİstekleri(int id) {
		kulisDao.deleteKullaniciİstekleri(id);
	}
}
