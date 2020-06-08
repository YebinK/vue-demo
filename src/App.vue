<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <TodoPage/>
        <UserList/>
    </div>
</template>

<script>
    import TodoPage from "./views/TodoPage";
    import UserList from "./components/UserList";

    export default {
        components: {
            TodoPage,
            UserList
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
