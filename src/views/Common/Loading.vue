<template>
    <div class="backdrop" :class="{ 'd-none': !loading }" id="loading">
        <div class="spinner-border" role="status" style="pointer-events: none; position: absolute; top: 50%; left: 50%;">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['loading']
}
</script>

<style>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
</style>