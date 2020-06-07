<template>
    <ButtonWithSlot>
        <template v-slot:first>slot에 들어갈 내용을 부모 컴포넌트에서 정의해주고 있습니다.</template>
    </ButtonWithSlot>
</template>

<script>
    import ButtonWithSlot from "../components/ButtonWithSlot";
    export default {
        name: "ButtonPage",
        components: {
            ButtonWithSlot
        }
    }
</script>

<style scoped>

</style>