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
                $stmt = $pdo -> prepare('INSERT INTO TIPO (NOME) VALUES (:a)');
                $stmt -> execute(array(
                    ':a' => utf8_decode($requestData['NOME'])
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
                $stmt = $pdo -> prepare('UPDATE TIPO SET NOME = :a WHERE ID = :id');
                $stmt -> execute(array(
                    ':ID' => $ID,
                    ':a' => utf8_decode($requestData['NOME'])     
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