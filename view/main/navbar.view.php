<?php require_once 'model/sesion.model.php';?>
<nav class="navbar navbar-expand-lg navbar-light bg-primary menu">
  <div class="container text-center">
    <a class="navbar-brand text-white" href="<?=Router::redirigir('home')?>"><img loading="lazy" src="<?=DEP_IMG?>favicon.png" width="30px"
      height="30px"> Code Blue</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="btn btn-primary" href="<?=Router::redirigir('home')?>">
            <i class="fs-5 bi bi-house"></i> Inicio
          </a>
        </li>  
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <?=Sesion::obtener_sesion()?>
        </li>
      </ul>
    </div>
  </div>
</nav>