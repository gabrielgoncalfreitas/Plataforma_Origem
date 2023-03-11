<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
    <NavBar :navbar_items="navbar_items" />
    <slot></slot>
</template>

<script>
export default {
    props: ['navbar_items']
}
</script>

<style></style>