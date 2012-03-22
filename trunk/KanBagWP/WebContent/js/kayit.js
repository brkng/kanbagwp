	function deneme1()
	{
		var myWin= new Ext.Window({
			height		:	300,
			title		:	'Kayıt İşlemi',
			modal		:	true,
			resizable	:	false,
			draggable	:	false,
			width		:	260,
			layout		:	'form',
			bodyStyle	:	'padding : 10px',
		    buttonAlign : 'center',
			labelWidth	:	80,
			defaultType	:	'field',
			items		:	[{
				fieldLabel	:	'Ad',
				width		:	130
			},{
				fieldLabel	:	'TC Kimlik No',
				width		:	130
			},{
				fieldLabel	:	'Telefon',
				width		:	130
			},{
				xtype		:	'combo',
				fieldLabel	:	'Kan Grubu',
				width		:	50,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				fieldLabel	:	'E-posta',
				width		:	130
			},{
				fieldLabel	:	'Adres',
				xtype		:	'textarea',
				width		:	130,
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
	
	Ext.onReady(deneme1);