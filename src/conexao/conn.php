<?php
/*
    $hostname = "sql102.epizy.com";
    $database = "epiz_31454021_Rifa";
    $username = "epiz_31454021";
    $password = "lt0dF5V2mGR";
    if($conecta = mysqli_connect($hostname, $database, $username, $password)){
        echo 'conectado ao Banco de Dados '.$database.'.......';
    }else{
        echo 'erro: '.mysqli_connect_error();
    }
*/
$hostname = "localhost";
    $database = "rifa";
    $username = "root";
    $password = "";
    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'Conexão com banco de dados, realizado com sucesso!!!';
    }catch(PDOException $e) {
        echo 'Erro: '.$e->getMessage();
    }
?>