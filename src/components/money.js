// eslint-disable-next-line radix

export default {
  name: "VueMoney",
  props: {
    min_max: {
      type: Array,
      default: () => [1, 10],
    },
  },
  data() {
    return {
      oldValue: "",
    };
  },
  methods: {
    onInput(e) {
      const value = e.target.value.replaceAll(",", "");
      const formatMoney = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      if (
        !/^-?\d*$/.test(value) ||
        (this.min_max.length &&
          (this.min_max[0] > +value || +value > this.min_max[1]))
      ) {
        e.target.value = this.oldValue;
      } else {
        e.target.value = formatMoney;
        this.oldValue = formatMoney;
      }
    },
  },
  render(h) {
    return h("input", {
      attrs: { type: "text", name: "money-input", class: "vf-money" },
      on: { input: this.onInput },
    });
  },
};
