package dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import model.KanBagiscisi;
import model.Kullanici;

@Repository("KullaniciDao")
@Transactional
public class KullaniciDaoImpl implements KullaniciDao {
	
	@Autowired	
	private SessionFactory sessionFactory;

	@Override
	public List<Kullanici> listKullanici() {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		System.out.println("sessionu kecdi");
		List<Kullanici> lst = session.createQuery("from Kullanici").list();
		System.out.println(lst.size());
		return lst;
	}

	@Override
	public Kullanici getKullaniciByKullaniciId(int kullaniciId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		return (Kullanici) session.createQuery("from Kullanici where id=:id").setParameter("id", kullaniciId);
	}

	@Override
	public Kullanici saveKullanici(Kullanici kullanici) {
		sessionFactory.openSession();
		sessionFactory.getCurrentSession().saveOrUpdate(kullanici);
		return kullanici;
	}

	@Override
	public void deleteKullanici(int id) {
		Object record = sessionFactory.getCurrentSession().load(Kullanici.class, id);
		sessionFactory.getCurrentSession().delete(record);
		
	}

	@Override
	public Kullanici save(Kullanici kullanici) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		session.save(kullanici);
		
		return kullanici;
	}

	@Override
	public Kullanici getKullaniciByUsername(String name) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<Kullanici> kul= session.createQuery("from Kullanici where username=:name").setParameter("name", name).list();
		
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
