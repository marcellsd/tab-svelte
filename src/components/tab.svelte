<TabItens tabNames = {tabNamesL}
tabTexts = {tabTextL}
currentTab = {currentTab}
/>


<script lang='ts'>
    import TabItens from './tabitens.svelte'
    export let tabsData: {tabName: string;tabText: string;}[]

    const tabNamesL = tabsData.map((tab) => tab.tabName)
    const tabTextL = tabsData.map((tab) => tab.tabText)
    let currentTab = 0

    function select(){

    }

</script>


