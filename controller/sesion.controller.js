$(document).ready(()=> {

  const cerrar_sesion = () => {
    opening();
    let dato = new FormData();
    dato.append('funcion', 'cerrar_sesion')
    fetch('model/login.model.php',{
      method: 'post',
      body: dato
    }).then(respuesta => respuesta.json())
    .then(respuesta => {
      ending();
      if(respuesta === "2"){
        swal({
          icon: "success",
          title: "Cerrando sesion...",
          html: true,
          text: '\n\n Estas siendo redirigido automaticamente...',
          closeOnClickOutside: false,
          closeOnEsc: false,
          value: true,
          buttons: false,
          timer: 1500
        }).then((value) => {
          window.location = "login";
        });
      }
    }).catch((error) => {
      ending()
      console.log("tenos un error: " + error)
    });
  }
  
  $('#btn_cerrar_sesion').on('click', (e) => { 
		cerrar_sesion();
	});  
});