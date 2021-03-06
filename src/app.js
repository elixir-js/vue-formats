const TemplateType = {
    MONEY: "VueMoney",
};

const createTemplateByType = (type, value, options, emitInput, createElement) => {
    switch (type) {
        case TemplateType.MONEY:
            return createElement(TemplateType.MONEY,
                {
                    props: { value, options },
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
        options: { type: Object },
    },
    methods: {
        emitInput(event) {
            this.$emit('input', event)
        }
    },
    render(createElement) {
        return createTemplateByType(this.type, this.value, this.options,  this.emitInput, createElement);
    },
};
