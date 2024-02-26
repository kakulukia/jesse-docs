import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.4719a631.js";const m=JSON.parse('{"title":"Hyperparameters","description":"","frontmatter":{"title":"Hyperparameters"},"headers":[],"relativePath":"docs/optimize/hyperparameters.md","filePath":"docs/optimize/hyperparameters.md"}'),e={name:"docs/optimize/hyperparameters.md"},l=p(`<h1 id="defining-hyperparameters" tabindex="-1">Defining hyperparameters <a class="header-anchor" href="#defining-hyperparameters" aria-label="Permalink to &quot;Defining hyperparameters&quot;">​</a></h1><p>Let&#39;s imagine that I want to optimize the period of two EMA indicators in my strategy.</p><p>This is how I would have defined them so far, by hard-coding periods as integer values; in this case <code>50</code> and <code>200</code>:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">property</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slow_sma</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ta.sma(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.candles, </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">property</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fast_sma</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ta.sma(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.candles, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">property</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slow_sma</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ta.sma(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.candles, </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">property</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fast_sma</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ta.sma(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.candles, </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">)</span></span></code></pre></div><p>To define the hyperparameters of your strategy, simply add the <code>hyperparameters()</code> method to your strategy. It must return a list of python dictionary objects (genes); each of which has to have these key values: <code>name</code>, <code>type</code>, <code>min</code>, <code>max</code>, and <code>default</code>. Here is the code for this example:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hyperparameters</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;slow_sma_period&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;min&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;max&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">210</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;fast_sma_period&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;min&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;max&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hyperparameters</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;slow_sma_period&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;min&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;max&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">210</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">        {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;fast_sma_period&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;min&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;max&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Currently <code>int</code> and <code>float</code> are the only supported types. If you need a boolean, just use <code>int</code> with <code>min: 0</code>, <code>max: 1</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Currently the step size of <code>int</code> and <code>float</code> can&#39;t be set. If you want a certain step size, just use <code>int</code> and then mutiply it with your step size inside your strategy.</p></div><p><code>slow_sma_period</code> and <code>fast_sma_period</code> are the names that I chose for these two hyperparameters. It could have been anything else.</p><p>Jesse (behind the scenes) injects each hyperparameter (gene) into the <code>self.hp</code> property that is available in your strategy class.</p><p>Now let&#39;s rewrite my starting example to use the dynamic hyperparameters instead:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">property</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slow_sma</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ta.sma(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.candles, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.hp[</span><span style="color:#9ECBFF;">&#39;slow_sma_period&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">property</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fast_sma</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ta.sma(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.candles, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.hp[</span><span style="color:#9ECBFF;">&#39;fast_sma_period&#39;</span><span style="color:#E1E4E8;">])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">property</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slow_sma</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ta.sma(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.candles, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.hp[</span><span style="color:#032F62;">&#39;slow_sma_period&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">property</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fast_sma</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ta.sma(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.candles, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.hp[</span><span style="color:#032F62;">&#39;fast_sma_period&#39;</span><span style="color:#24292E;">])</span></span></code></pre></div><p>If I execute a backtest again, I will get the same results as before as if I was using the hard-coded code. That&#39;s because I defined <code>50</code> and <code>200</code> as default values for my hyperparameters.</p>`,13),o=[l];function t(c,r,y,E,i,d){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{m as __pageData,h as default};