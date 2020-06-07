<template>
    <div id="todoItem">
        <input
                type="checkbox"
                :checked="todo.checked"
                @change="toggleHere"
        />
        <span> {{todo.text}} </span>
        <button @click="deleteHere">삭제</button>
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
            toggleHere(event) {
                this.$store.dispatch('toggleTodo', {
                    id: this.todo.id,
                    checked: event.target.checked
                })
                // this.$emit('toggleTodo', {
                //     id: this.todo.id,
                //     checked: event.target.checked
                // });
            },
            deleteHere() {
                this.$store.dispatch('deleteTodo', this.todo.id);
                // this.$emit('deleteTodo', this.todo.id);
            }
        }
    }
</script>

<style scoped>

</style>