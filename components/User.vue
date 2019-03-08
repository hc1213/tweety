<template>
    <div>
        <p>hello:{{ this.$route.params.id }}</p>
        <p @click="add">count:{{ this.$store.state.count }}</p>
        <router-view />
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: '404 NOT FOUND',
            }
        },
        methods:{
            add:function(){
                console.log('=====>')
                this.$store.commit('increment')
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 18px;
        text-align: center;
    }
</style>