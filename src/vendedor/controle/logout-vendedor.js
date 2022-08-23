$(document).ready(function() {
    $('#logout').click(function(e){
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/vendedor/model/save-vendedor.php',
            success: function(dados) {
                if(dados.tipo == 'success'){
                Swal.fire({
                    title: 'Sistema de rifas',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
                $(location).attr('href', 'index.html')
                
            }
                
            }
        })
    })
})
