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
                $stmt = $pdo -> prepare('INSERT INTO VENDEDOR (NOME, CELULAR, LOGIN, SENHA, TIPO_ID) VALUES (:a, :b, :c, :d, :e)');
                $stmt -> execute(array(
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['CELULAR'],
                    ':c' => $requestData['LOGIN'],
                    ':d' => md5($requestData['SENHA']),
                    ':e' => $requestData['TIPO_ID'],
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
                $stmt = $pdo -> prepare('UPDATE VENDEDOR SET NOME = :a, CELULAR = :b, LOGIN = :c, SENHA = :d, TIPO_ID = e: WHERE ID = :id');
                $stmt -> execute(array(
                    ':ID' => $ID,
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['CELULAR'],
                    ':c' => $requestData['LOGIN'],
                    ':d' => md5($requestData['SENHA']),
                    ':e' => $requestData['TIPO_ID'],   
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