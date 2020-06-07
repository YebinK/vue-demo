<template>
    <div class="home">
        <h1>Elly</h1>
        <HelloWorld msg="Welcome to Vue Homepage"/>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: "Home",
        components: {
            HelloWorld
        }
    }
</script>

<!--scoped를 넣어야만 위 template에만 적용된다. 그렇지 않으면 전체에 적용됨.-->
<style scoped>
    h1 {
        color: orange;
    }
</style>