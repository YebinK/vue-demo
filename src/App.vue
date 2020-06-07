<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <TodoPage/>
<!--        <router-link to="/">Home</router-link>-->
<!--        <router-link to="/about">About</router-link>-->

<!--        <ButtonPage></ButtonPage>-->
<!--        <router-view/>-->
    </div>
</template>

<script>
    // import ButtonPage from "./views/ButtonPage";
    import TodoPage from "./views/TodoPage";
    export default {
        components: {
            // ButtonPage,
            TodoPage
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
