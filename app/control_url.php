<?php 
    if(isset($_GET['view'])){
        $view = explode("/", $_GET['view']);
        $url = count($view) < 2 ? (array_key_exists($view[0], direccion) ? direccion[$view[0]] : error) : error;
        require_once $url . '.php';
    }else{
        require_once direccion['home'] . '.php';
    }
?>

<title><?= $titulo = !isset($title) ? TITULO_PAGINA : $title;?></title>