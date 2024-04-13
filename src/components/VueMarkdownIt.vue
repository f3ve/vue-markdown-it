<script lang="ts" setup>
import MarkdownIt from 'markdown-it';

const props = withDefaults(
  defineProps<{
    /** Markdown text to render */
    source: string;
    /**
     * Custom class name to apply to markdown container
     * @default 'vue-md-it-wrapper'
     */
    mdWrapperClass?: string;
    plugins?: (
      | MarkdownIt.PluginSimple
      | [MarkdownIt.PluginSimple | MarkdownIt.PluginWithOptions<any>, any]
    )[];
    preset?: MarkdownIt.PresetName;
    options?: MarkdownIt.Options;
  }>(),
  {
    mdWrapperClass: 'vue-md-it-wrapper',
  },
);

const md = props.preset
  ? new MarkdownIt(props.preset, props.options)
  : props.options
    ? new MarkdownIt(props.options)
    : new MarkdownIt();

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
  <div :class="mdWrapperClass" v-html="md.render(source)"></div>
</template>
