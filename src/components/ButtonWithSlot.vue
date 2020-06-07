<template>
    <div>
        <button>첫 번째 버튼</button>
        <slot name="first"></slot>
        <button>두 번째 버튼</button>
    </div>
</template>

<script>
    export default {
        name: "ButtonWithSlot"
    }
</script>

<style scoped>

</style>