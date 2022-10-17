import { defineStore } from "pinia";

const useCounter = defineStore("counter", {
  state: () => {
    return {
      count: 99,
    };
  },
  getters: {},
  actions: {},
});

export default useCounter;
