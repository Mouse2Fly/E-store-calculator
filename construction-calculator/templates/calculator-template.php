<div class="construction-calculator-plugin">
<div class="calculator-container">
    <div class="calculator">
        
        <div class="section" id="section-1">
            <div class="section-header">
                <span class="section-number">1</span>
                <h2>AR JUMS REIKĖS PAGALBOS SU JŪSŲ PROJEKTŲ AR PATS JĮ DARYSITE?</h2>
            </div>
            <div class="button-group button-group-2">
                <button class="option-btn active" data-option="diy">NEREIKIA</button>
                <button class="option-btn" data-option="professional">PROFESIONALUS SRAIGTINIŲ POLIŲ MONTAVIMAS</button>
            </div>
            <div class="error-message" id="error-section-1"></div>
        </div>

        <div class="section" id="section-2">
            <div class="section-header">
                <span class="section-number">2</span>
                <h2>PASIRINKITE JŪSŲ POLIŲ TIPĄ</h2>
            </div>
            <div class="button-group button-group-2">
                <button class="option-btn pole-type-btn active" data-option="u-tipo">U TIPO</button>
                <button class="option-btn pole-type-btn" data-option="m-tipo">M TIPO</button>
            </div>
            <div class="error-message" id="error-section-2"></div>
        </div>

        <div class="section" id="section-3">
            <div class="section-header">
                <span class="section-number">3</span>
                <h2>PASIRINKITE POLIŲ DYDĮ</h2>
            </div>
            <div class="pole-length-label">AUKŠTIS</div>
            <select class="dropdown" id="poleLengthSelect">
                <option value=""></option>
                <option value="685mm" data-type="u-tipo">685mm</option>
                <option value="885mm" data-type="u-tipo">885mm</option>
                <option value="1000mm" data-type="u-tipo">1000mm</option>
                <option value="1085mm" data-type="u-tipo">1085mm</option>
                <option value="1300mm" data-type="u-tipo">1300mm</option>
                <option value="750mm" data-type="m-tipo" style="display:none;">750mm</option>
                <option value="1000mm-m" data-type="m-tipo" style="display:none;">1000mm</option>
                <option value="1200mm" data-type="m-tipo" style="display:none;">1200mm</option>
                <option value="1400mm" data-type="m-tipo" style="display:none;">1400mm</option>
                <option value="2050mm" data-type="m-tipo" style="display:none;">2050mm</option>
            </select>
            <div id="plotisContainer" style="display:none;">
                <div class="pole-length-label">PLOTIS</div>
                <select class="dropdown" id="plotisSelect">
                    <option value=""></option>
                </select>
            </div>
            <div class="error-message" id="error-section-3"></div>
        </div>

        <div class="section" id="section-4">
            <div class="section-header">
                <span class="section-number">4</span>
                <h2>WHAT ARE THE DIMENSIONS OF YOUR STRUCTURE?</h2>
            </div>
            <div class="dimension-group">
                <div class="dimension-row">
                    <label class="dimension-label">
                        <span class="icon">↔</span>
                        <span>WIDTH</span>
                    </label>
                    <div class="dimension-inputs">
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="3" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">METRES</span>
                        </div>
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="9" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">FEET</span>
                        </div>
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="10" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">INCHES</span>
                        </div>
                    </div>
                </div>
                <div class="dimension-row">
                    <label class="dimension-label">
                        <span class="icon">↕</span>
                        <span>LENGTH</span>
                    </label>
                    <div class="dimension-inputs">
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="2" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">METRES</span>
                        </div>
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="6" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">FEET</span>
                        </div>
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="7" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">INCHES</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="error-message" id="error-section-4"></div>
        </div>

        <div class="section" id="section-5">
            <div class="section-header">
                <span class="section-number">5</span>
                <h2>PASIRINKITE JUNGIAMŲJŲ SERIJŲ TIPĄ</h2>
            </div>
            <div class="button-group button-group-2">
                <button class="option-btn active" data-option="m-tipo">M TIPO</button>
                <button class="option-btn" data-option="sraigtiniai">SRAIGTINIAI POLIAI</button>
            </div>
            <div class="error-message" id="error-section-5"></div>
        </div>

        <div class="section" id="section-6">
            <div class="section-header">
                <span class="section-number">6</span>
                <h2>PASIRINKITE JUNGIAMŲJŲ SERIJŲ DYDĮ</h2>
            </div>
            <div class="pole-length-label">AUKŠTIS</div>
            <select class="dropdown" id="section6AukstisSelect">
                <option value=""></option>
                <option value="1000mm" data-type="m-tipo">1000mm</option>
                <option value="1200mm" data-type="m-tipo">1200mm</option>
                <option value="500mm" data-type="sraigtiniai" style="display:none;">500mm</option>
                <option value="1000mm-s" data-type="sraigtiniai" style="display:none;">1000mm</option>
                <option value="1200mm-s" data-type="sraigtiniai" style="display:none;">1200mm</option>
            </select>
            <div id="section6PlotisContainer" style="display:none;">
                <div class="pole-length-label">PLOTIS</div>
                <select class="dropdown" id="section6PlotisSelect">
                    <option value=""></option>
                </select>
            </div>
            <div class="error-message" id="error-section-6"></div>
        </div>

        <div class="section" id="section-7">
            <div class="section-header" id="section8Header">
                <span class="section-number">7</span>
                <h2>MONTAVIMO ĮRANGOS NUOMA</h2>
            </div>
            <div class="tool-grid" id="section8Content">
                <button class="tool-btn" data-tool="none">NEREIKIA</button>
                <button class="tool-btn active" data-tool="manual">RANKINIO POLIŲ SUKIMO ĮRANKIO NUOMA</button>
                <button class="tool-btn" data-tool="professional">ELEKTRINIO POLIŲ SUKIMO ĮRANKIO NUOMA</button>
                <button class="tool-btn" data-tool="hire">ELEKTRINIO POLIŲ SUKIMO ĮRANKIO NUOMA</button>
            </div>
            <div class="error-message" id="error-section-7"></div>
        </div>

        <div class="section" id="section-9">
            <div class="section-header">
                <span class="section-number">9</span>
                <h2>ADDITIONAL ITEMS</h2>
            </div>
            <div class="checkbox-group">
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox">
                    <span>Impact ¼" Hex Nut Driver 8mm</span>
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox">
                    <span>85mm Magnetic Level</span>
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox">
                    <span>100 x Carbon steel TEK Screws</span>
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox">
                    <span>SDS Plus 26mm x 950mm Pilot Drill Bit</span>
                </label>
            </div>
        </div>

        <button class="calculate-btn" id="calculateBtn">CALCULATE</button>

        <div class="results-section" id="resultsSection">
            <h2 class="results-title">YOUR RESULTS</h2>
            <div class="results-table">
                <div class="result-row">
                    <div class="result-label">Pagalba</div>
                    <div class="result-value" id="result-pagalba">Nereikia</div>
                </div>
                <div class="result-row">
                    <div class="result-label">Polių tipas</div>
                    <div class="result-value" id="result-poliu-tipas">U tipo</div>
                </div>
                <div class="result-row">
                    <div class="result-label">Polių dydis</div>
                    <div class="result-value" id="result-poliu-dydis">685mm x 71mm</div>
                </div>
                <div class="result-row">
                    <div class="result-label">Struktūros matmenys</div>
                    <div class="result-value" id="result-strukturos-matmenys">3m x 2m (9.10ft x 6.7ft)</div>
                </div>
                <div class="result-row">
                    <div class="result-label">Jungiamųjų serijų tipas</div>
                    <div class="result-value" id="result-jungiamuju-tipas">M tipo</div>
                </div>
                <div class="result-row">
                    <div class="result-label">Jungiamųjų serijų dydis</div>
                    <div class="result-value" id="result-jungiamuju-dydis">1000mm x 68mm</div>
                </div>
                <div class="result-row" id="montavimoRow">
                    <div class="result-label">Montavimo įrangos nuoma</div>
                    <div class="result-value" id="result-montavimo">Rankinio polių sukimo įrankio nuoma</div>
                </div>
            </div>
        </div>

        <div class="cart-section" id="cartSection">
            <h2 class="cart-title">ADD TO CART</h2>
            <div class="cart-table">
                <div class="cart-header">
                    <div class="cart-col-product">Product</div>
                    <div class="cart-col-qty">Qty</div>
                    <div class="cart-col-each">Each</div>
                    <div class="cart-col-total">Total</div>
                </div>
                <div class="cart-row">
                    <div class="cart-col-product product-name">68mm x 850mm Self Install Ground Screw</div>
                    <div class="cart-col-qty">9</div>
                    <div class="cart-col-each">£23.99</div>
                    <div class="cart-col-total">£215.91</div>
                </div>
                <div class="cart-row">
                    <div class="cart-col-product product-name">Premium Bracket System for 4" x 2", 5" x 2" & 6" x 2" Joists</div>
                    <div class="cart-col-qty">9</div>
                    <div class="cart-col-each">£9.49</div>
                    <div class="cart-col-total">£85.41</div>
                </div>
                <div class="cart-subtotal">
                    <div class="subtotal-label">Subtotal:</div>
                    <div class="subtotal-value">£301.32 <span class="vat">+VAT</span></div>
                </div>
                <div class="cart-actions">
                    <button class="cart-btn add-cart-btn">
                        <span class="btn-icon">🛒</span> ADD TO CART
                    </button>
                    <button class="cart-btn email-btn">
                        <span class="btn-icon">✉</span> EMAIL CALCULATION
                    </button>
                </div>
            </div>
        </div>

    </div>
</div>
</div>
