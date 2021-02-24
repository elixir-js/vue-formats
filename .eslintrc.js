module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    extends: ["plugin:vue/essential", "standard", "prettier"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["vue", "jest", "prettier"],
    rules: {},
};
