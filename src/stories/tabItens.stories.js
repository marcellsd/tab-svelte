import tabitens from '../components/tabitens.svelte';

export default {
  title: 'Tabs/Item',
  component: tabitens,
  argTypes: {
  },
};

const Template = (args) => ({
  Component: tabitens,
  props: args
});

export const Item1 = Template.bind({});
  Item1.args = {
    tabNames: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'],
    tabTexts: ['Texto Tab 1', 'Texto Tab 2', 'Texto Tab 3', 'Texto Tab 4', 'Texto Tab 5'],
    currentTab: 0
};

export const Item2 = Template.bind({});
Item2.args = {
  tabNames: ['Tab 1', 'Tab 2', 'Tab 3'],
  tabTexts: ['Texto Tab 1', 'Texto Tab 2', 'Texto Tab 3'],
  currentTab:1
};