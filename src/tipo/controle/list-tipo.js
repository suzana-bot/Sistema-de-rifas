$(document).ready(function() {

    $('#table-tipo').DataTable({
    
    "processing": true,
    
    "serverSide": true,
    
    "ajax": {
    
    "url": "src/tipo/modelo/list-tipo.php",
    
    "type": "POST"
    
    },
    
    "language": {
    
    "url": "libs/DataTables/pt_br.json"
    },
    "columns": [{
    
    "data": 'ID',
    
    "className": 'text-center'
    },
    {
    
    "data": 'NOME',
    
    "className": 'text-center'
    },
    {
    "data": 'ID',
    
    "orderable": false,
    
    "searchable": false,
    
    "className": 'text-center',
    
    "render": function (data, type, row, meta) {
        Return `
    
    <button id="${data}" class="btn btn-info btn-sm btn-view"><i
    
    Class="fa-solid fa-eye"></i></button>
    
    <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i
    "render": function (data, type, row, meta) {
        `
    Return `
    
    <button id="${data}" class="btn btn-info btn-sm btn-view"><i
    
    Class="fa-solid fa-eye"></i></button> <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i
    
    Class="fa-solid fa-marker"></i></button>
    
    <button id="${data}" class="btn btn-danger btn-sm btn-delete"><i class="fa-solid fa-trash"></i></button>
    `
    }
    
    }
    
]
})
    })