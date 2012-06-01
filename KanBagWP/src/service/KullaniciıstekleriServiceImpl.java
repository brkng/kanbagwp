package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.KullaniciIstekleriDao;

import model.Kullaniciistekleri;

@Service
public class KullaniciıstekleriServiceImpl implements KullaniciIstekleriService {
	
	@Autowired
	private KullaniciIstekleriDao kulisDao;

	@Override
	public List<Kullaniciistekleri> getKullaniciİstekleriBykid(int kid) {
		return kulisDao.getKullaniciİstekleriBykid(kid);
	}

	@Override
	public Kullaniciistekleri saveKullaniciİstekleri(
			Kullaniciistekleri kullaniciistekleri) {
		return kulisDao.saveKullaniciİstekleri(kullaniciistekleri);
	}

	@Override
	public void deleteKullaniciİstekleri(int id) {
		kulisDao.deleteKullaniciİstekleri(id);
	}
}
