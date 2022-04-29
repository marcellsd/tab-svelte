{#each tabNames as tabName, index}
<button
class={index === currentTab ? 'selected' : ''}
on:click={e=>onSelection(index)}>{tabName}</button>
{/each}
<h2>{tabTexts[currentTab]}</h2>

<script lang="ts">
    import {createEventDispatcher} from 'svelte'

    export let tabNames: string[] = []
    export let tabTexts: string[] = []
    export let currentTab = undefined

    function onSelection(index){
        currentTab = index
    }
</script>

<style>
    .selected{
        font-weight: bold;
    }
</style>