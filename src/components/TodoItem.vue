<template>
    <div id="todoItem">
        <input
                type="checkbox"
                :checked="todo.checked"
                @change="toParent"
        />
        <span> {{todo.text}} </span>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            toParent(event) {
                this.$emit('toggleTodo', {
                    id: this.todo.id,
                    checked: event.target.checked
                });
            }
        }
    }
</script>

<style scoped>

</style>