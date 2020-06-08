<template>
    <div>
        UserList
        <div v-for="user in users" :key="user.id">
            {{user.name}} |  {{user.email}}
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        created() {
            this.getUsers();
        },
        computed: {
            // ...mapState('user', { //앞에 모듈 이름을 붙여줘야 한다.
            //     users: state => state.users
            // })
            ...mapState('user', ['users'])
        },
        methods: {
            ...mapActions('user', ['getUsers']) //앞에 모듈 이름을 붙여줘야 한다.
        }
    }
</script>

<style scoped>

</style>