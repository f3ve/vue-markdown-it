import type { App, Plugin } from 'vue';
import { default as VueMarkdownIt } from './components/VueMarkdownIt.vue';

export const VueMarkdownItPlugin: Plugin = {
  install: (app, options) => {
    app.component('VueMarkdownIt', VueMarkdownIt);
  },
};
