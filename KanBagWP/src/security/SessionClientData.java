package security;

import java.io.Serializable;


public class SessionClientData implements Serializable{
	
	
	private String sistemGirisZamani;
	private String username;
	private String password;
	private int roleId;
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	
	public String getSistemGirisZamani() {
		return sistemGirisZamani;
	}
	public void setSistemGirisZamani(String sistemGirisZamani) {
		this.sistemGirisZamani = sistemGirisZamani;
	}
	
	
	
	

	
}
