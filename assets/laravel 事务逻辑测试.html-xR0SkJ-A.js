import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-CcO3HkfD.js";const e={},l=i(`<h2 id="顺序提交" tabindex="-1"><a class="header-anchor" href="#顺序提交"><span>顺序提交</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>if(false){</span></span>
<span class="line"><span>	# 开启事务</span></span>
<span class="line"><span>	DB::beginTransaction();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	$rs = \\App\\Models\\Test::add([&#39;name&#39;=&gt;&#39;1&#39;]);</span></span>
<span class="line"><span>	dump($rs);</span></span>
<span class="line"><span>	if ($rs) {</span></span>
<span class="line"><span>		// 一旦回滚执行，后续的逻辑当即不再存在与本事务中</span></span>
<span class="line"><span>		// DB::rollBack();</span></span>
<span class="line"><span>		// continue;</span></span>
<span class="line"><span>		// break;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 上面触发回滚后，下面的执行不再需要commit进行提交，会立即执行</span></span>
<span class="line"><span>	$rs = \\App\\Models\\Test::add([&#39;name&#39;=&gt;&#39;2&#39;]);</span></span>
<span class="line"><span>	dump($rs);</span></span>
<span class="line"><span>	if ($rs) {</span></span>
<span class="line"><span>		// DB::rollBack();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 一旦开始事务，必须使用commit提交，不然不执行</span></span>
<span class="line"><span>	// DB::commit();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套提交" tabindex="-1"><a class="header-anchor" href="#嵌套提交"><span>嵌套提交</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>if(1){</span></span>
<span class="line"><span>	# 第一层 开启事务</span></span>
<span class="line"><span>	DB::beginTransaction();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	$rs = \\App\\Models\\Test::add([&#39;name&#39;=&gt;&#39;01&#39;]);</span></span>
<span class="line"><span>	dump($rs);</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	// 一旦这里回滚，事务结束，下面的逻辑变为单层事务与无事务逻辑</span></span>
<span class="line"><span>	if (false) {</span></span>
<span class="line"><span>		DB::rollBack();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		# 第二层 开启事务</span></span>
<span class="line"><span>		DB::beginTransaction();</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		$rs = \\App\\Models\\Test::add([&#39;name&#39;=&gt;&#39;11&#39;]);</span></span>
<span class="line"><span>		dump($rs);</span></span>
<span class="line"><span>		if (false) {</span></span>
<span class="line"><span>			// 内部回滚为真回滚，即使外部成功提交，不影响内部回滚。</span></span>
<span class="line"><span>			DB::rollBack();</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		// 内层提交为虚假提交，必须要外部所有嵌套事务全部提交才执行。</span></span>
<span class="line"><span>		// </span></span>
<span class="line"><span>		DB::commit();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	$rs = \\App\\Models\\Test::add([&#39;name&#39;=&gt;&#39;02&#39;]);</span></span>
<span class="line"><span>	dump($rs);</span></span>
<span class="line"><span>	// 一旦上面发生回滚，这里不在事务内部，代码直接执行</span></span>
<span class="line"><span>	// 外部回滚，被包含的内部事务也回滚</span></span>
<span class="line"><span>	if (true) {</span></span>
<span class="line"><span>		DB::rollBack();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 一旦开始事务，必须使用commit提交，不然不执行</span></span>
<span class="line"><span>	DB::commit();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[l];function t(d,c){return a(),n("div",null,p)}const m=s(e,[["render",t],["__file","laravel 事务逻辑测试.html.vue"]]),o=JSON.parse(`{"path":"/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/laravel%20%E4%BA%8B%E5%8A%A1%E9%80%BB%E8%BE%91%E6%B5%8B%E8%AF%95.html","title":"laravel 事务逻辑测试","lang":"zh-CN","frontmatter":{"title":"laravel 事务逻辑测试","icon":"fab fa-markdown","order":2,"category":["技术记录"],"tag":["技术","随笔"],"date":"2024-05-31T00:00:00.000Z","description":"顺序提交 嵌套提交","head":[["meta",{"property":"og:url","content":"https://jijacky.github.io/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/laravel%20%E4%BA%8B%E5%8A%A1%E9%80%BB%E8%BE%91%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:title","content":"laravel 事务逻辑测试"}],["meta",{"property":"og:description","content":"顺序提交 嵌套提交"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-06T10:05:17.000Z"}],["meta",{"property":"article:author","content":"Veeooo"}],["meta",{"property":"article:tag","content":"技术"}],["meta",{"property":"article:tag","content":"随笔"}],["meta",{"property":"article:published_time","content":"2024-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-06T10:05:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"laravel 事务逻辑测试\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-06T10:05:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Veeooo\\",\\"url\\":\\"https://github.com/jijacky\\"}]}"]]},"headers":[{"level":2,"title":"顺序提交","slug":"顺序提交","link":"#顺序提交","children":[]},{"level":2,"title":"嵌套提交","slug":"嵌套提交","link":"#嵌套提交","children":[]}],"git":{"createdTime":1717668317000,"updatedTime":1717668317000,"contributors":[{"name":"jijacky","email":"jijacky@126.com","commits":1}]},"readingTime":{"minutes":1.18,"words":354},"filePathRelative":"技术记录/laravel 事务逻辑测试.md","localizedDate":"2024年5月31日","excerpt":"<h2>顺序提交</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>if(false){</span></span>\\n<span class=\\"line\\"><span>\\t# 开启事务</span></span>\\n<span class=\\"line\\"><span>\\tDB::beginTransaction();</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>\\t$rs = \\\\App\\\\Models\\\\Test::add(['name'=&gt;'1']);</span></span>\\n<span class=\\"line\\"><span>\\tdump($rs);</span></span>\\n<span class=\\"line\\"><span>\\tif ($rs) {</span></span>\\n<span class=\\"line\\"><span>\\t\\t// 一旦回滚执行，后续的逻辑当即不再存在与本事务中</span></span>\\n<span class=\\"line\\"><span>\\t\\t// DB::rollBack();</span></span>\\n<span class=\\"line\\"><span>\\t\\t// continue;</span></span>\\n<span class=\\"line\\"><span>\\t\\t// break;</span></span>\\n<span class=\\"line\\"><span>\\t}</span></span>\\n<span class=\\"line\\"><span>\\t// 上面触发回滚后，下面的执行不再需要commit进行提交，会立即执行</span></span>\\n<span class=\\"line\\"><span>\\t$rs = \\\\App\\\\Models\\\\Test::add(['name'=&gt;'2']);</span></span>\\n<span class=\\"line\\"><span>\\tdump($rs);</span></span>\\n<span class=\\"line\\"><span>\\tif ($rs) {</span></span>\\n<span class=\\"line\\"><span>\\t\\t// DB::rollBack();</span></span>\\n<span class=\\"line\\"><span>\\t}</span></span>\\n<span class=\\"line\\"><span>\\t// 一旦开始事务，必须使用commit提交，不然不执行</span></span>\\n<span class=\\"line\\"><span>\\t// DB::commit();</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{m as comp,o as data};
