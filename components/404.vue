<template>
    <p>{{ greeting }}</p>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: '404 NOT FOUND',
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