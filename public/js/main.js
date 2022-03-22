$(document).ready(() => {
	let altura = $('.menu').offset().top;
	$(window).on('scroll', () => {
		if ($(window).scrollTop() > altura) {
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});

window.onload = () => {
	var carga = document.getElementById('contenedor');
	carga.style.visibility = 'hidden';
	carga.style.opacity = '0';
}

const opening = () => {
	$("#contenedor2").css("visibility", "visible");
	$("#contenedor2").css("opacity", "100");
}

const ending = () => {
	$("#contenedor2").css("visibility", "hidden");
	$("#contenedor2").css("opacity", "0");
}

const msj_error = (msj) => {
	swal({
		title: "Error!",
		text: msj,
		icon: "warning",
		button: "Aceptar",
	});
}

const msj_ = (titulo, conty) => {
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
}

let restriccion = {
	"vacios": {
		"expresion": /^$/,
		"msj1": "No puedes dejar vacio en el campo ",
		"msj2": "No puedes dejar campos vacios!"
	},
	"letras": {
		"expresion": /^([a-záéíóú]+[\s]?)/i,
		"msj1": "Solo puedes ingresar letras en el campo ",
		"msj2": "Solo puedes ingresar letras!"
	},
	"numeros": {
		"expresion": /[^0-9+]/g,
		"msj1": "Solo puedes ingresar numeros en el campo ",
		"msj2": "Solo puedes ingresar numeros!"
	},
	"espacios": {
		"expresion": /^\s+$/,
		"msj1": "No puedes ingresar espacios  en el campo ",
		"msj2": "No puedes ingresar espacios!"
	},
	"email": {
		"expresion": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
		"msj1": "Estructura de correo no valida!",
		"msj2": "Estructura de correo no valida!"
	},
	"pagina_web": {
		"expresion": /^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/,
		"msj1": "Estructura de pagina web no valida!",
		"msj2": "Estructura de pagina web no valida!"
	},
};

const validar_campo = (input, tipo_validacion, msj) => {
	if (Array.isArray(input)) {
		for (i = 0; i < input.length; i++) {
			let valor = $('#' + input[i]).val();
			if (restriccion[tipo_validacion]['expresion'].test(valor)) {
				msj_error(msj != "" ? msj : restriccion[tipo_validacion]['msj1'] + input[i]);
				return false;
			}
		}
	} else {
		let valor = $('#' + input).val();
		if (restriccion[tipo_validacion]['expresion'].test(valor)) {
			msj_error(msj != "" ? msj : restriccion[tipo_validacion]['msj1'] + input);
			return false;
		} else {
			return true;
		}
	}
}



class Consultas {
	constructor(modelo, formulario) {
		this.modelo = modelo;
		this.formulario = formulario;
	}

	consulta() {
		opening();
		fetch(`model/${this.modelo}.model.php`, {
				method: 'post',
				body: this.formulario
			}).then(respuesta => respuesta.json())
			.then(respuesta => {
				ending();
				if (respuesta === "2") {
					
				} else {
					msj_error("Usuario o contraseña incorrectos! ");
				}
			}).catch(error => {
				msj_error(`${error}`);
			});
	}
}