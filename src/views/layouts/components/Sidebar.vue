<script setup>
import router from '../../../router';
</script>

<template>
    <div>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="sidebarPlataforma">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title user-select-none" id="sidebarPlataforma">Plataforma</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" data-bs-dismiss="offcanvas" aria-label="Close">
                <RouterLink :to="router.resolve('/').path">
                    <h3>Home</h3>
                </RouterLink>
                <RouterLink :to="router.resolve('/sprints').path">
                    <h3>Sprints</h3>
                </RouterLink>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.offcanvas {
    --bs-offcanvas-width: 30vh;
}
</style>