package dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import model.Hastane;
import model.Kanistegi;

@Repository("KanIstegiDao")
@Transactional
public class KanIstegiDaoImpl implements KanIstegiDao {
	
	@Autowired	
	private SessionFactory sessionFactory;

	@Override
	public List<Kanistegi> listKanIstegi() {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		@SuppressWarnings("unchecked")
		List<Kanistegi> lst = session.createQuery("from Kanistegi").list();
		System.out.println("+++Toplam kan isteği:"+lst.size());
		
		
		return lst;
	}

	@Override
	public Kanistegi getKanIstegiByKanIstegiId(int kanIstegiId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<Kanistegi> kul= session.createQuery("from Kanistegi where id=:kid").setParameter("kid", kanIstegiId).list();
		
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
	public List<Kanistegi> getKanIstegiBySemt(String semt) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<Kanistegi> kul= session.createQuery("from Kanistegi where semt=:smt").setParameter("smt", semt).list();
		
		if(kul.size()!=0)
		{
			return (List<Kanistegi>) kul.get(0);
		}
		else
		{
			return null;
		}
	}

	@Override
	public Kanistegi saveKanIstegi(Kanistegi kanIstegi) {
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
		Object record = session.load(Kanistegi.class, kanIstegiId);
		session.delete(record);
	}

}
