import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.4719a631.js";const f=JSON.parse('{"title":"Supported Exchanges","description":"","frontmatter":{"title":"Supported Exchanges"},"headers":[],"relativePath":"docs/supported-exchanges/index.md","filePath":"docs/supported-exchanges/index.md"}'),n={name:"docs/supported-exchanges/index.md"},o=r('<h1 id="supported-exchanges" tabindex="-1">Supported Exchanges <a class="header-anchor" href="#supported-exchanges" aria-label="Permalink to &quot;Supported Exchanges&quot;">​</a></h1><p>Not every exchange provides historical candles that can be used for doing backtesting and research. But they all offer candles for live trading.</p><p>Hence, supported exchanges for backtesting and live trading are different.</p><h2 id="backtesting" tabindex="-1">Backtesting <a class="header-anchor" href="#backtesting" aria-label="Permalink to &quot;Backtesting&quot;">​</a></h2><p>So far, the below exchanges are supported for <strong>importing candles and running backtests</strong>:</p><ul><li><code>Binance Spot</code></li><li><code>Binance US Spot</code></li><li><code>Binance Perpetual Futures Testnet </code></li><li><code>Binance Perpetual Futures</code></li><li><code>Bitfinex Spot</code></li><li><code>Coinbase Spot</code></li><li><code>Bybit USDT Perpetual Testnet</code></li><li><code>Bybit USDT Perpetual</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Notice that the words <code>Spot</code> and <code>Futures</code> in the exchange names above merely indicate the source of the candles and NOT the type of backtests you can run with them.</p><p>For example you can use candles from <code>Binance Spot</code> to run backtests in both <strong>spot</strong> and <strong>futures</strong> mode and vice versa.</p><p>You can change the type of exchange for backtests in the settings page per each individual exchange.</p></div><h2 id="live-trading" tabindex="-1">Live trading <a class="header-anchor" href="#live-trading" aria-label="Permalink to &quot;Live trading&quot;">​</a></h2><p>At the moment these are the supported exchanges for live trading:</p><ul><li><a href="https://jesse.trade/dydx" target="_blank" rel="noreferrer">DYDX</a></li><li><a href="https://jesse.trade/bitget" target="_blank" rel="noreferrer">Bitget USDT Perpetual</a></li><li><a href="https://jesse.trade/bybit" target="_blank" rel="noreferrer">Bybit USDT Perpetual Futures</a></li><li><a href="https://www.binance.com/en/futures/BTCUSDT" target="_blank" rel="noreferrer">Binance Perpetual Futures</a></li><li><a href="https://www.binance.com/en/trade/BTC_USDT?theme=dark&amp;type=spot" target="_blank" rel="noreferrer">Binance Spot</a></li><li><a href="https://www.binance.us" target="_blank" rel="noreferrer">Binance US Spot</a></li></ul><p>New exchange drivers are developed based on demand. So if you need an exchange that is not supported, please reach out and let me know.</p>',11),i=[o];function s(c,d,l,p,h,u){return t(),a("div",null,i)}const b=e(n,[["render",s]]);export{f as __pageData,b as default};