<template>
    <div>
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
                @toggleTodo="toggleTodo"
                @deleteTodo="deleteTodo"
                :class="todo.checked ? 'checked' : 'unchecked'"
                :style="todo.checked ? 'text-decoration: line-through' : ''"
        />
        {{todos}} <!-- 출력을 위한 todos -->
    </div>
</template>

<script>
    import TodoItem from "../components/TodoItem";

    export default {
        components: {
            TodoItem
        },
        data() {
            return {
                todoText: '',
                todos: [
                    {id: 1, text: 'Buy a car', checked: false},
                    {id: 2, text: 'Buy a ticket', checked: true},
                    {id: 3, text: 'Buy a building', checked: false},
                ]
            }
        },
        methods: {
            addTodo(event) {
                this.todos.push({
                    id: Math.random(),
                    text: event.target.value,
                    checked: false
                });
                this.todoText = ''
            },
            toggleTodo({id, checked}) { // 구조분해!
                let toggleTodoIndex = this.todos.findIndex(val => val.id === id);
                this.todos[toggleTodoIndex].checked = checked;
            },
            deleteTodo(id) {
                let deleteTodoIndex = this.todos.findIndex(val => val.id === id);
                this.todos.splice(deleteTodoIndex, 1);
            }
        }
    }
</script>

<style scoped>
</style>