import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [{ id: 1, text: 'abc', done: true }, { id: 2, text: 'def', done: false }]
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        incrementAsync: context => {
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        }
    },
    getters: {
        doneTodos: (state, getters) => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        },
        getDoneById: state => id => {
            return state.todos.find(todo => todo.id === id);
        },
        getTodosLength: state => {
            return state.todos.length;
        }
    }
});

export default store;
