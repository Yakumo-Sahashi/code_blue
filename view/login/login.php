<?php 
	$title = 'Login'; 
	require_once 'model/redireccion.php';
	if (Sesion::validar_sesion()){
		Redireccion::redirigir("home");
	}
?>
<div class="container py-4">
	<div class="row justify-content-around text-center">
		<div class="col-md-4 py-2 rounded bg-light border shadow">
			<h1 class="mt-3 text-uppercase">Login</h1>
			<hr class="bg-primary">
			<img class="mb-2" src="<?=DEP_IMG?>favicon.png" width="250px" height="250px">
			<form id="frmLogin" class="form-grup mb-3 ml-3 mr-3">
				<div class="input-group mb-2">
					<span class="input-group-text borde-left"><i class="fas fa-user-alt"></i></span>
					<input type="text" class="form-control input borde-right" name="usuario" id="usuario" required  placeholder="Usuario">
				</div>
				<div class="input-group mb-3">
					<span class="input-group-text borde-left"><i class="fas fa-lock"></i></span>
					<input type="password" class="form-control input borde-right" name="password" id="password" required  placeholder="Contraseña">
				</div>
				 
				<div class="py-1">
					<button type="button" class="btn btn-blue btn-block mb-2" id="btnSesion">Iniciar Sesion</button>
					<a href="#" class="btn btn-blue btn-block mb-2">Registrarse</a>
				</div>
			</form>
		</div>
	</div>
</div>
<script src="<?=CONTROLLER?>controller_login.js"></script>