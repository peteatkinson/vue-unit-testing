const actions = {
  fetchTodos: ({commit})  => {
    const todos = [
      {
        id: 3,
        title: "Todo Three"
      }
    ]

    commit("setTodos", todos);
  }
}

const mutations = {
  setTodos: (state, todos) => {
    state.todos = state.todos.concat(todos);
  }
}

const state = {
  todos: [
    {
      id: 1,
      title: "Todo One"
    },
    {
      id: 2,
      title: "Todo Two"
    }
  ]
}

const getters = {
  allTodos: (state) => state.todos
}


export default {
 state,
 getters,
 actions,
 mutations   
}