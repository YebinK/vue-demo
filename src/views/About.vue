<template>
    <div class="about">
        <h1>about here</h1>
        <Explanation :title="title"/>
        <InputField v-model="title"/>
        <button @click="printName"> 프린트 이름 </button>
    </div>
</template>

<script>
    import Explanation from "../components/Explanation";
    import InputField from "../components/InputField";
    export default {
        components: {
            Explanation,
            InputField
        },
        data() {
            return {
                title: 'title title '
            }
        },
        methods: {
            printName() {
                console.log(this.title);
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