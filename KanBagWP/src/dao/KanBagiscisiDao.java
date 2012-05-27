package dao;

import java.util.List;

import model.KanBagiscisi;;

public interface KanBagiscisiDao {
	// To get list of all articles
	public List<KanBagiscisi> listKanbagiscisi();
	
	// get article list by articleId
	public List<KanBagiscisi> getKanbagiscisiByArticleId(int articleId);
	

	//save an article
	public KanBagiscisi saveArticle(KanBagiscisi article);

	public void deleteArticle(int id);

	public KanBagiscisi save(KanBagiscisi article);
}