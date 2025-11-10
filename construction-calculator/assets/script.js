$(document).ready(function() {
    
    // Load products from JSON
    var products = [];
    $.getJSON('construction-calculator/product.json', function(data) {
        products = data;
    });
    
    // Centralized application state
    var appState = {
        section1: null,        // 'diy' or 'professional'
        poleType: null,        // 'u-tipo', 'm-tipo', 'sraigtiniai'
        selectedWidth: null    // '68mm', '76mm', etc.
    };
    
    // Professional installation allowed widths (same for all pole types)
    var professionalWidths = ['68mm', '76mm', '89mm'];
    
    $('.option-btn').click(function() {
        $(this).siblings('.option-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Aukstis options mapping
    var aukstisOptions = {
        'u-tipo': {
            '71mm': ['685mm'],
            '81mm': ['685mm'],
            '101mm': ['885mm', '1000mm', '1085mm', '1300mm']
        },
        'm-tipo': {
            '68mm': ['750mm', '1000mm', '1200mm', '1400mm'],
            '76mm': ['1200mm', '1400mm', '1600mm', '2050mm']
        },
        'sraigtiniai': {
            '76mm-s': ['500mm', '1200mm'],
            '89mm-s': ['500mm', '1000mm', '1200mm'],
            '68mm': ['1000mm'],
            '76mm': ['1000mm'],
            '89mm': ['1000mm']
        }
    };

    function updateAukstisSelect(poleType, width) {
        var $aukstisContainer = $('#plotisContainer');
        var $aukstisSelect = $('#plotisSelect');
        
        if (!width) {
            $aukstisContainer.hide();
            return;
        }
        
        var options = aukstisOptions[poleType][width];
        if (!options) {
            $aukstisContainer.hide();
            return;
        }
        
        // Clear existing options
        $aukstisSelect.empty();
        
        // If only one option, auto-select and disable
        if (options.length === 1) {
            $aukstisSelect.append('<option value="' + options[0] + '" selected>' + options[0] + '</option>');
            $aukstisSelect.prop('disabled', true);
            $aukstisSelect.addClass('disabled');
        } else {
            // Multiple options
            $aukstisSelect.append('<option value=""></option>');
            options.forEach(function(option) {
                $aukstisSelect.append('<option value="' + option + '">' + option + '</option>');
            });
            $aukstisSelect.prop('disabled', false);
            $aukstisSelect.removeClass('disabled');
        }
        
        $aukstisContainer.show();
    }

    $('.pole-type-btn').click(function() {
        var selectedType = $(this).data('option');
        appState.poleType = selectedType;
        
        // Refresh options based on new pole type and Section 1 constraints
        refreshPoleOptions();
    });

    $('#poleLengthSelect').change(function() {
        var selectedWidth = $(this).val();
        appState.selectedWidth = selectedWidth;
        
        var selectedType = $('.pole-type-btn.active').data('option');
        var isProfessional = appState.section1 === 'professional';
        
        // Don't show AUKSTIS for professional installation
        if (isProfessional) {
            $('#plotisContainer').hide();
        } else {
            updateAukstisSelect(selectedType, selectedWidth);
        }
    });


    $('.tool-btn').click(function() {
        $(this).siblings('.tool-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Section 1: Show/Hide Section 5 (equipment rental) based on installation option
    // Apply constraints based on Section 1 selection
    function applySection1Constraints() {
        var section1Selection = $('#section-1 .option-btn.active').data('option');
        appState.section1 = section1Selection;
        
        if (section1Selection === 'diy') {
            // Show Section 5 when "NEREIKIA" is selected
            $('#section-5').show();
        } else {
            // Hide Section 5 when professional installation is selected
            $('#section-5').hide();
        }
        
        // Refresh pole options with new constraints
        refreshPoleOptions();
    }
    
    // Refresh pole width (PLOTIS) options based on current state
    function refreshPoleOptions() {
        var $select = $('#poleLengthSelect');
        var isProfessional = appState.section1 === 'professional';
        var poleType = appState.poleType;
        
        // Reset select
        $select.val('');
        appState.selectedWidth = null;
        
        // Hide AUKSTIS container immediately if professional
        if (isProfessional) {
            $('#plotisContainer').hide();
        }
        
        // Show/hide options based on constraints
        $select.find('option').each(function() {
            var $option = $(this);
            var optionValue = $option.val();
            
            // Always show placeholder
            if (optionValue === '') {
                $option.show();
                return;
            }
            
            // Check if option belongs to selected pole type
            var belongsToPoleType = !poleType || $option.data('type') === poleType;
            
            // If professional installation, only show 68mm, 76mm, 89mm
            var allowedBySection1 = !isProfessional || professionalWidths.includes(optionValue);
            
            if (belongsToPoleType && allowedBySection1) {
                $option.show();
            } else {
                $option.hide();
            }
        });
    }
    
    function toggleSection8() {
        applySection1Constraints();
    }
    
    // Listen to Section 1 button clicks
    $('#section-1 .option-btn').click(function() {
        toggleSection8();
    });
    
    // Set initial state on page load
    toggleSection8();

    $('.spinner-btn.up').click(function() {
        var input = $(this).closest('.input-box').find('.dimension-input');
        var currentValue = parseInt(input.val()) || 0;
        var maxValue = input.attr('max');
        
        if (maxValue && currentValue >= parseInt(maxValue)) {
            return;
        }
        input.val(currentValue + 1);
    });

    $('.spinner-btn.down').click(function() {
        var input = $(this).closest('.input-box').find('.dimension-input');
        var currentValue = parseInt(input.val()) || 0;
        if (currentValue > 0) {
            input.val(currentValue - 1);
        }
    });
    
    // Enforce min/max constraints on manual input
    $('.dimension-input').on('input', function() {
        var input = $(this);
        var value = parseInt(input.val());
        var min = parseInt(input.attr('min'));
        var max = parseInt(input.attr('max'));
        
        if (!isNaN(min) && value < min) {
            input.val(min);
        }
        if (!isNaN(max) && value > max) {
            input.val(max);
        }
    });

    function validateForm() {
        var isValid = true;
        
        // Clear all previous error states and messages
        $('.section').removeClass('has-error');
        $('.error-message').text('');
        
        // Section 1: Pagalba - must have active button
        if ($('#section-1 .option-btn.active').length === 0) {
            $('#section-1').addClass('has-error');
            $('#error-section-1').text('Prašome pasirinkti pagalbos tipą');
            isValid = false;
        }
        
        // Section 2: Polių tipas - must have active button
        if ($('#section-2 .pole-type-btn.active').length === 0) {
            $('#section-2').addClass('has-error');
            $('#error-section-2').text('Prašome pasirinkti polių tipą');
            isValid = false;
        }
        
        // Section 3: Polių dydis - must have PLOTIS selected
        var plotis3 = $('#poleLengthSelect').val();
        var plotisErrors = [];
        
        if (!plotis3) {
            plotisErrors.push('Prašome pasirinkti polių plotį');
        }
        
        // Section 3: If AUKŠTIS is visible and enabled, must be selected
        var plotisContainer = $('#plotisContainer');
        if (plotisContainer.is(':visible') && !$('#plotisSelect').prop('disabled')) {
            var aukstis3 = $('#plotisSelect').val();
            if (!aukstis3) {
                plotisErrors.push('Prašome pasirinkti polių aukštį');
            }
        }
        
        if (plotisErrors.length > 0) {
            $('#section-3').addClass('has-error');
            $('#error-section-3').text(plotisErrors.join(' | '));
            isValid = false;
        }
        
        // Section 4: Struktūros matmenys - meters must be > 0, centimeters can be 0
        var widthM = $('.dimension-row:first .dimension-input:eq(0)').val();
        var widthCm = $('.dimension-row:first .dimension-input:eq(1)').val();
        var lengthM = $('.dimension-row:eq(1) .dimension-input:eq(0)').val();
        var lengthCm = $('.dimension-row:eq(1) .dimension-input:eq(1)').val();
        
        // Check if values are present and meters are > 0
        if (widthM === '' || widthCm === '' || lengthM === '' || lengthCm === '') {
            $('#section-4').addClass('has-error');
            $('#error-section-4').text('Prašome užpildyti visus struktūros matmenis');
            isValid = false;
        } else if (parseInt(widthM) <= 0 || parseInt(lengthM) <= 0) {
            $('#section-4').addClass('has-error');
            $('#error-section-4').text('Metrai turi būti didesni nei 0');
            isValid = false;
        }
        
        // Section 5: Įrangos nuoma - only validate if visible (DIY selected)
        if ($('#section-5').is(':visible')) {
            if ($('#section-5 .tool-btn.active').length === 0) {
                $('#section-5').addClass('has-error');
                $('#error-section-5').text('Prašome pasirinkti įrangos nuomos parinktį');
                isValid = false;
            }
        }
        
        // Section 6 (Additional items) is optional - no validation needed
        
        return isValid;
    }

    $('#calculateBtn').click(function() {
        // Validate form
        var isValid = validateForm();
        
        if (!isValid) {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return; // Stop calculation
        }
        
        // Clear error states since validation passed
        $('.section').removeClass('has-error');
        
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
        
        // Section 3: Polių dydis (Pole size - PLOTIS and AUKŠTIS)
        var plotis3 = $('#poleLengthSelect').val();
        var aukstis3 = $('#plotisSelect').val();
        if (plotis3 && aukstis3) {
            $('#result-poliu-dydis').text(plotis3 + ' x ' + aukstis3);
        } else if (plotis3) {
            $('#result-poliu-dydis').text(plotis3);
        } else {
            $('#result-poliu-dydis').text('Not selected');
        }
        
        // Section 4: Struktūros matmenys (Structure dimensions)
        var widthM = $('.dimension-row:first .dimension-input:eq(0)').val();
        var widthCm = $('.dimension-row:first .dimension-input:eq(1)').val();
        var lengthM = $('.dimension-row:eq(1) .dimension-input:eq(0)').val();
        var lengthCm = $('.dimension-row:eq(1) .dimension-input:eq(1)').val();
        $('#result-strukturos-matmenys').text(widthM + 'm ' + widthCm + 'cm x ' + lengthM + 'm ' + lengthCm + 'cm');
        
        
        // Section 5: Montavimo įrangos nuoma (Equipment rental)
        // If section 1 is "Profesionalus sraigtinių polių montavimas", set to "Nereikia"
        var section1Option = $('#section-1 .option-btn.active').data('option');
        if (section1Option === 'professional') {
            $('#result-montavimo').text('Nereikia');
        } else {
            var toolText = $('.tool-btn.active').text();
            $('#result-montavimo').text(toolText.charAt(0) + toolText.slice(1).toLowerCase());
        }
        
        // Calculate cart items
        // Clear existing cart rows
        $('.cart-row').remove();
        
        // Get selected product details
        var poleType = $('.pole-type-btn.active').data('option');
        var productTypeMap = {
            'u-tipo': 'U Tipo',
            'm-tipo': 'M Tipo',
            'sraigtiniai': 'Jungiamoji serija'
        };
        var productType = productTypeMap[poleType];
        
        // Get width and height (clean up the -s suffix for sraigtiniai)
        var width = plotis3.replace('-s', '');
        var height = aukstis3 ? aukstis3.replace('-s', '') : null;
        
        // Find matching product
        var matchedProduct;
        if (height) {
            // Match on both width and height
            matchedProduct = products.find(function(p) {
                return p.product_type === productType && p.width === width && p.height === height;
            });
        } else {
            // Professional installation - match on width and type only, pick first match
            matchedProduct = products.find(function(p) {
                return p.product_type === productType && p.width === width;
            });
        }
        
        if (matchedProduct) {
            // Calculate quantity using formula
            // X = plotis (width in meters)
            // Y = ilgis (length in meters)
            // S = spacing (2 meters for now)
            // P = 2(X+Y) - perimeter
            // N = P/S - number of poles
            // V = (N+4)*1.05 - final quantity with buffer
            
            var X = parseFloat(widthM) + (parseFloat(widthCm) / 100); // Convert to meters
            var Y = parseFloat(lengthM) + (parseFloat(lengthCm) / 100);
            var S = 2; // Spacing between poles
            var P = 2 * (X + Y); // Perimeter
            var N = P / S; // Number of poles
            var V = Math.ceil((N + 4) * 1.05); // Final quantity (rounded up)
            
            // Calculate total price
            var totalPrice = (V * matchedProduct.price).toFixed(2);
            var eachPrice = matchedProduct.price.toFixed(2);
            
            // Update cart display
            var cartHTML = '<div class="cart-row">' +
                '<div class="cart-col-product product-name"><a href="' + matchedProduct.link + '" target="_blank">' + matchedProduct.product_name + '</a></div>' +
                '<div class="cart-col-qty">' + V + '</div>' +
                '<div class="cart-col-each">€' + eachPrice + '</div>' +
                '<div class="cart-col-total">€' + totalPrice + '</div>' +
                '</div>';
            
            // Insert cart row before subtotal
            $('.cart-subtotal').before(cartHTML);
            
            // Update subtotal
            $('.subtotal-value').html('€' + totalPrice + ' <span class="vat">+VAT</span>');
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
