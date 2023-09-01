<script lang="ts" setup>
import MarkdownIt from 'markdown-it';

defineProps<{
  source: string;
}>();

const md = new MarkdownIt();
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="md.render(source)"></div>
</template>
