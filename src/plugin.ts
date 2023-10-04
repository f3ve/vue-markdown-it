import type { Plugin } from 'vue';
import { VueMarkdownIt } from './components';

export const VueMarkdownItPlugin: Plugin = {
  install: (app) => {
    app.component('VueMarkdownIt', VueMarkdownIt);
  },
};
