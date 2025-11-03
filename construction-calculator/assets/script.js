$(document).ready(function() {
    
    $('.option-btn').click(function() {
        $(this).siblings('.option-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.pole-type-btn').click(function() {
        var selectedType = $(this).data('option');
        var $select = $('#poleLengthSelect');
        
        // Reset select
        $select.val('');
        
        // Hide all options except the placeholder
        $select.find('option').each(function() {
            if ($(this).val() === '') {
                $(this).show();
            } else if ($(this).data('type') === selectedType) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('.tool-btn').click(function() {
        $(this).siblings('.tool-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.spinner-btn.up').click(function() {
        var input = $(this).closest('.input-box').find('.dimension-input');
        var currentValue = parseInt(input.val()) || 0;
        input.val(currentValue + 1);
    });

    $('.spinner-btn.down').click(function() {
        var input = $(this).closest('.input-box').find('.dimension-input');
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
