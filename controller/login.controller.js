$(document).ready(() => {

  /* const iniciar_sesion = (datos_formulario) => {
		opening();
		fetch('model/login.model.php',{
			method: 'post',
			body: datos_formulario 
		}).then(respuesta => respuesta.json())
		.then(respuesta => {
			ending();
      if (respuesta === "2") {
        swal({
          icon: "success",
          title: "Credenciales de acceso validas!",
          html: true,
          text: '\n\n Estas siendo redirigido automaticamente...',
          closeOnClickOutside: false,
          closeOnEsc: false,
          value: true,
          buttons: false,
          timer: 1500
        }).then((value) => {
          window.location = "home";
        });
      } else {
        msj_error("Usuario o contraseña incorrectos! "+respuesta);
        return false;
      }
		});
	} */

  $('#frm_login').on('submit', (e) => {
		e.preventDefault();
		let datos = new FormData($('#frm_login')[0]);
    datos.append('funcion', "iniciar_sesion");
    validar_campo(['usuario','password'] , "vacios", "");
		//iniciar_sesion(datos);
    const ejecucion = new Consultas("login", datos);
    ejecucion.consulta();
	});
});