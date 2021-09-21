<?php require_once 'model/sesion.php';?>
<nav class="navbar navbar-expand-lg navbar-light  scrorev-nav-control bg-primary menu">
  <div class="container text-center">

    <a class="navbar-brand text-white" href="<?=Router::redirigir('home')?>"><img loading="lazy" src="<?=DEP_IMG?>favicon.png" width="30px"
      height="30px"> Code Blue</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars text-white"></i>
    </button>

    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
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