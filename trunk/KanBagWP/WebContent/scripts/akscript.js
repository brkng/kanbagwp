Ext.Ajax.timeout=60000; 

var tarih = new Date();
var saat = "";

//tarih fonksiyonlari
function gunArttir(tarih,gunAdedi){
		tarih.setDate(tarih.getDate()+gunAdedi);
		return tarih;
	}
function ayArttir(tarih,ayAdedi){
		tarih.setMonth(tarih.getMonth()+ayAdedi);
		return tarih;
	}
function yilArttir(tarih,yilAdedi){
		tarih.setYear(tarih.getFullYear()+yilAdedi);
		return tarih;
	}
function tarihAyarla(gun,ay,yil){
	var tarih = new Date();
		tarih.setDate(gun);
		tarih.setMonth(ay);
		tarih.setYear(yil);
		return tarih;
	}

function msyiGuneCevir(msniye)
{
	return msniye/1000/60/60/24;
}

function tarihFarkiGun(tarih1,tarih2){
	var sonuc=msyiGuneCevir(tarih2-tarih1);
	if(sonuc<0)
		sonuc=sonuc*-1;
	return sonuc;
}

function logout(){
	console.log("olduuuuu");
}
	
function lanKontrol(){
	Ext.Ajax.request({
		url		: 'lanKontrol.ajax',
		success	: function(o){
			var sonuc = eval("("+o.responseText+")");	
			if(document.getElementById("lanDurumu")!=null)
				document.getElementById("lanDurumu").src="../../images/online.png";
			tarih = sonuc.date;
			saat = sonuc.time;
			if(document.getElementById("durumBolgesiSaat")!=undefined)
				document.getElementById("durumBolgesiSaat").innerHTML=saat;
		},
		failure : function(){
			document.getElementById("lanDurumu").src="../../images/offline.png";	
		}
	});
	setTimeout("lanKontrol()",60000);
}
	lanKontrol();


function isdefined( variable)
{
    return (typeof(window[variable]) == "undefined")?  false: true;
}

 