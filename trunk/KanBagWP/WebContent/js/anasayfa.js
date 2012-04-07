Ext.onReady(function(){
//var topHTML = '<img style="margin-left: 5px" src="Google_maps_logo.png" alt="logo" height="60" width="380">';
//Ext.BLANK_IMAGE_URL = 'extjs/resources/images/default/s.gif';
		

		Ext.QuickTips.init();
		
		
		var item1 = new Ext.Panel({
                title: 'Kan Bağışı',
                collapsible	:	true,
                padding: '0 5 0 5' ,
                html: '<a href="#">Nerede Kan verebilirim?</a><br/>' +
                	  '<a href="#">Kan Bağışlama Süreci</a>'
            });

            var item2 = new Ext.Panel({
                title: 'Kan Hakkında',
                padding: '0 5 0 5' ,
                collapsible	:	true,
                html: '<a href="#">Kanın Yapısı ve Görevleri Nelerdir?</a><br/>' +
                	  '<a href="#">Kan Bağışlarım Nerede kullanılıyor</a><br/>'+
                	  '<a href="#">Kan Grupları Hakkında Bilgiler</a><br/>'+
                	  '<a href="#">Kana Yapılan Testler</a><br/>'+
                	  '<a href="#">Dünya ve Türkiyede Kan Bağışı</a>'
            });

            var item3 = new Ext.Panel({
                title: '<a href="#">Sıkça Sorulan Sorular</a>',
                collapsible	:false,
                titleCollapse: false
         		
            });
            
            

            var item4 = new Ext.Panel({
                title: 'Site Kullanımı',
                padding: '0 5 0 5' ,
                collapsible	:	true,
                html: '<a href="#">Site Nasıl Çalışmaktadır</a><br/>' +
                	  '<a href="#">Kan İsteğinde Nasıl Bulunabilirim?</a><br/>'
            });

            var item5 = new Ext.Panel({
            	padding: '0 5 0 5' ,
            	title: 'Kullanıcı Girişi',
            	bodyStyle	:	'padding : 10px',
            	layout		:	'form',

            	items:	[
            	{
            		xtype:	'field',
            		fieldLabel:	'E-posta',
            		width:	100
            	},{
            		xtype:	'field',
            		fieldLabel:	'Şifre',
            		inputType:'password',
            		width:	100
            	},
            	{
            		xtype:	'button',
            		text: 	'Giriş',
            		style: {
            		marginLeft: '170px'
            		},
            		align:	'right',
            		handler		:	function(btn){
					Ext.MessageBox.alert('','kontrol yapılacak!!');
					}
            	},
            	{
            		border	: false,
            		html:'<a href="#">Şifremi Unuttum</a>'
            	}
            	]
            });
		
            var item6 =new Ext.Panel({
            	html: '<a href="kayit.html"><img src="../images/kaydol.jpg" /></a>'
            });
            
           
		
		var menuBar = new Ext.Panel({
			//layout: 'accordion',
			autoScroll: true,
			defaults: {autoScroll: true},
			region: 'west',
			width: 320,
			defaults: {
			 	hideCollapseTool : false,
			 	border: true
			 	
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
		
		
		var content = new Ext.Panel({
			region: 'center',
			autoScroll: true,
			margins:'5 5 5 0',
			layoutConfig : {
				align : 'stretch'
			},
			html:'Ajax content will come here'
		});
		
		
		
		var view = new Ext.Viewport({
			layout: 'border',
			autoScroll: true,
			border: true,
			items:[{
				region: 'north',
				html: '<p align="center"><img src="../images/banner.jpg" align="middle"/></p>',
		        height:100
			},menuBar
			,{
				region: 'south',
		        collapsible: false,
		        padding: '25 25 25 25' ,
		        html:'<br/><br/><p align="center"><b>Sanguis Team 2012</b></p>',
		        border: true,
		        height: 100
			},content
			]
			
		});
//		view.render('anasayfa');
});	