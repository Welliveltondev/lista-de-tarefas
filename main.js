$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomedaTarefa = $('input').val();
        const novaTarefa = $(`<li>${nomedaTarefa}</li>`)

        $(novaTarefa).appendTo('ul')
        $('input').val('')
    })

    $('ul').on('click', 'li', function(e){
        e.preventDefault();
        $(this).toggClass('riscarTarefa')
    })
})
