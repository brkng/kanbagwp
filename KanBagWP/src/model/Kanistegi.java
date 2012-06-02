package model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonAutoDetect;

@JsonAutoDetect
@Entity
@Table(name = "kanistekleri")
public class Kanistegi {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private int id;
	
	@Column(name="koyuldugutarih")
	private Date koyulduguTarih;
	
	@Column(name="kaldirildigitarih")
	private Date kaldirildigiTarih;
	
	@Column(name="isteknotu")
	private String istekNotu;
	
	@Column(name="hid")
	private int hastaneId;
	
	@Column(name="sure")
	private int sure;
	
	@Column(name="semt")
	private String semt;
	
	@Column(name="kangrubu")
	private String kanGrubu;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getKoyulduguTarih() {
		return koyulduguTarih;
	}

	public void setKoyulduguTarih(Date koyulduguTarih) {
		this.koyulduguTarih = koyulduguTarih;
	}

	public Date getKaldirildigiTarih() {
		return kaldirildigiTarih;
	}

	public void setKaldirildigiTarih(Date kaldirildigiTarih) {
		this.kaldirildigiTarih = kaldirildigiTarih;
	}

	public String getIstekNotu() {
		return istekNotu;
	}

	public void setIstekNotu(String istekNotu) {
		this.istekNotu = istekNotu;
	}

	public int getHastaneId() {
		return hastaneId;
	}

	public void setHastaneId(int hastaneId) {
		this.hastaneId = hastaneId;
	}

	public int getSure() {
		return sure;
	}

	public void setSure(int sure) {
		this.sure = sure;
	}

	public String getSemt() {
		return semt;
	}

	public void setSemt(String semt) {
		this.semt = semt;
	}

	public String getKanGrubu() {
		return kanGrubu;
	}

	public void setKanGrubu(String kanGrubu) {
		this.kanGrubu = kanGrubu;
	}
	
}