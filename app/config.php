<?php
    define('NOMBRE_SERVIDOR', "localhost");
    define('NOMBRE_BD', "code_blue");
    define('NOMBRE_USUARIO', "root");
    define('PASSWORD', "");

    define('TITULO_PAGINA', "Code Blue");
    
    define('SERVIDOR', "http://localhost/code_blue/");
    
    define('DEP_CSS', SERVIDOR . "public/css/");
    define('DEP_SCRIPT', SERVIDOR . "public/js/");
    define('DEP_IMG', SERVIDOR . "public/img/");
    define('CONTROLLER', SERVIDOR . "controller/");
    
    define('AUDIO', SERVIDOR . "public/files/audio/");
    define('DOC', SERVIDOR . "public/files/doc/");
    define('PDF', SERVIDOR . "public/files/pdf/");
    define('VIDEO', SERVIDOR . "public/files/video/");
    define('EXCEL', SERVIDOR . "public/files/xlsx/");
    
    define('error', "view/error/404");
    
    define("direccion", array(
        'home' => 'view/home',
        'login' => 'view/login/login',
    ));
?>