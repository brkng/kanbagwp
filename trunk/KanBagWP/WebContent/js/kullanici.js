function anasayfa() {

		Ext.QuickTips.init();
		
		this.bekleyenisteklerigoster =function()
		{
			var istek = new Ext.data.Record.create([
			                                		{
			                                		    name : 'id'
			                                		}, {
			                                		    name : 'koyuldugutarih',
			                                		    type : 'string'
			                                		}, {
			                                		    name : 'isteknotu',
			                                		    type : 'string'
			                                		},{
			                                		    name : 'kaldrildigitarih',
			                                		    type : 'int'
			                                		},{
			                                		    name : 'hid',
			                                		    type : 'string'
			                                		},{
			                                		    name : 'kangrubu',
			                                		    type : 'string'
			                                		},{
			                                		    name : 'sure',
			                                		    type : 'int'
			                                		},{
			                                		    name : 'semt',
			                                		    type : 'string'
			                                		}]);

			                                		var reader = new Ext.data.JsonReader({
			                                		   idProperty: 'id',
			                                		   root: 'data',
			                                		   successProperty: 'success'
			                                		}, istek); 


			                                		var store = new Ext.data.Store({
			                                		    url : 'kullanicininkanistekleri',
			                                		    id: 'id',
			                                		    reader:reader,
			                                		    autoLoad:true,
			                                		    fields : istek,
			                                		    pruneModifiedRecords : true
			                                		}); 

			                                		var sm = new Ext.grid.RowSelectionModel();

			                                		var cm = new Ext.grid.ColumnModel([
			                                		                                      	                                           	
			                                		new Ext.grid.RowNumberer(), 
			                                		{
			                                		    header : 'ID',
			                                		    dataIndex : 'id',
			                                		    width:20,
			                                		    sortable : true
			                                		}, {
			                                		    header : 'Koyulduğu Tarih',
			                                		    dataIndex : 'koyuldugutarih',
			                                		    sortable : true
			                                		}, {
			                                		    header : 'İstek Notu',
			                                		    dataIndex : 'isteknotu',
			                                		    sortable : true
			                                		}, {
			                                		    header : 'Kaldırıldığı Tarih',
			                                		    dataIndex:'kaldirildigitarih',
			                                		    sortable:true                                           	    
			                                		}, {
			                                		    header : 'HId',
			                                		    dataIndex : 'hid',
			                                		    width:20,
			                                		    sortable : true
			                                		}, {
			                                		    header : 'Kan Grubu',
			                                		    dataIndex : 'kangrubu',
			                                		    sortable : true
			                                		}, {
			                                		    header : 'Süre(Gün)',
			                                		    dataIndex : 'sure',
			                                		    sortable : true
			                                		}, {
			                                		    header : 'Semt',
			                                		    dataIndex : 'semt',
			                                		    sortable : true
			                                		}]);

			                                		var btnRefresh = new Ext.Button({
			                                		    text : 'Refresh',
			                                		    handler : function() {
			                                		    store.reload();
			                                		   }
			                                		});
			                                		                                      	                                           	
			                                		var istekgridi = new Ext.grid.EditorGridPanel({
			                                		    stripeRows : true,
			                                		    columnLines:true,
			                                		    frame : true,
			                                		    loadMask : {
			                                		       msg : 'Yukleniyor...'
			                                		    },
			                                		    clicksToEdit : 2,
			                                		    trackMouseOver : false,
			                                		    title : 'İstekler',
			                                		    store : store,
			                                		    cm : cm,
			                                		    sm : sm,
			                                		    height : 500,
			                                		    fbar : [btnRefresh],
			                                		    viewConfig : {
			                                		      enableRowBody : true,
			                                		      forceFit: true,
			                                		      emptyText : 'Sergilenecek Kayit Bulunamadi '
			                                		   }
			                                		   });			
			var istekler= new Ext.Window({
				height		:	420,
				title		:	'Bekleyen İstekler',
				modal		:	true,
				resizable	:	false,
				draggable	:	false,
				width		:	700,
				layout		:	'form',
				bodyStyle	:	'padding : 10px',
			    buttonAlign : 'center',
				labelWidth	:	80,
				defaultType	:	'textfield',
				items		:	[istekgridi]
			}).show();
		};

		this.kayit = function()
		{
		var myWin= new Ext.Window({
			height		:	420,
			title		:	'Kayıt İşlemi',
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
            		fieldLabel	:	'Şifre',
            		minLength	:	8,
            		inputType	:	'password',
            		width		:	130,
            		allowBlank  :   false
            },{
            		id			:	'sifre2',
            		xtype		:	'textfield',
            		fieldLabel	:	'Şifre Tekrar',
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
				store		:	['Göztepe','BeylerBeyi','Bakırkoy','YeniMahalle','Semt2','Semt5','Semt6','Semt7']
			},{
				id			:	'il',
				xtype		:	'combo',
				fieldLabel	:	'İl',
				width		:	130,
				allowBlank  :   false,
				store		:	['Ankara','İstanbull','Bursa','çanakkale','Ağrı','İzmir','Bolu','Antalya']
			},{
				id			:	'ilce',
				xtype		:	'combo',
				fieldLabel	:	'İlçe',
				width		:	130,
				allowBlank  :   false,
				store		:	['Kadıköy','Ümraniye','Üskudar','Taşdelen']
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
    						Ext.MessageBox.alert("Kullanıcı Başarılı bir şekilde sisteme kaydedildi");
    						
    						myWin.close();
    					},
    					failure : function(response) {
    						
    						Ext.MessageBox.alert("Kayıt sırasında bir hata oluştu!");
    						
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
                title: 'Kan Bağışı',
                collapsible	:	true,
                collapsed: true,
                padding: '5 5 5 5' ,
                html: '<a href="#"  onClick="urlhandler(&#34;nerede-kan-verebilirim.html&#34;);" >Nerede Kan verebilirim?</a><br/>' +
                	  '<a href="#" onClick="urlhandler(&#34;kan-bagislama-sureci.html&#34;);"  >Kan Bağışlama Süreci</a>'
            });

            var item2 = new Ext.Panel({
                title: 'Kan Hakkında',
                collapsed: true,
                padding: '5 5 5 5' ,
                collapsible	:	true,
                html: '<a href="#" onClick="urlhandler(&#34;kan-yapisi-ve-gorevleri-nelerdir.html&#34;);" >Kan�n Yapısı ve Görevleri Nelerdir?</a><br/>' +
                	  '<a href="#" onClick="urlhandler(&#34;kan-bagislarim-nerelerde-kullaniliyor.html&#34;);" >Kan Bağışlarım Nerede kullanılıyor</a><br/>'+
                	  '<a href="#" onClick="urlhandler(&#34;kan-gruplari-hakkinda-bilgiler.html&#34;);" >Kan Grupları Hakkında Bilgiler</a><br/>'+
                	  '<a href="#" onClick="urlhandler(&#34;kana-yapilan-testler.html&#34;);" >Kana Yapılan Testler</a><br/>'+
                	  '<a href="#" onClick="urlhandler(&#34;dunya-ve-turkiyede-kan-bagisi.html&#34;);">Dünya ve Türkiyede Kan Bağışı</a>'
            });
            
            
            this.sss = function(){	
            	
               	var sssPanel = new Ext.Panel({
	            	title: 'Sıkça Sorulan Sorular',
	            	//closeAction: 'hide',
	            	id:'sss',
	            	bodyStyle:'padding:10px;font-size:12px;background-color:#E6E6E2;',
	            	items : [
	            	{
	            		title: 'Çok canım yanar mı?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kullanılan iğnenin kalınlığı uluslararası standartlarda bu işlem için uygulanan kalınlıktadır. Hayat kurtarmak için alınan kanın içindeki hücrelere zarar verilmemesi açısından iğnenin kalın olması gerekmektedir. İğnenin kalın olması kan alımı sırasında iğne içinden geçen kan hücrelerinin parçalanmasını engeller, oluşabilecek hasarı azaltır. Acının az hissedilmesi için iğne ucu özel bir işlemle lazerle kesilmiş, silikon ile kaplanmıştır. Personelimiz kan alımı konusunda özel eğitim almış uzmanlardır. Hissettiğiniz acı çok azdır.'
	            	},
	            	{
	            		title: 'Kimller kan bağışlayabilir?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : '18-65 YaÅŸ arasÄ±nda, aÄŸÄ±rlÄ±ÄŸÄ± en az 50 kg ve Ã¼zerinde olan her saÄŸlÄ±klÄ± birey kan baÄŸÄ±ÅŸÄ±nda bulunabilir.'
	            	},
	            	{
	            		title: 'Kan bağışı ne kadar sürer?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kayıt, muayene, kan verme ve ikram işlemlerinin tamamı yaklaşık olarak 30-35 dakika sürmektedir. Bir hayat kurtarılması için bu süreyi gözden çıkarmaya değmez mi?'
	            	},
	            	{
	            		title: 'korkuyorum. Kan bağışlayabilir miyim?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Eğer korkunuz sizi bayıltacak kadar çok ise kan vermeniz uygun değildir. Bir yaşam kurtarma düşüncesi, bütün korkularınızı yener. '
	            	},
	            	{
	            		title: 'Tarama test sonuçlarım bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Eğer sonuçlarınız negatif bulunmuşsa size herhangi bir bildirimde bulunulmayacaktır.'
	            	},
	            	{
	            		title: 'çok canım yanar mı?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kullanılan iğnenin kalınlığı uluslararası standartlarda bu işlem için uygulanan kalınlıktadır. Hayat kurtarmak için alınan kanın içindeki hücrelere zarar verilmemesi açısından iğnenin kalın olması gerekmektedir. İğnenin kalın olması kan alımı sırasında iğne içinden geçen kan hücrelerinin parçalanmasını engeller, oluşabilecek hasarı azaltır. Acının az hissedilmesi için iğne ucu özel bir işlemle lazerle kesilmiş, silikon ile kaplanmıştır. Personelimiz kan alımı konusunda özel eğitim almış uzmanlardır. Hissettiğiniz acı çok azdır.'
	            	},
	            	{
	            		title: 'Kimller kan bağışlayabilir?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : '18-65 YaÅŸ arasÄ±nda, aÄŸÄ±rlÄ±ÄŸÄ± en az 50 kg ve Ã¼zerinde olan her saÄŸlÄ±klÄ± birey kan baÄŸÄ±ÅŸÄ±nda bulunabilir.'
	            	},
	            	{
	            		title: 'Kan bağışı ne kadar sürer?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Kayıt, muayene, kan verme ve ikram işlemlerinin tamamı yaklaşık olarak 30-35 dakika sürmektedir. Bir hayat kurtarılması için bu süreyi gözden çıkarmaya değmez mi?'
	            	},
	            	{
	            		title: 'korkuyorum. Kan bağışlayabilir miyim?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Eğer korkunuz sizi bayıltacak kadar çok ise kan vermeniz uygun değildir. Bir yaşam kurtarma düşüncesi, bütün korkularınızı yener. '
	            	},
	            	{
	            		title: 'Tarama test sonuçlarım bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'Eğer sonuçlarınız negatif bulunmuşsa size herhangi bir bildirimde bulunulmayacaktır.'
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
            	
                title: '<a style="color: #FFFFFF;" href="#" onClick="sss();" >sıkça Sorulan Sorular</a>',
                collapsible	:false,
                titleCollapse: false
         		
            });
            
            
            var item4 = new Ext.Panel({
                title: 'Site Kullanımı',
                collapsed: true,
                padding: '5 5 5 5' ,
                collapsible	:	true,
                html: '<a href="#" onClick="urlhandler(&#34;site-nasil-calismaktadir.html&#34;);" >Site Nasıl Çalışmaktadır</a><br/>' +
                	  '<a href="#" onClick="urlhandler(&#34;kan-isteginde-nasil-bulunabilirim.html&#34;);"  >Kan İsteğinde Nasıl Bulunabilirim?</a><br/>'
            });

			Ext.Ajax.request({
				url		: 'kullanicibilgilerigetir',
				success : function(response) {
					obj = Ext.util.JSON.decode(response.responseText);
					//obj.username
					s = '<br/><br/><a href="#" onClick="cikisyap();" >Çıkış Yap</a><br/>';
					bi = '<br/><br/><b><a href="#" onClick="bekleyenisteklerigoster();" >Bekleyen İstek Sayısı:</b>'+obj.isteksayisi+'</a>';
					//bi='<br/><a href="#" onClick="bekleyenisteklerigoster();" >Exit</a><br/>';
					Ext.getCmp('kullanicibilgileri').update("<b>Kullanıcı Adı:</b> "+obj.isim+"<br/><b>Kan Grubu:</b> "+
							obj.kangrubu+"<br/><b>Son Kan Bağış Tarihi:</b> "+obj.sonbagistarihi+ bi +s);
				},
				failure : function(response) {
					window.location = '../gen/anasayfa';
				}	
			});
			
			this.cikisyap = function()
			{
				Ext.Ajax.request({
					url		: 'cikis',
					success : function(response) {
						window.location = '../gen/anasayfa';
					},
					failure : function(response) {
						
					}	
				});
			};
           
		
    		var kullanicibilgileri = new Ext.Panel({
    			id		:	'kullanicibilgileri',
            	padding: '5 15 5 15' ,
            	title: '<b>Kullanıcı Bilgileri</b>',
            	bodyStyle:'padding:10px;font-size:16px;background-color:#FFFFFF;',
            	layout		:	'hbox',
            	items		:	[{
            		
            	}]
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
        		text: '<b>Hakkımızda</b>',
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
        		text: '<b>İletişim</b>',
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
			title		:	'Kayıt İşlemi',
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
    							Ext.MessageBox.alert("","Şifreniz gönderildi. Lütfen epostanızı kontrol edin");
    						}
    						else
    						{
    							Ext.MessageBox.alert("","Sistemde bu epostaya sahip kullanıcı bulunamadı");
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