import{_ as e,o as t,c as i,Q as o}from"./chunks/framework.4719a631.js";const g=JSON.parse('{"title":"Exchange Limitations","description":"","frontmatter":{},"headers":[],"relativePath":"docs/supported-exchanges/exchange-limitations.md","filePath":"docs/supported-exchanges/exchange-limitations.md"}'),a={name:"docs/supported-exchanges/exchange-limitations.md"},s=o('<h1 id="exchange-limitations" tabindex="-1">Exchange Limitations <a class="header-anchor" href="#exchange-limitations" aria-label="Permalink to &quot;Exchange Limitations&quot;">​</a></h1><p>When it comes to live trading, sometimes we are limited by how an exchange&#39;s API works.</p><p>This page lists the limitations of each exchange that are known so far:</p><h2 id="dydx" tabindex="-1">DYDX <a class="header-anchor" href="#dydx" aria-label="Permalink to &quot;DYDX&quot;">​</a></h2><p>If you&#39;re going to trade on DYDX using Jesse, there are a few limitations you should know about:</p><ul><li>Isolated margin can be achieved by creating separate accounts (sub-accounts) under the same user.</li><li>Accounts may only have up to 20 open orders for a given market/side pair at any one time. (For example up to 20 open BTC-USD bids).</li><li>The liquidation price that is shown on Jesse is slightly different than the one shown on DYDX&#39;s website. This is because DYDX&#39;s API doesn&#39;t provide the exact liquidation price and Jesse calculates it based on the available data. The difference is usually less than 3%. This is an <a href="https://github.com/dydxprotocol/dydx-v3-python/issues/199" target="_blank" rel="noreferrer">open issue</a>.</li></ul><h2 id="bitget" tabindex="-1">Bitget <a class="header-anchor" href="#bitget" aria-label="Permalink to &quot;Bitget&quot;">​</a></h2><p>If you&#39;re going to trade on Bitget using Jesse, there are a few limitations you should know about:</p><ul><li>Manually submitted orders are not supported with Bitget. Currently, most manually submitted orders are supported with other exchanges that Jesse supports (like Binance and Bybit) but through limitations in Bitget&#39;s API, it&#39;s not possible to distinguish between manually submitted orders and orders submitted by Jesse. So if you submit an order manually, Jesse will not be able to track it properly. Hence, it&#39;s not supported at all for now to prevent any issues.</li><li>Hedge mode is not supported by Jesse at the moment (that means even though you can technically open two opposite positions on Bitget, Jesse will not allow you to do that).</li><li>Bitget&#39;s Spot market is not supported by Jesse at the moment due to limitations in Bitget&#39;s API. This will be added in the future when they add the required endpoints to their API.</li><li>Bitget&#39;s API has the limitation of not allowing to submit reduce-only orders more than the size of the open positions. This behavior makes it similar to how the spot trading works. To overcome this limitation, Jesse handles the submission of exit orders using its concept of <strong>queued orders</strong>. You can read more about them in the <a href="https://jesse.trade/help/faq/what-does-queued-status-mean-for-orders" target="_blank" rel="noreferrer">help center</a>.</li></ul>',9),n=[s];function r(l,h,d,u,c,p){return t(),i("div",null,n)}const b=e(a,[["render",r]]);export{g as __pageData,b as default};