import { checkToOnlyNumber, moneyFormat } from "@utils/moneyUtils";

export default {
    name: "VueMoney",
    props: {
        value: { required: true, type: [Number, String], default: 0 },
        min_max: { type: Array, default: () => [],},
    },
    data() {
        return {
            oldValue: "",
            currentValue: "",
        };
    },
    watch: {
        value: {
            immediate: true,
            handler (newValue) {
                this.oldValue = moneyFormat(newValue)
                this.currentValue = moneyFormat(this.value)
                this.$emit('input', newValue.replaceAll(",", ""))
            }
        }
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
            this.$emit('input', value)
        },
    },
    render(h) {
        return h("input", {
            attrs: { type: "text", name: "money-input", class: "vf-money", value: this.currentValue },
            on: { input: this.onInput }
        });
    },
};
