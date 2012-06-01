package dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import model.Hastane;
import model.Kullaniciistekleri;

@Repository("KullaniciIstekleriDao")
@Transactional
public class KullaniciIstekleriDaoImpl implements KullaniciIstekleriDao {
	
	@Autowired	
	private SessionFactory sessionFactory;

	@Override
	public List<Kullaniciistekleri> getKullaniciİstekleriBykid(int kid) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		
		List<Kullaniciistekleri> kul= session.createQuery("from Kullaniciistekleri where kid=:kid").setParameter("kid", kid).list();
		
		return kul;
	}

	@Override
	public Kullaniciistekleri saveKullaniciİstekleri(Kullaniciistekleri kullaniciistekleri) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		session.save(kullaniciistekleri);
		
		return kullaniciistekleri;
	}

	@Override
	public void deleteKullaniciİstekleri(int id) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		tx.commit();
		Object record = session.load(Kullaniciistekleri.class, id);
		session.delete(record);
	}

}
