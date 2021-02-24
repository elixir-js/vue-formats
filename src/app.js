const generateTemplateByType = (type, func) => {
    switch (type) {
        case "money":
            return func("VueMoney", {});
        default:
            return "";
    }
};
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
        const template = generateTemplateByType(this.type);

        return h("div", {}, [template]);
    },
};
