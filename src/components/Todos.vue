<template>
    <div>
        <h3>Todos</h3>

        <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
            {{ todo.title }}
        </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Todos",
    computed: mapGetters(["allTodos"]),
    methods: {
        ...mapActions(["fetchTodos"])
    },
    created() {
        this.fetchTodos()
    }
}
</script>