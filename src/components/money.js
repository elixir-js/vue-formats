import { checkToOnlyNumber, moneyFormat } from "@utils/moneyUtils";

export default {
    name: "VueMoney",
    props: {
        minMax: {
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
                (this.minMax.length && (this.minMax[0] > +value || +value > this.minMax[1]))
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
