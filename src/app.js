export default {
    name: 'InputFormats',
    props: {
        type: {
            type: String,
            default: 'money',
        },
    },
    data() {
        return {};
    },
    render(h, context) {
        let template;

        switch (this.type) {
            case 'money':
                template = money;
                break;
            default:
                template = '';
        }

        return h('div', {}, template);
    },
};
