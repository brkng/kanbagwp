package dao;

import javax.annotation.PostConstruct;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository("genDAO")
public class GenDAO {

	@PostConstruct
	public void selamlar(){
		System.out.println("GenDAO yaratildi");
	}
	@Autowired	
	private SessionFactory sessionFactory;
}
