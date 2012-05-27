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
@Table(name = "kanbagiscisi")
public class KanBagiscisi {

	@Id
	@GeneratedValue
	@Column(name = "kid")
	private int kid;

	@Column(name = "isimsoyisim")
	private String isimsoyisim;

	@Column(name = "adres")
	private String adres;
	
	@Column(name = "telefonnumarasi")
	private String telefon;
	
	@Column(name = "kangrubu")
	private int kangrubu;
	
	@Column(name = "hastaneid")
	private int hastaneid;
	
	@Column(name = "sonkanbagistarihi")
	private Date sonkanbagistarihi;
	
	@Column(name = "semtid")
	private int semtid;
	
	@Column(name = "email")
	private String email;

	public int getKid() {
		return kid;
	}

	public void setKid(int kid) {
		this.kid = kid;
	}

	public String getIsimsoyisim() {
		return isimsoyisim;
	}

	public void setIsimsoyisim(String isimsoyisim) {
		this.isimsoyisim = isimsoyisim;
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

	public int getKangrubu() {
		return kangrubu;
	}

	public void setKangrubu(int kangrubu) {
		this.kangrubu = kangrubu;
	}

	public int getHastaneid() {
		return hastaneid;
	}

	public void setHastaneid(int hastaneid) {
		this.hastaneid = hastaneid;
	}

	public Date getSonkanbagistarihi() {
		return sonkanbagistarihi;
	}

	public void setSonkanbagistarihi(Date sonkanbagistarihi) {
		this.sonkanbagistarihi = sonkanbagistarihi;
	}

	public int getSemtid() {
		return semtid;
	}

	public void setSemtid(int semtid) {
		this.semtid = semtid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
