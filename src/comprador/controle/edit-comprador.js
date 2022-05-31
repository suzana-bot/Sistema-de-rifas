$(document).ready(function() {

    $('#table-comprador').on('click', 'button.btn-edit', function(e) {
    
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
    
    url: 'src/comprador/modelo/view-comprador.php',
    
    success: function(dado) {
    
    if (dado.comprador == "success") {
    
    $('.modal-body').load('src/comprador/visao/form-comprador.html', function() {
    
    $('#NOME').val(dado.dados. NOME)

    $('#ID').val(dado.dados.ID)
    
    })
    
   $('.btn-save').removeAttr('data-operation', 'insert')
    
    $('.btn-save').show()
    
    $('#modal-comprador'). Modal("show")
    
    
    } else {
    
    Swal.fire({ // Inicialização do SweetAlert  SweetAler  // Mensagem retornada do microserviço
    title: 'e-Rifa', 
    text: dado.mensagem,
    type: dado.comprador, // comprador de retorno [success, info ou error]
    
    confirmButtonText: 'OK'
    
    })
    
    }
}
    
    })
    
    })
    
    })