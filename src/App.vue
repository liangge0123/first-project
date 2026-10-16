<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import Landing from './Landing.vue'
const Workspace=defineAsyncComponent(()=>import('./Workspace.vue'))
import './landing.css'
const page=ref(location.hash.startsWith('#/workspace')?'workspace':'landing')
const section=ref(location.hash.split('/')[2]||'overview')
function enter(s='overview'){section.value=s;page.value='workspace';location.hash='/workspace/'+s;scrollTo(0,0)}
function home(){page.value='landing';history.pushState({},'',location.pathname);scrollTo(0,0)}
function route(){if(location.hash.startsWith('#/workspace')){section.value=location.hash.split('/')[2]||'overview';page.value='workspace'}else if(page.value==='workspace')home()}
onMounted(()=>addEventListener('hashchange',route))
onUnmounted(()=>removeEventListener('hashchange',route))
</script>
<template><Landing v-if="page==='landing'" @enter="enter"/><Workspace v-else :initial="section" @home="home"/></template>
