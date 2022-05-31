<?php
    include('../../conexao/conn.php');
    $requestData = $_REQUEST;
    if(empty($requestData['NOME'])){
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'existem campos obrigatórios não preenchidos.'
        );

    }else{
        $ID = isset($requestData['ID']) ? $requestData['ID']: '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';
        if($operacao == 'insert'){
            try{
                $stmt = $pdo -> prepare('INSERT INTO COMPRADOR (NOME) VALUES (:a, :b)');
                $stmt -> execute(array(
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['CELULAR']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'registro salvo com sucesso.'
                );
            }catch(PDOException $e){
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possíel efetuar o cadastro.'
                    )
                };
                
        }else{
            try{
                $stmt = $pdo -> prepare('UPDATE COMPRADOR SET NOME = :a, CELULAR = :b WHERE ID = :id');
                $stmt -> execute(array(
                    ':ID' => $ID,
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['CELULAR']   
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro atualizado com sucesso.'
                );
            }catch (PDOException $e){
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar a alteração do registro.'
                );
            }
        }
    }
    echo json_encode($dados);

?>