import type { Plugin } from 'vue';
import { VueMarkdownIt } from './components';

export const VueMarkdownItPlugin: Plugin = {
  install: (app, options) => {
    app.component('VueMarkdownIt', VueMarkdownIt);
  },
};
