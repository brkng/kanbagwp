package service;

import java.util.List;

import net.sf.json.JSONObject;

import model.Hastane;

public interface HastaneService {
	
	public List<Hastane> listHastane();
	
	public Hastane gethastaneByHastaneId(int hastaneId);
	
	public Hastane getHastaneByBashekimid(int bashekimId);
	
	public Hastane saveHastane(Hastane hastane);

	public void deleteHastane(int hastaneId);
	
	//Json işlemleri
	public JSONObject listHastanesAsJson();

}
