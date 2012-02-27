package util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class GenericUtils {

	static public Map<String, String> appSettings = new HashMap<String, String>();
	/** *********************************************************************** */
	final public static String dtCh = "/";

	final public static String dtCh1 = " ";

	final public static String dtCh2 = "/";

	final public static String dtCh3 = ":";
	final public static String dtCh4 = "[";
	final public static String dtCh5 = "]";
	final public static String dtCh6 = "-";

	final public static String dateFormat = "dd" + dtCh + "MM" + dtCh + "yyyy";
	final public static String dateFormat1 = "dd" + "MM" + "yyyy";
	final public static String dateFormat2 = "dd" + dtCh2 + "MM" + dtCh2 + "yyyy" + " " + dtCh4 + "HH" + dtCh3 + "mm" + dtCh3 + "ss" + dtCh5;

	final public static String dateFormat3 = "dd" + dtCh2 + "MM" + dtCh2 + "yyyy";

	final public static String dateFormat4 = "yyyy" + dtCh6 + "MM" + dtCh6 + "dd" + " " + "HH" + dtCh3 + "mm" + dtCh3 + "ss";

	final public static String dateFormat5 = "EEE" + dtCh1 + "MMM" + dtCh1 + "dd" + dtCh1 + "HH" + dtCh2 + "mm" + dtCh2 + "ss" + dtCh1 + "zzz" + dtCh1 + "yyyy";

	final public static String dateFormatLogin = "dd" + dtCh + "MM" + dtCh + "yyyy" + " "+"HH" + dtCh3 + "mm" + dtCh3 + "ss";
	
	final public static String dateYil = "yyyy";

	final private static String strIndex = "0123456789+-" + dtCh;

	static public String orderStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	static int orderLen = orderStr.length();

	public static String getTreeOrderStrFromInt(int num, int prc) { // number,
		// precision
		if (num < 0)
			return null;
		String result = "";
		while (num > 0) {
			result = orderStr.charAt(num % orderLen) + result;
			num = num / orderLen;
		}
		while (result.length() < prc)
			result = orderStr.charAt(0) + result;
		return result;
	}

	public static int getTreeOrderIntFromStr(String str) { // number, precision
		if (str == null || str.length() == 0)
			return 0;
		int result = 0, i = 0, j = str.length();
		while (i < j) {
			result = orderLen * result + orderStr.indexOf(str.charAt(i));
			i++;
		}
		return result;
	}

	public static Integer uInteger(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return Integer.valueOf(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static Boolean uBooleanFalseIfNull(String x) {
		if (x == null || x.trim().length() == 0) {
			return Boolean.FALSE;
		}
		if (x.compareTo("1") == 0) {
			return Boolean.TRUE;
		} else {
			return Boolean.FALSE;
		}
	}

	public static Long uLong(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return Long.valueOf(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static Byte uByte(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return new Byte(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static Double uDouble(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return Double.valueOf(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static BigDecimal uBigDecimal(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return new BigDecimal(x);
		} catch (Exception e) {
			if (x.indexOf(',') == -1)
				return null;
			x = x.trim();
			while (x.indexOf('.') != -1)
				x = x.substring(0, x.indexOf('.')) + x.substring(x.indexOf('.') + 1);
			x = x.replace(',', '.');
			try {
				return new BigDecimal(x);
			} catch (Exception z) {
				return null;
			}
		}
	}

	public static BigDecimal uBigDecimalZeroIfNull(String x) {
		if (x == null || x.trim().length() == 0)
			return new BigDecimal(0);
		try {
			return new BigDecimal(x);
		} catch (Exception e) {
			if (x.indexOf(',') == -1)
				return new BigDecimal(0);
			x = x.trim();
			while (x.indexOf('.') != -1)
				x = x.substring(0, x.indexOf('.')) + x.substring(x.indexOf('.') + 1);
			x = x.replace(',', '.');
			try {
				return new BigDecimal(x);
			} catch (Exception z) {
				return new BigDecimal(0);
			}
		}
	}

	public static Short uShort(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return Short.valueOf(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static Short uCheckBox(String x) {
		if (x == null || x.compareTo("on") != 0)
			return new Short((short) 0);
		else
			return new Short((short) 1);
	}

	public static Date uDate(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return new SimpleDateFormat(dateFormat).parse(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static Date uDate2(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			Date d = new SimpleDateFormat(dateFormat2).parse(x);

			return d;
		} catch (Exception e) {
			return null;
		}
	}

	public static Date uDate3(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			Date d = new SimpleDateFormat(dateFormat3).parse(x);

			return d;
		} catch (Exception e) {
			return null;
		}
	}

	public static Date uDate4(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			Date d = new SimpleDateFormat(dateFormat4).parse(x);

			return d;
		} catch (Exception e) {
			return null;
		}
	}

	public static Date uDate5(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			Date d = new SimpleDateFormat(dateFormat5).parse(x);

			return d;
		} catch (Exception e) {
			return null;
		}
	}

	public static String strYear() {
		SimpleDateFormat sdf = new SimpleDateFormat(dateYil);
		return sdf.format(new Date()).toString();
	}

	private static String lPad(String s, int n, char c) {
		String r = (s == null) ? "" : "" + s;
		for (int i = r.length(); i < n; i++)
			r = c + "" + r;
		return r;
	}

	public static String uDateStr(String e) {
		if (e == null)
			return "";
		String ev = e.trim();
		int evl = ev.length();
		if (evl == 0)
			return "";
		for (int i = 0; i < evl; i++)
			if (strIndex.indexOf(ev.substring(i, i + 1)) == -1) {
				return "HATA-1";
			}

		Calendar cal = Calendar.getInstance();
		if (evl > 2) {
			String tmp = ev.substring(0, 2);
			if (tmp.compareTo("++") == 0 && uInteger(ev.substring(2, evl)) != null) {
				cal.add(Calendar.MONTH, new Integer(ev.substring(2, evl)));
				ev = "0";
			}
			if (tmp.compareTo("--") == 0 && uInteger(ev.substring(2, evl)) != null) {
				cal.add(Calendar.MONTH, new Integer("-" + ev.substring(2, evl)));
				ev = "0";
			}
		}

		if (ev.compareTo("0") != 0) {
			String tmp = ev.substring(0, 1);
			if (tmp.compareTo("+") == 0 && uInteger(ev.substring(1, evl)) != null) {
				cal.add(Calendar.DATE, new Integer(ev.substring(1, evl)));
				ev = "0";
			}
			if (tmp.compareTo("-") == 0 && uInteger(ev.substring(1, evl)) != null) {
				cal.add(Calendar.DATE, new Integer("-" + ev.substring(1, evl)));
				ev = "0";
			}
		}

		String curDay = new Integer(cal.get(Calendar.DAY_OF_MONTH)).toString();
		if (cal.get(Calendar.DAY_OF_MONTH) < 10)
			curDay = "0" + curDay;
		String curMonth = new Integer(cal.get(Calendar.MONTH) + 1).toString();
		if (cal.get(Calendar.MONTH) < 9)
			curMonth = "0" + curMonth;
		String curYear = new Integer(cal.get(Calendar.YEAR)).toString();

		if (ev.compareTo("0") == 0) {
			return curDay + dtCh + curMonth + dtCh + curYear;
		}
		if (evl > 2 && ev.indexOf(dtCh) == -1) {
			ev = ev.substring(0, 2) + dtCh + ev.substring(2, evl);
			evl++;
			if (evl > 5 && ev.substring(5, evl).indexOf(dtCh) == -1) {
				ev = ev.substring(0, 5) + dtCh + ev.substring(5, evl);
			}
			e = ev;
			evl = ev.length();
		}

		if (ev.indexOf(dtCh) == -1) {
			ev += dtCh;
			evl++;
		}
		if (ev.indexOf(dtCh) == 1) {
			ev = '0' + ev;
			evl++;
		}
		if (evl == 10) {
			return (uDate(ev) == null) ? "HATA-2" : ev;
		}

		if (evl < 4) {
			ev = ev.substring(0, 2);
			e = ev + dtCh + curMonth + dtCh + curYear;
			return (uDate(e) == null) ? "HATA-3" : e;
		} else if (evl < 7) {
			evl = ev.substring(3, evl).indexOf(dtCh);
			if (evl == -1)
				evl = 2;
			if (evl + 3 > ev.length())
				evl = ev.length() - 3;
			e = ev.substring(0, 2) + dtCh + lPad(ev.substring(3, evl + 3), 2, '0') + dtCh + curYear;
			return (uDate(e) == null) ? "HATA-4" : e;
		} else {
			evl = ev.substring(3, evl).indexOf(dtCh);
			if (evl == -1)
				evl = 2;
			String x = ev.substring(4 + evl, ev.length());
			if (x.length() < 4)
				x = '2' + lPad(x, 3, '0');
			e = ev.substring(0, 2) + dtCh + lPad(ev.substring(3, evl + 3), 2, '0') + dtCh + x;
			return (uDate(e) == null) ? "HATA-5" : e;
		}
	}

	public static Integer uIntegerNullIfZero(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			Integer i = Integer.valueOf(x);
			if (i != null && i.intValue() == 0)
				return null;
			else
				return i;
		} catch (Exception e) {
			return null;
		}
	}

	public static Long uLongNullIfZero(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			Long i = Long.valueOf(x);
			if (i != null && i.intValue() == 0)
				return null;
			else
				return i;
		} catch (Exception e) {
			return null;
		}
	}

	public static Short uShortNullIfZero(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			Short s = Short.valueOf(x);
			if (s != null && s.shortValue() == 0)
				return null;
			else
				return s;
		} catch (Exception e) {
			return null;
		}
	}

	public static Integer uIntegerZeroIfNull(String x) {
		if (x == null || x.trim().length() == 0)
			return new Integer(0);
		try {
			Integer i = Integer.valueOf(x);
			if (i == null)
				return new Integer(0);
			else
				return i;
		} catch (Exception e) {
			return new Integer(0);
		}
	}

	public static Short uShortZeroIfNull(String x) {
		if (x == null || x.trim().length() == 0)
			return new Short((short) 0);
		try {
			Short s = Short.valueOf(x);
			if (s == null)
				return new Short((short) 0);
			else
				return s;
		} catch (Exception e) {
			return new Short((short) 0);
		}
	}

	public static Long uLongZeroIfNull(String x) {
		if (x == null || x.trim().length() == 0)
			return new Long(0);
		try {
			Long l = Long.valueOf(x);
			if (l == null)
				return new Long(0);
			else
				return l;
		} catch (Exception e) {
			return new Long(0);
		}
	}

	public static int uInt(String x) {
		if (x == null || x.trim().length() == 0)
			return 0;
		try {
			return Integer.parseInt(x);
		} catch (Exception e) {
			return 0;
		}
	}

	public static int uInt(HttpServletRequest request, String x) {
		return uInt(request.getParameter(x));
	}

	public static Long uLong(HttpServletRequest request, String x) {
		return uLong(request.getParameter(x));
	}

	public static Float uFloat(String x) {
		if (x == null || x.trim().length() == 0)
			return null;
		try {
			return Float.valueOf(x);
		} catch (Exception e) {
			return null;
		}
	}

	/**
	 * 
	 * @deprecated Encoding problemi olmad∆í¬±∆í√º∆í¬± i‚àö√üin kullan∆í¬±m∆í¬± gereksiz hale
	 *             gelmi‚âà√ºtir.
	 */
	@Deprecated
	public static String uStrTr(String x) {
		if (x == null)
			return null;
		try {
			return new String(x.getBytes("ISO8859_1"), "UTF-8");
		} catch (Exception e) {
			return null;
		}
	}

	/**
	 * 
	 * @deprecated Encoding problemi olmad∆í¬±∆í√º∆í¬± i‚àö√üin kullan∆í¬±m∆í¬± gereksiz hale
	 *             gelmi‚âà√ºtir.
	 */
	@Deprecated
	public static String uStrTrUp(String x) {
		if (x == null)
			return null;
		try {
			return new String(x.getBytes("ISO8859_1"), "UTF-8").toUpperCase();
		} catch (Exception e) {
			return null;
		}
	}

	public static String uStrTrNvl(String x, String y) {
		if (x == null || x.length() == 0)
			return y;
		try {
			return new String(x.getBytes("ISO8859_1"), "UTF-8");
		} catch (Exception e) {
			return y;
		}
	}

	public static String uFormatDate(Date x) {
		try {
			return new SimpleDateFormat(dateFormat).format(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static String uFormatDateTime(Date x) {
		try {
			return new SimpleDateFormat(dateFormat.concat(" HH:MI:ss")).format(x);
		} catch (Exception e) {
			return null;
		}
	}

	public static String uFormatDateTodayIfNull(Date x) {
		if (x == null)
			x = new Date();
		try {
			return new SimpleDateFormat(dateFormat).format(x);
		} catch (Exception e) {
			return "";
		}
	}

	public static Integer uInteger(HttpServletRequest request, String x) {
		return uInteger(request.getParameter(x));
	}

	public static Short uShort(HttpServletRequest request, String x) {
		return uShort(request.getParameter(x));
	}
	
	
	
	public static String aDoubleToStr3(Double str) {
		if (str == null)
			return " ";
		DecimalFormat df1 = new DecimalFormat("###0.##");

		String sonuc;
		try {
			sonuc = df1.format(str);
		} catch (NumberFormatException e) {
			return " ";
		}
		return sonuc;
	}
	public static Double aGetMyDouble(String dobStr) {
		Double d = null;
		if (dobStr == null)
			return null;
		try {
			d = new Double(dobStr);
		} catch (NumberFormatException e) {
			return null;
		}
		return d;
	}

	public <T> T nvl(T t, T t2) {
		return t != null ? t : t2;
	}
	public static int aDayDifference(Date a, Date b) {
		int days = (int) ((b.getTime() - a.getTime()) / 86400000);

		return days;
	}
	public static String aDateToStr(Date x) {
		if (x == null)
			return "";
		try {
			return new SimpleDateFormat(dateFormat).format(x);
		} catch (Exception e) {
			return "";
		}
	}
	public static String aLoginDateTime(){
		Date x = new Date();
		try {
			return new SimpleDateFormat(dateFormatLogin).format(x);
		} catch (Exception e) {
			return "";
		}
	}
	
	
	public static Date aStrtoDate(String x) {
		if(x==null || x.trim().length()==0)return null;
		try{
			Date d =  new SimpleDateFormat(dateFormat).parse(x);
			
			return d;
		}catch(Exception e){return null;}
	}
	public static String aObjToStr(Object x,String xR) {
		if (x == null)
			return xR;
		try {
			return x.toString();
		} catch (Exception e) {
			return xR;
		}
	}
	public static String aObjToStr(Object x) {
		if (x == null)
			return "";
		try {
			return x.toString();
		} catch (Exception e) {
			return "";
		}
	}
	public static String aObjToStrHTML(Object x,String xR) {
		if (x == null)
			return xR;
		try {
			String str = x.toString();
			 return str.replace("\n", "<br>").replace(" ", "&nbsp;");
		} catch (Exception e) {
			
			return xR;
		}
	}
	public static String aObjToStrHTML(Object x) {
		if (x == null)
			return "";
		try {
			String str = x.toString();			
			return str.replace("\n", "<br>").replace(" ", "&nbsp;");
			
		} catch (Exception e) {
			return "";
		}
	}
	public static String aStrHTMLToObj(Object x,String xR) {
		if (x == null)
			return xR;
		try {
			String str = x.toString();
			 return str.replace("<br>", "\n").replace("&nbsp;", " ");
		} catch (Exception e) {
			return xR;
		}
	}
	public static String aStrHTMLToObj(Object x) {
		if (x == null)
			return "";
		try {
			String str = x.toString();			
			 return str.replace("<br>", "\n").replace("&nbsp;", " ");
		} catch (Exception e) {
			return "";
		}
	}
	public static Float aObjToFloat(Object x) {
		if (x == null)
			return Float.valueOf(0);
		try {
			return Float.valueOf((String) x);			
			
		} catch (Exception e) {
			return Float.valueOf(0);
		}
	}
	public static Integer aObjToInt(Object x,Integer i) {
		if (x == null)
			return i;
		try {
			return (Integer) x;			
			
		} catch (Exception e) {
			return i;
		}
	}
	public static Integer aObjToInt(Object x) {
		if (x == null)
			return 0;
		try {
			return (Integer) x;			
			
		} catch (Exception e) {
			return 0;
		}
	}
	public static int aInt(String x) {
		if (x == null || x.trim().length() == 0)
			return -1;
		try {
			return Integer.parseInt(x);
		} catch (Exception e) {
			return -1;
		}
	}

	public static Object aStrToStr(String x) {
		if(x==null)
			return "";
		else
			return x;
	}
	public static Object aStrToStr(String x,String x2) {
		if(x==null)
			return x2;
		else
			return x;
	}
	
	public static String aTimeToStr(Date time) {
		if (null==time){
			Calendar c = new GregorianCalendar();
		//	c.getInstance(); 
			//TODO:ustteki satir bir ise yaramiyor
			time = c.getTime();
		}
		SimpleDateFormat s = new SimpleDateFormat("HH:mm");
		return s.format(time);
	}
	

	/**
	 * @param
	 * @return int value of s, if s is not in numeric format returns 0
	 * @author hrtemel
	 */
	public static int asInt(String s) {
		return asInt(s, 0);
	}

	/**
	 * @param s
	 * @param def
	 * @return int value of s, if s is not in numeric format returns def
	 * @author hrtemel
	 */
	public static int asInt(String s, int def) {
		try {
			return Integer.parseInt(s);
		} catch (NumberFormatException e) {
			return def;
		}
	}

	public static long asLong(String s) {
		return asLong(s, 0L);
	}

	public static long asLong(String s, long def) {
		try {
			return Long.parseLong(s);
		} catch (NumberFormatException e) {
			return def;
		}
	}

	public static String uParaStr(BigDecimal source) {
		String res = null;
		if (source != null) {
			Locale turkey = new Locale("tr");
			Locale.setDefault(turkey);
			NumberFormat n = NumberFormat.getCurrencyInstance();// .getNumberInstance();
			double x = source.doubleValue();
			res = n.format(x);

		}
		return res.substring(2);
	}

	public static boolean asBoolean(String s) {
		return asBoolean(s, false);
	}

	public static boolean asBoolean(String s, boolean def) {
		if (s == null)
			return def;
		return "TRUE".equalsIgnoreCase(s) ? true : false;

	}

	public static String lpad(String valueToPad, String filler, int size) {
		while (valueToPad.length() < size) {
			valueToPad = filler + valueToPad;
		}
		return valueToPad;
	}

	public static String rpad(String valueToPad, String filler, int size) {
		while (valueToPad.length() < size) {
			valueToPad = valueToPad + filler;
		}
		return valueToPad;
	}

	public static Integer uIntZeroIfFalse(Boolean boo) {
		if (boo == false)
			return 0;
		return 1;
	}

	public static String getMd5Code(String strParam) {
		MessageDigest md = null;
		try {
			md = MessageDigest.getInstance("MD5");
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// String s = new String(md.digest(rndString().getBytes()));
		String s = new BASE64Encoder().encode(md.digest(strParam.getBytes()));
		return s;
	}

	// public static void main(String []arg){
	// String strParam="SJRKH7";
	// System.out.println(getMd5Code(strParam));
	// }
	public static String uStringIfNull(Object o) {
		if (o == null) {
			return "";
		} else {
			return o.toString();
		}
	}

	public static String IfNullToString(Object o, String newValue) {
		if (o == null) {
			return newValue;
		} else {
			return o.toString();
		}
	}

	public static String currentDate() {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy hh:mm");
		return sdf.format(new Date()).toString();

	}

	public static Date parseDate(String dateString, String dataFormat) {
		SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
		try {
			return sdf.parse(dateString);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static String capitalizeFirstLetter(String str) {
		return (str.substring(0, 1).toUpperCase() + str.substring(1)).trim();
	}

	public static String base64Encode(String strParam) {
		BASE64Encoder encoder = new BASE64Encoder();
		try {
			return encoder.encode(strParam.getBytes("UTF-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "";
	}

	@SuppressWarnings("finally")
	public static String base64Decode(String strParam) {
		BASE64Decoder decoder = new BASE64Decoder();
		String sonuc = "";
		try {
			byte[] barr = decoder.decodeBuffer(strParam);
			sonuc = new String(barr);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return sonuc;
		}

	}

	public static boolean emailValidation(String email) {
		Pattern p = Pattern.compile(".+@.+\\.[a-z]+");
		Matcher m = p.matcher(email);
		return m.matches();
	}
	
	public static synchronized Map convertParameterMap2HashMap(Map parameterMap) {
		 Map newMap = new HashMap();
		 Iterator it = parameterMap.keySet().iterator();
		 while(it.hasNext()) {
			 Object key = it.next();
			 newMap.put(key, ((Object[])parameterMap.get(key))[0]);
		 }
		return newMap;
	}
	
	/*
	 * methodBegin metodun setter veya getter metodu mu oldu∆í√ºunu belirler.
	 * params:"set" || "get" fieldName metodun sahibi olan de∆í√ºi‚âà√ºkenin ad∆í¬±
	 */
	public static String getMethodName(String fieldName, String methodBegin) {
		String bigLetter = fieldName.substring(0, 1);
		String a = null;
		if (!bigLetter.equals("i"))
			a = fieldName.substring(0, 1).toUpperCase();
		else
			a = "I";
		return new String().concat(methodBegin).concat(a).concat(fieldName.substring(1, fieldName.length()));
	}

	public static  String getPackageName(String classFullName) {
		classFullName = classFullName.replace('.', ':');
		String str = new String();
		String[] strArr = classFullName.split(":");
		for (int i = 0; i < strArr.length; i++) {
			str = str.concat(strArr[i]);
			if (i == strArr.length - 2)
				break;
			str = str.concat(".");
		}
		return str;
	}
	public static String addParamsToQuery(String sqlQuery, JSONObject parameters) {
		String[] moreValue = null;
		String value = null;
		boolean isFirst = true;
		String wordAnd = "";
		String space = null;
		for (Iterator iterator = parameters.keys(); iterator.hasNext();) {
			String key = (String) iterator.next();
			value = parameters.getString(key);
			if (value.contains("@")) {
				moreValue = value.split("@");
				for (int i = 0; i < moreValue.length; i++) {
					if (moreValue[i].startsWith("<") || moreValue[i].startsWith(">") || moreValue[i].startsWith("="))
						space = "";
					else
						space = " ";
					sqlQuery = sqlQuery.concat(wordAnd + convertSqlColumnName(key) + space + moreValue[i]);
					if (isFirst) {
						wordAnd = " and ";
						isFirst = false;
					}
				}
			} else {
				if (value.startsWith("<") || value.startsWith(">") || value.startsWith("="))
					space = "";
				else
					space = " ";
				sqlQuery = sqlQuery.concat(wordAnd + convertSqlColumnName(key) + space + value);
				if (isFirst) {
					wordAnd = " and ";
					isFirst = false;
				}
			}
		}
		return sqlQuery;
	}
	

	public static String convertSqlColumnName(String hbnColumnName) {
		Character charUpper = null;
		Character charOriginal = null;
		for (int i = 0; i < hbnColumnName.length(); i++) {
			charOriginal = hbnColumnName.charAt(i);
			if (Character.isLetter(charOriginal)) {
				charUpper = Character.toUpperCase(charOriginal);
				if (charOriginal.equals(charUpper)) {
					hbnColumnName = hbnColumnName.replace(charOriginal.toString(), "_" + Character.toLowerCase(charOriginal));
				}
			}
		}
		return hbnColumnName.toUpperCase().replace('İ', 'I');
	}

	public static String convertSqlColumnNames(String[] colParsedWithSpace) {
		String converted = new String();
		converted = converted.concat(" ");
		for (int i = 0; i < colParsedWithSpace.length; i++) {
			converted = converted.concat(" ").concat(convertSqlColumnName(colParsedWithSpace[i]));
		}
		return converted;
	}

	public static String readFileAsString(File file) throws java.io.IOException{
        StringBuffer fileData = new StringBuffer(1000);
        BufferedReader reader = new BufferedReader(new FileReader(file));
        char[] buf = new char[1024];
        int numRead=0;
        while((numRead=reader.read(buf)) != -1){
            String readData = String.valueOf(buf, 0, numRead);
            fileData.append(readData);
            buf = new char[1024];
        }
        reader.close();
        return fileData.toString();
    }


	
	
}
