<?php
session_start();
if(!isset($_SESSION['NOME']) && !isset($_SESSION['TIPO'])){
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'voce nao esta autenticado no sistema.'
    );
}else{
    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'seja bem vindo, '.$_SESSION['NOME']
    );
}
echo json_encode($dados);