/**
 * 
 */
package util;

/**
 * Web standartlari ile ilgili, serverdan getirilen dosyalarin mimeType lari
 */
public class WebUtils{
	
	public static final String[][] mimeTypes=new String[][]{
		new String[]{"hqx","application/mac-binhex40"},
		new String[]{"cpt","application/mac-compactpro"},
		new String[]{"doc","application/msword"},
		new String[]{"jsp","application/jsp"},
		new String[]{"oda","application/oda"},
		new String[]{"pdf","application/pdf"},
		new String[]{"ai","application/postscript"},
		new String[]{"eps","application/postscript"},
		new String[]{"ps","application/postscript"},
		new String[]{"ppt","application/powerpoint"},
		new String[]{"rtf","application/rtf"},
		new String[]{"bcpio","application/x-bcpio"},
		new String[]{"vcd","application/x-cdlink"},
		new String[]{"Z","application/x-compress"},
		new String[]{"cpio","application/x-cpio"},
		new String[]{"csh","application/x-csh"},
		new String[]{"dcr","application/x-director"},
		new String[]{"dir","application/x-director"},
		new String[]{"dxr","application/x-director"},
		new String[]{"dvi","application/x-dvi"},
		new String[]{"gtar","application/x-gtar"},
		new String[]{"gz","application/x-gzip"},
		new String[]{"hdf","application/x-hdf"},
		new String[]{"cgi","application/x-httpd-cgi"},
		new String[]{"jnlp","application/x-java-jnlp-file"},
		new String[]{"skp","application/x-koan"},
		new String[]{"skd","application/x-koan"},
		new String[]{"skt","application/x-koan"},
		new String[]{"skm","application/x-koan"},
		new String[]{"latex","application/x-latex"},
		new String[]{"mif","application/x-mif"},
		new String[]{"nc","application/x-netcdf"},
		new String[]{"cdf","application/x-netcdf"},
		new String[]{"sh","application/x-sh"},
		new String[]{"shar","application/x-shar"},
		new String[]{"sit","application/x-stuffit"},
		new String[]{"sv4cpio","application/x-sv4cpio"},
		new String[]{"sv4crc","application/x-sv4crc"},
		new String[]{"tar","application/x-tar"},
		new String[]{"tcl","application/x-tcl"},
		new String[]{"tex","application/x-tex"},
		new String[]{"textinfo","application/x-texinfo"},
		new String[]{"texi","application/x-texinfo"},
		new String[]{"t","application/x-troff"},
		new String[]{"tr","application/x-troff"},
		new String[]{"roff","application/x-troff"},
		new String[]{"man","application/x-troff-man"},
		new String[]{"me","application/x-troff-me"},
		new String[]{"ms","application/x-troff-ms"},
		new String[]{"ustar","application/x-ustar"},
		new String[]{"src","application/x-wais-source"},
		new String[]{"xml","text/xml"},
		new String[]{"ent","text/xml"},
		new String[]{"cat","text/xml"},
		new String[]{"sty","text/xml"},
		new String[]{"dtd","text/dtd"},
		new String[]{"xsl","text/xsl"},
		new String[]{"zip","application/zip"},
		new String[]{"au","audio/basic"},
		new String[]{"snd","audio/basic"},
		new String[]{"mpga","audio/mpeg"},
		new String[]{"mp2","audio/mpeg"},
		new String[]{"mp3","audio/mpeg"},
		new String[]{"aif","audio/x-aiff"},
		new String[]{"aiff","audio/x-aiff"},
		new String[]{"aifc","audio/x-aiff"},
		new String[]{"ram","audio/x-pn-realaudio"},
		new String[]{"rpm","audio/x-pn-realaudio-plugin"},
		new String[]{"ra","audio/x-realaudio"},
		new String[]{"wav","audio/x-wav"},
		new String[]{"pdb","chemical/x-pdb"},
		new String[]{"xyz","chemical/x-pdb"},
		new String[]{"gif","image/gif"},
		new String[]{"ief","image/ief"},
		new String[]{"jpeg","image/jpeg"},
		new String[]{"jpg","image/jpeg"},
		new String[]{"jpe","image/jpeg"},
		new String[]{"png","image/png"},
		new String[]{"tiff","image/tiff"},
		new String[]{"tif","image/tiff"},
		new String[]{"ras","image/x-cmu-raster"},
		new String[]{"pnm","image/x-portable-anymap"},
		new String[]{"pbm","image/x-portable-bitmap"},
		new String[]{"pgm","image/x-portable-graymap"},
		new String[]{"ppm","image/x-portable-pixmap"},
		new String[]{"rgb","image/x-rgb"},
		new String[]{"xbm","image/x-xbitmap"},
		new String[]{"xpm","image/x-xpixmap"},
		new String[]{"xwd","image/x-xwindowdump"},
		new String[]{"html","text/html"},
		new String[]{"htm","text/html"},
		new String[]{"txt","text/plain"},
		new String[]{"rtx","text/richtext"},
		new String[]{"tsv","text/tab-separated-values"},
		new String[]{"etx","text/x-setext"},
		new String[]{"sgml","text/x-sgml"},
		new String[]{"sgm","text/x-sgml"},
		new String[]{"mpeg","video/mpeg"},
		new String[]{"mpg","video/mpeg"},
		new String[]{"mpe","video/mpeg"},
		new String[]{"qt","video/quicktime"},
		new String[]{"mov","video/quicktime"},
		new String[]{"avi","video/x-msvideo"},
		new String[]{"movie","video/x-sgi-movie"},
		new String[]{"ice","x-conference/x-cooltalk"},
		new String[]{"wrl","x-world/x-vrml"},
		new String[]{"vrml","x-world/x-vrml"},
		new String[]{"wml","text/vnd.wap.wml"},
		new String[]{"wmlc","application/vnd.wap.wmlc"},
		new String[]{"wmls","text/vnd.wap.wmlscript"},
		new String[]{"wmlsc","application/vnd.wap.wmlscriptc"},
		new String[]{"wbmp","image/vnd.wap.wbmp"},
		new String[]{"css","text/css"},
		new String[]{"jad","text/vnd.sun.j2me.app-descriptor"},
		new String[]{"jar","application/java-archive"},
		new String[]{"3gp","video/3gp"},
		new String[]{"mp4","video/3gpp"},
	};

	/**
	 * string olarak gelen dosya isminden dosya uzantisi ve buna gore mimeType-i 
	 * tespit edilir. 
	 * 
	 * @param s Dosya adi
	 * @return
	 */
	public static String getMimeType(String s) {
		int i = s.lastIndexOf(".");
		if (i > 0 && i < s.length() - 1) {
			String extension = s.substring(i + 1);
			for (String[] item:mimeTypes)
				if (extension.equalsIgnoreCase(item[0]))
					return item[1];
		}
		return "application/octet-stream";
	}		
}