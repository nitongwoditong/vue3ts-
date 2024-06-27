import { createStore } from "vuex";

export default createStore({
  state: {
    text: { tip: "这是一条数据！" },
  },
  mutations: {
    add(state, params) {
      state.text.tip = params.num;
    },
  },
  actions: {},
  modules: {},
});
