package service;

import java.text.SimpleDateFormat;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import dao.KanBagiscisiDao;
import dao.KanBagiscisiDaoImpl;



import model.KanBagiscisi;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Service
public class KanBagiscisiServiceImpl implements KanBagiscisiService {
	
	@Autowired
	private KanBagiscisiDao kanBagiscisiDao;

	@Override
	@Transactional
	public List<KanBagiscisi> listArticles() {
		
		return kanBagiscisiDao.listKanbagiscisi();
	}

	@Override
	public List<KanBagiscisi> getArticleByArticleId(int articleId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveArticle(KanBagiscisi article) {
		kanBagiscisiDao.save(article);
	}

	@Override
	public List<KanBagiscisi> create(Object data) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<KanBagiscisi> update(Object data) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Object data) {
		// TODO Auto-generated method stub
		
	}

	@Override
	@Transactional
	public JSONObject listKanBagiscisisAsJson() {
		System.out.println("list as json");
		
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		List<KanBagiscisi> lst = kanBagiscisiDao.listKanbagiscisi();
		
		JSONArray arr = new JSONArray();
		
		for(KanBagiscisi kan:lst){
			
			JSONObject obj = new JSONObject();

			obj.put("kid", kan.getKid());
			obj.put("isimsoyisim", kan.getIsimsoyisim());
			obj.put("adres", kan.getAdres());
			obj.put("telefonnumarasi", kan.getTelefon());
			obj.put("hastaneid", kan.getHastaneid());
			obj.put("kangrubu", kan.getKangrubu());
			
			try{
				obj.put("sonkanbagistarihi", formatter.format(kan.getSonkanbagistarihi()));
			}
			catch(Exception e)
			{
				obj.put("sonkanbagistarihi","");
			}
			obj.put("semtid", kan.getSemtid());
			obj.put("email", kan.getEmail());

			
			arr.add(obj);
		}
		JSONObject o = new JSONObject();
		o.put("data", arr);
		return o;
	}

	@Override
	public JSONObject getKanBagiscisiByArticleIdAsJson(int articleId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public KanBagiscisi getKanBagiscisiByUsername(String username) {
		return kanBagiscisiDao.getKanBagiscisiByUsername(username);
	}

}
