package service;

import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.KullaniciDao;

import model.KanBagiscisi;
import model.Kullanici;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
public class KullaniciServiceImpl implements KullaniciService {
	
	@Autowired
	private KullaniciDao kullaniciDao;

	@Override
	@Transactional
	public List<Kullanici> listKullanicilar() {
		return kullaniciDao.listKullanici();
	}

	@Override
	public List<Kullanici> getKullaniciByKullaniciId(int kullaniciId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveKullanici(Kullanici kullanici) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Kullanici> create(Object data) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Kullanici> update(Object data) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Object data) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public JSONObject listKullaniciAsJson() {
		System.out.println("list as json");
		
		List<Kullanici> lst = kullaniciDao.listKullanici();
		
		JSONArray arr = new JSONArray();
		
		for(Kullanici kul:lst){
			
			JSONObject obj = new JSONObject();

			obj.put("id", kul.getId());
			obj.put("username", kul.getUsername());
			obj.put("password", kul.getPassword());
			obj.put("rolId",kul.getRolId());
			obj.put("sucess", true);
			arr.add(obj);
		}
		JSONObject o = new JSONObject();
		o.put("data", arr);
		//o.put("success", true)
		return o;
	}

	@Override
	public JSONObject getKullaniciByKullaniciIdAsJson(int kullaniciId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Kullanici getKullaniciByName(String name) {
		return kullaniciDao.getKullaniciByUsername(name);
	}

	@Override
	public JSONObject getKullaniciByKullaniciUsernameAsJson(String username) {
		Kullanici kullanici = kullaniciDao.getKullaniciByUsername(username);
		
		
		JSONObject obj = new JSONObject();
		
		obj.put("id",kullanici.getId());
		obj.put("username", kullanici.getUsername());
		obj.put("password", kullanici.getPassword());
		obj.put("rolId", kullanici.getRolId());
		obj.put("success", true);
		
		
		return obj;
	}
}