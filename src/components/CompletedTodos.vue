<template>
    <div>
        완료된 아이템 수: {{completedCount}}
    </div>
</template>

<script>
    export default {
        name: "CompletedTodos",
        computed: {
            completedCount() {
                return this.$store.getters['todo/getNumberOfCompletedTodos'];
            }
        }
    }
</script>

<style scoped>

</style>