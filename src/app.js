export default {
  name: "InputFormats",
  components: {
    VueMoney: () => import("./components/money"),
  },
  props: {
    type: {
      type: String,
      default: "money",
    },
  },
  data() {
    return {};
  },

  render(h) {
    let template;

    switch (this.type) {
      case "money":
        template = h("VueMoney", {});
        break;
      default:
        template = "";
    }

    return h("div", {}, [template]);
  },
};
