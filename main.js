$(document).ready(function() {
    $('btn-insert').click(function() {
        
    })

    $('form').on('submit', function(e) {
        e.preventtDefault();
        const endereçoNovaTarefa = $('#insert-tarefa').val();
        const novoItem = $('<li></li>');
        $(`endereçoNovaTarefa` ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })

})