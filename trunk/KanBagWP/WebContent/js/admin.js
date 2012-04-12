Ext.onReady(function(){
//var topHTML = '<img style="margin-left: 5px" src="Google_maps_logo.png" alt="logo" height="60" width="380">';
//Ext.BLANK_IMAGE_URL = 'extjs/resources/images/default/s.gif';


		Ext.QuickTips.init();
		
		this.sss = function(){
       		//content.load({ url: 'sss.html', nocache: true, timeout: 30, scripts: true });
   		};

        var kullanicilar = new Ext.Panel({
            title: '<a style="color: #FFFFFF;" href="#" onClick="sss();" >Kullanıcılar</a>',
            collapsible	:false,
            titleCollapse: false 		
        });
							
		var menuBar = new Ext.Panel({
			autoScroll: true,
			defaults: {autoScroll: true},
			anchor	:	'20%',
			region: 'west',
			bodyStyle:'padding:5px;font-size:12px;background-color:#D0CDCD;',
			collapsible:false,
			split:true,
			border:true,
			width: 300,
			items : [kullanicilar],
			defaults: {
			 	hideCollapseTool : false
		    },
		    layoutConfig: {
		        animate: true,
		        autoScroll: true
		    },
		    margins:'5 0 5 5',
		    split:false
		});
		
				
		var menuBar2 = new Ext.Panel({
			autoScroll: true,
			defaults: {autoScroll: true},
			collapsible:false,
			split:true,
			bodyStyle:'padding:5px;font-size:12px;background-color:#D0CDCD;',
			region: 'east',
			width: 300,
			defaults: {
			 	hideCollapseTool : false
		    },
		    layoutConfig: {
		        animate: true,
		        autoScroll: true
		    },
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
			html:'Admin Panel'
		});
		
		var header=new Ext.Panel({
			renderTo: document.body,
			layoutConfig : {
				align : 'stretch'
			},
			bodyStyle:'padding:10px;font-size:20px;background-color:#D50202;color: #ffffff;',
			region: 'north',
			border: false,
			html: '<p align="center">Admin Panel</p>',
		    height:60,
		    tbar: [
    		{
       			text: '<b>Ana Sayfa</b>',
       			iconCls: 'bmenu',  
       			handler: function()
       			{
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
		
		var guney = new Ext.Panel({
				region: 'south',
		        collapsible: false,
		        padding: '10 10 10 10' ,
		        layoutConfig : {
				align : 'stretch'
				},
		        html:'<br/><br/><p align="center"><b>Sanguis Team 2012</b></p>',
		        border: true,
		        height: 60
		});
		
		var view = new Ext.Viewport({
			layout: 'border',
			border:false,
			autoScroll: true,
			items:[header,menuBar,menuBar2, guney, content]
		});
});	