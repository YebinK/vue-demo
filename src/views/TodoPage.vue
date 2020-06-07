<template>
    <div>
        <CompletedTodos/>
        <input
                type="text"
                v-model="todoText"
                placeholder="Enter your todo."
                @keyup.enter="addTodo"
        />
        <TodoItem
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                :class="todo.checked ? 'checked' : 'unchecked'"
                :style="todo.checked ? 'text-decoration: line-through' : ''"
        />
        {{todos}} <!-- 출력을 위한 todos -->
    </div>
</template>

<script>
    import TodoItem from "../components/TodoItem";
    import CompletedTodos from "../components/CompletedTodos";

    export default {
        components: {
            TodoItem,
            CompletedTodos
        },
        data() {
            return {
                todoText: '',
            }
        },
        computed: {
            todos() {
                return this.$store.state.todos;
            }
        },
        methods: {
            addTodo(event) {
                this.$store.dispatch('addTodo', event.target.value);
                // this.$store.commit('ADD_TODO', event.target.value);
                this.todoText = '';
            }
        }
    }
</script>

<style scoped>
</style>