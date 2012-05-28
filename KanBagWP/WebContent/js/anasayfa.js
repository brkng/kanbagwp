function anasayfa() {

		Ext.QuickTips.init();

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
				//xtype		:	'textfield',
				fieldLabel	:	'Ad',
				width		:	130,
				allowBlank:     false

			},{
				xtype		:	'numberfield',
				fieldLabel	:	'TC Kimlik No',
				minLength	:	11,
				maxLength	:	11,
				width		:	130,
				allowBlank  :   false
			},{
				xtype		:	'numberfield',
				fieldLabel	:	'Telefon',
				allowBlank  :   false,
				width		:	130
			},{
				xtype		:	'combo',
				allowBlank  :   false,
				fieldLabel	:	'Kan Grubu',
				width		:	50,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				fieldLabel	:	'E-posta',
				width		:	130,
				allowBlank  :   false
			},{
            		xtype		:	'textfield',
            		fieldLabel	:	'Şifre',
            		minLength	:	8,
            		inputType	:	'password',
            		width		:	130,
            		allowBlank  :   false
            },{
            		xtype		:	'textfield',
            		fieldLabel	:	'Şifre Tekrar',
            		minLength	:	8,
            		name		:	'pwd-confirm',
            		inputType	:	'password',
            		width		:	130,
            		allowBlank  :   false,
            },{
				xtype		:	'combo',
				fieldLabel	:	'Semt',
				width		:	130,
				allowBlank  :   false,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				xtype		:	'combo',
				fieldLabel	:	'İl',
				width		:	130,
				allowBlank  :   false,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				xtype		:	'combo',
				fieldLabel	:	'İlçe',
				width		:	130,
				allowBlank  :   false,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				fieldLabel	:	'Adres',
				xtype		:	'textarea',
				width		:	130
			}],
			buttons			:	[{
				xtype		:	'button',
				text		:	'Kaydol',
				handler		:	function(btn){
					Ext.MessageBox.alert('','Kayıt İşlemi Tamamlandı');
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
                html: '<a href="#">Nerede Kan verebilirim?</a><br/>' +
                	  '<a href="#">Kan Bağışlama Süreci</a>'
            });

            var item2 = new Ext.Panel({
                title: 'Kan Hakkında',
                collapsed: true,
                padding: '5 5 5 5' ,
                collapsible	:	true,
                html: '<a href="#">Kanın Yapısı ve Görevleri Nelerdir?</a><br/>' +
                	  '<a href="#">Kan Bağışlarım Nerede kullanılıyor</a><br/>'+
                	  '<a href="#">Kan Grupları Hakkında Bilgiler</a><br/>'+
                	  '<a href="#">Kana Yapılan Testler</a><br/>'+
                	  '<a href="#">Dünya ve Türkiyede Kan Bağışı</a>'
            });
            
            
            this.sss = function(){	
            	
            	var sssPanel = new Ext.Panel({
	            	title: 'SÄ±kÃ§a Sorulan Sorular',
	            	//closeAction: 'hide',
	            	id:'sss',
	            	bodyStyle:'padding:10px;font-size:12px;background-color:#E6E6E2;',
	            	items : [
	            	{
	            		title: 'Ã‡ok canÄ±m yanar mÄ±?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'KullanÄ±lan iÄŸnenin kalÄ±nlÄ±ÄŸÄ± uluslararasÄ± standartlarda bu iÅŸlem iÃ§in uygulanan kalÄ±nlÄ±ktadÄ±r. Hayat kurtarmak iÃ§in alÄ±nan kanÄ±n iÃ§indeki hÃ¼crelere zarar verilmemesi aÃ§Ä±sÄ±ndan iÄŸnenin kalÄ±n olmasÄ± gerekmektedir. Ä°ÄŸnenin kalÄ±n olmasÄ± kan alÄ±mÄ± sÄ±rasÄ±nda iÄŸne iÃ§inden geÃ§en kan hÃ¼crelerinin parÃ§alanmasÄ±nÄ± engeller, oluÅŸabilecek hasarÄ± azaltÄ±r. AcÄ±nÄ±n az hissedilmesi iÃ§in iÄŸne ucu Ã¶zel bir iÅŸlemle lazerle kesilmiÅŸ, silikon ile kaplanmÄ±ÅŸtÄ±r. Personelimiz kan alÄ±mÄ± konusunda Ã¶zel eÄŸitim almÄ±ÅŸ uzmanlardÄ±r. HissettiÄŸiniz acÄ± Ã§ok azdÄ±r.'
	            	},
	            	{
	            		title: 'Kimller kan baÄŸÄ±ÅŸlayabilir?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : '18-65 YaÅŸ arasÄ±nda, aÄŸÄ±rlÄ±ÄŸÄ± en az 50 kg ve Ã¼zerinde olan her saÄŸlÄ±klÄ± birey kan baÄŸÄ±ÅŸÄ±nda bulunabilir. '
	            	},
	            	{
	            		title: 'Kan baÄŸÄ±ÅŸÄ± ne kadar sÃ¼rer?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'KayÄ±t, muayene, kan verme ve ikram iÅŸlemlerinin tamamÄ± yaklaÅŸÄ±k olarak 30-35 dakika sÃ¼rmektedir. Bir hayat kurtarÄ±lmasÄ± iÃ§in bu sÃ¼reyi gÃ¶zden Ã§Ä±karmaya deÄŸmez mi? '
	            	},
	            	{
	            		title: 'korkuyorum. Kan baÄŸÄ±ÅŸlayabilir miyim?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'EÄŸer korkunuz sizi bayÄ±ltacak kadar Ã§ok ise kan vermeniz uygun deÄŸildir. Bir yaÅŸam kurtarma dÃ¼ÅŸÃ¼ncesi, bÃ¼tÃ¼n korkularÄ±nÄ±zÄ± yener. '
	            	},
	            	{
	            		title: 'Tarama test sonuÃ§larÄ±m bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'EÄŸer sonuÃ§larÄ±nÄ±z negatif bulunmuÅŸsa size herhangi bir bildirimde bulunulmayacaktÄ±r. '
	            	},
	            	{
	            		title: 'Tarama test sonuÃ§larÄ±m bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'EÄŸer sonuÃ§larÄ±nÄ±z negatif bulunmuÅŸsa size herhangi bir bildirimde bulunulmayacaktÄ±r. '
	            	},
	            	{
	            		title: 'Ã‡ok canÄ±m yanar mÄ±?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'KullanÄ±lan iÄŸnenin kalÄ±nlÄ±ÄŸÄ± uluslararasÄ± standartlarda bu iÅŸlem iÃ§in uygulanan kalÄ±nlÄ±ktadÄ±r. Hayat kurtarmak iÃ§in alÄ±nan kanÄ±n iÃ§indeki hÃ¼crelere zarar verilmemesi aÃ§Ä±sÄ±ndan iÄŸnenin kalÄ±n olmasÄ± gerekmektedir. Ä°ÄŸnenin kalÄ±n olmasÄ± kan alÄ±mÄ± sÄ±rasÄ±nda iÄŸne iÃ§inden geÃ§en kan hÃ¼crelerinin parÃ§alanmasÄ±nÄ± engeller, oluÅŸabilecek hasarÄ± azaltÄ±r. AcÄ±nÄ±n az hissedilmesi iÃ§in iÄŸne ucu Ã¶zel bir iÅŸlemle lazerle kesilmiÅŸ, silikon ile kaplanmÄ±ÅŸtÄ±r. Personelimiz kan alÄ±mÄ± konusunda Ã¶zel eÄŸitim almÄ±ÅŸ uzmanlardÄ±r. HissettiÄŸiniz acÄ± Ã§ok azdÄ±r.'
	            	},
	            	{
	            		title: 'Kimller kan baÄŸÄ±ÅŸlayabilir?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : '18-65 YaÅŸ arasÄ±nda, aÄŸÄ±rlÄ±ÄŸÄ± en az 50 kg ve Ã¼zerinde olan her saÄŸlÄ±klÄ± birey kan baÄŸÄ±ÅŸÄ±nda bulunabilir. '
	            	},
	            	{
	            		title: 'Kan baÄŸÄ±ÅŸÄ± ne kadar sÃ¼rer?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'KayÄ±t, muayene, kan verme ve ikram iÅŸlemlerinin tamamÄ± yaklaÅŸÄ±k olarak 30-35 dakika sÃ¼rmektedir. Bir hayat kurtarÄ±lmasÄ± iÃ§in bu sÃ¼reyi gÃ¶zden Ã§Ä±karmaya deÄŸmez mi? '
	            	},
	            	{
	            		title: 'korkuyorum. Kan baÄŸÄ±ÅŸlayabilir miyim?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'EÄŸer korkunuz sizi bayÄ±ltacak kadar Ã§ok ise kan vermeniz uygun deÄŸildir. Bir yaÅŸam kurtarma dÃ¼ÅŸÃ¼ncesi, bÃ¼tÃ¼n korkularÄ±nÄ±zÄ± yener. '
	            	},
	            	{
	            		title: 'Tarama test sonuÃ§larÄ±m bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'EÄŸer sonuÃ§larÄ±nÄ±z negatif bulunmuÅŸsa size herhangi bir bildirimde bulunulmayacaktÄ±r. '
	            	},
	            	{
	            		title: 'Tarama test sonuÃ§larÄ±m bana bildirilecek mi?',
	                	collapsed: true,
	               		collapsible	:true,
	               		html : 'EÄŸer sonuÃ§larÄ±nÄ±z negatif bulunmuÅŸsa size herhangi bir bildirimde bulunulmayacaktÄ±r. '
	            	}
	            	]
	            });
            	
       	   		content.removeAll(true);
       	  	 	content.add(sssPanel);
       	   		content.doLayout();
		   };
            
          
            var item3 = new Ext.Panel({
            	
                title: '<a style="color: #FFFFFF;" href="#" onClick="sss();" >Sıkça Sorulan Sorular</a>',
                collapsible	:false,
                titleCollapse: false
         		
            });
            
            
            var item4 = new Ext.Panel({
                title: 'Site Kullanımı',
                collapsed: true,
                padding: '5 5 5 5' ,
                collapsible	:	true,
                html: '<a href="#">Site Nasıl Çalışmaktadır</a><br/>' +
                	  '<a href="#">Kan İsteğinde Nasıl Bulunabilirim?</a><br/>'
            });

            var item5 = new Ext.Panel({
            	padding: '5 5 5 5' ,
            	title: 'Kullanıcı Girişi',
            	bodyStyle	:	'padding : 10px',
            	layout		:	'form',

            	items:	[
            	{
            		name : 'username',
            		id: 'username',
            		xtype:	'textfield',
            		fieldLabel:	'E-posta',
            		allowBlank: false,
            		name: 'ePosta',
            		width:	150
            	},{
            		name  : 'password',
            		id: 'password',
            		xtype:	'textfield',
            		fieldLabel:	'Şifre',
            		allowBlank: false,
            		inputType:'password',
            		width:	150
            	},
            	{
            		xtype:	'button',
            		width	:	80,
            		text: 	'Giriş',
            		style: {
            		marginLeft: '175px'
            		},
            		align:	'right',
            		handler		:	function(btn){         			
            			
        				Ext.Ajax.request({
        					url		: 'login',
        					params	: {
        						uname:Ext.getCmp('username').getValue(),
        						pass:Ext.getCmp('password').getValue()
        					},
        					success : function(response) {
        						obj = Ext.util.JSON.decode(response.responseText);
        						
        						if(obj.rol == 1)
        						{
        							window.location = '../administrator/admin';
        						}
        						else
        						{
        							Ext.MessageBox.alert(obj.rol);
        						}
        							
        
        					},
        					failure : function(response) {
        						
        						Ext.MessageBox.alert("no");
        					}	
        				});
            				
					}
            	},
            	{
            		border	: false,
            		html:'<a href="#">Şifremi Unuttum</a>'
            	}
            	]
            });
            
            this.kayitsayfasiniyukle = function(){
       			 content.load({ url: 'kayit', nocache: true, timeout: 30, scripts: true });
   			};
		
            var item6 =new Ext.Panel({
            	border: false,
            	//kayit sayfasını merkeze yuklemeyi denedim ama başarısız. Görüntü çok bozuldu ama yöntem öğrenildi.
            	//html: '<p align="center"><a class="test" id="test" href="#" onClick="kayitsayfasiniyukle();"><img width=250 height=250 src="../images/kaydol.jpg" /></a></p>'
            	html: '<p align="center"><a href="#" onClick="kayit();" ><img width=250 height=250 src="../images/kaydol.jpg" /></a></p>'
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
    		items: [item1, item2, item4, item3, item5,item6]
		});
		
		
		var arama = new Ext.Panel({
            	padding: '5 15 5 15' ,
            	title: 'Arama',
            	bodyStyle	:	'padding : 10px',
            	layout		:	'hbox',
            	items:	[
            	{
            		xtype:	'field',
            		flex : 2,
            		height: 28
            	},
            	{
            		xtype:	'button',
            		flex: 1,
            		height: 28,
            		text: 	'Ara',
            		handler		:	function(btn){
					Ext.MessageBox.alert('','kontrol yapılacak!!');
					}
            	}
            	]
            });
		
		
		var menuBar2 = new Ext.Panel({
			//layout: 'accordion',
			autoScroll: true,
			defaults: {autoScroll: true},
			region: 'east',
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
		    items : [arama],
			
		    margins:'5 0 5 5',
		    split:false
		});
		
		
		var content = new Ext.Panel({
			id: 'center',
			region: 'center',
			autoScroll: true,
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
		    //{Sağa dayamak için
		    //	xtype: 'tbfill',
		    //	width: 30
		    //	
		    //},
    		{
       			text: '<b>Ana Sayfa</b>',
       			iconCls: 'bmenu',  
       			handler: function()
       			{       				
       				content.removeAll(true);
       				content.load({ url: 'anaicerik', nocache: true, timeout: 30, scripts: true });
           	   		content.doLayout();
       				
       			}
   			},
   			{
        		text: '<b>Hakkımızda</b>',
        		iconCls: 'bmenu', 
       		 	handler: function(){ alert('blah'); }
    		},
    		{
     		    text: '<b>Duyurular</b>',
     		    iconCls: 'bmenu', 
    	        handler: function(){ 
       		}
    		},
    		{
        		text: '<b>İletişim</b>',
        		iconCls: 'bmenu',  // <-- icon
       			handler: function(){
       				content.removeAll(true);
       				content.load({ url: 'deneme', nocache: true, timeout: 30, scripts: true }); 
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
		        html:'<br/><br/><p align="center"><b>Sanguis Team 2012</b></p>',
		        border: true,
		        height: 60
			},content
			]
		});
		
		/*var templates = new Ext.Window({
			width:900,
			height:700,
			id:'Templates',
			resizable:false,
			//layout:'border',
			//border:true,
			closable:false,
			title:'Plantillas',
			items:view
		});

		templates.show();*/
		
		content.load({ url: 'anaicerik', nocache: true, timeout: 30, scripts: true });
		
		
		
		
//		view.render('anasayfa');
}

Ext.onReady(anasayfa);