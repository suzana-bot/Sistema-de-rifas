$(document).ready(function(){
    $('.btn-new').click(function(e){
        e.preventDefault()
        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('adcionar novo tipo de acesso')
        $('.modal-body').load('src/tipo/visao/form-tipo.html')
        $('.btn-show').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-tipo').modal('show')
    })
})