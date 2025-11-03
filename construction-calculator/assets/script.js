$(document).ready(function() {
    
    $('.option-btn').click(function() {
        $(this).siblings('.option-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Plotis options mapping
    var plotisOptions = {
        'u-tipo': {
            '685mm': ['71mm', '81mm'],
            '885mm': ['101mm'],
            '1000mm': ['101mm'],
            '1085mm': ['101mm'],
            '1300mm': ['101mm']
        },
        'm-tipo': {
            '750mm': ['68mm'],
            '1000mm-m': ['68mm'],
            '1200mm': ['68mm', '76mm', '89mm'],
            '1400mm': ['68mm', '76mm'],
            '2050mm': ['76mm']
        }
    };

    function updatePlotisSelect(poleType, height) {
        var $plotisContainer = $('#plotisContainer');
        var $plotisSelect = $('#plotisSelect');
        
        if (!height) {
            $plotisContainer.hide();
            return;
        }
        
        var options = plotisOptions[poleType][height];
        if (!options) {
            $plotisContainer.hide();
            return;
        }
        
        // Clear existing options
        $plotisSelect.empty();
        
        // If only one option, auto-select and disable
        if (options.length === 1) {
            $plotisSelect.append('<option value="' + options[0] + '" selected>' + options[0] + '</option>');
            $plotisSelect.prop('disabled', true);
            $plotisSelect.addClass('disabled');
        } else {
            // Multiple options
            $plotisSelect.append('<option value="">PLEASE SELECT</option>');
            options.forEach(function(option) {
                $plotisSelect.append('<option value="' + option + '">' + option + '</option>');
            });
            $plotisSelect.prop('disabled', false);
            $plotisSelect.removeClass('disabled');
        }
        
        $plotisContainer.show();
    }

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
        
        // Hide plotis when pole type changes
        $('#plotisContainer').hide();
    });

    $('#poleLengthSelect').change(function() {
        var selectedHeight = $(this).val();
        var selectedType = $('.pole-type-btn.active').data('option');
        updatePlotisSelect(selectedType, selectedHeight);
    });

    // Section 5 button click handler for section 6
    $('#section6AukstisSelect').closest('.section').prev().find('.option-btn').click(function() {
        var selectedType = $(this).data('option');
        var $select = $('#section6AukstisSelect');
        
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
