	function deneme1()
	{
		Ext.QuickTips.init();
		
		Ext.apply(Ext.form.VTypes, {
			passwordCheck: function(val, field) {
				if (field.initialPassField) {
					var pwd = Ext.getCmp(field.initialPassField);
					return (val == pwd.getValue());
				}
				return true;
			},
			passwordCheckText: 'What are you doing?<br/>The passwords entered do not match!'
		});
		
		
		var myWin= new Ext.Window({
			height		:	400,
			title		:	'Kayıt İşlemi',
			modal		:	true,
			resizable	:	false,
			draggable	:	false,
			closable	:	false,
			width		:	260,
			layout		:	'form',
			bodyStyle	:	'padding : 10px',
		    buttonAlign : 'center',
			labelWidth	:	80,
			defaultType	:	'field',
			items		:	[{
				fieldLabel	:	'Ad',
				width		:	130,
				allowBlank:     false

			},{
				fieldLabel	:	'TC Kimlik No',
				name: 'tcKimlik',
				allowBlank: false,
				width		:	130,
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
            		xtype:	'textfield',
            		fieldLabel:	'Şifre',
            		id:'pwd',
            		inputType:'password',
            		width:	130
            },{
            		xtype:	'textfield',
            		id: 'pwd-confirm',
            		fieldLabel:	'Şifre Tekrar',
            		inputType:'password',
            		vType: 'passwordCheck',
            		initialPassField: 'pwd',
            		width:	130
            },{
				xtype		:	'combo',
				fieldLabel	:	'Semt',
				width		:	130,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				xtype		:	'combo',
				fieldLabel	:	'İl',
				width		:	130,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				xtype		:	'combo',
				fieldLabel	:	'İlçe',
				width		:	130,
				store		:	['0 Rh (+)','0 Rh (-)','A Rh (+)','A Rh (-)','B Rh (+)','B Rh (-)','AB Rh (+)','AB Rh (-)']
			},{
				fieldLabel	:	'Adres',
				xtype		:	'textarea',
				width		:	130
			}],
			buttons			:	[{
				xtype		:	'button',
				text		:	'Kaydol',
				handler		:	function(){
					
		        		myWin.getForm().getEl().dom.action = 'register';
		        		myWin.getForm().getEl().dom.method = 'POST';
		        		myWin.getForm().submit();
					
				}
			}]
		});
		
		myWin.show();
		
	}
	
	Ext.onReady(deneme1);