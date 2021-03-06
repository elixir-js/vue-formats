const TemplateType = {
    MONEY: "VueMoney",
};

const createTemplateByType = (type, value, emitInput, createElement) => {
    switch (type) {
        case TemplateType.MONEY:
            return createElement(TemplateType.MONEY,
                {
                    props: { value },
                    on: { input: emitInput }
                },
            );

        default:
            return "";
    }
};

export default {
    name: "InputFormats",
    components: {
        VueMoney: () => import("./components/VueMoney.js"),
    },
    props: {
        type: { type: String, default: TemplateType.MONEY },
        value: { required: true, type: [Number, String], default: 0 },
    },
    data() {
        return {};
    },
    methods: {
        emitInput(event) {
            this.$emit('input', event)
        }
    },
    render(createElement) {
        return createTemplateByType(this.type, this.value, this.emitInput, createElement);
    },
};
