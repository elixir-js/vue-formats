import InputFormats from './app';
import { version } from '../package.json';

InputFormats.version = version;
InputFormats.install = function (Vue) {
    Vue.component(InputFormats.name, InputFormats);
};

export default InputFormats;
