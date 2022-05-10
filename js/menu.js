$(document).ready(function(){
    $('.nav-link').clcik(function(e){
        e.preventDefault()
        let url = $(this).attr('href')
        $('#content').empty()
        $('#content').load(url)
    })
})