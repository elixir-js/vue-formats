const TemplateType = {
    MONEY: "VueMoney",
};

const createTemplateByType = (type, createElement) => {
    switch (type) {
        case TemplateType.MONEY:
            return createElement(TemplateType.MONEY, {});

        default:
            return "";
    }
};

export default {
    name: "InputFormats",
    components: {
        VueMoney: () => import("./components/VueMoney"),
    },
    props: {
        type: {
            type: String,
            default: TemplateType.MONEY,
        },
    },
    data() {
        return {};
    },
    render(createElement) {
        return createTemplateByType(this.type, createElement);
    },
};
