package dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import model.Hastane;
import model.KanIstegi;

@Repository("KanIstegiDao")
@Transactional
public class KanIstegiDaoImpl implements KanIstegiDao {
	
	@Autowired	
	private SessionFactory sessionFactory;

	@Override
	public List<KanIstegi> listKanIstegi() {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		@SuppressWarnings("unchecked")
		List<KanIstegi> lst = session.createQuery("from KanIstegi").list();
		return lst;
	}

	@Override
	public KanIstegi getKanIstegiByKanIstegiId(int kanIstegiId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<KanIstegi> kul= session.createQuery("from KanIstegi where id=:kid").setParameter("kid", kanIstegiId).list();
		
		if(kul.size()!=0)
		{
			return kul.get(0);
		}
		else
		{
			return null;
		}
	}

	@Override
	public List<KanIstegi> getKanIstegiBySemt(String semt) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<KanIstegi> kul= session.createQuery("from KanIstegi where semt=:smt").setParameter("smt", semt).list();
		
		if(kul.size()!=0)
		{
			return (List<KanIstegi>) kul.get(0);
		}
		else
		{
			return null;
		}
	}

	@Override
	public KanIstegi saveKanIstegi(KanIstegi kanIstegi) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		session.save(kanIstegi);
		
		return kanIstegi;
	}

	@Override
	public void deleteKanIstegi(int kanIstegiId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		Object record = session.load(KanIstegi.class, kanIstegiId);
		session.delete(record);
	}

}
