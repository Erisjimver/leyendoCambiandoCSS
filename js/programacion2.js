	//var zonaActuacion;

	$(document).ready(function(){
		//var colorFondo=$("#primer_parrafo").css("background-color");
		//var colorFondo=$("#primer_parrafo").css("border"."2px dotted blue");

		var botones = document.querySelectorAll("input");

		for(var i=0;botones.length;i++){

			botones[i].addEventListener("click",aumentar,false);
			botones[i].addEventListener("click",disminuir,false);

		}
		//document.getElementById("aumenta1").addEventListener("click",aumentar,false);
		//document.getElementById("disminuye1").addEventListener("click",disminuir,false);

		//document.getElementById("aumenta2").addEventListener("click",aumentar,false);
		//document.getElementById("disminuye2").addEventListener("click",disminuir,false);

		//document.getElementById("aumenta3").addEventListener("click",aumentar,false);
		//document.getElementById("disminuye3").addEventListener("click",disminuir,false);

	});

	function aumentar(e){

		var zonaActuacion;

		if(e.target==aumenta1)
		{
			zonaActuacion="#noticia1";
		}
		else if(e.target==aumenta2)
		{
			zonaActuacion="#noticia2";
		}
		else if(e.target==aumenta3)
		{
			zonaActuacion="#noticia3";
		}
		
		var tamDefecto=$(zonaActuacion).css("font-size");

		//tamDefecto=parseInt(tamDefecto);//si se habilita parseInt se debe cambiar el valor de la multiplicacion por 1.05
		tamDefecto=parseFloat(tamDefecto);

		$(zonaActuacion).css("font-size", tamDefecto*1.05);	
		
	}

	function disminuir(e){
		var zonaActuacion;

		if(e.target==disminuye1)
		{
			zonaActuacion="#noticia1";
		}
		else if(e.target==disminuye2)
		{
			zonaActuacion="#noticia2";
		}
		else if(e.target==disminuye3)
		{
			zonaActuacion="#noticia3";
		}

		var tamDefecto=$(zonaActuacion).css("font-size");

		//tamDefecto=parseInt(tamDefecto);//si se habilita parseInt se debe cambiar el valor de la multiplicacion por 1.05
		tamDefecto=parseFloat(tamDefecto);

		$(zonaActuacion).css("font-size", tamDefecto*0.95);	
		
	}