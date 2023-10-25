import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.4719a631.js";const E=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"docs/getting-started/index.md","filePath":"docs/getting-started/index.md"}'),o={name:"docs/getting-started/index.md"},t=n(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p>We understand the importance of getting started quickly and easily. So we&#39;ve taken care of all the hard work for you.</p><h2 id="environment-setup" tabindex="-1">Environment Setup <a class="header-anchor" href="#environment-setup" aria-label="Permalink to &quot;Environment Setup&quot;">​</a></h2><p>Here is the required stack:</p><ul><li>Python &gt;= <code>3.8</code> and &lt;= <code>3.11</code></li><li>pip &gt;= <code>19.3.0</code></li><li>PostgreSQL &gt;= <code>10</code></li><li>Redis &gt;= <code>5</code></li><li>ta-lib &gt;= <code>0.4</code></li></ul><p>You have two options for your environment. To use the <a href="./docker">docker</a>, which is the fastest way to get started, or to install the required stack natively. Choose the option that suits you best:</p><ul><li><a href="./docker">Docker guide</a> (Recommended for beginners)</li><li><a href="./environment-setup.html#ubuntu">Ubuntu</a></li><li><a href="./environment-setup.html#macos">macOS</a></li><li><a href="./environment-setup.html#windows">Windows</a></li></ul><h2 id="create-a-new-jesse-project" tabindex="-1">Create a new Jesse project <a class="header-anchor" href="#create-a-new-jesse-project" aria-label="Permalink to &quot;Create a new Jesse project&quot;">​</a></h2><p>You&#39;ll need to create your own Jesse project to define your very own strategies.</p><p>Go to the directory you intend to create the project in and run:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># change the name &quot;my-bot&quot; to whatever you want</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/jesse-ai/project-template</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-bot</span></span>
<span class="line"><span style="color:#6A737D;"># enter the directory</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-bot</span></span>
<span class="line"><span style="color:#6A737D;"># create a .env file by copying it from the template</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.env.example</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.env</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># change the name &quot;my-bot&quot; to whatever you want</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/jesse-ai/project-template</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-bot</span></span>
<span class="line"><span style="color:#6A737D;"># enter the directory</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-bot</span></span>
<span class="line"><span style="color:#6A737D;"># create a .env file by copying it from the template</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.env.example</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.env</span></span></code></pre></div><p>This will create a new project containing only files and folders that you actually need:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.env</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># file where you enter the dashboard password, database credentials, etc</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># directory containing the required config files for docker</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">storage</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># directory containing logs, chart images, etc</span></span>
<span class="line"><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">strategies</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># directory containing your strategies</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Strategy01</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">__init__.py</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Strategy02</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">__init__.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.env</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># file where you enter the dashboard password, database credentials, etc</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># directory containing the required config files for docker</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">storage</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># directory containing logs, chart images, etc</span></span>
<span class="line"><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">strategies</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># directory containing your strategies</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Strategy01</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">__init__.py</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Strategy02</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">__init__.py</span></span></code></pre></div><h2 id="pip-installation" tabindex="-1">PIP Installation <a class="header-anchor" href="#pip-installation" aria-label="Permalink to &quot;PIP Installation&quot;">​</a></h2><p>If you went with the <a href="./docker">docker</a> option, then Jesse is installed for you and you don&#39;t have to do anything else. If you went with the native installation, then you have to install Jesse via <code>pip</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install jesse</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install jesse</span></span></code></pre></div><p>(Optional) Install numba to speed up a few indicators (<strong>Doesn&#39;t work on M1 macs at the moment</strong>):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install numba==0.53</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install numba==0.53</span></span></code></pre></div><h2 id="upgrade-with-pip" tabindex="-1">Upgrade with PIP <a class="header-anchor" href="#upgrade-with-pip" aria-label="Permalink to &quot;Upgrade with PIP&quot;">​</a></h2><p>We are constantly pushing new patches. To upgrade to the latest version run:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install -U jesse</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install -U jesse</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Sometimes pip doesn&#39;t upgrade to the latest version on the first time running the above command. To make sure you&#39;re running the latest release, check out the latest version number on <a href="https://pypi.org/project/jesse/" target="_blank" rel="noreferrer">PyPi</a>, and then make sure you see that version in <code>pip show jesse</code> output.</p></div><h2 id="virtual-environment-optional-but-recommended" tabindex="-1">Virtual environment (Optional but recommended) <a class="header-anchor" href="#virtual-environment-optional-but-recommended" aria-label="Permalink to &quot;Virtual environment (Optional but recommended)&quot;">​</a></h2><p>A Python virtual environment is very helpful because it creates an isolated space on your computer for each project, allowing you to install and manage Python packages separately for each one</p><p>To get started, navigate to your Jesse project directory where you want to set up the virtual environment.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path/to/your/jesse-project</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path/to/your/jesse-project</span></span></code></pre></div><p>Create a Python virtual environment named <code>venv</code>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># macOS and Linux</span></span>
<span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># Windows</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># macOS and Linux</span></span>
<span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># Windows</span></span></code></pre></div><p>Activate the virtual environment. You&#39;ll need to do this every time you want to run your bot.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv/bin/activate</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># macOS and Linux</span></span>
<span class="line"><span style="color:#79B8FF;">.</span><span style="color:#E1E4E8;">\\venv\\Scripts\\Activate   </span><span style="color:#6A737D;"># Windows</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv/bin/activate</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># macOS and Linux</span></span>
<span class="line"><span style="color:#005CC5;">.</span><span style="color:#24292E;">\\venv\\Scripts\\Activate   </span><span style="color:#6A737D;"># Windows</span></span></code></pre></div><p>Install the <code>jesse</code> package using pip.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jesse</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jesse</span></span></code></pre></div><p>Verify that <code>jesse</code> has been installed successfully.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jesse</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jesse</span></span></code></pre></div><p>Remember to activate the virtual environment each time you want to run your Jesse project.</p><h2 id="start-jesse" tabindex="-1">Start Jesse <a class="header-anchor" href="#start-jesse" aria-label="Permalink to &quot;Start Jesse&quot;">​</a></h2><p>If you are using Jesse via Docker, you don&#39;t need to run anything as it is explained in the <a href="./docker">Docker documentation</a>. For native setups however, to get the party started, (<strong>inside your Jesse project</strong>) first make sure that the values for both <code>POSTGRES_HOST</code> and <code>REDIS_HOST</code> are set to <code>localhost</code>. And then run the application by:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">jesse</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">jesse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span></span></code></pre></div><p>And it will print a local URL for you to open in your browser such as:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">INFO:     Started server process [66103]</span></span>
<span class="line"><span style="color:#e1e4e8;">INFO:     Waiting for application startup.</span></span>
<span class="line"><span style="color:#e1e4e8;">INFO:     Application startup complete.</span></span>
<span class="line"><span style="color:#e1e4e8;">INFO:     Uvicorn running on http://0.0.0.0:9000 (Press CTRL+C to quit)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">INFO:     Started server process [66103]</span></span>
<span class="line"><span style="color:#24292e;">INFO:     Waiting for application startup.</span></span>
<span class="line"><span style="color:#24292e;">INFO:     Application startup complete.</span></span>
<span class="line"><span style="color:#24292e;">INFO:     Uvicorn running on http://0.0.0.0:9000 (Press CTRL+C to quit)</span></span></code></pre></div><p>Go ahead and open (in my case) <a href="http://127.0.0.1:9000" target="_blank" rel="noreferrer">127.0.0.1:9000</a> in your browser of choice. If you are running on a server, you can use the IP address of the server instead of <code>0.0.0.0</code>.</p><p>So for example if the IP address of your server is <code>1.2.3.4</code> the URL would be <a href="http://1.2.3.4:9000" target="_blank" rel="noreferrer">http://1.2.3.4:9000</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want to change the default <code>9000</code> port, you can do it by modifying the <code>APP_PORT</code> value in your project&#39;s <code>.env</code> file.</p></div>`,43),p=[t];function l(c,r,i,d,y,h){return a(),e("div",null,p)}const g=s(o,[["render",l]]);export{E as __pageData,g as default};
