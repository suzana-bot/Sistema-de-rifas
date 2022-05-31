$(document).ready(function() {

    $('#table-tipo').on('click', 'button.btn-edit', function(e) {
    
    e.preventDefault()
    
    // Alterar as informações do modal para apresentação dos dados
    
    $('.modal-title').empty()
    
    $('.modal-body').empty()
    
    $('.modal-title').append('Visualização de registro')
    
    let ID = `ID=${$(this) .attr('id')}`
    
    $.ajax({
    
    Type: 'POST',
    
    dataType: 'json',
    
    assync: true,
    
    data: ID,
    
    url: 'src/tipo/modelo/view-tipo.php',
    
    success: function(dado) {
    
    if (dado.tipo == "success") {
    
    $('.modal-body').load('src/tipo/visao/form-tipo.html', function() {
    
    $('#NOME').val(dado.dados. NOME)

    $('#ID').val(dado.dados.ID)
    
    })
    
   $('.btn-save').removeAttr('data-operation', 'insert')
    
    $('.btn-save').show()
    
    $('#modal-tipo'). Modal("show")
    
    
    } else {
    
    Swal.fire({ // Inicialização do SweetAlert  SweetAler  // Mensagem retornada do microserviço
    title: 'e-Rifa', 
    text: dado.mensagem,
    type: dado.tipo, // Tipo de retorno [success, info ou error]
    
    confirmButtonText: 'OK'
    
    })
    
    }
}
    
    })
    
    })
    
    })