<template>
    <RouterView />
</template>

<script>
import Tooltip from './app/Helpers/Bootstrap';

export default {
    mounted() {
        Tooltip();
    }
}
</script>