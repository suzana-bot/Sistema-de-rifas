<?php
// variáveis para realização da conexão com o banco de dados
    $hostname = "sql102.epizy.com";
    $database = "epiz_31454021_Rifa";
    $username = "epiz_31454021";
    $password = "lt0dF5V2mGR";
    if($conecta = mysqli_connect($hostname, $database, $username, $password)){
        echo 'conectado ao Banco de Dados '.$database.'.......';
    }else{
        echo 'erro: '.mysqli_connect_error();
    }

?>