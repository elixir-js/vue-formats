// eslint-disable-next-line radix
import { checkToOnlyNumber, moneyFormat } from "../utils/regexp";

export default {
  name: "VueMoney",
  props: {
    min_max: {
      type: Array,
      default: () => [],
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
      const formatMoney = moneyFormat(value);
      if (
        !checkToOnlyNumber(value) ||
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
