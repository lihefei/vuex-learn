<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            计数器{{count}}
            <button @click="$store.commit('increment')">使用mutations增加计数</button>

            <button @click="$store.dispatch({type: 'incrementAsync'})">使用actions增加计数</button>
            <button @click="incrementAsync">使用actions增加计数</button>
        </div>
        <ul>
            <li v-for="(doneTodo, index) in doneTodos" :key="index">{{doneTodo.text}}</li>

            <li>doneCount共计: {{doneCount}}</li>
            <li>数组共计长度: {{getTodosLength}}</li>
        </ul>

        <p>{{$store.getters.getDoneById(2)}}</p>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            localCount: 3
        };
    },
    computed: {
        doneTodos() {
            return this.$store.getters.doneTodos;
        },

        // ...mapState({
        //     count: state => state.count,
        //     countAlias: 'count',
        //     // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        //     countPlusLocalState(state) {
        //         debugger;
        //         return state.count + this.localCount;
        //     }
        // })
        ...mapState(['count']),
        ...mapGetters({
            // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
            doneCount: 'doneTodosCount'
        }),
        ...mapGetters(['getTodosLength'])
    },
    methods: {
        ...mapActions(['incrementAsync'])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
