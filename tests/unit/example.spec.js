import { shallowMount } from '@vue/test-utils'
import Todos from '@/components/Todos.vue'
import Vuex from 'vuex';
import { shallow, mount } from 'vue-test-utils';
import { Store } from 'vuex-mock-store'
const store = new Store({
  state: { 
    todos: [
      { 
        id: 2,
        title: "Todo One"
      },
      {
        id: 3,
        title: "Todo Two"
      }
    ]
  },
  getters: {
     allTodos: [
      { 
        id: 2,
        title: "Todo One"
      },
      { 
        id: 3,
        title: "Todo Two"
      }
     ] 
  },
})

const mocks = {
  $store: store,
}


describe('Todos.vue', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(Todos, {mocks})
      })
      test('renders props.msg when passed', () => {
           expect(wrapper.findAll(".todo").length).toBe(2);
        })
      })