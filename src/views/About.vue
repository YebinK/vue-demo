<template>
    <div class="about">
        <h1>about here</h1>
        <Explanation :title="title"/>
        <button @click="printTitle()">출력</button>
    </div>
</template>

<script>
    import Explanation from "../components/Explanation";
    export default {
        components: {
            Explanation
        },
        data() {
            return {
                title: 'title title '
            }
        },
        methods: {
            printTitle() {
                alert(this.title);
            }
        }
    }
</script>

<!--scoped를 넣어야만 위 template에만 적용된다. 그렇지 않으면 전체에 적용됨.-->
<style scoped>
    h1 {
        color: rebeccapurple;
    }
</style>