<template>
    <li>
        <RouterLink class="dropdown-item" :to="link">{{ label }}</RouterLink>
    </li>
</template>

<script>
export default {
    props: ['label', 'link']
}
</script>

<style></style>