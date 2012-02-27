package bus.helper;

import java.text.DecimalFormat;

public class UTMConversion {

	static double []DatumEqRad={6378137.0,6378137.0,6378137.0,6378135.0,6378160.0,6378245.0,6378206.4,
	                     6378388.0,6378388.0,6378249.1,6378206.4,6377563.4,6377397.2,6377276.3};
	
	static double []DatumFlat= {298.2572236, 298.2572236, 298.2572215, 298.2597208, 298.2497323, 298.2997381, 294.9786982,
	                     296.9993621, 296.9993621, 293.4660167, 294.9786982, 299.3247788, 299.1527052, 300.8021499};
	static int item;
	static double k0;
	static double a;
	static double f;
	static double b;
	static double e;
	static double drad;
	static double latd;
	static double phi;
	static double e0;
	static double N;
	static double T;
	static double C;
	static double A;
	static double lng;
	static double lng0;
	static double lngd;
	static double M;
	static double x;
	static double y;
	static int k = 1;
	static int utmz;
	static int zcm;
	static String DigraphLetrsE;
	static String DigraphLetrsN;
	static Boolean OOZok;
	
	
	
	static double xd; //kullanici girdigi long
	static double yd; //kullanici girdigi lat
	
	
	static double ydd;
	static double ym;
	static double ys;
	
	static double xdd;
	static double xm;
	static double xs;
	
	
	
	public static void Declarations(){
		
		item= 0;//default
		k0= 0.9996;//scale on central meridian
		
		a = DatumEqRad[item]; //equatorial radius, meters.
		f = 1/DatumFlat[item]; //polar flattening.
		
		b= a*(1-f);//polar axis
		e = Math.sqrt(1 - b*b/a*a);//
		drad = Math.PI/180; //Convert degrees to radians
		
		latd = 0; //latitude in degrees  ----> double or int
		phi = 0;  //latitude (north +, south -), but uses phi in reference ---> double or int
		
		e0 = e/Math.sqrt(1 - e*e);//e prime in reference
		
		N = a/Math.sqrt(1-Math.pow(e*Math.sin(phi),2));  //a/Math.sqrt(1-Math.pow(e*Math.sin(phi)),2); TODO
		T = Math.pow(Math.tan(phi),2);
		C = Math.pow(e*Math.cos(phi),2);
		
		lng = 0;//Longitude (e = +, w = -) - can't use long - reserved word
		lng0 = 0;//longitude of central meridian
		lngd = 0;//longitude in degrees
		M = 0;//M requires calculation
		x = 0;//x coordinate
		y = 0;//y coordinate
		k = 1;//local scale  ----- ???
		utmz = 30;//utm zone
		zcm = 0;//zone central meridian
		DigraphLetrsE = "ABCDEFGHJKLMNPQRSTUVWXYZ";
		DigraphLetrsN = "ABCDEFGHJKLMNPQRSTUV";
		
		OOZok = false; //kullanilmiyor
		
	}
	
	
	
	public static void DDtoDMS(){    // degrees, minutes and seconds-u hesablayan, x long, y lat
		
		ydd = Math.floor(Math.abs(yd));
		ym = Math.floor(60*(Math.abs(yd) - ydd));
		ys = 3600*(Math.abs(yd)-ydd - ym/60);
		
		if (yd<0){ydd=-ydd;}
		
		xdd = Math.floor(Math.abs(xd));
		xm = Math.floor(60*(Math.abs(xd) - xdd));
		xs = 3600*(Math.abs(xd)-xdd - xm/60);
		if (xd<0){xdd=-xdd;}
		
	}
	
	
	public static String GeogToUTM(double latitude, double longitude){
		
		Declarations();
		
		k0= 0.9996;
		b = a*(1-f);//polar axis.
		e = Math.sqrt(1 - (b/a)*(b/a));//eccentricity
		
		lngd = longitude;
		latd = latitude;
		
		xd = lngd;
		yd = latd;
		
		DDtoDMS();
		
		phi = latd * drad; //convert lat to radians
		lng = lngd * drad; //convert long to radians
		
		utmz = (int)  (1 + Math.floor((longitude+180)/6));//calculate utm zone
		int latz = 0;//Latitude zone: A-B S of -80, C-W -80 to +72, X 72-84, Y,Z N of 84      TODO
		
		if (latd > -80 && latd < 72){	latz = (int) (Math.floor((latd + 80)/8)+2); 	}
		if (latd > 72 && latd < 84){	latz = 21;	}
		if (latd > 84){	latz = 23;	}
		
		zcm = 3 + 6*(utmz-1) - 180;//Central meridian of zone
		
		e0 = e/Math.sqrt(1 - e*e);//Called e prime in reference
		double esq = (1 - (b/a)*(b/a));//e squared for use in expansions
		double e0sq = e*e/(1-e*e);// e0 squared - always even powers
		
		N = a/Math.sqrt(1-Math.pow(e*Math.sin(phi),2));
		T = Math.pow(Math.tan(phi),2);
		C = e0sq*Math.pow(Math.cos(phi),2);
		A = (lngd-zcm)*drad*Math.cos(phi);
		
		M = phi*(1 - esq*(1/4 + esq*(3/64 + 5*esq/256)));
		M = M - Math.sin(2*phi)*(esq*(3/8 + esq*(3/32 + 45*esq/1024)));
		M = M + Math.sin(4*phi)*(esq*esq*(15/256 + esq*45/1024));
		M = M - Math.sin(6*phi)*(esq*esq*esq*(35/3072));
		M = M*a;//Arc length along standard meridian
		
		int M0 = 0;//M0 is M for some origin latitude other than zero. Not needed for standard UTM
		
		x = k0*N*A*(1 + A*A*((1-T+C)/6 + A*A*(5 - 18*T + T*T + 72*C -58*e0sq)/120));//Easting relative to CM
		x=x+500000;//Easting standard
		
		y = k0*(M - M0 + N*Math.tan(phi)*(A*A*(1/2 + A*A*((5 - T + 9*C + 4*C*C)/24 + A*A*(61 - 58*T + T*T + 600*C - 330*e0sq)/720))));//Northing from equator
		double yg = y + 10000000;//yg = y global, from S. Pole
		if (y < 0){y = 10000000+y;}
		
		Boolean southOfEquator = false;
		if (phi<0){	southOfEquator = true;	}
		
		int zone = utmz;
//		double easting  = Math.round(10*(x))/10;
//		double northing = Math.round(10*y)/10;
		
		DecimalFormat twoDForm = new DecimalFormat("#.##");
		double easting=Double.valueOf(twoDForm.format(x));
		double northing=Double.valueOf(twoDForm.format(y));
		
		
		//southOfEquator-u da gondere bilerik geriye - if true then we are in south from equator, otherwise ok in the north
		return easting+","+northing+","+zone; //central meridian'dan east'e ve equador'dan north'a olan mesafeler donur...
	}
	
	
	public static String UTMtoGeog(double easting, double northing, int zone, boolean southOfEquator){
		
		Declarations();
		
		k0 = 0.9996;//scale on central meridian
		b = a*(1-f);//polar axis.
		e = Math.sqrt(1 - (b/a)*(b/a));//eccentricity
		e0 = e/Math.sqrt(1 - e*e);//Called e prime in reference
		double esq = (1 - (b/a)*(b/a));//e squared for use in expansions
		double e0sq = e*e/(1-e*e);// e0 squared - always even powers
		
		x=easting;
		y=northing;
		utmz = zone;
		
		zcm = 3 + 6*(utmz-1) - 180;//Central meridian of zone
		double e1 = (1 - Math.sqrt(1 - e*e))/(1 + Math.sqrt(1 - e*e));//Called e1 in USGS PP 1395 also
		int M0 = 0;//In case origin other than zero lat - not needed for standard UTM  --- kullanilmiyors
		M = M0 + y/k0;//Arc length along standard meridian.
		
		if(southOfEquator==true){
			M=M0+(y-10000000)/k;
		}
		
		
		double mu = M/(a*(1 - esq*(1/4 + esq*(3/64 + 5*esq/256))));
		double phi1 = mu + e1*(3/2 - 27*e1*e1/32)*Math.sin(2*mu) + e1*e1*(21/16 -55*e1*e1/32)*Math.sin(4*mu);//Footprint Latitude
		phi1 = phi1 + e1*e1*e1*(Math.sin(6*mu)*151/96 + e1*Math.sin(8*mu)*1097/512);
		double C1 = e0sq*Math.pow(Math.cos(phi1),2);
		double T1 = Math.pow(Math.tan(phi1),2);
		double N1 = a/Math.sqrt(1-Math.pow(e*Math.sin(phi1),2));
		double R1 = N1*(1-e*e)/(1-Math.pow(e*Math.sin(phi1),2));
		double D = (x-500000)/(N1*k0);
		phi = (D*D)*(1/2 - D*D*(5 + 3*T1 + 10*C1 - 4*C1*C1 - 9*e0sq)/24);
		phi = phi + Math.pow(D,6)*(61 + 90*T1 + 298*C1 + 45*T1*T1 -252*e0sq - 3*C1*C1)/720;
		phi = phi1 - (N1*Math.tan(phi1)/R1)*phi;
		
		
		double latitude = Math.floor(1000000*phi/drad)/1000000;
		
		lng = D*(1 + D*D*((-1 -2*T1 -C1)/6 + D*D*(5 - 2*C1 + 28*T1 - 3*C1*C1 +8*e0sq + 24*T1*T1)/120))/Math.cos(phi1);
		lngd = zcm+lng/drad;
		
		double longitude = Math.floor(1000000*lngd)/1000000;
		
		
		xd = lngd;
		yd = phi/drad;
		DDtoDMS();
		
		
		//////////////////////// rounded decimal lat lng values ---- kullaniciya gostermek icin istenirse 
		ydd= Math.floor(ydd);
		//ym
		ys= Math.floor(1000*ys)/1000;
		
		xdd= Math.floor(xdd);
		//xm
		xs=Math.floor(1000*xs)/1000;
		////////////////////////rounded decimal lat lng values
		
		
		return latitude+","+longitude;  // lat + long geri dondur...
	}
	
	
	
}
