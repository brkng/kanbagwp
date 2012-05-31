package dao;

import java.util.List;

import javax.annotation.PostConstruct;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import model.KanBagiscisi;
import model.Kullanici;


@Repository("KanBagiscisiDao")
@Transactional
public class KanBagiscisiDaoImpl implements KanBagiscisiDao {
	
	@Autowired	
	private SessionFactory sessionFactory;

	@PostConstruct
	public void selamlar(){
		System.out.println("KanDAOOoooo");
	}
	
	@Override
	public List<KanBagiscisi> listKanbagiscisi() {
//		Session session = sessionFactory.getCurrentSession();
		
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		System.out.println("sessionu kecdi");
		List<KanBagiscisi> lst = session.createQuery("from KanBagiscisi").list();
		System.out.println(lst.size());
		return lst;
	}

	@Override
	public List<KanBagiscisi> getKanbagiscisiByArticleId(int articleId) {
		return sessionFactory.getCurrentSession().createQuery("from kanbagiscisi where kid=:articleId").setParameter("kid", articleId).list();
		
	}

	@Override
	public KanBagiscisi saveArticle(KanBagiscisi article) {
		sessionFactory.openSession();
		sessionFactory.getCurrentSession().saveOrUpdate(article);
		return article;
	}

	@Override
	public void deleteArticle(int id) {
		Object record = sessionFactory.getCurrentSession().load(KanBagiscisi.class, id);
		sessionFactory.getCurrentSession().delete(record);
		
	}

	@Override
	public KanBagiscisi save(KanBagiscisi article) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		session.save(article);
		return article;
	}

	@Override
	public KanBagiscisi getKanBagiscisiByUsername(String username) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<KanBagiscisi> kul= session.createQuery("from KanBagiscisi where email=:username").setParameter("username", username).list();
		
		if(kul.size()!=0)
		{
			return kul.get(0);
		}
		else
		{
			return null;
		}
	}

}
