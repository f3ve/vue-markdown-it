<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Vue markdown-it</h1>

  <p align="center">
    Vue 3 markdown-it component
    <br />
    <a href="https://github.com/f3ve/vue-markdown-it"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/f3ve/vue-markdown-it/issues">Report Bug</a>
    ·
    <a href="https://github.com/f3ve/vue-markdown-it/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a component for easily integrating [markdown-it](https://github.com/markdown-it/markdown-it) in [Vue 3](https://vuejs.org/). This project was inspired by [markdown-it-vue](https://github.com/ravenq/markdown-it-vue). which hasn't been updated in a while and only supports Vue 2.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Vue][Vue.js]][Vue-url]
- [![Vite][Vite.js]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Vue 3

```bash
npm i vue
```

### Installation

```
npm i @f3ve/vue-markdown-it
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Importing the Component

You can directly import the component in your SFC file.

#### In [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html#basic-syntax) Syntax

```vue
<!-- Vue 3 setup script syntax -->
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" />
</template>
```

#### In Regular `<script>` Syntax

```vue
<script>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

export default {
  components: {
    VueMarkdownIt
  }
  setup() {
    const post = ref();

    onMounted(async () => {
      const res = await api.get('/post');
      post.value = res.data;
    });
  }
}
</script>

<template>
  <vue-markdown-it :source="post" />
</template>
```

### Using the Plugin

You can also use the plugin to register the component globally.

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { VueMarkdownItPlugin } from '@f3ve/vue-markdown-it';

const app = createApp(App);

app.use(VueMarkdownItPlugin);

app.mount('#app');
```

### Using markdown-it Plugins

You can add markdown-it plugins using the `plugin` prop. `plugin` expects an array of markdown-it plugins. If you want to configure the options of a plugin you can nest the plugin and its options in an array.

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';
import myPlugin from 'myPlugin';
import myPluginWithOption from 'myPluginWithOptions';

const post = ref();

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it
    :source="post"
    :plugins="[myPlugin, [myPluginWithOptions, { option1: true }]]"
  />
</template>
```

### Using Markdown-it Options & Presets

See [Markdown-it docs](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) for more information

#### Options

> _Note: I'm using Vue [script setup](https://vuejs.org/api/sfc-script-setup.html#basic-syntax) syntax in these examples. If you're not using script setup make sure to [register the component](https://vuejs.org/guide/components/registration.html#local-registration) before using._

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();
const options = {
  html: true,
  linkify: true,
};

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" :options="options" />
</template>
```

#### Presets

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" preset="commonmark" />
</template>
```

#### Using Presets and Options together

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();
const options = {
  html: true,
  linkify: true,
};

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" :options="options" preset="commonmark" />
</template>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/f3ve/vue-markdown-it/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

[See contributing guide](https://github.com/f3ve/.github/blob/main/CONTRIBUTING.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the [MIT License](https://github.com/f3ve/vue-markdown-it/blob/main/LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/f3ve/vue-markdown-it.svg?style=for-the-badge
[contributors-url]: https://github.com/f3ve/vue-markdown-it/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/f3ve/vue-markdown-it.svg?style=for-the-badge
[forks-url]: https://github.com/f3ve/vue-markdown-it/network/members
[stars-shield]: https://img.shields.io/github/stars/f3ve/vue-markdown-it.svg?style=for-the-badge
[stars-url]: https://github.com/f3ve/vue-markdown-it/stargazers
[issues-shield]: https://img.shields.io/github/issues/f3ve/vue-markdown-it.svg?style=for-the-badge
[issues-url]: https://github.com/f3ve/vue-markdown-it/issues
[license-shield]: https://img.shields.io/github/license/f3ve/vue-markdown-it.svg?style=for-the-badge
[license-url]: https://github.com/f3ve/vue-markdown-it/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Vite.js]: https://img.shields.io/badge/VITE-35495E?style=for-the-badge&logo=vite
[Vite-url]: https://vitejs.dev
