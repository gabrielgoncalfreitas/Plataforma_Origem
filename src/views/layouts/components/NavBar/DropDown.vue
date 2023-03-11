<script setup>
import DropDownItem from './DropDownItem.vue';
import DropDownDivider from './DropDownDivider.vue';
</script>

<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ title }}
        </a>
        <ul class="dropdown-menu">
            <template v-for="(item, index) in items" :key="index">
                <template v-if="item.type === 'text'">
                    <DropDownItem :link="item.link" :label="item.label" />
                </template>
                <template v-else-if="item.type === 'divider'">
                    <DropDownDivider />
                </template>
            </template>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['title', 'items']
}
</script>

<style></style>