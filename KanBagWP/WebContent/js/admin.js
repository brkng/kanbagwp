Ext.onReady(function(){
	Ext.QuickTips.init();
	
	this.istekgonder = function()
	{
		var istek= new Ext.Window({
			height		:	250,
			title		:	'Kan İsteği Oluştur',
			modal		:	true,
			resizable	:	false,
			draggable	:	false,
			width		:	260,
			layout		:	'form',
			bodyStyle	:	'padding : 10px',
		    buttonAlign : 'center',
			labelWidth	:	80,
			defaultType	:	'textfield',
			items		:	[{
				id			:	'kangrubu',
				xtype		:	'combo',
				fieldLabel	:	'Kan Grubu',
				width		:	50,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				id			:	'sure',
				fieldLabel	:	'Süre (Gün)',
				xtype		:	'numberfield',
				width		:	130
			},{
				id			:	'hastaneid',
				fieldLabel	:	'Hastane ID',
				xtype		:	'numberfield',
				width		:	130
			},{
            	id			:	'semt',
				xtype		:	'combo',
				fieldLabel	:	'Semt',
				width		:	130,
				allowBlank  :   false,
				store		:	['Göztepe','BeylerBeyi','Bakırkoy','YeniMahalle','Semt2','Semt5','Semt6','Semt7']
			},
			{
				id			:	'isteknotu',
				fieldLabel	:	'İstek Notu',
				xtype		:	'textarea',
				width		:	130
			}
			],
			buttons			:	[{
				xtype		:	'button',
				text		:	'Gönder',
				handler		:	function(btn){
					Ext.Ajax.request({
    					url		: 'istekolustur',
    					params	: {
    						kangrubu:Ext.getCmp('kangrubu').getValue(),
    						isteknotu:Ext.getCmp('isteknotu').getValue(),
    						hastaneid:Ext.getCmp('hastaneid').getValue(),
    						sure:Ext.getCmp('sure').getValue(),
    						semt:Ext.getCmp('semt').getValue()
    					},
    					success : function(response) {
    						Ext.MessageBox.alert("","İstek Oluşturuldu!");
    						istek.close();
    					},
    					failure : function(response) {
    						Ext.MessageBox.alert("","Bir Hata Oluştu");
    						istek.close();
    					}	
    				});
				}
			}]
		});
		
		istek.show();
	};


	//Grid Panel Kullanıcılar için///
	this.kullanicitablosu = function() {

		var KanBagiscisi = new Ext.data.Record.create([
		                                           	{
		                                           	    name : 'kid'
		                                           	}, {
		                                           	    name : 'isimsoyisim',
		                                           	    type : 'string'
		                                           	}, {
		                                           	    name : 'adres',
		                                           	    type : 'string'
		                                           	},{
		                                           	    name : 'telefonnumarasi',
		                                           	    type : 'string'
		                                           	},{
		                                           	    name : 'kangrubu',
		                                           	    type : 'string'
		                                           	},{
		                                           	    name : 'hastaneid',
		                                           	    type : 'int'
		                                           	},{
		                                           	    name : 'sonkanbagistarihi',
		                                           	    type : 'date',
		                                           	    dateFormat:'Y-m-d'
		                                           	},{
		                                           	    name : 'semtid',
		                                           	    type : 'int'
		                                           	},{
		                                           	    name : 'email',
		                                           	    type : 'string'
		                                           	}
		                                           	]);

		                                           	var reader = new Ext.data.JsonReader({
		                                           		idProperty: 'kid',
		                                           		root: 'data',
		                                           		successProperty: 'success'
		                                           	}, KanBagiscisi); 


		                                           	var store = new Ext.data.Store({
		                                           		url : 'loadStore',
		                                           		id: 'kid',
		                                           		reader:reader,
		                                           		autoLoad:true,
		                                           		fields : KanBagiscisi,
		                                           		pruneModifiedRecords : true

		                                           	}); 

		                                           	var sm = new Ext.grid.RowSelectionModel();

		                                           	var cm = new Ext.grid.ColumnModel([
		                                           	new Ext.grid.RowNumberer(), 
		                                           	{
		                                           		header : 'ID',
		                                           	    dataIndex : 'kid',
		                                           	    width:20,
		                                           	    sortable : true
		                                           	}, {
		                                           		header : 'Ad Soyad',
		                                           		dataIndex : 'isimsoyisim',
		                                           	    sortable : true
		                                           	}, {
		                                           	    header : 'Adres',
		                                           	    dataIndex : 'adres',
		                                           	    sortable : true
		                                           	 }, {
		                                           	    header : 'GSM',
		                                           	    dataIndex:'telefonnumarasi',
		                                           	    sortable:true,
		                                           	    
		                                           	 }, {
		                                           		    header : 'Kan Grubu',
		                                           		    dataIndex : 'kangrubu',
		                                           		    sortable : true
		                                           	 }, {
		                                           		    header : 'Hastane ID',
		                                           		    dataIndex : 'hastaneid',
		                                           		    sortable : true
		                                           	 }, {
		                                           		    header : 'Son Kan Bagis',
		                                           		    dataIndex : 'sonkanbagistarihi',
		                                           		    sortable : true,
		                                           		    renderer: Ext.util.Format.dateRenderer('Y-m-d')
		                                           	 }, {
		                                           		 	header : 'Semt ID',
		                                           		 	dataIndex : 'semtid',
		                                           		 	sortable : true
		                                           	 }, {
		                                           		    header : 'Email',
		                                           		    dataIndex : 'email',
		                                           		    sortable : true
		                                           	 }]);

		                                           	var btnRefresh = new Ext.Button({
		                                           		text : 'Refresh',
		                                           		handler : function() {
		                                           			store.reload();
		                                           		}
		                                           	});
		                                           	
		                                           	var Bagiscigrid = new Ext.grid.EditorGridPanel({
		                                           		stripeRows : true,
		                                           		columnLines:true,
		                                           		frame : true,
		                                           		loadMask : {
		                                           			msg : 'Yukleniyor...'
		                                           		},
		                                           		clicksToEdit : 2,
		                                           		trackMouseOver : false,
		                                           		title : 'Grid',
		                                           		store : store,
		                                           		cm : cm,
		                                           		sm : sm,
		                                           		height : 400,
		                                           		fbar : [btnRefresh],
		                                           		viewConfig : {
		                                           			enableRowBody : true,
		                                           			forceFit: true,
		                                           			emptyText : 'Sergilenecek Kayit Bulunamadi '
		                                           		}
		                                           	});

		content.removeAll(true);
		content.add(Bagiscigrid);
		content.doLayout();
	};
	//END////////////////////////////


///////////////////////Grid panel Hastaneler için///////////////////////////////////////////////
	this.hastanetablosu = function() {
		var Hastane = new Ext.data.Record.create([
			{
			    name : 'hid'
			}, {
			    name : 'isim',
			    type : 'string'
			}, {
			    name : 'adres',
			    type : 'string'
			},{
			    name : 'bashekimid',
			    type : 'int'
			},{
			    name : 'telefon',
			    type : 'string'
		}]);

		var reader = new Ext.data.JsonReader({
			idProperty: 'hid',
			root: 'data',
			successProperty: 'success'
		}, Hastane); 


		var store = new Ext.data.Store({
			url : 'hastanebilgilerinigetir',
			id: 'hid',
			reader:reader,
			autoLoad:true,
			fields : Hastane,
			pruneModifiedRecords : true
		}); 

		var sm = new Ext.grid.RowSelectionModel();

		var cm = new Ext.grid.ColumnModel([
			                                           	
		new Ext.grid.RowNumberer(), 
		{
			header : 'ID',
			dataIndex : 'hid',
			width:20,
			sortable : true
		}, {
			header : 'İsim',
			dataIndex : 'isim',
			sortable : true
		}, {
			header : 'Adres',
			dataIndex : 'adres',
			sortable : true
		}, {
			header : 'Telefon',
			dataIndex:'telefon',
			sortable:true                                           	    
		}, {
			header : 'Bas Hekim ID',
			dataIndex : 'bashekimid',
			sortable : true
		}]);

		var btnRefresh = new Ext.Button({
			text : 'Refresh',
			handler : function() {
			   store.reload();
			}
		});
			                                           	
		var Hastanegrid = new Ext.grid.EditorGridPanel({
			stripeRows : true,
			columnLines:true,
			frame : true,
			loadMask : {
			   msg : 'Yukleniyor...'
			},
			clicksToEdit : 2,
			trackMouseOver : false,
			title : 'Hastaneler',
			store : store,
			cm : cm,
			sm : sm,
			height : 400,
			fbar : [btnRefresh],
			viewConfig : {
			    enableRowBody : true,
			    forceFit: true,
			    emptyText : 'Sergilenecek Kayit Bulunamadi '
			}
		});

		content.removeAll(true);
		content.add(Hastanegrid);
		content.doLayout();
	};
////////////////////////END/////////////////////////////////////////////////////////////////////



//	Kan istekleri///////////////////////////////////////////////////////////////////////////////////
	this.istektablosu = function() {



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
		                	   header    : 'Koyulduğu Tarih',
		                	   dataIndex : 'lastname',
		                	   sortable  : true,
		                	   editor    : textFieldEditor
		                   },
		                   {
		                	   header    : 'Kaldırıldığı Tarih',
		                	   dataIndex : 'firstname',
		                	   sortable  : true,
		                	   editor    : textFieldEditor
		                   },
		                   {
		                	   header    : 'İstek Notu',
		                	   dataIndex : 'street',
		                	   sortable  : true,
		                	   editor    : textFieldEditor
		                   },
		                   {
		                	   header    : 'Hastane',
		                	   dataIndex : 'city',
		                	   sortable  : true,
		                	   editor    : textFieldEditor
		                   },
		                   {
		                	   header    : 'Kan Grubu',
		                	   dataIndex : 'state',
		                	   sortable  : true,
		                	   editor    : comboEditor
		                   },
		                   {
		                	   header    : 'Süre',
		                	   dataIndex : 'state',
		                	   sortable  : true,
		                	   editor    : comboEditor
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

		var istekgridi = new Ext.Panel({
			title: 'Kan İstekleri',
			height  : 700,
			width   : 950,
			border  : false,
			layout  : 'fit',
			items   : grid
		});


		remoteJsonStore.load({
			params : {
				start : 0,
				limit : 50
			}
		});

		content.removeAll(true);
		content.add(istekgridi);
		content.doLayout();
	};
//	END/////////////////////////////////////////////////////////////////////////////////////////////




	this.sss = function(){
		//content.load({ url: 'sss.html', nocache: true, timeout: 30, scripts: true });
	};

	var kullanicilar = new Ext.Panel({
		title: '<a style="color: #FFFFFF;text-decoration:none;" href="#"  onClick="kullanicitablosu();" >Kullanıcılar</a>',
		collapsible	:false,
		titleCollapse: false 		
	});

	var hastaneler = new Ext.Panel({
		title: '<a style="color: #FFFFFF;text-decoration:none;" href="#"  onClick="hastanetablosu();" >Hastaneler</a>',
		collapsible	:false,
		titleCollapse: false 		
	});

	var istekler = new Ext.Panel({
		title: '<a style="color: #FFFFFF;text-decoration:none;" href="#"  onClick="istektablosu();" >Kan İstekleri</a>',
		collapsible	:false,
		titleCollapse: false 		
	});
	
	var istekgonder = new Ext.Panel({
		title: '<a style="color: #FFFFFF;text-decoration:none;" href="#"  onClick="istekgonder();" >İstek Oluştur</a>',
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
		items : [kullanicilar, hastaneler, istekler,istekgonder],
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
		    	   text: '<b>Yardım</b>',
		    	   iconCls: 'bmenu',  // <-- icon
		    	   handler: function(){
		    		   content.load({ url: 'resources/static/yardim.html', nocache: true, timeout: 30, scripts: true }); 
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