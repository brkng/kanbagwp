package security;

import java.io.Serializable;


public class SessionClientData implements Serializable{
	
	
	private String sistemGirisZamani;
//	private GenUser genUser;
	
	
	public String getSistemGirisZamani() {
		return sistemGirisZamani;
	}
	public void setSistemGirisZamani(String sistemGirisZamani) {
		this.sistemGirisZamani = sistemGirisZamani;
	}
	
//	public GenUser getGenUser() {
//		return genUser;
//	}
//	public void setGenUser(GenUser genUser) {
//		this.genUser = genUser;
//	}

	
}
