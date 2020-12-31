<template>
    <div>
        <div @click="$router.push({path:'/'})">返回首页</div>
        <div>
            <div>md5：{{md5}}</div>
            <div>md5*2：{{md52}}</div>
            <div>
                <label>
                    密码：<input v-model="input"/>
                    盐值：<input v-model="sale"/>
                </label>
                <button @click="buildMd5">生成md5</button>
            </div>
        </div>
    </div>
</template>

<script>
    import md5 from 'js-md5';

    export default {
        data() {
            return {
                md5: '',
                md52: '',
                input: '',
                sale: '',
            }
        },
        methods: {
            buildMd5() {
                let _this = this
                // 盐值拼接
                let md5txt = md5(_this.input + _this.sale)
                _this.md5 = md5txt
                let md52txt = md5(md5txt)
                _this.md52 = md52txt
            }
        }
    }
</script>

<style scoped>

</style>
