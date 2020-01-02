<template>
  <div>
    <div @click="$router.push({path:'/'})">返回首页</div>
    <div>
      <span @click="updateFmt('line-by-line')">单行模式</span>
      <span @click="updateFmt('side-by-side')">双行模式</span>
    </div>
    <code-diff id="diff" :old-string="old_value" :new-string="new_value" :context="context" :outputFormat="outputFormat" />
  </div>
</template>

<script>
    import CodeDiff from 'vue-code-diff'
    export default {
        components: {CodeDiff},
        data: () => ({
            old_value: "",//旧值
            new_value: "",//新值
            outputFormat: "side-by-side",//line-by-line(一页显示),side-by-side（两页显示）
            context: 3,//不同地方上下间隔多少行不隐藏
        }),
        methods: {
            updateFmt(fmt){
                this.outputFormat = fmt
            }
        },
        // 模拟数据
        created(){
            const md = '### 主要特性\n' +
                '\n' +
                '- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；\n' +
                '- 支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；\n' +
                '- 支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；\n' +
                '- 支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;\n' +
                '- 支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；\n' +
                '- 支持 AMD / CMD 模块化加载（支持 Require.js & Sea.js），并且支持自定义扩展插件；\n' +
                '- 兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；\n' +
                '- 支持自定义主题样式；\n' +
                '\n' +
                '# Editor.md\n' +
                '\n' +
                '![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)\n' +
                '\n' +
                '![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)\n' +
                '\n' +
                '**目录 (Table of Contents)**\n' +
                '\n' +
                '[TOCM]\n' +
                '\n' +
                '[TOC]\n' +
                '\n' +
                '# Heading 1\n' +
                '## Heading 2\n' +
                '### Heading 3\n' +
                '#### Heading 4\n' +
                '##### Heading 5\n' +
                '###### Heading 6\n' +
                '# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '\n' +
                '#### 标题（用底线的形式）Heading (underline)\n' +
                '\n' +
                'This is an H1\n' +
                '=============\n' +
                '\n' +
                'This is an H2\n' +
                '-------------\n' +
                '\n' +
                '### 字符效果和横线等\n' +
                '                \n' +
                '----\n' +
                '\n' +
                '~~删除线~~ <s>删除线（开启识别HTML标签时）</s>\n' +
                '*斜体字*      _斜体字_\n' +
                '**粗体**  __粗体__\n' +
                '***粗斜体*** ___粗斜体___\n' +
                '\n' +
                '上标：X<sub>2</sub>，下标：O<sup>2</sup>\n' +
                '\n' +
                '**缩写(同HTML的abbr标签)**\n' +
                '\n' +
                '> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启\n' +
                '\n' +
                'The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.\n' +
                '\n' +
                '### 引用 Blockquotes\n' +
                '\n' +
                '> 引用文本 Blockquotes\n' +
                '\n' +
                '引用的行内混合 Blockquotes\n' +
                '                    \n' +
                '> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://localhost/)。\n' +
                '\n' +
                '### 锚点与链接 Links\n' +
                '\n' +
                '[普通链接](http://localhost/)\n' +
                '\n' +
                '[普通链接带标题](http://localhost/ "普通链接带标题")\n' +
                '\n' +
                '直接链接：<https://github.com>\n' +
                '\n' +
                '[锚点链接][anchor-id] \n' +
                '\n' +
                '[anchor-id]: http://www.this-anchor-link.com/\n' +
                '\n' +
                'GFM a-tail link @pandao\n' +
                '\n' +
                '> @pandao\n' +
                '\n' +
                '### 多语言代码高亮 Codes\n' +
                '\n' +
                '#### 行内代码 Inline code\n' +
                '\n' +
                '执行命令：`npm install marked`\n' +
                '\n' +
                '#### 缩进风格\n' +
                '\n' +
                '即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。\n' +
                '\n' +
                '    <?php\n' +
                '        echo "Hello world!";\n' +
                '    ?>\n' +
                '    \n' +
                '预格式化文本：\n' +
                '\n' +
                '    | First Header  | Second Header |\n' +
                '    | ------------- | ------------- |\n' +
                '    | Content Cell  | Content Cell  |\n' +
                '    | Content Cell  | Content Cell  |\n' +
                '\n' +
                '#### JS代码　\n' +
                '\n' +
                '```javascript\n' +
                'function test(){\n' +
                '\tconsole.log("Hello world!");\n' +
                '}\n' +
                ' \n' +
                '(function(){\n' +
                '    var box = function(){\n' +
                '        return box.fn.init();\n' +
                '    };\n' +
                '\n' +
                '    box.prototype = box.fn = {\n' +
                '        init : function(){\n' +
                '            console.log(\'box.init()\');\n' +
                '\n' +
                '\t\t\treturn this;\n' +
                '        },\n' +
                '\n' +
                '\t\tadd : function(str){\n' +
                '\t\t\talert("add", str);\n' +
                '\n' +
                '\t\t\treturn this;\n' +
                '\t\t},\n' +
                '\n' +
                '\t\tremove : function(str){\n' +
                '\t\t\talert("remove", str);\n' +
                '\n' +
                '\t\t\treturn this;\n' +
                '\t\t}\n' +
                '    };\n' +
                '    \n' +
                '    box.fn.init.prototype = box.fn;\n' +
                '    \n' +
                '    window.box =box;\n' +
                '})();\n' +
                '\n' +
                'var testBox = box();\n' +
                'testBox.add("jQuery").remove("jQuery");\n' +
                '```\n' +
                '\n' +
                '#### HTML代码 HTML codes\n' +
                '\n' +
                '```html\n' +
                '<!DOCTYPE html>\n' +
                '<html>\n' +
                '    <head>\n' +
                '        <mate charest="utf-8" />\n' +
                '        <title>Hello world!</title>\n' +
                '    </head>\n' +
                '    <body>\n' +
                '        <h1>Hello world!</h1>\n' +
                '    </body>\n' +
                '</html>\n' +
                '```\n' +
                '\n' +
                '### 图片 Images\n' +
                '\n' +
                'Image:\n' +
                '\n' +
                '![](https://pandao.github.io/editor.md/examples/images/4.jpg)\n' +
                '\n' +
                '> Follow your heart.\n' +
                '\n' +
                '![](https://pandao.github.io/editor.md/examples/images/8.jpg)\n' +
                '\n' +
                '> 图为：厦门白城沙滩\n' +
                '\n' +
                '图片加链接 (Image + Link)：\n' +
                '\n' +
                '[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")\n' +
                '\n' +
                '> 图为：李健首张专辑《似水流年》封面\n' +
                '                \n' +
                '----\n' +
                '\n' +
                '### 列表 Lists\n' +
                '\n' +
                '#### 无序列表（减号）Unordered Lists (-)\n' +
                '                \n' +
                '- 列表一\n' +
                '- 列表二\n' +
                '- 列表三\n' +
                '     \n' +
                '#### 无序列表（星号）Unordered Lists (*)\n' +
                '\n' +
                '* 列表一\n' +
                '* 列表二\n' +
                '* 列表三\n' +
                '\n' +
                '#### 无序列表（加号和嵌套）Unordered Lists (+)\n' +
                '                \n' +
                '+ 列表一\n' +
                '+ 列表二\n' +
                '    + 列表二-1\n' +
                '    + 列表二-2\n' +
                '    + 列表二-3\n' +
                '+ 列表三\n' +
                '    * 列表一\n' +
                '    * 列表二\n' +
                '    * 列表三\n' +
                '\n' +
                '#### 有序列表 Ordered Lists (-)\n' +
                '                \n' +
                '1. 第一行\n' +
                '2. 第二行\n' +
                '3. 第三行\n' +
                '\n' +
                '#### GFM task list\n' +
                '\n' +
                '- [x] GFM task list 1\n' +
                '- [x] GFM task list 2\n' +
                '- [ ] GFM task list 3\n' +
                '    - [ ] GFM task list 3-1\n' +
                '    - [ ] GFM task list 3-2\n' +
                '    - [ ] GFM task list 3-3\n' +
                '- [ ] GFM task list 4\n' +
                '    - [ ] GFM task list 4-1\n' +
                '    - [ ] GFM task list 4-2\n' +
                '                \n' +
                '----\n' +
                '                    \n' +
                '### 绘制表格 Tables\n' +
                '\n' +
                '| 项目        | 价格   |  数量  |\n' +
                '| --------   | -----:  | :----:  |\n' +
                '| 计算机      | $1600   |   5     |\n' +
                '| 手机        |   $12   |   12   |\n' +
                '| 管线        |    $1    |  234  |\n' +
                '                    \n' +
                'First Header  | Second Header\n' +
                '------------- | -------------\n' +
                'Content Cell  | Content Cell\n' +
                'Content Cell  | Content Cell \n' +
                '\n' +
                '| First Header  | Second Header |\n' +
                '| ------------- | ------------- |\n' +
                '| Content Cell  | Content Cell  |\n' +
                '| Content Cell  | Content Cell  |\n' +
                '\n' +
                '| Function name | Description                    |\n' +
                '| ------------- | ------------------------------ |\n' +
                '| `help()`      | Display the help window.       |\n' +
                '| `destroy()`   | **Destroy your computer!**     |\n' +
                '\n' +
                '| Left-Aligned  | Center Aligned  | Right Aligned |\n' +
                '| :------------ |:---------------:| -----:|\n' +
                '| col 3 is      | some wordy text | $1600 |\n' +
                '| col 2 is      | centered        |   $12 |\n' +
                '| zebra stripes | are neat        |    $1 |\n' +
                '\n' +
                '| Item      | Value |\n' +
                '| --------- | -----:|\n' +
                '| Computer  | $1600 |\n' +
                '| Phone     |   $12 |\n' +
                '| Pipe      |    $1 |\n' +
                '                \n' +
                '----\n' +
                '\n' +
                '#### 特殊符号 HTML Entities Codes\n' +
                '\n' +
                '&copy; &  &uml; &trade; &iexcl; &pound;\n' +
                '&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; \n' +
                '\n' +
                'X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;\n' +
                '\n' +
                '18&ordm;C  &quot;  &apos;\n' +
                '\n' +
                '### Emoji表情 :smiley:\n' +
                '\n' +
                '> Blockquotes :star:\n' +
                '\n' +
                '#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:\n' +
                '\n' +
                '- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;\n' +
                '- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;\n' +
                '- [x] [ ] :smiley: this is a complete item :smiley:;\n' +
                '- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; \n' +
                '- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;\n' +
                '    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;\n' +
                '    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);\n' +
                ' \n' +
                '#### 反斜杠 Escape\n' +
                '\n' +
                '\\*literal asterisks\\*\n' +
                '            \n' +
                '### 科学公式 TeX(KaTeX)\n' +
                '                    \n' +
                '$$E=mc^2$$\n' +
                '\n' +
                '行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。\n' +
                '\n' +
                '$$\\(\\sqrt{3x-1}+(1+x)^2\\)$$\n' +
                '                    \n' +
                '$$\\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$\n' +
                '\n' +
                '多行公式：\n' +
                '\n' +
                '```math\n' +
                '\\displaystyle\n' +
                '\\left( \\sum\\_{k=1}^n a\\_k b\\_k \\right)^2\n' +
                '\\leq\n' +
                '\\left( \\sum\\_{k=1}^n a\\_k^2 \\right)\n' +
                '\\left( \\sum\\_{k=1}^n b\\_k^2 \\right)\n' +
                '```\n' +
                '\n' +
                '```katex\n' +
                '\\displaystyle \n' +
                '    \\frac{1}{\n' +
                '        \\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\n' +
                '        \\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {\n' +
                '        1+\\frac{e^{-6\\pi}}\n' +
                '        {1+\\frac{e^{-8\\pi}}\n' +
                '         {1+\\cdots} }\n' +
                '        } \n' +
                '    }\n' +
                '```\n' +
                '\n' +
                '```latex\n' +
                'f(x) = \\int_{-\\infty}^\\infty\n' +
                '    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\n' +
                '    \\,d\\xi\n' +
                '```\n' +
                '                \n' +
                '### 绘制流程图 Flowchart\n' +
                '\n' +
                '```flow\n' +
                'st=>start: 用户登陆\n' +
                'op=>operation: 登陆操作\n' +
                'cond=>condition: 登陆成功 Yes or No?\n' +
                'e=>end: 进入后台\n' +
                '\n' +
                'st->op->cond\n' +
                'cond(yes)->e\n' +
                'cond(no)->op\n' +
                '```\n' +
                '                    \n' +
                '### 绘制序列图 Sequence Diagram\n' +
                '                    \n' +
                '```seq\n' +
                'Andrew->China: Says Hello \n' +
                'Note right of China: China thinks\\nabout it \n' +
                'China-->Andrew: How are you? \n' +
                'Andrew->>China: I am good thanks!\n' +
                '```\n' +
                '\n' +
                '### End\n';
            const md2 = '### 主要特性\n' +
                '\n' +
                '- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；\n' +
                '- 支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；\n' +
                '- 支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；\n' +
                '- 支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;\n' +
                '- 支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；\n' +
                '- 支持 AMD / CMD 模块化加载（支持 Require.js & Sea.js），并且支持自定义扩展插件；\n' +
                '- 兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；\n' +
                '- 支持自定义主题样式；\n' +
                '\n' +
                '# Editor.md\n' +
                '\n' +
                '![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)\n' +
                '\n' +
                '![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)\n' +
                '\n' +
                '**目录 (Table of Contents)**\n' +
                '\n' +
                '[TOCM]\n' +
                '\n' +
                '[TOC]\n' +
                '\n' +
                '# Heading 1\n' +
                '## Heading 2\n' +
                '### Heading 3\n' +
                '#### Heading 4\n' +
                '##### Heading 5zzzz\n' +
                '###### Heading 6\n' +
                '# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")\n' +
                '\n' +
                '#### 标题（用底线的形式）Heading (underline)\n' +
                '\n' +
                'This is an H1\n' +
                '=============\n' +
                '\n' +
                'This is an H2\n' +
                '-------------\n' +
                '\n' +
                '### 字符效果和横线等\n' +
                '                \n' +
                '----\n' +
                '\n' +
                '~~删除线~~ <s>删除线（开启识别HTML标签时）</s>\n' +
                '*斜体字*      _斜体字_\n' +
                '**粗体**  __粗体__\n' +
                '***粗斜体*** ___粗斜体___\n' +
                '\n' +
                '上标：X<sub>2</sub>，下标：O<sup>2</sup>\n' +
                '\n' +
                '**缩写(同HTML的abbr标签)**\n' +
                '\n' +
                '> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启\n' +
                '\n' +
                'The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.\n' +
                '\n' +
                '### 引用 Blockquotes\n' +
                '\n' +
                '> 引用文本 Blockquotes\n' +
                '\n' +
                '引用的行内混合 Blockquotes\n' +
                '                    \n' +
                '> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://localhost/)。\n' +
                '\n' +
                '### 锚点与链接 Links\n' +
                '\n' +
                '[普通链接](http://localhost/)\n' +
                '\n' +
                '[普通链接带标题](http://localhost/ "普通链接带标题")\n' +
                '\n' +
                '直接链接：<https://github.com>\n' +
                '\n' +
                '[锚点链接][anchor-id] \n' +
                '\n' +
                '[anchor-id]: http://www.this-anchor-link.com/\n' +
                '\n' +
                'GFM a-tail link @pandao\n' +
                '\n' +
                '> @pandao\n' +
                '\n' +
                '### 多语言代码高亮 Codes\n' +
                '\n' +
                '#### 行内代码 Inline code\n' +
                '\n' +
                '执行命令：`npm install xxxxx`\n' +
                '\n' +
                '#### 缩进风格\n' +
                '\n' +
                '即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。\n' +
                '\n' +
                '    <?php\n' +
                '        echo "Hello world!";\n' +
                '    ?>\n' +
                '    \n' +
                '预格式化文本：\n' +
                '\n' +
                '    | First Header  | Second Header |\n' +
                '    | ------------- | ------------- |\n' +
                '    | Content Cell  | Content Cell  |\n' +
                '    | Content Cell  | Content Cell  |\n' +
                '\n' +
                '#### JS代码　\n' +
                '\n' +
                '```javascript\n' +
                'function test(){\n' +
                '\tconsole.log("Hello world!");\n' +
                '}\n' +
                ' \n' +
                '(function(){\n' +
                '    var box = function(){\n' +
                '        return box.fn.init();\n' +
                '    };\n' +
                '\n' +
                '    box.prototype = box.fn = {\n' +
                '        init : function(){\n' +
                '            console.log(\'box.init()\');\n' +
                '\n' +
                '\t\t\treturn this;\n' +
                '        },\n' +
                '\n' +
                '\t\tadd : function(str){\n' +
                '\t\t\talert("add", str);\n' +
                '\n' +
                '\t\t\treturn this;\n' +
                '\t\t},\n' +
                '\n' +
                '\t\tremove : function(str){\n' +
                '\t\t\talert("remove", str);\n' +
                '\n' +
                '\t\t\treturn this;\n' +
                '\t\t}\n' +
                '    };\n' +
                '    \n' +
                '    box.fn.init.prototype = box.fn;\n' +
                '    \n' +
                '    window.box =box;\n' +
                '})();\n' +
                '\n' +
                'var testBox = box();\n' +
                'testBox.add("jQuery").remccccove("jQuery");\n' +
                '```\n' +
                '\n' +
                '#### HTML代码 HTML codes\n' +
                '\n' +
                '```html\n' +
                '<!DOCTYPE html>\n' +
                '<html>\n' +
                '    <head>\n' +
                '        <mate charest="utf-8" />\n' +
                '        <title>Hello world!</title>\n' +
                '    </head>\n' +
                '    <body>\n' +
                '        <h1>Hello world!</h1>\n' +
                '    </body>\n' +
                '</html>\n' +
                '```\n' +
                '\n' +
                '### 图片 Images\n' +
                '\n' +
                'Image:\n' +
                '\n' +
                '![](https://pandao.github.io/editor.md/examples/images/4.jpg)\n' +
                '\n' +
                '> Follow your heart.\n' +
                '\n' +
                '![](https://pandao.github.io/editor.md/examples/images/8.jpg)\n' +
                '\n' +
                '> 图为：厦门白城沙滩\n' +
                '\n' +
                '图片加链接 (Image + Link)：\n' +
                '\n' +
                '[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")\n' +
                '\n' +
                '> 图为：李健首张专辑《似水流年》封面\n' +
                '                \n' +
                '----\n' +
                '\n' +
                '### 列表 Lists\n' +
                '\n' +
                '#### 无序列表（减号）Unordered Lists (-)\n' +
                '                \n' +
                '- 列表一\n' +
                '- 列表二\n' +
                '- 列表三\n' +
                '     \n' +
                '#### 无序列表（星号）Unordered Lists (*)\n' +
                '\n' +
                '* 列表一\n' +
                '* 列表二\n' +
                '* 列表三\n' +
                '\n' +
                '#### 无序列表（加号和嵌套）Unordered Lists (+)\n' +
                '                \n' +
                '+ 列表一\n' +
                '+ 列表二\n' +
                '    + 列表二-1\n' +
                '    + 列表二-2\n' +
                '    + 列表二-2\n' +
                '    + 列表二-2\n' +
                '    + 列表二-3\n' +
                '+ 列表三\n' +
                '    * 列表一\n' +
                '    * 列表二\n' +
                '    * 列表三\n' +
                '\n' +
                '#### 有序列表 Ordered Lists (-)\n' +
                '                \n' +
                '1. 第一行\n' +
                '2. 第二行\n' +
                '3. 第三行\n' +
                '\n' +
                '#### GFM task list\n' +
                '\n' +
                '- [x] GFM task list 1\n' +
                '- [x] GFM task list 2\n' +
                '- [ ] GFM task list 3\n' +
                '    - [ ] GFM task list 3-1\n' +
                '    - [ ] GFM task list 3-2\n' +
                '    - [ ] GFM task list 3-3\n' +
                '- [ ] GFM task list 4\n' +
                '    - [ ] GFM task list 4-1\n' +
                '    - [ ] GFM task list 4-2\n' +
                '                \n' +
                '----\n' +
                '                    \n' +
                '### 绘制表格 Tables\n' +
                '\n' +
                '| 项目        | 价格   |  数量  |\n' +
                '| --------   | -----:  | :----:  |\n' +
                '| 计算机      | $1600   |   5     |\n' +
                '| 手机        |   $12   |   12   |\n' +
                '| 管线        |    $1    |  234  |\n' +
                '                    \n' +
                'First Header  | Second Header\n' +
                '------------- | -------------\n' +
                'Content Cell  | Content Cell\n' +
                'Content Cell  | Content Cell \n' +
                '\n' +
                '| First Header  | Second Header |\n' +
                '| ------------- | ------------- |\n' +
                '| Content Cell  | Content Cell  |\n' +
                '| Content Cell  | Content Cell  |\n' +
                '\n' +
                '| Function name | Description                    |\n' +
                '| ------------- | ------------------------------ |\n' +
                '| `help()`      | Display the help window.       |\n' +
                '| `destroy()`   | **Destroy your computer!**     |\n' +
                '\n' +
                '| Left-Aligned  | Center Aligned  | Right Aligned |\n' +
                '| :------------ |:---------------:| -----:|\n' +
                '| col 3 is      | some wordy text | $1600 |\n' +
                '| col 2 is      | centered        |   $12 |\n' +
                '| zebra stripes | are neat        |    $1 |\n' +
                '\n' +
                '| Item      | Value |\n' +
                '| --------- | -----:|\n' +
                '| Computer  | $1600 |\n' +
                '| Phone     |   $12 |\n' +
                '| Pipe      |    $1 |\n' +
                '                \n' +
                '----\n' +
                '\n' +
                '#### 特殊符号 HTML Entities Codes\n' +
                '\n' +
                '&copy; &  &uml; &trade; &iexcl; &pound;\n' +
                '\n' +
                'X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;\n' +
                '\n' +
                '18&ordm;C  &quot;  &apos;\n' +
                '\n' +
                '### Emoji表情 :smiley:\n' +
                '\n' +
                '> Blockquotes :star:\n' +
                '\n' +
                '#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:\n' +
                '- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;\n' +
                '    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;\n' +
                ' \n' +
                '#### 反斜杠 Escape\n' +
                '\n' +
                '\\*literal asterisks\\*\n' +
                '            \n' +
                '### 科学公式 TeX(KaTeX)\n' +
                '                    \n' +
                '$$E=mc^2$$\n' +
                '\n' +
                '行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。\n' +
                '\n' +
                '$$\\(\\sqrt{3x-1}+(1+x)^2\\)$$\n' +
                '                    \n' +
                '$$\\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$\n' +
                '\n' +
                '多行公式：\n' +
                '\n' +
                '```math\n' +
                '\\displaystyle\n' +
                '\\left( \\sum\\_{k=1}^n a\\_k b\\_k \\right)^2\n' +
                '\\leq\n' +
                '\\left( \\sum\\_{k=1}^n a\\_k^2 \\right)\n' +
                '\\left( \\sum\\_{k=1}^n b\\_k^2 \\right)\n' +
                '```\n' +
                '\n' +
                '```katex\n' +
                '\\displaystyle \n' +
                '    \\frac{1}{\n' +
                '        \\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\n' +
                '        \\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {\n' +
                '        1+\\frac{e^{-6\\pi}}\n' +
                '        {1+\\frac{e^{-8\\pi}}\n' +
                '         {1+\\cdots} }\n' +
                '        } \n' +
                '    }\n' +
                '```\n' +
                '\n' +
                '```latex\n' +
                'f(x) = \\int_{-\\infty}^\\infty\n' +
                '    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\n' +
                '    \\,d\\xi\n' +
                '```\n' +
                '                \n' +
                '### 绘制流程图 Flowchart\n' +
                '\n' +
                '```flow\n' +
                'st=>start: 用户登陆\n' +
                'op=>operation: 登陆操作\n' +
                'cond=>condition: 登陆成功 Yes or No?\n' +
                'e=>end: 进入后台\n' +
                '\n' +
                'st->op->cond\n' +
                'cond(yes)->e\n' +
                'cond(no)->op\n' +
                '```\n' +
                '                    \n' +
                '```seq\n' +
                'China-->Andrew: How are you? \n' +
                'Andrew->>China: I am good thanks!\n' +
                '```\n' +
                '\n' +
                '### End\n';
            this.old_value=md;
            this.new_value=md2;
        }
    }
</script>

<style scoped>
#diff{
  height: 500px;
  overflow: hidden;
}
</style>
