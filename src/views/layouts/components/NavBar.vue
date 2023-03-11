<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling">Plataforma</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                </ul>
            </div>
            <div class="d-flex">
                <div class="form-check form-switch d-flex justify-content-between align-items-center">
                    <div>
                        <i class="bi bi-brightness-high" :class="{ 'd-none': !dark_mode }"></i>
                        <i class="bi bi-brightness-high-fill" :class="{ 'd-none': dark_mode }"></i>
                    </div>
                    <input class="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                        v-model="dark_mode" @click="darkMode()">
                    <div>
                        <i class="bi bi-moon" :class="{ 'd-none': dark_mode }"></i>
                        <i class="bi bi-moon-fill" :class="{ 'd-none': !dark_mode }"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            dark_mode: ''
        }
    },
    methods: {
        darkMode() {
            document.querySelector('html').dataset.bsTheme = document.querySelector('html').dataset.bsTheme === 'light' ? 'dark' : 'light';
        }
    }
}
</script>

<style></style>