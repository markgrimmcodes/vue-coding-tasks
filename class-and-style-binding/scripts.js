Vue.createApp({
  data() {
    return {
      activeTab: 3,
    };
  },
  methods: {
    toggleTab(e) {
      if (this.activeTab != parseInt(e.target.id)) {
        this.activeTab = parseInt(e.target.id);
      }
    },
  },
}).mount("#app");
