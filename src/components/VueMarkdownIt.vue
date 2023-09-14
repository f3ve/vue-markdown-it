<script lang="ts" setup>
import MarkdownIt from 'markdown-it';

const props = withDefaults(
  defineProps<{
    /** Markdown text to render */
    source: string;
    /**
     * Custom class name to apply to markdown container
     */
    mdWrapperClass?: string;
    plugins?: (
      | MarkdownIt.PluginSimple
      | [MarkdownIt.PluginSimple | MarkdownIt.PluginWithOptions<any>, any]
    )[];
  }>(),
  {
    mdWrapperClass: 'vue-md-it-wrapper',
  },
);

const md = new MarkdownIt();

if (props.plugins) registerPlugins();

function registerPlugins() {
  props.plugins?.forEach((item) => {
    const plugin = toArray(item);
    md.use(plugin[0], plugin[1]);
  });
}

function toArray<T = any>(val: T) {
  return Array.isArray(val) ? val : [val, undefined];
}
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="md.render(source)" :class="mdWrapperClass"></div>
</template>
