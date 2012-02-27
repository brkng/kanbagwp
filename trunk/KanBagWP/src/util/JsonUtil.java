package util;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.ListOrderedMap;
import org.springframework.beans.BeanUtils;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;
import net.sf.json.util.JSONStringer;

/**
 * 
 * @author yongtree
 * @date 2008-11-22 上午10:47:13
 * @version 1.0
 */
public class JsonUtil {

	/**
	 * 
	 * @param jsonString
	 * @param pojoCalss
	 * @return
	 */
	public static Object getObject4JsonString(String jsonString, Class pojoCalss) {
		Object pojo;
		JSONObject jsonObject = JSONObject.fromObject(jsonString);
		pojo = JSONObject.toBean(jsonObject, pojoCalss);
		return pojo;
	}

	/**
	 * 
	 * @param jsonString
	 * @return
	 */
	public static Map getMap4Json(String jsonString) {
		JSONObject jsonObject = JSONObject.fromObject(jsonString);
		Iterator keyIter = jsonObject.keys();
		String key;
		Object value;
		Map valueMap = new HashMap();

		while (keyIter.hasNext()) {
			key = (String) keyIter.next();
			value = jsonObject.get(key);
			valueMap.put(key, value);
		}

		return valueMap;
	}

	/**
	 * 
	 * @param jsonString
	 * @return
	 */
	public static Object[] getObjectArray4Json(String jsonString) {
		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		return jsonArray.toArray();

	}
	/**
	 * JDBCTemplate icinde List<ListOrderedMap> SQL'den direk olustugu icin yapiyoruz. 
	 * @param l
	 * @param strExcludes
	 * @return
	 */
	public static JSONArray getListOrderedMap4JsonArray(List l,String[] strExcludes,String dateFormat) {
		JSONArray jarr = new JSONArray();
		SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
		for (Object objects : l) {
			JSONObject joInner = new JSONObject();
			ListOrderedMap lom = (ListOrderedMap) objects;
			for(int i=0;i<lom.size();i++) {
				boolean incluedField = true;
				for(String str:strExcludes) {
					if (lom.get(i).equals(str)) incluedField = false;
				}
				if(incluedField) {
					if(null!=lom.getValue(i) && lom.getValue(i).getClass().isAssignableFrom(Timestamp.class) ) {
						Timestamp ts = (Timestamp) lom.getValue(i);
						java.util.Date dt = new java.util.Date(ts.getTime());
						joInner.put(lom.get(i),sdf.format(dt));
					}else{
						joInner.put(lom.get(i),lom.getValue(i));	
					}
				}
			}
			if(!joInner.isEmpty())	jarr.add(joInner);
		}
		return jarr;
	}

	public static List getList4Json(String jsonString, Class pojoClass) {

		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		JSONObject jsonObject;
		Object pojoValue;

		List list = new ArrayList();
		for (int i = 0; i < jsonArray.size(); i++) {

			jsonObject = jsonArray.getJSONObject(i);
			pojoValue = JSONObject.toBean(jsonObject, pojoClass);
			list.add(pojoValue);

		}
		return list;

	}

	/**
	 * 从json数组中解析出java字符串数组
	 * 
	 * @param jsonString
	 * @return
	 */
	public static String[] getStringArray4Json(String jsonString) {

		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		String[] stringArray = new String[jsonArray.size()];
		for (int i = 0; i < jsonArray.size(); i++) {
			stringArray[i] = jsonArray.getString(i);

		}

		return stringArray;
	}

	/**
	 * 从json数组中解析出javaLong型对象数组
	 * 
	 * @param jsonString
	 * @return
	 */
	public static Long[] getLongArray4Json(String jsonString) {

		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		Long[] longArray = new Long[jsonArray.size()];
		for (int i = 0; i < jsonArray.size(); i++) {
			longArray[i] = jsonArray.getLong(i);

		}
		return longArray;
	}

	/**
	 * 从json数组中解析出java Integer型对象数组
	 * 
	 * @param jsonString
	 * @return
	 */
	public static Integer[] getIntegerArray4Json(String jsonString) {

		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		Integer[] integerArray = new Integer[jsonArray.size()];
		for (int i = 0; i < jsonArray.size(); i++) {
			integerArray[i] = jsonArray.getInt(i);

		}
		return integerArray;
	}

	/**
	 * 从json数组中解析出java Date 型对象数组，使用本方法必须保证
	 * 
	 * @param jsonString
	 * @return
	 * @throws ParseException
	 */
	public static Date[] getDateArray4Json(String jsonString, String DataFormat)
			throws ParseException {

		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		Date[] dateArray = new Date[jsonArray.size()];
		String dateString;
		Date date;

		for (int i = 0; i < jsonArray.size(); i++) {
			dateString = jsonArray.getString(i);
			date = GenericUtils.parseDate(dateString, DataFormat);
			dateArray[i] = date;

		}
		return dateArray;
	}

	/**
	 * 从json数组中解析出java Integer型对象数组
	 * 
	 * @param jsonString
	 * @return
	 */
	public static Double[] getDoubleArray4Json(String jsonString) {

		JSONArray jsonArray = JSONArray.fromObject(jsonString);
		Double[] doubleArray = new Double[jsonArray.size()];
		for (int i = 0; i < jsonArray.size(); i++) {
			doubleArray[i] = jsonArray.getDouble(i);

		}
		return doubleArray;
	}

	/**
	 * 将java对象转换成json字符串
	 * 
	 * @param javaObj
	 * @return
	 */
	public static String getJsonString4JavaPOJO(Object javaObj) {

		JSONObject json;
		json = JSONObject.fromObject(javaObj);
		return json.toString();

	}

	/**
	 * 将java对象转换成json字符串,并设定日期格式
	 * 
	 * @param javaObj
	 * @param dataFormat
	 * @return
	 */
	public static String getJsonString4JavaPOJO(Object javaObj,
			String dataFormat) {

		JSONObject json;
		JsonConfig jsonConfig = configJson(dataFormat);
		json = JSONObject.fromObject(javaObj, jsonConfig);
		return json.toString();

	}

	/**
	 * JSON 时间解析器具
	 * 
	 * @param datePattern
	 * @return
	 */
	public static JsonConfig configJson(String datePattern) {
		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.setExcludes(new String[] { "" });
		jsonConfig.setIgnoreDefaultExcludes(false);
		jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
		jsonConfig.registerJsonValueProcessor(Date.class,new JsonDateValueProcessor(datePattern));

		return jsonConfig;
	}

	/**
	 * 除去不想生成的字段（特别适合去掉级联的对象）+时间转换
	 * 
	 * @param excludes
	 *            除去不想生成的字段
	 * @param datePattern
	 * @return
	 */
	public static JsonConfig configJson(String[] excludes, String datePattern) {
		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.setExcludes(excludes);
		jsonConfig.setIgnoreDefaultExcludes(true);
		jsonConfig.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
		jsonConfig.registerJsonValueProcessor(Date.class,
				new JsonDateValueProcessor(datePattern));

		return jsonConfig;
	}

	public static JSONArray convertJSDate2String(String data) {
		JSONArray jarr = JSONArray.fromObject(data);
		JSONArray jarrSon = new JSONArray();
		for(int i =0;i<jarr.size();i++) {
			JSONObject jo = jarr.getJSONObject(i);
			JSONObject jo2 = new JSONObject();
			Iterator<String> it   = jo.keys();
			while (it.hasNext()) {
				String key = it.next();
				Object s = jo.get(key);
				if (s.toString().contains("T00:00:00")) {
					s=s.toString().replace("T00:00:00", "");
					s=s.toString().substring(8, 10)+"/"+s.toString().substring(5,7)+"/"+s.toString().substring(0,4);
				}				
				jo2.put(key, s);								
			}
			jarrSon.add(jo2);
		}
		return jarrSon;
	}
	public static synchronized JSONObject stringToJsonObj(String str) {
		JSONObject jsonObj = new JSONObject();

		JSONObject json = JSONObject.fromObject(str);
		JSONObject jsonPK = null;
		boolean isFirst = true;
		for (Iterator it = json.keys(); it.hasNext();) {
			String key = (String) it.next();
			if (key.contains("id.")) {
				if (isFirst) {
					jsonPK = new JSONObject();
					isFirst = false;
				} else {
					jsonPK = (JSONObject) jsonObj.get("id");
					jsonObj.remove("id");
				}
				jsonPK.put(key.substring(3), json.get(key));
				jsonObj.put("id", jsonPK);
			} else {
				jsonObj.put(key, json.get(key));
			}
		}
		return jsonObj;
	}
	
}
