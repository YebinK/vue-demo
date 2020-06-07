import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {id: 1, text: 'Buy a car', checked: false},
            {id: 2, text: 'Buy a ticket', checked: true},
            {id: 3, text: 'Buy a building', checked: false},
        ]
    },
    mutations: {
        ADD_TODO(state, newTodoText) {
            state.todos.push({
                id: Math.random(),
                text: newTodoText,
                checked: false
            });
        },
        TOGGLE_TODO(state, {id, checked}) {
            let toggleItemIndex = state.todos.findIndex(val => val.id === id)
            state.todos[toggleItemIndex].checked = checked;
        },
        DELETE_TODO(state, deleteId) {
            let deleteItemIndex = state.todos.findIndex(val => val.id === deleteId);
            state.todos.splice(deleteItemIndex, 1);
        }
    },
    actions: {
        // addTodo(context, newTodoText) {
        addTodo({commit}, newTodoText) { //commit만 구조분해
            setTimeout(function() { //대표적인 비동기 메소드. 0.5초 후 내부 메소드 실행
                commit('ADD_TODO', newTodoText);
            }, 500);
        },
        toggleTodo({commit}, {id, checked}) {
            commit('TOGGLE_TODO', {id, checked});
        },
        deleteTodo({commit}, deleteId) {
            commit('DELETE_TODO', deleteId);
        }
    },
    getters: {

    }
})