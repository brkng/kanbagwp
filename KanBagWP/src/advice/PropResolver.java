package advice;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Properties;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.ResourceLoaderAware;
import org.springframework.core.io.ResourceLoader;


public class PropResolver extends PropertyPlaceholderConfigurer  implements ResourceLoaderAware {
	
	private static final Log logger = LogFactory.getLog(PropResolver.class);
	private ResourceLoader resourceLoader;
	private Properties locationsMap;
	private String[] prodMacs;

	public void setProdMacs(String prodMacs) {
		this.prodMacs = prodMacs.split(",");
	}

	public void setResourceLoader(ResourceLoader resourceLoader) {
		this.resourceLoader=resourceLoader;
	}	
	
	public void init(){
		if(isProduction()){
			logger.warn("Running Mode : PROD");
			super.setLocation(resourceLoader.getResource(locationsMap.getProperty("prod")));
		}
		else{
			logger.warn("Running Mode : TEST");
			super.setLocation(resourceLoader.getResource(locationsMap.getProperty("test")));
		}
	}
	
	private boolean isProduction() {
		try {
			String macName = InetAddress.getLocalHost().getHostName();
			for (int i = 0; i < this.prodMacs.length; i++) {
				if(macName.startsWith(prodMacs[i])) return true;
			}
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}		
		return false;
	}
	@SuppressWarnings("unused")
	public void setLocationsMap(Properties locationsMap){
		this.locationsMap=locationsMap;
	}
	
}
