package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonAutoDetect;

@JsonAutoDetect
@Entity
@Table(name = "hastaneler")
public class Hastane {
	
	@Id
	@GeneratedValue
	@Column(name="hid")
	private int hid;
	
	@Column(name="isim")
	private String isim;
	
	@Column(name="adres")
	private String adres;
	
	@Column(name="telefon")
	private String telefon;
	
	@Column(name="bashekimid")
	private int bahekimid;

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public String getIsim() {
		return isim;
	}

	public void setIsim(String isim) {
		this.isim = isim;
	}

	public String getAdres() {
		return adres;
	}

	public void setAdres(String adres) {
		this.adres = adres;
	}

	public String getTelefon() {
		return telefon;
	}

	public void setTelefon(String telefon) {
		this.telefon = telefon;
	}

	public int getBahekimid() {
		return bahekimid;
	}

	public void setBahekimid(int bahekimid) {
		this.bahekimid = bahekimid;
	}
}
