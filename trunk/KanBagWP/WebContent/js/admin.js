Ext.onReady(function(){
//var topHTML = '<img style="margin-left: 5px" src="Google_maps_logo.png" alt="logo" height="60" width="380">';
//Ext.BLANK_IMAGE_URL = 'extjs/resources/images/default/s.gif';

		Ext.QuickTips.init();
		
		
		//Grid Panel Kullanıcılar için///
	this.kullanicitablosu = function() {



    var remoteProxy = new Ext.data.ScriptTagProxy({
        url : 'http://extjsinaction.com/dataQuery.php'
    });

    var recordFields = [
        { name : 'id',          mapping : 'id'          },
        { name : 'firstname',   mapping : 'firstname'   },
        { name : 'lastname',    mapping : 'lastname'    },
        { name : 'street',      mapping : 'street'      },
        { name : 'city',        mapping : 'city'        },
        { name : 'state',       mapping : 'state'       },
        { name : 'zip',     mapping : 'zip'         },
        { name : 'newRecordId', mapping : 'newRecordId' },
        { name : 'newRecordId', mapping : 'newRecordId' }
    ];


    var remoteJsonStore = new Ext.data.JsonStore({
        proxy           : remoteProxy,
        storeId         : 'ourRemoteStore',
        root            : 'records',
        autoLoad        : false,
        totalProperty   : 'totalCount',
        remoteSort      : true,
        fields          : recordFields,
        idProperty      : 'id'
    });

    var textFieldEditor = new Ext.form.TextField();

    var comboEditor = {
        xtype         : 'combo',
        triggerAction : 'all',
        displayField  : 'state',
        valueField    : 'state',
        store         : {
            xtype  : 'jsonstore',
            root   : 'records',
            fields : ['state'],
            proxy  :  new Ext.data.ScriptTagProxy({
               url :  'http://extjsinaction.com/getStates.php'
            })
        }
    };

    var numberFieldEditor = {
        xtype     : 'numberfield',
        minLength : 5,
        maxLength : 5
    };

    var columnModel = [
        {
            header    : 'Ad Soyad',
            dataIndex : 'lastname',
            sortable  : true,
            editor    : textFieldEditor
        },
        {
            header    : 'Telefon',
            dataIndex : 'firstname',
            sortable  : true,
            editor    : textFieldEditor
        },
        {
            header    : 'Adres',
            dataIndex : 'street',
            sortable  : true,
            editor    : textFieldEditor
        },
        {
            header    : 'kan Grubu',
            dataIndex : 'city',
            sortable  : true,
            editor    : textFieldEditor
        },
        {
            header    : 'Hastane',
            dataIndex : 'state',
            sortable  : true,
            editor    : comboEditor
        },
        {
            header    : 'Son Bağış',
            dataIndex : 'zipcode',
            sortable  : true,
            editor    : numberFieldEditor
        },
        {
            header    : 'Semt',
            dataIndex : 'zipcode',
            sortable  : true,
            editor    : numberFieldEditor
        },
        {
            header    : 'Email',
            dataIndex : 'zipcode',
            sortable  : true,
            editor    : numberFieldEditor
        }
    ];

    var onSave = function() {
        var modified = remoteJsonStore.getModifiedRecords({
            newRecordId : Ext.id()
        });

        if (modified.length > 0) {
            var recordsToSend = [];
            Ext.each(modified, function(record) {
                recordsToSend.push(record.data);
            });

            var grid = Ext.getCmp('myEditorGrid');
            grid.el.mask('Updating', 'x-mask-loading');
            grid.stopEditing();

            recordsToSend = Ext.encode(recordsToSend);
            Ext.Ajax.request({
                url     : 'successTrue.js',
                params  : {
                    records : recordsToSend
                },
                success : function(response) {
                    grid.el.unmask();
                    remoteJsonStore.commitChanges();

                    var result = Ext.decode(response.responseText);
    //                Ext.each(result.records, function(o) {
    //                    var rIndex = remoteJsonStore.find('newRecordId', o.newRecordId);
    //                    var record = remoteJsonStore.getAt(rIndex);
    //
    //                    /record.set('id', o.id);
    //                    delete record.data.newRecordId;
    //                })

                }
            });
        }
    };

    var onRejectChanges = function() {
        remoteJsonStore.rejectChanges();
    };


    var pagingToolbar = {
        xtype       : 'paging',
        store       : remoteJsonStore,
        pageSize    : 50,
        displayInfo : true,
        items       : [
            '-',
            {
                text    : 'Save Changes',
                handler : onSave
            },
           '-',
            {
                text    : 'Reject Changes',
                handler : onRejectChanges
            },
            '-'
        ]
    };

    var doDelete = function(rowToDelete) {
        var grid  = Ext.getCmp('myEditorGrid');
        var recordToDelete = grid.store.getAt(rowToDelete);

        if (recordToDelete.phantom) {
           grid.store.remove(recordToDelete);
           return;
        }

        grid.el.mask('Updating', 'x-mask-loading');

        Ext.Ajax.request({
            url    : 'successTrue.js',
            params :  {
                rowToDelete  : recordToDelete.id
            },
            success : function() {
                grid.store.remove(recordToDelete);
                grid.el.unmask();
    /*
                // For animated
                var row = grid.getView().getRow(rowToDelete);
                Ext.get(row).ghost('t',{
                    callback : function() {
                        grid.store.remove(recordToDelete);
                    }
                })
    */
            }
        });

    };


    var onDelete = function() {
        var grid     = Ext.getCmp('myEditorGrid');
        var selected = grid.getSelectionModel().getSelectedCell();

        Ext.MessageBox.confirm(
            'Confirm delete',
            'Are you sure?',
            function(btn) {
                if (btn == 'yes') {
                    doDelete(selected[0]);
                }
            }
        );

    };


    var onInsertRecord = function() {
        var newRecord        = new remoteJsonStore.recordType({
            newRecordId : Ext.id()
        });
        var grid             = Ext.getCmp('myEditorGrid');
        var selectedCell     = grid.getSelectionModel().getSelectedCell();
        var selectedRowIndex = selectedCell[0];

        grid.stopEditing();
        remoteJsonStore.insert(selectedRowIndex, newRecord);
        grid.startEditing(selectedRowIndex,0);
    };

    var doCellCtxMenu = function(editorGrid, rowIndex, cellIndex, evtObj) {
       evtObj.stopEvent();

      var record = editorGrid.getStore().getAt(rowIndex);

       if (! editorGrid.rowCtxMenu) {
           editorGrid.rowCtxMenu = new Ext.menu.Menu({
               items : [
                    {
                        text    : 'Insert Record',
                        handler : onInsertRecord
                    },
                    {
                        text    : 'Delete Record',
                        handler : onDelete
                    }
               ]
           });
       }
       editorGrid.getSelectionModel().select(rowIndex,cellIndex);
       editorGrid.rowCtxMenu.showAt(evtObj.getXY());
    };

    var grid = {
        xtype      : 'editorgrid',
        columns    : columnModel,
        id         : 'myEditorGrid',
        store      : remoteJsonStore,
        loadMask   : true,
        bbar       : pagingToolbar,
        stripeRows : true,
        viewConfig : {
            forceFit : true
        },
        listeners        : {
            cellcontextmenu : doCellCtxMenu,
            destroy         : function(thisGrid) {
               if (thisGrid.rowCtxMenu) {
                   thisGrid.rowCtxMenu.destroy();
               }
           }
        }
    };

    var kullanicigridi = new Ext.Panel({
        height  : 700,
        width   : 950,
        border  : false,
        layout  : 'fit',
        items   : grid
    })


    remoteJsonStore.load({
         params : {
             start : 0,
             limit : 50
         }
    });

    content.add(kullanicigridi);
    content.doLayout();
}
		//END////////////////////////////
		
		
		
		
		
		
		
		this.sss = function(){
       		//content.load({ url: 'sss.html', nocache: true, timeout: 30, scripts: true });
   		};

        var kullanicilar = new Ext.Panel({
            title: '<a style="color: #FFFFFF;text-decoration:none;" href="#"  onClick="kullanicitablosu();" >Kullanıcılar</a>',
            collapsible	:false,
            titleCollapse: false 		
        });
        
        var hastaneler = new Ext.Panel({
            title: '<a style="color: #FFFFFF;text-decoration:none;" href="#"  onClick="sss();" >Hastaneler</a>',
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
			items : [kullanicilar, hastaneler],
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
			}
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
		        bodyStyle:'padding:10px;font-size:12px;background-color:#E6E6E2;',
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