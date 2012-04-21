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
		
	}
					
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
           		content.update('');
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
            		xtype:	'textfield',
            		fieldLabel:	'E-posta',
            		allowBlank: false,
            		name: 'ePosta',
            		width:	150
            	},{
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
            			
            			Ext.MessageBox.alert('','E-posta adresi',ePosta);
            				
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
       				console.log(document.getElementById('sss'));
       				content.load({ url: 'anaicerik', nocache: true, timeout: 30, scripts: true });
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