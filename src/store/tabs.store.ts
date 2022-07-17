import { writable } from "svelte/store";

export interface TabDataList{
    tabNameList:string[] 
    tabTextList:string[]
}

//export const tabListNames = writable([])
//export const tabListTexts = writable([])

export const tabDataList = writable<TabDataList>({tabNameList:[''], tabTextList:['']})