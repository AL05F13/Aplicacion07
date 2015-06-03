// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	var= basedatos= window.sqlitePlugin.openDatabase({name:"coloresBD.db",createFromLocation:1});
	audio= window.plugins.LowLatencyAudio;
	audio.preloadFX ('B1' , audio/C.mp3' , function(){},
	function (msg){ alert("Error "+msg);});
	audio.preloadFX ('B2' , audio/D.mp3' , function(){},
	function (msg){ alert("Error "+msg);});
	audio.preloadFX ('B3' , audio/E.mp3' , function(){},
	function (msg){ alert("Error "+msg);});
	audio.preloadFX ('B4' , audio/F.mp3' , function(){},
	function (msg){ alert("Error "+msg);});
	
	$('#btnjugar').on('tap',function(){
		var pantalla = $.mobile.getScreenHeight();
		var encabezado = $('.ui-header').outerHeight(); 
		var pie = $('.ui-footer').outerHeight();
		var contenido = $('.ui-content').outerHeight();
		var alto = (pantalla- encabezado - pie) / 2;
		$('.cuadro').height(alto);
		//alert('Pantalla '+ pantalla);
		//alert('Encabezado '+ encabezado);
});//btnjugar.click
    
	function quien (q)
	{
		return q.substring(1);
	}
	
   $('.cuadro').on('vmousedown',function(){
	   $('#pantalla').append(quien($(this).attr('id')));
	   $(this).addClass('pulsado');
   });
   
   
    $('.cuadro').on('vmouseup',function(){
	   $(this).removeClass('pulsado');
   });
}); 
});

