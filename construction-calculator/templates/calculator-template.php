<div class="construction-calculator-plugin">
<div class="calculator-container">
    <div class="calculator">
        
        <div class="section" id="section-1">
            <div class="section-header">
                <span class="section-number">1</span>
                <h2>AR JUMS REIKĖS PAGALBOS SU JŪSŲ PROJEKTŲ AR PATS JĮ DARYSITE?</h2>
            </div>
            <div class="button-group button-group-2">
                <button class="option-btn active" id="helpOption1" data-option="diy">NEREIKIA</button>
                <button class="option-btn" id="helpOption2" data-option="professional">PROFESIONALUS SRAIGTINIŲ POLIŲ MONTAVIMAS</button>
            </div>
            <div class="error-message" id="error-section-1"></div>
        </div>

        <div class="section" id="section-2">
            <div class="section-header">
                <span class="section-number">2</span>
                <h2>PASIRINKITE JŪSŲ TIPĄ</h2>
            </div>
            <div class="button-group button-group-3">
                <button class="option-btn pole-type-btn active" data-option="u-tipo">U TIPO</button>
                <button class="option-btn pole-type-btn" data-option="m-tipo">M TIPO</button>
                <button class="option-btn pole-type-btn" data-option="sraigtiniai">JUNGIAMOJI SERIJA</button>
            </div>
            <div class="error-message" id="error-section-2"></div>
        </div>

        <div class="section" id="section-3">
            <div class="section-header">
                <span class="section-number">3</span>
                <h2>PASIRINKITE POLĮ</h2>
            </div>
            <div class="pole-length-label">POLIO SKERSMUO</div>
            <select class="dropdown" id="poleLengthSelect">
                <option hidden disabled selected value=""></option>
                <option value="68mm" data-type="u-tipo">68mm</option>
                <option value="76mm" data-type="u-tipo">76mm</option>
                <option value="89mm" data-type="u-tipo">89mm</option>
                <option value="68mm" data-type="m-tipo" style="display:none;">68mm</option>
                <option value="76mm" data-type="m-tipo" style="display:none;">76mm</option>
                <option value="89mm" data-type="m-tipo" style="display:none;">89mm</option>
                <option value="68mm" data-type="sraigtiniai" style="display:none;">68mm</option>
                <option value="76mm" data-type="sraigtiniai" style="display:none;">76mm</option>
                <option value="89mm" data-type="sraigtiniai" style="display:none;">89mm</option>
            </select>
            <div id="plotisContainer" style="display:none;">
                <div class="pole-length-label">POLIO AUKŠTIS</div>
                <select class="dropdown" id="plotisSelect">
                    <option hidden disabled selected value=""></option>
                </select>
            </div>
            <div class="error-message" id="error-section-3"></div>
        </div>

        <div class="section" id="section-4">
            <div class="section-header">
                <span class="section-number">4</span>
                <h2>KOKIE YRA JŪSŲ PROJEKTO MATMENYS?</h2>
            </div>
            <div class="dimension-group">
                <div class="dimension-row">
                    <label class="dimension-label">
                        <span class="icon">↔</span>
                        <span>PLOTIS</span>
                    </label>
                    <div class="dimension-inputs">
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="0" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">METRAI</span>
                        </div>
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="0" min="0" max="99" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">CENTIMETRAI</span>
                        </div>
                    </div>
                </div>
                <div class="dimension-row">
                    <label class="dimension-label">
                        <span class="icon">↕</span>
                        <span>ILGIS</span>
                    </label>
                    <div class="dimension-inputs">
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="0" min="0" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">METRAI</span>
                        </div>
                        <div class="input-group">
                            <div class="input-box">
                                <input type="number" value="0" min="0" max="99" class="dimension-input">
                                <div class="spinner-controls">
                                    <button class="spinner-btn up">▲</button>
                                    <button class="spinner-btn down">▼</button>
                                </div>
                            </div>
                            <span class="unit">CENTIMETRAI</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="error-message" id="error-section-4"></div>
        </div>

        <div class="section" id="section-5">
            <div class="section-header" id="section8Header">
                <span class="section-number">5</span>
                <h2>MONTAVIMO ĮRANGOS NUOMA</h2>
            </div>
            <div class="tool-grid" id="section8Content">
                <button class="tool-btn active" data-tool="none">NEREIKIA</button>
                <button class="tool-btn" data-tool="manual">RANKINIO POLIŲ SUKIMO ĮRANKIO NUOMA</button>
                <button class="tool-btn" data-tool="professional">ELEKTRINIO POLIŲ SUKIMO ĮRANKIO NUOMA</button>
                <button class="tool-btn" data-tool="heavy">ĮRANGOS NUOMA DIDELIŲ SRAIGTINIŲ PAMATŲ MONTAVIMUI</button>
            </div>
            <div id="rentalDatesContainer" style="display:none; margin-top: 20px;">
                <div class="pole-length-label">NUOMOS LAIKOTARPIS</div>
                <div class="date-range-group">
                    <div class="date-input-group">
                        <label class="date-label">NUO</label>
                        <input type="date" class="date-input" id="rentalStartDate">
                    </div>
                    <div class="date-input-group">
                        <label class="date-label">IKI</label>
                        <input type="date" class="date-input" id="rentalEndDate">
                    </div>
                </div>
                <div class="rental-days-display" id="rentalDaysDisplay" style="display:none; margin-top: 10px; color: #2d5650; font-weight: bold;"></div>
            </div>
            <div class="error-message" id="error-section-5"></div>
        </div>

        <button class="calculate-btn" id="calculateBtn">APSKAIČIUOTI</button>

        <div class="results-section" id="resultsSection">
            <h2 class="results-title">TAVO PASIRINKIMAI</h2>
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
                <div class="result-row" id="montavimoRow">
                    <div class="result-label">Montavimo įrangos nuoma</div>
                    <div class="result-value" id="result-montavimo">Rankinio polių sukimo įrankio nuoma</div>
                </div>
            </div>
        </div>

        <div class="cart-section" id="cartSection">
            <div class="cart-table">
                <div class="cart-header">
                    <div class="cart-col-product">Produktas</div>
                    <div class="cart-col-qty">Kiekis</div>
                    <div class="cart-col-each">Vienetas</div>
                    <div class="cart-col-total">Suma</div>
                </div>
                <div class="cart-subtotal">
                    <div class="subtotal-label">Viso:</div>
                    <div class="subtotal-value">£420.69</div>
                </div>
                <div class="cart-actions">
                    <button class="cart-btn add-cart-btn">
                        <span class="btn-icon">🛒</span> Pridėti į krepšelį
                    </button>
                    <button class="cart-btn email-btn">
                        <span class="btn-icon">✉</span> E-pašto apskaičiavimas
                    </button>
                </div>
            </div>
        </div>

    </div>
</div>
</div>
