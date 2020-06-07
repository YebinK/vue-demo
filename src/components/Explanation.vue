<template>
    <div id="explanation">
        {{title}} <hr>
        {{content}}
        <button @click="changeTitle()">타이틀 바꾸기</button>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                content: 'elly is here~'
            }
        },
        methods: {
            changeTitle() {
                this.title = this.title + "CHANGED";
            }
        }
    }
</script>

<style scoped>

</style>