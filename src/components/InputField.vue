<template>
    <div>
        <label>Name</label>
        <input
                type="text"
                :value="value"
                style="padding: 30px; border: 2px solid green;"
                @input="updateName"
        />
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        },
        methods: {
            updateName(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style scoped>

</style>