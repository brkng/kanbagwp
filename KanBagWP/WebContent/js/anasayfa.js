Ext.onReady(function(){
//var topHTML = '<img style="margin-left: 5px" src="Google_maps_logo.png" alt="logo" height="60" width="380">';
//Ext.BLANK_IMAGE_URL = 'extjs/resources/images/default/s.gif';


			Ext.QuickTips.init();
		
		
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

            var item3 = new Ext.Panel({
                title: '<a style="color: #FFFFFF;" href="#">Sıkça Sorulan Sorular</a>',
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
            		xtype:	'field',
            		fieldLabel:	'E-posta',
            		width:	150
            	},{
            		xtype:	'field',
            		fieldLabel:	'Şifre',
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
            	border: false,
            	html: '<p align="center"><a href="kayit.html"><img width=250 height=250 src="../images/kaydol.jpg" /></a></p>'
            });
            
           
		
		var menuBar = new Ext.Panel({
			//layout: 'accordion',
			autoScroll: true,
			defaults: {autoScroll: true},
			region: 'west',
			width: 310,
			defaults: {
			 	hideCollapseTool : false,
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
		
		
		var content = new Ext.Panel({
			region: 'center',
			autoScroll: true,
			border: false,
			margins:'5 5 5 0',
			layoutConfig : {
				align : 'stretch'
			},
			html:'Ajax content will come here'
		});
		
		var header=new Ext.Panel({
			renderTo: document.body,
          	//layout: 'fit',
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
       			handler: function(){ alert('blah'); }
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
       			handler: function(){ alert('blah'); }
    		}]
		});
		
		var view = new Ext.Viewport({
			layout: 'border',
			autoScroll: true,
			border: false,
			items:[header,menuBar
			,{
				region: 'south',
		        collapsible: false,
		        padding: '10 10 10 10' ,
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
		
		
		
		
//		view.render('anasayfa');
});	