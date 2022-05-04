<div>
    {#each tabNames as tabName, index}
        <button
            class={index === currentTab ? 'selected' : ''}
            on:click={e=>onSelection(index)}>{tabName}
        </button>
    {/each}
</div>

<div class="text">
    <h2>{tabTexts[currentTab]}</h2>
</div>


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

    button {
    
    margin-left:10px;
    background-color: #ccc;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 15pt;
    align-items: center;
    }

    .selected {
    font-weight: bold;
    background-color: #aaa;
    }


    .text{
    background-color: #ccc;
    font-weight: normal;
    font-size: 12pt;
    text-align: left;
    margin-top: 15px;
    margin-left: 15px;
    width:200pt;
    height: 100pt;
    border-radius: 10px;
    color:black
    }
</style>