package service;

import java.util.List;

import net.sf.json.JSONObject;

import model.KanBagiscisi;


public interface KanBagiscisiService {
	public List<KanBagiscisi> listArticles();
	public List<KanBagiscisi> getArticleByArticleId(int articleId);
	public void saveArticle(KanBagiscisi article);
	
	public KanBagiscisi getKanBagiscisiByUsername(String username);
	
	//this functions are for Ext Crud datagrid!
	public List<KanBagiscisi> create(Object data);
	public List<KanBagiscisi> update(Object data);
	public void delete(Object data);
	
	//its for Ext GridPanel
	public JSONObject listKanBagiscisisAsJson();
	public JSONObject getKanBagiscisiByArticleIdAsJson(int articleId);
}
