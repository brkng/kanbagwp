package bus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.GenDAO;


@Service("genBUS")
public class GenBUS {

	@Autowired
	private GenDAO genDAO;
}
