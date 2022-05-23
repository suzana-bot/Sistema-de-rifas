$(document).ready(function() {

    $('#table-tipo').on('click', 'button.btn-edit', function (e) {

        e.preventDefault() 
        
        //alterar info do modal p/ representação dos dados

        $('.model-title').empty()
        $('.modal-body').empty()


        let ID = `ID=${$(this).attr(`id`)}`
        
        Swal.fire({
            title: 'e-rifa',
            text: 'deseja realemente excluir esse registro',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result => {
            if(result.value){
                $ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/tipo/modelo/delete-tipo.php',
                    success: function(dados){
                        Swal.fire({
                            title: 'e-rifa',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })
                        $('#table-tipo').DataTable(). ajax.reload()
                    }
                })
            }
        }))
    })
})
           