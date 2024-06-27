import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-BKzoUWD5.js";const t={},l=n(`<h3 id="laravel-db-orm-子查询" tabindex="-1"><a class="header-anchor" href="#laravel-db-orm-子查询"><span>Laravel DB ORM 子查询</span></a></h3><h4 id="子查询必须遵循以下规则" tabindex="-1"><a class="header-anchor" href="#子查询必须遵循以下规则"><span>子查询必须遵循以下规则：</span></a></h4><pre><code>- 子查询必须括在圆括号中
- 子查询的 SELECT 子句中只能有一个列，除非主查询中有多个列，用于与子查询选中的列相比较
- 子查询不能使用 ORDER BY，不过主查询可以。在子查询中，GROUP BY 可以起到同 ORDER BY 相同的作用
- 返回多行数据的子查询只能同多值操作符一起使用，比如 IN 操作符
- SELECT 列表中不能包含任何对 BLOB、ARRAY、CLOB 或者 NCLOB 类型值的引用
- 子查询不能直接用在集合函数中 B- ETWEEN 操作符不能同子查询一起使用，但是 BETWEEN 操作符可以用在子查询中
</code></pre><h4 id="构建-raw-语句" tabindex="-1"><a class="header-anchor" href="#构建-raw-语句"><span>构建 raw 语句</span></a></h4><p>DB::raw 用于在查询中使用原始表达式。不仅限于 raw，也包括下述其他方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>selectRaw</span></span>
<span class="line"><span>whereRaw / orWhereRaw</span></span>
<span class="line"><span>havingRaw / orHavingRaw</span></span>
<span class="line"><span>orderByRaw</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用到的方法</p><ul><li>toSql() 获取不带 binding 参数的 SQL 语句</li><li>getQuery() 获取完整的 SQL 语句</li><li>mergeBindings() 将 binding 参数合并到查询中</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$sub = Abc::where(..)-&gt;groupBy(..); // Eloquent Builder instance</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$count = DB::table( DB::raw(&quot;({$sub-&gt;toSql()}) as sub&quot;) )</span></span>
<span class="line"><span>-&gt;mergeBindings($sub-&gt;getQuery()) </span></span>
<span class="line"><span>-&gt;count();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有关laravel的db与orm返回值的说明" tabindex="-1"><a class="header-anchor" href="#有关laravel的db与orm返回值的说明"><span>有关laravel的DB与ORM返回值的说明</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="shiki" data-ext="php" data-title="php" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">\\App\\Models\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">WxInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;otSV1wV2I2rqiIr2_ORWjtaO6UxQ&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//Collection[ORM]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">\\App\\Models\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">WxInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;sdf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//Collection[]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">DB</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;wx_info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;otSV1wV2I2rqiIr2_ORWjtaO6UxQ&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//Array[StdClass]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">DB</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;wx_info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;sdf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//Array[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">\\App\\Models\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">WxInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;otSV1wV2I2rqiIr2_ORWjtaO6UxQ&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">first</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//ORM</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">\\App\\Models\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">WxInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;sdf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">first</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">DB</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;wx_info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;otSV1wV2I2rqiIr2_ORWjtaO6UxQ&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">first</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//StdClass</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dump</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">DB</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;wx_info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;openid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;sdf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">first</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//null</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),e=[l];function h(k,p){return a(),s("div",null,e)}const B=i(t,[["render",h],["__file","Laravel ORM 的一些说明.html.vue"]]),g=JSON.parse('{"path":"/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/Laravel%20ORM%20%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AF%B4%E6%98%8E.html","title":"Laravel ORM 的一些说明","lang":"zh-CN","frontmatter":{"title":"Laravel ORM 的一些说明","icon":"fab fa-markdown","order":2,"category":["技术记录"],"tag":["技术","随笔"],"date":"2024-05-31T00:00:00.000Z","description":"Laravel DB ORM 子查询 子查询必须遵循以下规则： 构建 raw 语句 DB::raw 用于在查询中使用原始表达式。不仅限于 raw，也包括下述其他方法： 使用到的方法 toSql() 获取不带 binding 参数的 SQL 语句 getQuery() 获取完整的 SQL 语句 mergeBindings() 将 binding 参数合并...","head":[["meta",{"property":"og:url","content":"https://jijacky.github.io/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/Laravel%20ORM%20%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AF%B4%E6%98%8E.html"}],["meta",{"property":"og:title","content":"Laravel ORM 的一些说明"}],["meta",{"property":"og:description","content":"Laravel DB ORM 子查询 子查询必须遵循以下规则： 构建 raw 语句 DB::raw 用于在查询中使用原始表达式。不仅限于 raw，也包括下述其他方法： 使用到的方法 toSql() 获取不带 binding 参数的 SQL 语句 getQuery() 获取完整的 SQL 语句 mergeBindings() 将 binding 参数合并..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-06T10:05:17.000Z"}],["meta",{"property":"article:author","content":"Veeooo"}],["meta",{"property":"article:tag","content":"技术"}],["meta",{"property":"article:tag","content":"随笔"}],["meta",{"property":"article:published_time","content":"2024-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-06T10:05:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Laravel ORM 的一些说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-06T10:05:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Veeooo\\",\\"url\\":\\"https://github.com/jijacky\\"}]}"]]},"headers":[{"level":3,"title":"Laravel DB ORM 子查询","slug":"laravel-db-orm-子查询","link":"#laravel-db-orm-子查询","children":[]},{"level":3,"title":"有关laravel的DB与ORM返回值的说明","slug":"有关laravel的db与orm返回值的说明","link":"#有关laravel的db与orm返回值的说明","children":[]}],"git":{"createdTime":1717668317000,"updatedTime":1717668317000,"contributors":[{"name":"jijacky","email":"jijacky@126.com","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"技术记录/Laravel ORM 的一些说明.md","localizedDate":"2024年5月31日","excerpt":"<h3>Laravel DB ORM 子查询</h3>\\n<h4>子查询必须遵循以下规则：</h4>\\n<pre><code>- 子查询必须括在圆括号中\\n- 子查询的 SELECT 子句中只能有一个列，除非主查询中有多个列，用于与子查询选中的列相比较\\n- 子查询不能使用 ORDER BY，不过主查询可以。在子查询中，GROUP BY 可以起到同 ORDER BY 相同的作用\\n- 返回多行数据的子查询只能同多值操作符一起使用，比如 IN 操作符\\n- SELECT 列表中不能包含任何对 BLOB、ARRAY、CLOB 或者 NCLOB 类型值的引用\\n- 子查询不能直接用在集合函数中 B- ETWEEN 操作符不能同子查询一起使用，但是 BETWEEN 操作符可以用在子查询中\\n</code></pre>","autoDesc":true}');export{B as comp,g as data};
