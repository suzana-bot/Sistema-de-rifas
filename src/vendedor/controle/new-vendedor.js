$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo vendedor')

        $('.modal-body').load('src/vendedor/view/form-vendedor.html', function(){
            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                url: 'src/tipo/modelo/all-tipo.php',
                success: function(dados){
                    for(const result of dados){
                        $('#tipo_id').append(`<option values="${result.ID}">${result.NOME}</option>`)
                    }
                }
            })
        } )

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-vendedor').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-vendedor').modal('hide')
    })
})