import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-BKzoUWD5.js";const s={},l=n(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>NGINX</span></a></h2><h3 id="nginx伪静态说明" tabindex="-1"><a class="header-anchor" href="#nginx伪静态说明"><span>NGINX伪静态说明</span></a></h3><ul><li>last，重写后的规则，会继续用重写后的值去匹配下面的location。</li><li>break，重写后的规则，不会去匹配下面的location。使用新的规则，直接发起一次http请求了。</li><li>错误页指定conf/nginx.conf设置：error_page 404 500 = /error.html 或 error_page 404 = http://域名;</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rewrite &#39;(?!css)(.*).html&#39; /index.php?s=$1 last;</span></span>
<span class="line"><span>rewrite &#39;(?!Public)(.*).html&#39; /index.php?s=$1 last;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache"><span>APACHE</span></a></h2><h3 id="apache伪静态说明" tabindex="-1"><a class="header-anchor" href="#apache伪静态说明"><span>APACHE伪静态说明</span></a></h3><ul><li><ol><li>R[=code](force redirect) 强制外部重定向 强制在替代字符串加上http://thishost[:thisport]/前缀重定向到外部的URL.如果code不指定，将用缺省的302 HTTP状态码。</li></ol></li><li><ol start="2"><li>F(force URL to be forbidden)禁用URL,返回403HTTP状态码。</li></ol></li><li><ol start="3"><li>G(force URL to be gone) 强制URL为GONE，返回410HTTP状态码。</li></ol></li><li><ol start="4"><li>P(force proxy) 强制使用代理转发。</li></ol></li><li><ol start="5"><li>L(last rule) 表明当前规则是最后一条规则，停止分析以后规则的重写。</li></ol></li><li><ol start="6"><li>N(next round) 重新从第一条规则开始运行重写过程。</li></ol></li><li><ol start="7"><li>C(chained with next rule) 与下一条规则关联</li></ol></li><li><ol start="8"><li>QSA 继续传递GET参数</li></ol></li></ul><h3 id="rewriterule规则表达式的说明" tabindex="-1"><a class="header-anchor" href="#rewriterule规则表达式的说明"><span>RewriteRule规则表达式的说明：</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>  . 匹配任何单字符 </span></span>
<span class="line"><span>  [chars] 匹配字符串:chars </span></span>
<span class="line"><span>  [^chars] 不匹配字符串:chars </span></span>
<span class="line"><span>  text1|text2 可选择的字符串:text1或text2 </span></span>
<span class="line"><span>  ? 匹配0到1个字符 </span></span>
<span class="line"><span>  * 匹配0到多个字符 </span></span>
<span class="line"><span>  + 匹配1到多个字符 </span></span>
<span class="line"><span>  ^ 字符串开始标志 </span></span>
<span class="line"><span>  $ 字符串结束标志 </span></span>
<span class="line"><span>  n 转义符标志</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>RewriteEngine On</span></span>
<span class="line"><span>RewriteRule (?!css)(.*).html$ /index.php?s=$1 [L]</span></span>
<span class="line"><span>RewriteRule (?!Public)(.*).html$ /index.php?s=$1 [L]</span></span>
<span class="line"><span>ErrorDocument 404 /error/404.php</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rewrite-语法格式" tabindex="-1"><a class="header-anchor" href="#rewrite-语法格式"><span>rewrite 语法格式</span></a></h3><p>rewrite 语法格式及参数语法说明如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rewrite    &lt;regex&gt;    &lt;replacement&gt;    [flag];</span></span>
<span class="line"><span>关键字      正则        替代内容          flag标记</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关键字：其中关键字error_log不能改变</li><li>正则：perl兼容正则表达式语句进行规则匹配</li><li>替代内容：将正则匹配的内容替换成replacement</li><li>flag标记：rewrite支持的flag标记</li></ul><p>flag标记说明：</p><ul><li>last #本条规则匹配完成后，继续向下匹配新的location URI规则</li><li>break #本条规则匹配完成即终止，不再匹配后面的任何规则</li><li>redirect #返回302临时重定向，浏览器地址会显示跳转后的URL地址</li><li>permanent #返回301永久重定向，浏览器地址栏会显示跳转后的URL地址</li></ul><h3 id="变量及判断" tabindex="-1"><a class="header-anchor" href="#变量及判断"><span>变量及判断</span></a></h3><p>使用 <code>!-e $request_filename</code> 语句。其中<code>-e</code>表示只要<code>filename</code>存在，则为真，不管<code>filename</code>是什么类型，当然这里加了<code>!</code>就取反</p><p>额外的一些</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>-e filename 如果 filename存在，则为真</span></span>
<span class="line"><span>-d filename 如果 filename为目录，则为真 </span></span>
<span class="line"><span>-f filename 如果 filename为常规文件，则为真</span></span>
<span class="line"><span>-L filename 如果 filename为符号链接，则为真</span></span>
<span class="line"><span>-r filename 如果 filename可读，则为真 </span></span>
<span class="line"><span>-w filename 如果 filename可写，则为真 </span></span>
<span class="line"><span>-x filename 如果 filename可执行，则为真</span></span>
<span class="line"><span>-s filename 如果文件长度不为0，则为真</span></span>
<span class="line"><span>-h filename 如果文件是软链接，则为</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>if (!-e $request_filename){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里就是一些url重写的规则</span></span>
<span class="line"><span></span></span>
<span class="line"><span>｝</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题在于，<code>if</code>和<code>(</code>之间必须有个空格，这搞我很无语，能在配置文件里面可以用类似于语言类的<code>if</code>语句，也算是一进步吧，但是还不是很完美。</p>`,24),t=[l];function r(p,d){return a(),i("div",null,t)}const h=e(s,[["render",r],["__file","伪静态说明.html.vue"]]),m=JSON.parse(`{"path":"/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/%E4%BC%AA%E9%9D%99%E6%80%81%E8%AF%B4%E6%98%8E.html","title":"伪静态说明","lang":"zh-CN","frontmatter":{"title":"伪静态说明","icon":"fab fa-markdown","order":2,"category":["技术记录"],"tag":["技术","随笔"],"date":"2024-05-31T00:00:00.000Z","description":"NGINX NGINX伪静态说明 last，重写后的规则，会继续用重写后的值去匹配下面的location。 break，重写后的规则，不会去匹配下面的location。使用新的规则，直接发起一次http请求了。 错误页指定conf/nginx.conf设置：error_page 404 500 = /error.html 或 error_page 40...","head":[["meta",{"property":"og:url","content":"https://jijacky.github.io/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/%E4%BC%AA%E9%9D%99%E6%80%81%E8%AF%B4%E6%98%8E.html"}],["meta",{"property":"og:title","content":"伪静态说明"}],["meta",{"property":"og:description","content":"NGINX NGINX伪静态说明 last，重写后的规则，会继续用重写后的值去匹配下面的location。 break，重写后的规则，不会去匹配下面的location。使用新的规则，直接发起一次http请求了。 错误页指定conf/nginx.conf设置：error_page 404 500 = /error.html 或 error_page 40..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T06:28:29.000Z"}],["meta",{"property":"article:author","content":"Veeooo"}],["meta",{"property":"article:tag","content":"技术"}],["meta",{"property":"article:tag","content":"随笔"}],["meta",{"property":"article:published_time","content":"2024-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T06:28:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"伪静态说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T06:28:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Veeooo\\",\\"url\\":\\"https://github.com/jijacky\\"}]}"]]},"headers":[{"level":2,"title":"NGINX","slug":"nginx","link":"#nginx","children":[{"level":3,"title":"NGINX伪静态说明","slug":"nginx伪静态说明","link":"#nginx伪静态说明","children":[]}]},{"level":2,"title":"APACHE","slug":"apache","link":"#apache","children":[{"level":3,"title":"APACHE伪静态说明","slug":"apache伪静态说明","link":"#apache伪静态说明","children":[]},{"level":3,"title":"RewriteRule规则表达式的说明：","slug":"rewriterule规则表达式的说明","link":"#rewriterule规则表达式的说明","children":[]},{"level":3,"title":"rewrite 语法格式","slug":"rewrite-语法格式","link":"#rewrite-语法格式","children":[]},{"level":3,"title":"变量及判断","slug":"变量及判断","link":"#变量及判断","children":[]}]}],"git":{"createdTime":1717668317000,"updatedTime":1718432909000,"contributors":[{"name":"jijacky","email":"jijacky@126.com","commits":2}]},"readingTime":{"minutes":2.75,"words":826},"filePathRelative":"技术记录/伪静态说明.md","localizedDate":"2024年5月31日","excerpt":"<h2>NGINX</h2>\\n<h3>NGINX伪静态说明</h3>\\n<ul>\\n<li>last，重写后的规则，会继续用重写后的值去匹配下面的location。</li>\\n<li>break，重写后的规则，不会去匹配下面的location。使用新的规则，直接发起一次http请求了。</li>\\n<li>错误页指定conf/nginx.conf设置：error_page 404 500   = /error.html 或 error_page 404 = http://域名;</li>\\n</ul>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>rewrite '(?!css)(.*).html' /index.php?s=$1 last;</span></span>\\n<span class=\\"line\\"><span>rewrite '(?!Public)(.*).html' /index.php?s=$1 last;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{h as comp,m as data};
