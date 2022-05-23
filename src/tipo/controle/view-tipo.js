$(document).ready(function(){
    $('#table-tipo').on('click', 'button.btn-view', function(e){
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização do registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            datatype: 'json',
            assync: true,
            data: ID,
            url: 'src/tipo/modelo/view-tipo.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('modal.body').load('src/tipo/visao/form-tipo.html', function(){
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('.modal.tipo').modal('show')
                }else{
                    Swal.fire({
                        title: 'e-rifa',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })
    })
})