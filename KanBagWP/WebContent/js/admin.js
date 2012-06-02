Ext.onReady(function(){
	Ext.QuickTips.init();
	
	this.bagisciekle = function()
	{
		var myWin= new Ext.Window({
			height		:	420,
			title		:	'Kayıt İşlemi',
			modal		:	true,
			resizable	:	false,
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
				store		:	['Ankara','İstanbul','Bursa','Çanakkale','Ağrı','İzmir','Bolu','Antalya']
			},{
				id			:	'ilce',
				xtype		:	'combo',
				fieldLabel	:	'İlçe',
				width		:	130,
				allowBlank  :   false,
				store		:	['Kadıköy','Umraniye','Uskudar','Taşdelen']
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
					//Kayıt İşlemleri
					Ext.Ajax.request({
    					url		: '../gen/yenikullaniciekle',
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
					
					
					//Kayıt işlemleri
				}
			}]
		});
		
		myWin.show();
	};
	
	this.istekgonder = function()
	{
		var istek= new Ext.Window({
			height		:	250,
			title		:	'Kan İsteği Oluştur',
			modal		:	true,
			resizable	:	false,
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
		                                           	    type : 'string'
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
		                                           		 	header : 'Semt',
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
		    url : 'isteklericek',
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
		    header : 'Hastane Id',
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
	
	var bagisciekle = new Ext.Panel({
		title: '<a style="color: #FFFFFF;text-decoration:none;" href="#"  onClick="bagisciekle();" >Yeni Bağışçı Ekle</a>',
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
		items : [kullanicilar, hastaneler, istekler,istekgonder,bagisciekle],
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

    var resim =new Ext.Panel({
    	border: false,
    	html: '<p align="center"><img width=280 height=620 src="../images/doctor.jpg" /></p>'
    });

	var menuBar2 = new Ext.Panel({
		autoScroll: true,
		defaults: {autoScroll: true},
		collapsible:false,
		split:true,
		bodyStyle:'padding:5px;font-size:12px;background-color:#ffffff;',
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
		split:false,
		items:[resim]
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
		    		   //content.load({ url: 'anaicerik', nocache: true, timeout: 30, scripts: true });
		    	   }
		       },
		       {
		    	   text: '<b>Hakkımızda</b>',
		    	   iconCls: 'bmenu', 
		    	   handler: function(){  }
		       },
		       {
		    	   text: '<b>Duyurular</b>',
		    	   iconCls: 'bmenu', 
		    	   handler: function(){ 
		    	   }
		       },
		       {
		    	   text: '<b>Çıkış Yap</b>',
		    	   iconCls: 'bmenu',  // <-- icon
		    	   handler: function(){
						Ext.Ajax.request({
							url		: 'cikis',
							success : function(response) {
								window.location = '../gen/anasayfa';
							},
							failure : function(response) {
								
							}	
						});
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