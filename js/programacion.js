	//var zonaActuacion;

	$(document).ready(function(){


		var botones = document.querySelectorAll("input");

		for(var i=0;botones.length;i++){

			botones[i].addEventListener("click",modo_lectura,false);

		}


	});

	function modo_lectura(e){

		var zonaActuacion;

		if(e.target==lectura1)
		{
			zonaActuacion="#noticia1";
		}
		else if(e.target==lectura2)
		{
			zonaActuacion="#noticia2";
		}
		else if(e.target==lectura3)
		{
			zonaActuacion="#noticia3";
		}
		
		var tamDefecto=$(zonaActuacion).css("font-size");

		tamDefecto=parseFloat(tamDefecto);

		$(zonaActuacion).css({"background-color": "#000",
							 "font-size": "20px",
							 "text-align":"justify",
							"color":"#FFF"});	
		
	}

