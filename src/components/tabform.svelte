<form class="qst-form" on:submit|preventDefault={submit}>
    <div>
        <label for="numTabs">Número de Tabs </label>
        <input name="numTabs" type="number" min="1" max="10" value={tabName.length} 
        on:change={e=>changeNumTabs(e.target['value'])} />
        {#if errors.numTabs}
            <div class="error">{ errors.numtab }</div>
        {/if}
    </div>
    {#each tabName as tb ,i (`tabAll_${i}`)}
    <div>
        {#key `tabName_${i}`}
        <div>
            <label for ="tabName_">Título tab {i+1} </label>
            <input name = "tabName_" type="text" bind:value={tabName[i]}
            on:change={e => touched[`tabName_${i}`] && check(e.target['value'], required, `tabName_${i}`)}
            />
            {#if errors[`tabName_${i}`]}
                <div class="error">{ errors[`tabName_${i}`] }</div>
            {/if}
        </div>
        {/key}
        {#key `tabText_${i}`}
        <div>
            <label for="tabText_">Conteúdo tab {i+1} </label>
            <input name="tabText_" type="text" bind:value = {tabText[i]}
            on:change={e => touched[`tabText_${i}`] && check(e.target['value'], required, `tabText_${i}`)}/>
            {#if errors[`tabText_${i}`]}
                <div class="error">{ errors[`tabText_${i}`] }</div>
            {/if}
           
        </div>
        {/key}
    </div>
    {/each}
    
    <div>
        <div class="buttons">
            <input type="submit" value="Enviar" />
        </div>
    </div>
</form>

<script lang="ts">
    import { createEventDispatcher, prevent_default } from 'svelte/internal'
import type { TabDataList } from '../store/tabs.store';
import {tabDataList} from '../store/tabs.store'

    const dispatcher = createEventDispatcher<{
        submit: TabDataList
    }>()

    let tabName = ['']
    let tabText = ['']
    let errors : {[name: string]:string} = {}
    let touched : {[name: string]:boolean} = {}

    
    function touch(name: string, value: boolean = true){
        touched[name] = value
    }

    function setError(name: string, error: string) {
        errors[name] = error
      }

      function changeTabName(index: number, value: string) {
        tabName[index] = value
        touch(`tabName_${index}`)
      }

      function changeTabText(index: number, value: string) {
        tabText[index] = value
        touch(`tabText_${index}`)
      }

    function changeNumTabs(value: string) {
        // cria uma função de validação cujo valor deve estar entre 1 e 10
        const range = inRange(1, 10)
    
        // função de validação combina outras funções de validação
        // o erro atribuído será o da primeira que retornar algum erro, devido ao "ou" (||)
        const validateFunc = (value: string) => required(value) || isInt(value) || range(value)
    
        // se passar no teste de validação, altera o tamanho do array `tabText`
        if (check(value, validateFunc, 'numTabs')) {
          const num = parseInt(value)
          if (num <= tabText.length && num <=tabName.length) { // ou reduz o tamanho do array
            for (let i = num; i < tabText.length; i++) {
              touch(`tabText_${i}`, false) // limpa os indicadores de alteraçao das opções removidas
              setError(`tabText_${i}`, '') // limpa as mensagens de erro das opções removidas
              touch(`tabName_${i}`, false) // limpa os indicadores de alteraçao das opções removidas
              setError(`tabName_${i}`, '') // limpa as mensagens de erro das opções removidas
            }
            tabText.splice(num, tabText.length- num)
            tabName.splice(num, tabName.length - num)
            
          }
          else {  // ou aumenta o tamanho do array com strings vazias nos novos elementos
            const tailName = Array(num - tabName.length).fill('')
            tailName.forEach(n => tabName.push(n))
            const tailText = Array(num - tabText.length).fill('')
            tailText.forEach(t => tabText.push(t))
          }
        }
      }

      function submit() {
         const tabNameOk = tabName
          .map((opt, i) => check(opt, required, `tabName_${i}`))
          .every(o => o)
        const tabTextOk = tabText
          .map((opt, i) => check(opt, required, `tabText_${i}`))
          .every(o => o)
          if (tabNameOk && tabTextOk) {
           dispatcher('submit', {tabNameList: tabName, tabTextList: tabText})
           tabDataList.set({tabNameList: tabName, tabTextList: tabText})
          }
          console.log(tabName)
            console.log(tabText)
            console.log(errors)
        }  

    function required(value:string){
        if(value === undefined || value.trim().length === 0){
            return 'Este é um campo obrigatório'
        }
        return null
    }

    function check(value: string, validateFunc: Function, name:string) {
        const error = validateFunc(value)
        setError(name, error)
        return error === null
    }

    function isInt(value: string) {
        if (value && isNaN(parseInt(value, 10))) {
          return 'Este campo requer um número inteiro'
        }
        return null
      }
    function inRange(min: number, max: number) {
        return (value: string) => {
          const num = parseInt(value, 10)
          const [vmin, vmax] = min > max ? [max, min] : [min, max]
          if (value && (isNaN(num) || num < vmin || num > vmax)) {
            return `Este campo requer um número inteiro entre ${vmin} e ${vmax}`
          }
          return null
        }
    }




</script>

<style>
    .qst-form {
      --label-size: 150px;
      --label-margin: 10px;
      --label-width: calc(var(--label-size) + var(--label-margin));
      --border-size: 1px;
      --border-color: #ccc;
      --border-radius: 5px;
      --input-padding: 5px;
      --input-number-size: 30pt;
      padding: 20px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .qst-form label {
      width: var(--label-size);
      display: inline-block;
      text-align: right;
      font-weight: bold;
      margin-right: var(--label-margin);
      vertical-align: top;
    }
    .qst-form .error {
      font-style: italic;
      font-size: 10pt;
      color: red;
      margin-left: var(--label-width);
      height: 20pt;
    }
    .qst-form .buttons {
      margin-top: 10px;
      padding-top: 10px;
      border-top: var(--border-size) solid var(--border-color);
      display: flex;
      justify-content: flex-end;
    }
    .qst-form textarea {
      height: 100px;
      margin-bottom: -5pt;
    }
    .qst-form input[type="submit"] {
      padding: 4pt 8pt;
    }

    .qst-form input[type="text"],
    .qst-form input[type="number"],
    .qst-form textarea {
      border-radius: var(--border-radius);
      border: var(--border-size) solid var(--border-color);
      padding: var(--input-padding);
    }
    .qst-form input[type="text"],
    .qst-form textarea {
      width: calc(50% );
    }
    .qst-form input[type="number"] {
      width: var(--input-number-size);
    }
  </style>

