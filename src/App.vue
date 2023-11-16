<script setup>
// import { register,YoulogeDrive, YoulogeVideo} from "../lib/index1.js";
// register()
</script>

<template>
  <div>
    <h1><code>edit-word</code> demo</h1>

<template id="person-template">
  <div>
    <h2>Personal ID Card</h2>
    <slot name="person-name">NAME MISSING</slot>
    <ul>
      <li><slot name="person-age">AGE MISSING</slot></li>
      <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>
    </ul>
  </div>
</template>

    <person-details>
      <p slot="person-name"><edit-word>Morgan</edit-word> Stanley</p>
      <span slot="person-age">36</span>
      <span slot="person-occupation">Accountant</span>
    </person-details>

    <p>My name is <edit-word>Chris</edit-word>, the man said.</p>
  </div>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
