package dao;

import java.util.List;
import model.Hastane;


public interface HastaneDao {
	
	public List<Hastane> listHastane();
	
	public Hastane gethastaneByHastaneId(int hastaneId);
	
	public Hastane getHastaneByBashekimid(int bashekimId);
	
	public Hastane saveHastane(Hastane hastane);

	public void deleteHastane(int hastaneId);

}
