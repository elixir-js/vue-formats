import { checkToOnlyNumber, moneyFormat } from "@utils/moneyUtils";

const defaultOptions = { prefix: '', suffix: '', }

export default {
    name: "VueMoney",
    props: {
        value: { required: true, type: [Number, String], default: 0 },
        options: { type: Object, default: () => defaultOptions}
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
                this.currentValue = moneyFormat(this.value)
                this.$emit('input', newValue.replaceAll(",", ""))
            }
        }
    },
    methods: {
        onInput(event) {
            const value = event.target.value.replaceAll(",", "");
            const formatMoney = moneyFormat(value);
            if(!checkToOnlyNumber(value)) event.target.value = this.oldValue;
            else {
                event.target.value = this.oldValue = formatMoney;
            }
            this.$emit('input', value)
        },
    },
    render(createElement) {
        return createElement("input", {
            attrs: { type: "text", name: "money-input", class: "vf-money", value: this.currentValue },
            on: { input: this.onInput }
        });
    },
};
