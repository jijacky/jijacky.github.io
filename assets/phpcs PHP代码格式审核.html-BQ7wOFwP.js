import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as i}from"./app-BKzoUWD5.js";const e={},p=i(`<h3 id="代码格式审核" tabindex="-1"><a class="header-anchor" href="#代码格式审核"><span>代码格式审核</span></a></h3><blockquote><p>使用phpcs.phar</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>@echo OFF</span></span>
<span class="line"><span>:: in case DelayedExpansion is on and a path contains ! </span></span>
<span class="line"><span>setlocal DISABLEDELAYEDEXPANSION</span></span>
<span class="line"><span>php &quot;%~dp0phpcs.phar&quot; %*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载phpcs.phar，新建bat文件，放置于同一目录，将以上代码写入保存。然后再命令行直接调用即可</p><h3 id="代码格式修正" tabindex="-1"><a class="header-anchor" href="#代码格式修正"><span>代码格式修正</span></a></h3><blockquote><p>使用phpcbf.phar</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>@echo OFF</span></span>
<span class="line"><span>:: in case DelayedExpansion is on and a path contains ! </span></span>
<span class="line"><span>setlocal DISABLEDELAYEDEXPANSION</span></span>
<span class="line"><span>php &quot;%~dp0phpcbf.phar&quot; %*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载phpcbf.phar，新建bat文件，放置于同一目录，将以上代码写入保存。然后再命令行直接调用即可</p><h3 id="git-hook" tabindex="-1"><a class="header-anchor" href="#git-hook"><span>GIT HOOK</span></a></h3><blockquote><p>git 提交预检查钩子 将以下代码放入git hook目录的pre-commit文件即可</p></blockquote><ul><li>代码1</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># check PHP code syntax error and standard with phpcs</span></span>
<span class="line"><span># author : star[github.com/star1989]</span></span>
<span class="line"><span># date : 2017-02-24</span></span>
<span class="line"><span>PROJECT=$(git rev-parse --show-toplevel)</span></span>
<span class="line"><span>cd $PROJECT</span></span>
<span class="line"><span>SFILES=$(git diff --cached --name-only --diff-filter=ACMR HEAD | grep \\\\.php)</span></span>
<span class="line"><span>TMP_DIR=$PROJECT&quot;/.tmp&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Determine if a file list is passed</span></span>
<span class="line"><span>if [ &quot;$#&quot; -ne 0 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>    exit 0</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>echo &quot;Checking PHP Lint...&quot;</span></span>
<span class="line"><span>for FILE in $SFILES</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>#    echo &quot;php -l -d display_errors=0 \${FILE}&quot;</span></span>
<span class="line"><span>#   echo &quot;git show :$FILE &gt; $TMP_DIR/$FILE&quot;</span></span>
<span class="line"><span>    php -l -d display_errors=0 $FILE</span></span>
<span class="line"><span>    if [ $? != 0  ]</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        echo &quot;Fix the error before commit.&quot;</span></span>
<span class="line"><span>        exit 1</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>    FILES=&quot;$FILES $PROJECT/$FILE&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$FILES&quot; != &quot;&quot; ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>    echo &quot;Running Code Sniffer...&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #TMP_DIR=/tmp/$(uuidgen)</span></span>
<span class="line"><span>    mkdir -p $TMP_DIR</span></span>
<span class="line"><span>    for FILE in $SFILES</span></span>
<span class="line"><span>    do</span></span>
<span class="line"><span>        mkdir -p $TMP_DIR/$(dirname $FILE)</span></span>
<span class="line"><span>        git show :$FILE &gt; $TMP_DIR/$FILE</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>    PHP D:/phpcs/phpcs.phar --standard=PSR2 --encoding=utf-8 -n $TMP_DIR</span></span>
<span class="line"><span>    PHPCS_ERROR=$?</span></span>
<span class="line"><span>    rm -rf $TMP_DIR</span></span>
<span class="line"><span>    if [ $PHPCS_ERROR != 0 ]</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        echo &quot;Fix the error before commit.&quot;</span></span>
<span class="line"><span>        exit 1</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exit $?</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>代码2</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span># PHP CodeSniffer pre-commit hook for git</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># @author Soenke Ruempler &lt;soenke@ruempler.eu&gt;</span></span>
<span class="line"><span># @author Sebastian Kaspari &lt;s.kaspari@googlemail.com&gt;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># see the README</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#PHPCS_BIN=/usr/local/bin/phpcs</span></span>
<span class="line"><span>PHPCS_BIN=&quot;PHP D:/phpcs/phpcs.phar&quot;</span></span>
<span class="line"><span>#PHPCS_CODING_STANDARD=PEAR</span></span>
<span class="line"><span>PHPCS_CODING_STANDARD=PSR12</span></span>
<span class="line"><span>PHPCS_IGNORE=</span></span>
<span class="line"><span>PHPCS_IGNORE_WARNINGS=1</span></span>
<span class="line"><span>TMP_STAGING=&quot;.tmp_staging&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># parse config</span></span>
<span class="line"><span>CONFIG_FILE=$(dirname $0)/config</span></span>
<span class="line"><span>if [ -e $CONFIG_FILE ]; then</span></span>
<span class="line"><span>    . $CONFIG_FILE</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># simple check if code sniffer is set up correctly</span></span>
<span class="line"><span>if [ ! -x $PHPCS_BIN ]; then</span></span>
<span class="line"><span>    echo &quot;PHP CodeSniffer bin not found or executable -&gt; $PHPCS_BIN&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># stolen from template file</span></span>
<span class="line"><span>if git rev-parse --verify HEAD</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>    against=HEAD</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    # Initial commit: diff against an empty tree object</span></span>
<span class="line"><span>    against=4b825dc642cb6eb9a060e54bf8d69288fbee4904</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># this is the magic: </span></span>
<span class="line"><span># retrieve all files in staging area that are added, modified or renamed</span></span>
<span class="line"><span># but no deletions etc</span></span>
<span class="line"><span>FILES=$(git diff-index --name-only --cached --diff-filter=ACMR $against -- )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$FILES&quot; == &quot;&quot; ]; then</span></span>
<span class="line"><span>    exit 0</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># create temporary copy of staging area</span></span>
<span class="line"><span>if [ -e $TMP_STAGING ]; then</span></span>
<span class="line"><span>    rm -rf $TMP_STAGING</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>mkdir $TMP_STAGING</span></span>
<span class="line"><span></span></span>
<span class="line"><span># match files against whitelist</span></span>
<span class="line"><span>FILES_TO_CHECK=&quot;&quot;</span></span>
<span class="line"><span>for FILE in $FILES</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    echo &quot;$FILE&quot; | egrep -q &quot;$PHPCS_FILE_PATTERN&quot;</span></span>
<span class="line"><span>    RETVAL=$?</span></span>
<span class="line"><span>    if [ &quot;$RETVAL&quot; -eq &quot;0&quot; ]</span></span>
<span class="line"><span>    then</span></span>
<span class="line"><span>        FILES_TO_CHECK=&quot;$FILES_TO_CHECK $FILE&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$FILES_TO_CHECK&quot; == &quot;&quot; ]; then</span></span>
<span class="line"><span>    exit 0</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># execute the code sniffer</span></span>
<span class="line"><span>if [ &quot;$PHPCS_IGNORE&quot; != &quot;&quot; ]; then</span></span>
<span class="line"><span>    IGNORE=&quot;--ignore=$PHPCS_IGNORE&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    IGNORE=&quot;&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$PHPCS_SNIFFS&quot; != &quot;&quot; ]; then</span></span>
<span class="line"><span>    SNIFFS=&quot;--sniffs=$PHPCS_SNIFFS&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    SNIFFS=&quot;&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$PHPCS_ENCODING&quot; != &quot;&quot; ]; then</span></span>
<span class="line"><span>    ENCODING=&quot;--encoding=$PHPCS_ENCODING&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    ENCODING=&quot;&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$PHPCS_IGNORE_WARNINGS&quot; == &quot;1&quot; ]; then</span></span>
<span class="line"><span>    IGNORE_WARNINGS=&quot;-n&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    IGNORE_WARNINGS=&quot;&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Copy contents of staged version of files to temporary staging area</span></span>
<span class="line"><span># because we only want the staged version that will be commited and not</span></span>
<span class="line"><span># the version in the working directory</span></span>
<span class="line"><span>STAGED_FILES=&quot;&quot;</span></span>
<span class="line"><span>for FILE in $FILES_TO_CHECK</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>  ID=$(git diff-index --cached $against $FILE | cut -d &quot; &quot; -f4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # create staged version of file in temporary staging area with the same</span></span>
<span class="line"><span>  # path as the original file so that the phpcs ignore filters can be applied</span></span>
<span class="line"><span>  mkdir -p &quot;$TMP_STAGING/$(dirname $FILE)&quot;</span></span>
<span class="line"><span>  git cat-file blob $ID &gt; &quot;$TMP_STAGING/$FILE&quot;</span></span>
<span class="line"><span>  STAGED_FILES=&quot;$STAGED_FILES $TMP_STAGING/$FILE&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OUTPUT=$($PHPCS_BIN -s $IGNORE_WARNINGS --standard=$PHPCS_CODING_STANDARD $ENCODING $IGNORE $SNIFFS $STAGED_FILES)</span></span>
<span class="line"><span>RETVAL=$?</span></span>
<span class="line"><span></span></span>
<span class="line"><span># delete temporary copy of staging area</span></span>
<span class="line"><span>rm -rf $TMP_STAGING</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $RETVAL -ne 0 ]; then</span></span>
<span class="line"><span>    echo &quot;$OUTPUT&quot; | less</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exit $RETVAL</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[p];function c(d,t){return a(),n("div",null,l)}const u=s(e,[["render",c],["__file","phpcs PHP代码格式审核.html.vue"]]),o=JSON.parse('{"path":"/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/phpcs%20PHP%E4%BB%A3%E7%A0%81%E6%A0%BC%E5%BC%8F%E5%AE%A1%E6%A0%B8.html","title":"phpcs PHP代码格式审核","lang":"zh-CN","frontmatter":{"title":"phpcs PHP代码格式审核","icon":"fab fa-markdown","order":2,"category":["技术记录"],"tag":["技术","随笔"],"date":"2024-05-31T00:00:00.000Z","description":"代码格式审核 使用phpcs.phar 下载phpcs.phar，新建bat文件，放置于同一目录，将以上代码写入保存。然后再命令行直接调用即可 代码格式修正 使用phpcbf.phar 下载phpcbf.phar，新建bat文件，放置于同一目录，将以上代码写入保存。然后再命令行直接调用即可 GIT HOOK git 提交预检查钩子 将以下代码放入git...","head":[["meta",{"property":"og:url","content":"https://jijacky.github.io/%E6%8A%80%E6%9C%AF%E8%AE%B0%E5%BD%95/phpcs%20PHP%E4%BB%A3%E7%A0%81%E6%A0%BC%E5%BC%8F%E5%AE%A1%E6%A0%B8.html"}],["meta",{"property":"og:title","content":"phpcs PHP代码格式审核"}],["meta",{"property":"og:description","content":"代码格式审核 使用phpcs.phar 下载phpcs.phar，新建bat文件，放置于同一目录，将以上代码写入保存。然后再命令行直接调用即可 代码格式修正 使用phpcbf.phar 下载phpcbf.phar，新建bat文件，放置于同一目录，将以上代码写入保存。然后再命令行直接调用即可 GIT HOOK git 提交预检查钩子 将以下代码放入git..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-06T10:05:17.000Z"}],["meta",{"property":"article:author","content":"Veeooo"}],["meta",{"property":"article:tag","content":"技术"}],["meta",{"property":"article:tag","content":"随笔"}],["meta",{"property":"article:published_time","content":"2024-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-06T10:05:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"phpcs PHP代码格式审核\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-06T10:05:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Veeooo\\",\\"url\\":\\"https://github.com/jijacky\\"}]}"]]},"headers":[{"level":3,"title":"代码格式审核","slug":"代码格式审核","link":"#代码格式审核","children":[]},{"level":3,"title":"代码格式修正","slug":"代码格式修正","link":"#代码格式修正","children":[]},{"level":3,"title":"GIT HOOK","slug":"git-hook","link":"#git-hook","children":[]}],"git":{"createdTime":1717668317000,"updatedTime":1717668317000,"contributors":[{"name":"jijacky","email":"jijacky@126.com","commits":1}]},"readingTime":{"minutes":2.29,"words":686},"filePathRelative":"技术记录/phpcs PHP代码格式审核.md","localizedDate":"2024年5月31日","excerpt":"<h3>代码格式审核</h3>\\n<blockquote>\\n<p>使用phpcs.phar</p>\\n</blockquote>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>@echo OFF</span></span>\\n<span class=\\"line\\"><span>:: in case DelayedExpansion is on and a path contains ! </span></span>\\n<span class=\\"line\\"><span>setlocal DISABLEDELAYEDEXPANSION</span></span>\\n<span class=\\"line\\"><span>php \\"%~dp0phpcs.phar\\" %*</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,o as data};
