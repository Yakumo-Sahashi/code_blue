<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php 
        require_once 'app/config.php';
        require_once 'app/dependencias.php';
        require_once 'app/control_url.php';    
    ?>
</head>
<body>
    <?php 
        require_once 'view/main/loader.php';
        require_once 'view/main/navbar.php';
        Router::direccion();
        require_once 'view/main/footer.php';
    ?>
</body>
</html>