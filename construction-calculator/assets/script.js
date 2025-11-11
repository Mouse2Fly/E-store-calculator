$(document).ready(function() {
    
    // Load products from JSON
    var products = [];
    $.getJSON('construction-calculator/product.json', function(data) {
        products = data;
    });
    
    $('.option-btn').click(function() {
        $(this).siblings('.option-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Aukstis options mapping
    var aukstisOptions = {
        'u-tipo': {
            '71mm': ['685mm'],
            '81mm': ['685mm'],
            '101mm': ['885mm', '1000mm', '1085mm', '1300mm'],
            '68mm-p': ['x'],
            '76mm-p': ['x'],
            '89mm-p': ['x']
        },
        'm-tipo': {
            '68mm': ['750mm', '1000mm', '1200mm', '1400mm'],
            '76mm': ['1200mm', '1400mm', '1600mm', '2050mm'],
            '68mm-p': ['x'],
            '76mm-p': ['x'],
            '89mm-p': ['x']
        },
        'sraigtiniai': {
            '76mm': ['500mm', '1200mm'],
            '89mm': ['500mm', '1000mm', '1200mm'],
            '68mm-p': ['x'],
            '76mm-p': ['x'],
            '89mm-p': ['x']
        }
    };

    function updateAukstisSelect(poleType, width) {
        var $aukstisContainer = $('#plotisContainer');
        var $aukstisSelect = $('#plotisSelect');

        var helpType1 = $('#helpOption1')
        var helpType2 = $('#helpOption2')

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
        
        if (helpType1.hasClass('active')) {
            $aukstisContainer.show();
        }
        else if (helpType2.hasClass('active')) {
            $aukstisContainer.hide();
        }
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
        
        // Hide aukstis when pole type changes
        $('#plotisContainer').hide();
    });

    $('#poleLengthSelect').change(function() {
        var selectedWidth = $(this).val();
        var selectedType = $('.pole-type-btn.active').data('option');
        updateAukstisSelect(selectedType, selectedWidth);
    });


    $('.tool-btn').click(function() {
        $(this).siblings('.tool-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Section 1: Show/Hide Section 5 (equipment rental) and modify Section 3 based on installation option
    function toggleSection8() {
        var section1Selection = $('#section-1 .option-btn.active').data('option');
        
        if (section1Selection === 'diy') {
            // Show Section 5 when "NEREIKIA" is selected
            $('#section-5').show();
            
            // Restore normal Section 3 behavior
            restoreNormalSection3();
        } else {
            // Hide Section 5 when professional installation is selected
            $('#section-5').hide();
            
            // Simplify Section 3 to show only 68mm, 76mm, 89mm
            simplifySection3ForProfessional();
        }
    }
    
    function simplifySection3ForProfessional() {
        var $plotisSelect = $('#poleLengthSelect');
        
        // Clear all options
        $plotisSelect.empty();
        
        // Add placeholder
        $plotisSelect.append('<option hidden disabled selected value=""></option>');

        
        // Add only the 3 professional options
        $plotisSelect.append('<option value="68mm-p" data-type="u-tipo">68mm</option>');
        $plotisSelect.append('<option value="76mm-p" data-type="u-tipo">76mm</option>');
        $plotisSelect.append('<option value="89mm-p" data-type="u-tipo">89mm</option>');
       
        $plotisSelect.append('<option value="68mm-p" data-type="m-tipo" style="display:none;">68mm</option>');
        $plotisSelect.append('<option value="76mm-p" data-type="m-tipo" style="display:none;">76mm</option>');
        $plotisSelect.append('<option value="89mm-p" data-type="m-tipo" style="display:none;">89mm</option>');
        
        $plotisSelect.append('<option value="68mm-p" data-type="sraigtiniai" style="display:none;">68mm</option>');
        $plotisSelect.append('<option value="76mm-p" data-type="sraigtiniai" style="display:none;">76mm</option>');
        $plotisSelect.append('<option value="89mm-p" data-type="sraigtiniai" style="display:none;">89mm</option>');
        
        // Reset selection
        $plotisSelect.val('');
        
        // Hide AUKŠTIS select completely
        $('#plotisContainer').hide();
    }
    
    function restoreNormalSection3() {
        var $plotisSelect = $('#poleLengthSelect');
        
        // Clear current options
        $plotisSelect.empty();
        
        // Restore all original options
        $plotisSelect.append('<option hidden disabled selected value=""></option>');
        
        // U Tipo options
        $plotisSelect.append('<option value="71mm" data-type="u-tipo">71mm</option>');
        $plotisSelect.append('<option value="81mm" data-type="u-tipo">81mm</option>');
        $plotisSelect.append('<option value="101mm" data-type="u-tipo">101mm</option>');
        
        // M Tipo options
        $plotisSelect.append('<option value="68mm" data-type="m-tipo">68mm</option>');
        $plotisSelect.append('<option value="76mm" data-type="m-tipo">76mm</option>');
        
        // Sraigtiniai options
        $plotisSelect.append('<option value="76mm" data-type="sraigtiniai">76mm</option>');
        $plotisSelect.append('<option value="89mm" data-type="sraigtiniai">89mm</option>');
        
        // Reset selection
        $plotisSelect.val('');
        
        // Trigger the filter based on active pole type
        var activeType = $('.pole-type-btn.active').data('option');
        if (activeType) {
            $plotisSelect.find('option').each(function() {
                if ($(this).val() === '') {
                    $(this).show();
                } else if ($(this).data('type') === activeType) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
        
        // Hide AUKŠTIS container initially
        $('#plotisContainer').hide();
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
        // If section 1 is "Profesionalus sraigtinių polių montavimas", hide the row
        var section1Option = $('#section-1 .option-btn.active').data('option');
        if (section1Option === 'professional') {
            $('#montavimoRow').hide();
        } else {
            $('#montavimoRow').show();
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
        var width = plotis3;
        var height = '';
        
        if (section1Option === 'professional') {
            // In professional mode, use Jungiamoji serija with 1000mm height
            productType = 'Jungiamoji serija';
            height = '1000mm';
        } else {
            // Normal mode - use selected height
            height = aukstis3 ? aukstis3.replace('-p', '') : '';
        }
        
        // Find matching product
        var matchedProduct = products.find(function(p) {
            return p.product_type === productType && p.width === width && p.height === height;
        });
        
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
            var productTotal = (V * matchedProduct.price).toFixed(2);
            var eachPrice = matchedProduct.price.toFixed(2);
            
            // Update cart display
            var cartHTML = '<div class="cart-row">' +
                '<div class="cart-col-product product-name"><a href="' + matchedProduct.link + '" target="_blank">' + matchedProduct.product_name + '</a></div>' +
                '<div class="cart-col-qty">' + V + '</div>' +
                '<div class="cart-col-each">€' + eachPrice + '</div>' +
                '<div class="cart-col-total">€' + productTotal + '</div>' +
                '</div>';
            
            // Insert cart row before subtotal
            $('.cart-subtotal').before(cartHTML);
            
            // Initialize cart total
            var cartTotal = parseFloat(productTotal);
            
            // Add professional installation service charge if in professional mode
            if (section1Option === 'professional') {
                var installationFee = 160.00;
                var installationHTML = '<div class="cart-row">' +
                    '<div class="cart-col-product product-name">Profesionalus sraigtinių polių montavimas</div>' +
                    '<div class="cart-col-qty">1</div>' +
                    '<div class="cart-col-each">€' + installationFee.toFixed(2) + '</div>' +
                    '<div class="cart-col-total">€' + installationFee.toFixed(2) + '</div>' +
                    '</div>';
                
                $('.cart-subtotal').before(installationHTML);
                cartTotal += installationFee;
            }
            
            // Update subtotal
            $('.subtotal-value').html('€' + cartTotal.toFixed(2) + ' <span class="vat">+VAT</span>');
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
