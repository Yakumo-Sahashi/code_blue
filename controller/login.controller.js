$(document).ready(() => {
  caracter_minus('usuario')
  $('#frm_login').on('submit', (e) => {
    e.preventDefault();
    let datos = new FormData($('#frm_login')[0]);
    datos.append('funcion', "iniciar_sesion");
    if (validar_campo(['usuario','password'],'vacios')) {
      const ejecucion = new Consultas("login", datos);
      ejecucion.sesion();
    }
  });
});