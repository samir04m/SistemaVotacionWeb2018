$(function(){
	// $('#card-login').fadeIn(1500);

	// $('#btnLogin').click(function(){
	// 	var cedula = $('#cedula').val();
	// 	var contrasena = $('#contrasena').val();
	// 	var seEncontro = false;
		
	// 	$.each(json.usuarios, function(indice, elemento){
	// 		if (elemento.cedula == cedula){
	// 			seEncontro = true;
	// 			if (elemento.contrasena == contrasena){

	// 				if (elemento.tipo == "jurado"){
	// 					location.href = "paginas/vista-jurado.html";
	// 				}
	// 				if (elemento.tipo == "votante"){
	// 					location.href = "paginas/vista-votante.html";
	// 				}
	// 				return;
	// 			}else{
	// 				mostrarModal("Contraseña incorrecta", "La contraseña ingresada es incorrecta.");
	// 			}
	// 		}
	// 	});
	// 	if (!seEncontro) {
	// 		mostrarModal("Usuario no encontrado", "No existe un usuario con este número cedula");
	// 	}

	// });

	$('a#recordarDatos').click(function() {
		var pMensajeModal = $('#mensaje-modal');
		var lista = JSON.stringify(json.usuarios);
		mostrarModal("Usuarios Registrados", lista);
	});

});

$('.modal').modal();

function mostrarModal(titulo, mensaje){
	$('#titulo-modal').text(titulo);
	$('#mensaje-modal').text(mensaje);
	$('#myModal').modal('open');
}
