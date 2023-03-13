<script setup>
import Sidebar from '../layouts/components/Sidebar.vue';
import Default from '../layouts/Default.vue';
</script>

<template>
    <Sidebar>
        <Default :navbar_items="navbar_items">

        </Default>
    </Sidebar>
</template>

<script>
export default {
    data() {
        return {
            navbar_items: {
                dropdown: [
                    {
                        type: 'text',
                        label: 'Sprint',
                        link: '/sprints/criar'
                    }
                ]
            }
        }
    },
}
</script>

<style></style>