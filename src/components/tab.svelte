<TabItens tabNames = {tabNamesL}
tabTexts = {tabTextL}
currentTab = {currentTab}
/>


<script lang='ts'>
    import TabItens from './tabitens.svelte'
const tabsData = [{
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
]
    const tabNamesL = tabsData.map((tab) => tab.tabName)
    const tabTextL = tabsData.map((tab) => tab.tabText)
    let currentTab = 0

    function select(){

    }

</script>


