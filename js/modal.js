$(document).ready(function () {
    $('.opret').on('click', function(){
        $('.modal').fadeIn(300);
    });
    $('.close, .btn-send, .modal-overlay, .trash-mail').on('click', function(){
        $('.modal').fadeOut(300);
    });
});