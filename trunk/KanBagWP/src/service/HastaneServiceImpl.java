package service;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.HastaneDao;
import dao.KullaniciDao;

import model.Hastane;
import model.KanBagiscisi;

@Service
public class HastaneServiceImpl implements HastaneService {
	
	@Autowired
	private HastaneDao hastaneDao;

	@Override
	@Transactional
	public List<Hastane> listHastane() {
		return hastaneDao.listHastane();
	}

	@Override
	public Hastane gethastaneByHastaneId(int hastaneId) {
		return hastaneDao.gethastaneByHastaneId(hastaneId);
	}

	@Override
	public Hastane getHastaneByBashekimid(int bashekimId) {
		return hastaneDao.getHastaneByBashekimid(bashekimId);
	}

	@Override
	public Hastane saveHastane(Hastane hastane) {
		return hastaneDao.saveHastane(hastane);
	}

	@Override
	public void deleteHastane(int hastaneId) {
		hastaneDao.deleteHastane(hastaneId);
	}

	@Override
	public JSONObject listHastanesAsJson() {
		List<Hastane> lst = hastaneDao.listHastane();
		
		JSONArray arr = new JSONArray();
		
		for(Hastane kan:lst){
			
			JSONObject obj = new JSONObject();

			obj.put("hid", kan.getHid());
			obj.put("isim", kan.getIsim());
			obj.put("adres", kan.getAdres());
			obj.put("telefon", kan.getTelefon());
			obj.put("bashekimid", kan.getBahekimid());
			arr.add(obj);
		}
		
		JSONObject o = new JSONObject();
		o.put("data", arr);
		return o;
	}

}
