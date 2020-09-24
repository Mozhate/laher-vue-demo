<template>
    <div>
        <button @click="load">
            点击加载
        </button>
<!--        <link rel="stylesheet" href="/static/editor.md/css/editormd.min.css">-->
        <link rel="stylesheet" href="/static/editor.md/css/editormd.preview.css">
        <div class="text-content" id="text-content"></div>
    </div>
</template>

<script>
    import scriptjs from 'scriptjs'
    import {defaultConfig} from '../assets/editorz'

    export default {
        created() {
            // 加载缓存
            this.initEditor();
        },
        mounted: function () {
        },
        data() {
            return {
                markdown: '```java\n' +
                    '\n' +
                    '@Service\n' +
                    'public class SysUserLoginRecordServiceImpl implements SysUserLoginRecordService {\n' +
                    '    @Resource\n' +
                    '    private SysUserLoginRecordMapper sysUserLoginRecordMapper;\n' +
                    '}\n' +
                    '```',
                config: { // 编辑器配置
                    type: Object
                },
            }
        },
        methods:{
            getConfig: function () {
                return {...defaultConfig, ...this.config}
            },
            fetchScript: function (url) {
                return new Promise((resolve) => {
                    scriptjs(url, () => {
                        resolve()
                    })
                })
            },
            initEditor() {
                let vm = this;
                let config = vm.getConfig();
                (async () => {
                    await vm.fetchScript('/static/editor.md/jquery.min.js');
                    await vm.fetchScript('/static/editor.md/lib/marked.min.js');
                    await vm.fetchScript('/static/editor.md/lib/prettify.min.js');
                    await vm.fetchScript('/static/editor.md/editormd.min.js');
                    // vm.editor = window.editormd(vm.editorId, config)
                    try {
                        vm.load();
                    } catch (e) {
                    }
                })()
            },
            load() {
                let _this = this;

                window.editormd.markdownToHTML("text-content", {
                    markdown: _this.markdown || '',
                    htmlDecode: "style,script,iframe",
                    path: 'static/editor.md/lib/',
                    tocm: true,
                    emoji: true,
                    taskList: true,
                    tex: true,
                    flowChart: true,
                    sequenceDiagram: true,
                });
            },
        }
    }
</script>

<style scoped>

</style>