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
            $plotisSelect.append('<option value=""></option>');
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

    // Section 6 Plotis options mapping
    var section6PlotisOptions = {
        'm-tipo': {
            '1000mm': ['68mm'],
            '1200mm': ['76mm', '89mm']
        },
        'sraigtiniai': {
            '500mm': ['76mm', '89mm'],
            '1000mm-s': ['68mm', '76mm', '89mm'],
            '1200mm-s': ['76mm', '89mm']
        }
    };

    function updateSection6PlotisSelect(section5Type, height) {
        var $plotisContainer = $('#section6PlotisContainer');
        var $plotisSelect = $('#section6PlotisSelect');
        
        if (!height || !section5Type) {
            $plotisContainer.hide();
            return;
        }
        
        var typeOptions = section6PlotisOptions[section5Type];
        if (!typeOptions) {
            $plotisContainer.hide();
            return;
        }
        
        var options = typeOptions[height];
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
            $plotisSelect.append('<option value=""></option>');
            options.forEach(function(option) {
                $plotisSelect.append('<option value="' + option + '">' + option + '</option>');
            });
            $plotisSelect.prop('disabled', false);
            $plotisSelect.removeClass('disabled');
        }
        
        $plotisContainer.show();
    }

    // Section 5 button click handler for section 6 (within same parent section)
    $('[data-option="m-tipo"], [data-option="sraigtiniai"]').click(function() {
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
        
        // Hide plotis when section 5 type changes
        $('#section6PlotisContainer').hide();
    });

    // Section 6 Aukstis change handler
    $('#section6AukstisSelect').change(function() {
        var selectedHeight = $(this).val();
        // Find section 5 active button within the same parent section
        var section5Type = $(this).closest('.section').find('[data-option="m-tipo"], [data-option="sraigtiniai"]').filter('.active').data('option');
        updateSection6PlotisSelect(section5Type, selectedHeight);
    });

    $('.tool-btn').click(function() {
        $(this).siblings('.tool-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Section 1: Show/Hide Section 7 (equipment rental) based on installation option
    function toggleSection8() {
        var section1Selection = $('.section:first .option-btn.active').data('option');
        
        if (section1Selection === 'diy') {
            // Show Section 7 when "NEREIKIA" is selected
            $('#section8Header').parent().show();
        } else {
            // Hide Section 7 when professional installation is selected
            $('#section8Header').parent().hide();
        }
    }
    
    // Listen to Section 1 button clicks
    $('.section:first .option-btn').click(function() {
        toggleSection8();
    });
    
    // Set initial state on page load
    toggleSection8();

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

    function validateForm() {
        var errors = [];
        
        // Section 1: Pagalba - must have active button
        if ($('.section:first .option-btn.active').length === 0) {
            errors.push('PRAŠOME PASIRINKTI PAGALBOS TIPĄ (SECTION 1)');
        }
        
        // Section 2: Polių tipas - must have active button
        if ($('.pole-type-btn.active').length === 0) {
            errors.push('PRAŠOME PASIRINKTI POLIŲ TIPĄ (SECTION 2)');
        }
        
        // Section 3: Polių dydis - must have AUKŠTIS selected
        var aukstis3 = $('#poleLengthSelect').val();
        if (!aukstis3) {
            errors.push('PRAŠOME PASIRINKTI POLIŲ AUKŠTĮ (SECTION 3)');
        }
        
        // Section 3: If PLOTIS is visible and enabled, must be selected
        var plotisContainer = $('#plotisContainer');
        if (plotisContainer.is(':visible') && !$('#plotisSelect').prop('disabled')) {
            var plotis3 = $('#plotisSelect').val();
            if (!plotis3) {
                errors.push('PRAŠOME PASIRINKTI POLIŲ PLOTĮ (SECTION 3)');
            }
        }
        
        // Section 4: Struktūros matmenys - must have values
        var widthM = $('.dimension-row:first .dimension-input:eq(0)').val();
        var widthFt = $('.dimension-row:first .dimension-input:eq(1)').val();
        var widthIn = $('.dimension-row:first .dimension-input:eq(2)').val();
        var lengthM = $('.dimension-row:eq(1) .dimension-input:eq(0)').val();
        var lengthFt = $('.dimension-row:eq(1) .dimension-input:eq(1)').val();
        var lengthIn = $('.dimension-row:eq(1) .dimension-input:eq(2)').val();
        
        if (!widthM || !widthFt || !widthIn || !lengthM || !lengthFt || !lengthIn) {
            errors.push('PRAŠOME UŽPILDYTI VISUS STRUKTŪROS MATMENIS (SECTION 4)');
        }
        
        // Section 5: Jungiamųjų serijų tipas - must have active button
        var section5Buttons = $('[data-option="m-tipo"], [data-option="sraigtiniai"]');
        if (section5Buttons.filter('.active').length === 0) {
            errors.push('PRAŠOME PASIRINKTI JUNGIAMŲJŲ SERIJŲ TIPĄ (SECTION 5)');
        }
        
        // Section 6: Jungiamųjų serijų dydis - must have AUKŠTIS selected
        var aukstis6 = $('#connectorLengthSelect').val();
        if (!aukstis6) {
            errors.push('PRAŠOME PASIRINKTI JUNGIAMŲJŲ SERIJŲ AUKŠTĮ (SECTION 6)');
        }
        
        // Section 6: If PLOTIS is visible and enabled, must be selected
        var plotisContainer6 = $('#section6PlotisContainer');
        if (plotisContainer6.is(':visible') && !$('#section6PlotisSelect').prop('disabled')) {
            var plotis6 = $('#section6PlotisSelect').val();
            if (!plotis6) {
                errors.push('PRAŠOME PASIRINKTI JUNGIAMŲJŲ SERIJŲ PLOTĮ (SECTION 6)');
            }
        }
        
        // Section 7: Įrangos nuoma - only validate if visible (DIY selected)
        var section7Visible = $('#section8Header').parent().is(':visible');
        if (section7Visible) {
            if ($('#section8 .option-btn.active').length === 0) {
                errors.push('PRAŠOME PASIRINKTI ĮRANGOS NUOMOS PARINKTĮ (SECTION 7)');
            }
        }
        
        // Section 9 is optional - no validation needed
        
        return errors;
    }

    $('#calculateBtn').click(function() {
        // Validate form
        var errors = validateForm();
        
        if (errors.length > 0) {
            // Display errors
            alert(errors.join('\n\n'));
            return; // Stop calculation
        }
        
        // Section 1: Pagalba (Help)
        var section1Option = $('.section:first .option-btn.active').data('option');
        if (section1Option === 'diy') {
            $('#result-pagalba').text('Nereikia');
        } else {
            $('#result-pagalba').text('Profesionalus sraigtinių polių montavimas');
        }
        
        // Section 2: Polių tipas (Pole type)
        var section2Text = $('.pole-type-btn.active').text();
        $('#result-poliu-tipas').text(section2Text.charAt(0) + section2Text.slice(1).toLowerCase());
        
        // Section 3: Polių dydis (Pole size - AUKŠTIS and PLOTIS)
        var aukstis3 = $('#poleLengthSelect').val();
        var plotis3 = $('#plotisSelect').val();
        if (aukstis3 && plotis3) {
            $('#result-poliu-dydis').text(aukstis3 + ' x ' + plotis3);
        } else if (aukstis3) {
            $('#result-poliu-dydis').text(aukstis3);
        } else {
            $('#result-poliu-dydis').text('Not selected');
        }
        
        // Section 4: Struktūros matmenys (Structure dimensions)
        var widthM = $('.dimension-row:first .dimension-input:eq(0)').val();
        var widthFt = $('.dimension-row:first .dimension-input:eq(1)').val();
        var widthIn = $('.dimension-row:first .dimension-input:eq(2)').val();
        var lengthM = $('.dimension-row:eq(1) .dimension-input:eq(0)').val();
        var lengthFt = $('.dimension-row:eq(1) .dimension-input:eq(1)').val();
        var lengthIn = $('.dimension-row:eq(1) .dimension-input:eq(2)').val();
        $('#result-strukturos-matmenys').text(widthM + 'm x ' + lengthM + 'm (' + widthFt + '.' + widthIn + 'ft x ' + lengthFt + '.' + lengthIn + 'ft)');
        
        // Section 5: Jungiamųjų serijų tipas (Connector series type)
        var section5Buttons = $('[data-option="m-tipo"], [data-option="sraigtiniai"]');
        var section5Text = section5Buttons.filter('.active').text();
        $('#result-jungiamuju-tipas').text(section5Text.charAt(0) + section5Text.slice(1).toLowerCase());
        
        // Section 6: Jungiamųjų serijų dydis (Connector series size - AUKŠTIS and PLOTIS)
        var aukstis6 = $('#section6AukstisSelect').val();
        var plotis6 = $('#section6PlotisSelect').val();
        if (aukstis6 && plotis6) {
            $('#result-jungiamuju-dydis').text(aukstis6 + ' x ' + plotis6);
        } else if (aukstis6) {
            $('#result-jungiamuju-dydis').text(aukstis6);
        } else {
            $('#result-jungiamuju-dydis').text('Not selected');
        }
        
        // Section 7: Montavimo įrangos nuoma (Equipment rental)
        // If section 1 is "Profesionalus sraigtinių polių montavimas", set to "Nereikia"
        var section1Option = $('.section:first .option-btn.active').data('option');
        if (section1Option === 'professional') {
            $('#result-montavimo').text('Nereikia');
        } else {
            var toolText = $('.tool-btn.active').text();
            $('#result-montavimo').text(toolText.charAt(0) + toolText.slice(1).toLowerCase());
        }
        
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
