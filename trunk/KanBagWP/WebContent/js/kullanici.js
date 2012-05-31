function anasayfa() {

		Ext.QuickTips.init();

		this.kayit = function()
		{
		var myWin= new Ext.Window({
			height		:	420,
			title		:	'Kay�t ��lemi',
			modal		:	true,
			resizable	:	false,
			draggable	:	false,
			//closable	:	false,
			width		:	260,
			layout		:	'form',
			bodyStyle	:	'padding : 10px',
		    buttonAlign : 'center',
			labelWidth	:	80,
			defaultType	:	'textfield',
			items		:	[{
				id			:	'isimsoyisim',
				//xtype		:	'textfield',
				fieldLabel	:	'Ad',
				width		:	130,
				allowBlank:     false

			},{
				id			:	'telefon',
				xtype		:	'numberfield',
				fieldLabel	:	'Telefon',
				allowBlank  :   false,
				width		:	130
			},{
				id			:	'kangrubu',
				xtype		:	'combo',
				allowBlank  :   false,
				fieldLabel	:	'Kan Grubu',
				width		:	50,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				id			:	'email',
				fieldLabel	:	'E-posta',
				width		:	130,
				allowBlank  :   false
			},{
					id			:	'sifre1',
            		xtype		:	'textfield',
            		fieldLabel	:	'�ifre',
            		minLength	:	8,
            		inputType	:	'password',
            		width		:	130,
            		allowBlank  :   false
            },{
            		id			:	'sifre2',
            		xtype		:	'textfield',
            		fieldLabel	:	'�ifre Tekrar',
            		minLength	:	8,
            		name		:	'pwd-confirm',
            		inputType	:	'password',
            		width		:	130,
            		allowBlank  :   false,
            },{
            	id			:	'semt',
				xtype		:	'combo',
				fieldLabel	:	'Semt',
				width		:	130,
				allowBlank  :   false,
				store		:	['G�ztepe','BeylerBeyi','Bak�rkoy','YeniMahalle','Semt2','Semt5','Semt6','Semt7']
			},{
				id			:	'il',
				xtype		:	'combo',
				fieldLabel	:	'�l',
				width		:	130,
				allowBlank  :   false,
				store		:	['Ankara','�stanbul','Bursa','�anakkale','A�r�','�zmir','Bolu','Antalya']
			},{
				id			:	'ilce',
				xtype		:	'combo',
				fieldLabel	:	'�l�e',
				width		:	130,
				allowBlank  :   false,
				store		:	['Kad�k�y','Umraniye','Uskudar','Ta�delen']
			},{
				id			:	'adres',
				fieldLabel	:	'Adres',
				xtype		:	'textarea',
				width		:	130
			}],
			buttons			:	[{
				xtype		:	'button',
				text		:	'Kaydol',
				handler		:	function(btn){
					//Kay�t ��lemleri
					Ext.Ajax.request({
    					url		: 'yenikullaniciekle',
    					params	: {
    						isimsoyisim:Ext.getCmp('isimsoyisim').getValue(),
    						kangrubu:Ext.getCmp('kangrubu').getValue(),
    						email:Ext.getCmp('email').getValue(),
    						telefon:Ext.getCmp('telefon').getValue(),
    						sifre1:Ext.getCmp('sifre1').getValue(),
    						sifre2:Ext.getCmp('sifre2').getValue(),
    						semt:Ext.getCmp('semt').getValue(),
    						il:Ext.getCmp('il').getValue(),
    						ilce:Ext.getCmp('ilce').getValue(),
    						adres:Ext.getCmp('adres').getValue()
    					},
    					success : function(response) {
    						Ext.MessageBox.alert("Kullan�c� Ba�ar�l� bir �ekilde sisteme kaydedildi");
    						
    						myWin.close();
    					},
    					failure : function(response) {
    						
    						Ext.MessageBox.alert("Kay�t s�ras�nda bir hata olu�tu!");
    						
    						myWin.close();
    					}	
    				});
					
					
					//Kay�t i�lemleri
				}
			}]
		});
		
		myWin.show();
		
	};
					
			var item1 = new Ext.Panel({
                title: 'Kan Ba����',
                collapsible	:	true,
                collapsed: true,
                padding: '5 5 5 5' ,
                html: '<a href="#"  onClick="urlhandler(&#34;nerede-kan-verebilirim.html&#34;);" >Nerede Kan verebilirim?</a><br/>' +
                	  '<a href="#" onClick="urlhandler(&#34;kan-bagislama-sureci.html&#34;);"  >Kan Ba���lama S�reci</a>'
            });

            var item2 = new Ext.Panel({
                title: 'Kan Hakk�nda',
                collapsed: true,
                padding: '5 5 5 5' ,
                collapsible	:	true,
                html: '<a href="#" onClick="urlhandler(&#34;kan-yapisi-ve-gorevleri-nelerdir.html&#34;);" >Kan�n Yap�s� ve G�revleri Nelerdir?</a><br/>' +
                	  '<a href="#" onClick="urlhandler(&#34;kan-bagislarim-nerelerde-kullaniliyor.html&#34;);" >Kan Ba���lar�m Nerede kullan�l�yor</a><br/>'+
                	  '<a href="#" onClick="urlhandler(&#34;kan-gruplari-hakkinda-bilgiler.html&#34;);" >Kan Gruplar� Hakk�nda Bilgiler</a><br/>'+
                	  '<a href="#" onClick="urlhandler(&#34;kana-yapilan-testler.html&#34;);" >Kana Yap�lan Testler</a><br/>'+
                	  '<a href="#" onClick="urlhandler(&#34;dunya-ve-turkiyede-kan-bagisi.html&#34;);">D�nya ve T�rkiyede Kan Ba����</a>'
            });
            
            
            this.sss = function(){	
            	
            	var sssPanel = new Ext.Panel({
	            	title: 'S�k�a Sorulan Sorular',
	            	//closeAction: 'hide',
	            	id:'sss',
	            	bodyStyle:'padding:10px;font-size:12px;background-color:#E6E6E2;',
	            	items : [
	            	{
	            		title: '�ok can�m yanar m�?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kullan�lan i�nenin kal�nl��� uluslararas� standartlarda bu i�lem i�in uygulanan kal�nl�ktad�r. Hayat kurtarmak i�in al�nan kan�n i�indeki h�crelere zarar verilmemesi a��s�ndan i�nenin kal�n olmas� gerekmektedir. ��nenin kal�n olmas� kan al�m� s�ras�nda i�ne i�inden ge�en kan h�crelerinin par�alanmas�n� engeller, olu�abilecek hasar� azalt�r. Ac�n�n az hissedilmesi i�in i�ne ucu �zel bir i�lemle lazerle kesilmi�, silikon ile kaplanm��t�r. Personelimiz kan al�m� konusunda �zel e�itim alm�� uzmanlard�r. Hissetti�iniz ac� �ok azd�r.'
	            	},
	            	{
	            		title: 'Kimller kan ba���layabilir?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : '18-65 Yaş arasında, ağırlığı en az 50 kg ve üzerinde olan her sağlıklı birey kan bağışında bulunabilir.'
	            	},
	            	{
	            		title: 'Kan ba���� ne kadar s�rer?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kay�t, muayene, kan verme ve ikram i�lemlerinin tamam� yakla��k olarak 30-35 dakika s�rmektedir. Bir hayat kurtar�lmas� i�in bu s�reyi g�zden ��karmaya de�mez mi?'
	            	},
	            	{
	            		title: 'korkuyorum. Kan ba���layabilir miyim?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'E�er korkunuz sizi bay�ltacak kadar �ok ise kan vermeniz uygun de�ildir. Bir ya�am kurtarma d���ncesi, b�t�n korkular�n�z� yener. '
	            	},
	            	{
	            		title: 'Tarama test sonu�lar�m bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'E�er sonu�lar�n�z negatif bulunmu�sa size herhangi bir bildirimde bulunulmayacakt�r.'
	            	},
	            	{
	            		title: '�ok can�m yanar m�?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kullan�lan i�nenin kal�nl��� uluslararas� standartlarda bu i�lem i�in uygulanan kal�nl�ktad�r. Hayat kurtarmak i�in al�nan kan�n i�indeki h�crelere zarar verilmemesi a��s�ndan i�nenin kal�n olmas� gerekmektedir. ��nenin kal�n olmas� kan al�m� s�ras�nda i�ne i�inden ge�en kan h�crelerinin par�alanmas�n� engeller, olu�abilecek hasar� azalt�r. Ac�n�n az hissedilmesi i�in i�ne ucu �zel bir i�lemle lazerle kesilmi�, silikon ile kaplanm��t�r. Personelimiz kan al�m� konusunda �zel e�itim alm�� uzmanlard�r. Hissetti�iniz ac� �ok azd�r.'
	            	},
	            	{
	            		title: 'Kimller kan ba���layabilir?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : '18-65 Yaş arasında, ağırlığı en az 50 kg ve üzerinde olan her sağlıklı birey kan bağışında bulunabilir.'
	            	},
	            	{
	            		title: 'Kan ba���� ne kadar s�rer?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kay�t, muayene, kan verme ve ikram i�lemlerinin tamam� yakla��k olarak 30-35 dakika s�rmektedir. Bir hayat kurtar�lmas� i�in bu s�reyi g�zden ��karmaya de�mez mi?'
	            	},
	            	{
	            		title: 'korkuyorum. Kan ba���layabilir miyim?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'E�er korkunuz sizi bay�ltacak kadar �ok ise kan vermeniz uygun de�ildir. Bir ya�am kurtarma d���ncesi, b�t�n korkular�n�z� yener. '
	            	},
	            	{
	            		title: 'Tarama test sonu�lar�m bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'E�er sonu�lar�n�z negatif bulunmu�sa size herhangi bir bildirimde bulunulmayacakt�r.'
	            	}
	            	]
	            });
            	content.update('');
       	   		content.removeAll(true);
       	  	 	content.add(sssPanel);
       	   		content.doLayout();
		   };
            

		   this.urlhandler = function(s)
		   {
			   	content.update("");
  				content.removeAll(true);
   				content.load({ url: '../resources/static/'+s, nocache: true, timeout: 30, scripts: true });
       	   		content.doLayout();
		   };
		   
		   
            var item3 = new Ext.Panel({
            	
                title: '<a style="color: #FFFFFF;" href="#" onClick="sss();" >S�k�a Sorulan Sorular</a>',
                collapsible	:false,
                titleCollapse: false
         		
            });
            
            
            var item4 = new Ext.Panel({
                title: 'Site Kullan�m�',
                collapsed: true,
                padding: '5 5 5 5' ,
                collapsible	:	true,
                html: '<a href="#" onClick="urlhandler(&#34;site-nasil-calismaktadir.html&#34;);" >Site Nas�l �al��maktad�r</a><br/>' +
                	  '<a href="#" onClick="urlhandler(&#34;kan-isteginde-nasil-bulunabilirim.html&#34;);"  >Kan �ste�inde Nas�l Bulunabilirim?</a><br/>'
            });

			Ext.Ajax.request({
				url		: 'kullanicibilgilerigetir',
				success : function(response) {
					obj = Ext.util.JSON.decode(response.responseText);
					//obj.username
					Ext.getCmp('kullanicibilgileri').update("<br/><b>Kullan�c� Ad�:</b> "+obj.username+"<br/><b>Kan Grubu:</b> "+obj.kangrubu+"<br/><b>Son Kan Ba��� Tarihi:</b> "+obj.sonbagistarihi);
				},
				failure : function(response) {
					
				}	
			});
           
		
    		var kullanicibilgileri = new Ext.Panel({
    			id		:	'kullanicibilgileri',
            	padding: '5 15 5 15' ,
            	title: 'Kullan�c� Bilgileri',
            	bodyStyle:'padding:10px;font-size:12px;background-color:#FFFFFF;',
            	layout		:	'hbox'
            });
            
           
            
		
		var menuBar = new Ext.Panel({
			//layout: 'accordion',
			autoScroll: true,
			defaults: {autoScroll: true},
			anchor	:	'20%',
			region: 'west',
			width: 310,
			defaults: {
			 	hideCollapseTool : false
			 	//border: true
		    },
		    layoutConfig: {
//		        titleCollapse: false,
		        animate: true,
//		        activeOnTop: true,
		        autoScroll: true
		        
		    },
			
		    margins:'5 0 5 5',
		    split:false,
    		items: [item1, item2, item4, item3, kullanicibilgileri]
		});
		
		
		var arama = new Ext.Panel({
            	padding: '5 15 5 15' ,
            	title: '<p align="center">www.kanver.org</p>',
            	bodyStyle:'padding:10px;font-size:12px;background-color:#E6E6E2;',
            	layout		:	'hbox',
            	html        : '<p align="center"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"width="120" height="600"><param name="movie" value="http://www.kanver.org/banner/120x600.swf" /><param name="quality" value="high" /><embed src="http://www.kanver.org/banner/120x600.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer"type="application/x-shockwave-flash" width="120" height="600"></embed></object></p>'
            });
		
		
		var menuBar2 = new Ext.Panel({
			//layout: 'accordion',
			autoScroll: true,
			defaults: {autoScroll: true},
			region: 'east',
			width: 200,
			defaults: {
			 	hideCollapseTool : false
			 	//border: true
		    },
		    layoutConfig: {
//		        titleCollapse: false,
		        animate: true,
//		        activeOnTop: true,
		        autoScroll: true
		        
		    },
		    items : [arama],
			
		    margins:'5 0 5 5',
		    split:false
		});
		
		
		var content = new Ext.Panel({
			id: 'center',
			region: 'center',
			autoScroll: true,
			bodyStyle:'padding:10px;font-size:12px;background-color:#E6E6E2;',
			border: false,
			margins:'5 5 5 0',
			padding: '10 10 10 10',
			layoutConfig : {
				align : 'stretch'
			},
			html:'Ajax content will come here'
		});
		
		var header=new Ext.Panel({
			renderTo: document.body,
          	//layout: 'fit',
			layoutConfig : {
				align : 'stretch'
			},
			region: 'north',
			border: false,
			html: '<p align="center"><img src="../images/banner.jpg" align="middle"/></p>',
		    height:150,
		    tbar: [
		    //{Sa�a dayamak i�in
		    //	xtype: 'tbfill',
		    //	width: 30
		    //	
		    //},
    		{
       			text: '<b>Ana Sayfa</b>',
       			iconCls: 'bmenu',  
       			handler: function()
       			{       				
//       				content.removeAll(true);
//       				content.load({ url: '../resources/static/anaicerik.jsp', nocache: true, timeout: 30, scripts: true });
//           	   		content.doLayout();
       				urlhandler("anaicerik.jsp");
       				
       			}
   			},
   			{
        		text: '<b>Hakk�m�zda</b>',
        		iconCls: 'bmenu', 
       		 	handler: function(){
       		 		urlhandler("hakkimizda.html"); 
       		 	}
    		},
    		{
     		    text: '<b>Duyurular</b>',
     		    iconCls: 'bmenu', 
    	        handler: function(){ 
    	        	urlhandler("duyurular.html"); 
       		}
    		},
    		{
        		text: '<b>�leti�im</b>',
        		iconCls: 'bmenu',  // <-- icon
       			handler: function(){
//       				content.removeAll(true);
//       				content.load({ url: '../resources/static/iletisim.html', nocache: true, timeout: 30, scripts: true }); 
       				urlhandler("iletisim.html");
       			}
    		}]
		});
		
		var view = new Ext.Viewport({
			layout: 'border',
			autoScroll: true,
			border: false,
			items:[header,menuBar,menuBar2
			,{
				region: 'south',
		        collapsible: false,
		        padding: '10 10 10 10' ,
		        layoutConfig : {
				align : 'stretch'
				},
		        html:'<br/><br/><p align="center"><b>Copyright 2012</b></p>',
		        border: true,
		        height: 60
			},content
			]
		});
		

		
		
		///////////Sifremi Unuttum/////////////////////////////////////////////////		
		this.sifreunuttum = function()
		{
		var sifreWin= new Ext.Window({
			height		:	150,
			title		:	'Kay�t ��lemi',
			modal		:	true,
			resizable	:	false,
			draggable	:	false,
			//closable	:	false,
			width		:	260,
			layout		:	'form',
			bodyStyle	:	'padding : 10px',
		    buttonAlign : 'center',
			labelWidth	:	80,
			defaultType	:	'textfield',
			items		:	[{
				id			:	'eposta',
				//xtype		:	'textfield',
				fieldLabel	:	'Eposta',
				width		:	130,
				allowBlank:     false
			}],
			buttons			:	[{
				xtype		:	'button',
				text		:	'G�nder',
				handler		:	function(btn){
					//Kay�t ��lemleri
					Ext.Ajax.request({
    					url		: 'sifregonder',
    					params	: {
    						eposta:Ext.getCmp('eposta').getValue(),
    					},
    					success : function(response) {
    						obj = Ext.util.JSON.decode(response.responseText);
    						
    						if(obj.cevap==1)
    						{
    							Ext.MessageBox.alert("","�ifre G�nderildi! L�tfen epostan�z� kontrol edin");
    						}
    						else
    						{
    							Ext.MessageBox.alert("","Sistemde bu epostaya sahip kullan�c� bulunamad�");
    						}
    					},
    					failure : function(response) {
    						
    					}	
    				});
					
					
					//Kay�t i�lemleri
				}
			}]
		});
		
		sifreWin.show();
		
	};
		///////////Sifremi Unuttum/////////////////////////////////////////////////
		
		
		content.load({ url: '../resources/static/anaicerik.jsp', nocache: true, timeout: 30, scripts: true });
		
		
		
		
//		view.render('anasayfa');
}

Ext.onReady(anasayfa);