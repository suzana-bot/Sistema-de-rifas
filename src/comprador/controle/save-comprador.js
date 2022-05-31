($documento).ready(function(){
    $('.btn-save').click(function(e){
        e.preventDefault()

        let dados = $('#form-tipo').serialize()
        dados += `&operacao=${$('.btn-save').attr('data-operation')}`
        $.ajax({
            type: 'POST',
            datatype: 'json',
            assync: true,
            data: dados,
            url: 'src/tipo/modelo/save-tipo.php',
            success: function(dado){
                Swal.fire({
                    title: 'e-rifa',
                    text: dado.mensagem,
                    type: dado.tipo,
                    confirmButtonText: 'OK'
                })  
                $('#modal-tipo').modal('hide')
                $('#table-tipo').Datatable().ajax.reload()
        }
    })
    })
})
