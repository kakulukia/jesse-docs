import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.4719a631.js";const l="/assets/filters-diagram.c4981ffd.png",u=JSON.parse('{"title":"Filters","description":"","frontmatter":{},"headers":[],"relativePath":"docs/strategies/filters.md","filePath":"docs/strategies/filters.md"}'),o={name:"docs/strategies/filters.md"},p=n(`<h1 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;Filters&quot;">​</a></h1><p>Filter functions are used to filter out bad trades.</p><h2 id="basic-syntax" tabindex="-1">Basic syntax <a class="header-anchor" href="#basic-syntax" aria-label="Permalink to &quot;Basic syntax&quot;">​</a></h2><p>First, add the <code>filters()</code> method to your strategy class which must return a list:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">filters</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">filters</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span></code></pre></div><p>Then define filter methods as many as you need. They can have any name, but it is recommended to include the word <code>filter</code> in it:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">filter_1</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.price </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.long_EMA) </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.price </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.longer_EMA)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">filter_1</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.price </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.long_EMA) </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.price </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.longer_EMA)</span></span></code></pre></div><p>And then add the method&#39;s object to the <code>filters</code> method&#39;s list:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">filters</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.filter_1</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">filters</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.filter_1</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Notice that you must only add the method&#39;s object to the list. Do not call the method! (no parentheses at the end of the method name)</p><p>Wrong example:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">filters</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.filter_1()</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">filters</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.filter_1()</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span></code></pre></div></div><h2 id="why-filters" tabindex="-1">Why filters? <a class="header-anchor" href="#why-filters" aria-label="Permalink to &quot;Why filters?&quot;">​</a></h2><p>There are two reasons for using them:</p><h3 id="_1-to-keep-entry-rules-clean" tabindex="-1">1. To keep entry rules clean <a class="header-anchor" href="#_1-to-keep-entry-rules-clean" aria-label="Permalink to &quot;1. To keep entry rules clean&quot;">​</a></h3><p>Having so many conditional statements in <code>should_long()</code>/<code>should_short()</code> is not good practice.</p><p>You should keep your entry rules as simple as possible. You can then add filters per each special condition that you would like to avoid.</p><h3 id="_2-filters-have-access-to-entry-and-exit-points" tabindex="-1">2. Filters have access to entry and exit points <a class="header-anchor" href="#_2-filters-have-access-to-entry-and-exit-points" aria-label="Permalink to &quot;2. Filters have access to entry and exit points&quot;">​</a></h3><p>Entry rules are defined in <code>should_long()</code> and <code>should_short()</code> functions; however entry and exit points are defined in <code>go_long()</code> and <code>go_short()</code> functions. That means if you need to evaluate a condition based on entry and exit points, you have to do it in a filter instead.</p><p>They say a picture worths a thousand words:</p><p><img src="`+l+`" alt="filters"></p><p>For example let&#39;s write a filter that makes sure the minimum PNL for trades is bigger than 1%:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">minimum_pnl_filter</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    reward_per_qty </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abs</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.average_take_profit </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.average_entry_price)</span></span>
<span class="line"><span style="color:#E1E4E8;">    pnl_percentage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (reward_per_qty </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.average_entry_price) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> pnl_percentage </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">minimum_pnl_filter</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    reward_per_qty </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.average_take_profit </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.average_entry_price)</span></span>
<span class="line"><span style="color:#24292E;">    pnl_percentage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (reward_per_qty </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.average_entry_price) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> pnl_percentage </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span></code></pre></div><p>Notice that we are using <code>self.average_entry_price</code> and <code>self.average_take_profit</code> properties which were not available inside <code>should_long()</code> methods.</p><h3 id="_3-easier-debugging" tabindex="-1">3. Easier debugging <a class="header-anchor" href="#_3-easier-debugging" aria-label="Permalink to &quot;3. Easier debugging&quot;">​</a></h3><p>When a filter prevents opening a trade by not passing, it gets logged which is helpful for debugging.</p>`,24),t=[p];function r(c,i,y,d,E,h){return a(),e("div",null,t)}const g=s(o,[["render",r]]);export{u as __pageData,g as default};
