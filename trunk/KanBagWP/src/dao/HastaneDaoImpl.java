package dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import model.Hastane;
import model.KanBagiscisi;
import model.Kullanici;

@Repository("HastaneDao")
@Transactional
public class HastaneDaoImpl implements HastaneDao {
	
	@Autowired	
	private SessionFactory sessionFactory;

	@Override
	public List<Hastane> listHastane() {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		@SuppressWarnings("unchecked")
		List<Hastane> lst = session.createQuery("from Hastane").list();
		return lst;
	}

	@Override
	public Hastane gethastaneByHastaneId(int hastaneId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<Hastane> kul= session.createQuery("from Hastane where hid=:hastaneid").setParameter("hastaneid", hastaneId).list();
		
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
	public Hastane getHastaneByBashekimid(int bashekimId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<Hastane> kul= session.createQuery("from Hastane where bashekimid=:hastaneid").setParameter("hastaneid", bashekimId).list();
		
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
	public Hastane saveHastane(Hastane hastane) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		session.save(hastane);
		
		return hastane;
	}

	@Override
	public void deleteHastane(int hastaneId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		Object record = session.load(Hastane.class, hastaneId);
		session.delete(record);
	}

}
