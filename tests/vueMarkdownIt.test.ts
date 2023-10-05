import { mount } from '@vue/test-utils';
import { VueMarkdownIt } from '@/components';

test('Mount VueMarkdownIt', async () => {
  expect(VueMarkdownIt).toBeTruthy();

  const wrapper = mount(VueMarkdownIt, {
    props: {
      source: `# This is a test!
      Muffins are awesome
      `,
    },
  });

  console.log(wrapper.html());

  expect(wrapper.html()).toContain('<h1>This is a test!</h1>');
  expect(wrapper.html()).toMatchSnapshot();
});
