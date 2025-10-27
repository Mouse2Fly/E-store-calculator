$(document).ready(function() {
    
    $('.option-btn').click(function() {
        $(this).siblings('.option-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.tool-btn').click(function() {
        $(this).siblings('.tool-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.spinner-btn.up').click(function() {
        var input = $(this).siblings('.dimension-input');
        var currentValue = parseInt(input.val()) || 0;
        input.val(currentValue + 1);
    });

    $('.spinner-btn.down').click(function() {
        var input = $(this).siblings('.dimension-input');
        var currentValue = parseInt(input.val()) || 0;
        if (currentValue > 0) {
            input.val(currentValue - 1);
        }
    });

    $('#calculateBtn').click(function() {
        $('#resultsSection').slideDown(600).addClass('show');
        $('#cartSection').slideDown(600).addClass('show');
        
        $('html, body').animate({
            scrollTop: $('#resultsSection').offset().top - 20
        }, 800);
    });

    $('.add-cart-btn, .email-btn').click(function() {
        alert('This is a demo. In a real application, this would process the action.');
    });
});
