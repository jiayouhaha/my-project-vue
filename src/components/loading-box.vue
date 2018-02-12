<template>
    <div class="loading-modal" :class="{ active: isActive }">
        <i class="loading-circle"></i>
        <div>加载中…</div>
    </div>
</template>

<script>
    export default {
        props:["isActive"], // 父亲传 谁用谁接受（儿子接受）
        data:function(){
            return{

            }
        },
        methods:{
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "~@/assets/style/sass/loading-box.sass";
</style>