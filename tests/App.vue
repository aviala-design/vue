<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import "../src/styles/themes/default.css"
import HelloWorld from './components/HelloWorld.vue'
import { MButton, MInput, MInputLabel } from "../src"
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <MButton text="124">hhh</MButton>

  <br/>
  <MInputLabel>账号</MInputLabel>
  <MInput type="password" placeholder="Hello"></MInput>

  <br/>
  <MInput type="color" placeholder="Hello"></MInput>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
