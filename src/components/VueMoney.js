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
        onInput(event) {
            const value = event.target.value.replaceAll(",", "");
            const formatMoney = moneyFormat(value);
            if (
                !checkToOnlyNumber(value) ||
                (this.minMax.length && (this.minMax[0] > +value || +value > this.minMax[1]))
            ) {
                event.target.value = this.oldValue;
            } else {
                event.target.value = formatMoney;
                this.oldValue = formatMoney;
            }
        },
    },
    render(createElement) {
        return createElement("input", {
            attrs: { type: "text", name: "money-input", class: "vf-money" },
            on: { input: this.onInput },
        });
    },
};
