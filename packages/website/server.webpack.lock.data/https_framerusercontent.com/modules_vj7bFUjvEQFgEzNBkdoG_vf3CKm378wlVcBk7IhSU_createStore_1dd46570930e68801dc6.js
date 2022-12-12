import{useState,useEffect}from"react";import{Data,useObserveData}from"framer";export function createStore(state1){// Use Data so that a Preview reload resets the state
const dataStore=Data({state:Object.freeze({...state1})});// Create a set function that updates the state
const setDataStore=newState=>{// If the state is an object, make sure we copy it
if(typeof newState==="function"){newState=newState(dataStore.state);}dataStore.state=Object.freeze({...dataStore.state,...newState});};// Store the initial state, copy the object if it's an object
let storeState=typeof state1==="object"?Object.freeze({...state1}):state1;// Keep a list of all the listeners, in the form of React hook setters
const storeSetters=new Set();// Create a set function that updates all the listeners / setters
const setStoreState=newState=>{// If the state is an object, make sure we copy it
if(typeof newState==="function"){newState=newState(storeState);}storeState=typeof newState==="object"?Object.freeze({...storeState,...newState}):newState;// Update all the listeners / setters with the new value
storeSetters.forEach(setter=>setter(storeState));};// Create the actual hook based on everything above
function useStore(){// Create the hook we are going to use as a listener
const[state,setState]=useState(storeState);// If we unmount the component using this hook, we need to remove the listener
// @ts-ignore
useEffect(()=>{// But right now, we need to add the listener
storeSetters.add(setState);return()=>storeSetters.delete(setState);},[]);// If Data context exists, use Data, otherwise use vanilla React state
if(useObserveData()===true){useObserveData();return[dataStore.state,setDataStore];}else{// Return the state and a function to update the central store
return[state,setStoreState];}}return useStore;}
export const __FramerMetadata__ = {"exports":{"createStore":{"type":"function","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./createStore.map