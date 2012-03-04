Ext.onReady(function(){
//var topHTML = '<img style="margin-left: 5px" src="Google_maps_logo.png" alt="logo" height="60" width="380">';
//Ext.BLANK_IMAGE_URL = 'extjs/resources/images/default/s.gif';
		

		Ext.QuickTips.init();
		
		
		var item1 = new Ext.Panel({
                title: 'Basliq 1',
                html: '&lt;icerik&gt;'
            });

            var item2 = new Ext.Panel({
                title: 'Basliq 2',
                html: '&lt;icerik&gt;'
            });

            var item3 = new Ext.Panel({
                title: 'Basliq 3',
                html: '&lt;icerik&gt;'
            });

            var item4 = new Ext.Panel({
                title: 'Basliq 4',
                html: '&lt;icerik&gt;'
            });

		
		
		var menuBar = new Ext.Panel({
			layout: 'accordion',
			region: 'west',
			width: 300,
			defaults: {
			 	hideCollapseTool : true,
			 	border: true
		    },
		    layoutConfig: {
//		        titleCollapse: false,
		        animate: true
//		        activeOnTop: true,
		    },
		   
		    margins:'5 0 5 5',
		    split:true,
    		items: [item1, item2, item3, item4]
		});
		
		
		var content = new Ext.Panel({
			region: 'center',
			margins:'5 5 5 0',
			layoutConfig : {
				align : 'stretch'
			},
			html:'Ajax content will come here'
		});
		
		
		var view = new Ext.Viewport({
		
			layout: 'border',
			border: true,
			
			items:[{
				region: 'north',
				html: 'Header will be here',
		        height:100
			},menuBar
			,{
				region: 'south',
		        collapsible: false,
		        height: 100
			},content
			]
			
		});
//		view.render('anasayfa');
		
});	