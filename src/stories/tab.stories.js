import tab from '../components/tab.svelte';

export default {
  title: 'Tabs/Tab',
  component: tab,
  argTypes: {
  },
};

const Template = (args) => ({
  Component: tab,
  props: args
});

export const Item1 = Template.bind({});
  Item1.args = {
    tabsData: [{
    tabName: 'tab 1',
    tabText: 'Texto do primeiro tab'
},
{
    tabName: 'tab 2',
    tabText: 'Texto do segundo tab'
},
{
    tabName: 'tab 3',
    tabText: 'Texto do terceiro tab'
},
{
    tabName: 'tab 4',
    tabText: 'Texto do quarto tab'
},
],
    currentTab: 0
};

export const Item2 = Template.bind({});
Item2.args = {  
  tabsData: [{
    tabName: 'tab 1',
    tabText: 'Texto do primeiro tab'
  },
  {
    tabName: 'tab 2',
    tabText: 'Texto do segundo tab'
  },
  {
    tabName: 'tab 3',
    tabText: 'Texto do terceiro tab'
  },
  {
    tabName: 'tab 4',
    tabText: 'Texto do quarto tab'
  },
  {
    tabName: 'tab 5',
    tabText: 'Texto do quinto tab'
  },
  ],
  currentTab: 0
};