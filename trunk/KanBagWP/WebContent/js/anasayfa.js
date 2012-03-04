Ext.onReady(function(){
//var topHTML = '<img style="margin-left: 5px" src="Google_maps_logo.png" alt="logo" height="60" width="380">';
//Ext.BLANK_IMAGE_URL = 'extjs/resources/images/default/s.gif';
		

		Ext.QuickTips.init();
		
		
		var item1 = new Ext.Panel({
                title: 'Basliq 1',
                html: '&lt;icerik&gt;',
                cls:'empty'
            });

            var item2 = new Ext.Panel({
                title: 'Basliq 2',
                html: '&lt;icerik&gt;',
                cls:'empty'
            });

            var item3 = new Ext.Panel({
                title: 'Basliq 3',
                html: '&lt;icerik&gt;',
                cls:'empty'
            });

            var item4 = new Ext.Panel({
                title: 'Basliq 4',
                html: '&lt;icerik&gt;',
                cls:'empty'
            });

		
		
		var menuBar = new Ext.Panel({
			layout: 'accordion',
			flex: 2,
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
			margins:'5 5 5 0',
			flex: 3,
			html:'Ajax content will come here'
		});
		
		
		var body = new Ext.Panel({
			height: 500,
			region: 'center',
			layout: 'hbox',
			layoutConfig : {
				align : 'stretch'
			},
			items:[ menuBar, content ] 
		});
		
		
		var view = new Ext.Viewport({
		
			layout: 'border',
//			border: true,
			
			items:[{
				region: 'north',
//		        html: '<h1 class="x-panel-header">Header will be here</h1>',
				html: 'Header will be here',
		        height:100
//		        border: false
			},body
//				{
//				region: 'west',
////				layoutConfig : {
////					align : 'stretch'
////				},
////		        collapsible: true,
//				layout: 'fit',
////		        title: 'Menular',
//		        width: 300,
//		        items: menuBar
////		        flex: 1
//			}
			,{
				region: 'south',
		        collapsible: false,
		        height: 100
			}
//			,content
//				{
//				region : 'center',
////				bodyStyle:'background:#f1f1f1',
////				layout: 'fit',
////				layoutConfig : {
////					align : 'stretch'
////				},
//				margins:'5 5 5 0',
////				width: 300,
//				html:'Ajax content will come here',
//				flex: 2
//				
//			}
			
			]
			
		});
		view.render('anasayfa');
		
});	