<script setup>
import Sidebar from '../../../layouts/components/Sidebar.vue';
import Default from '../../../layouts/Default.vue';

import FloatingText from '../../../Common/Form/Floating/FloatingText.vue';
import FloatingTextarea from '../../../Common/Form/Floating/FloatingTextarea.vue';

import router from '../../../../router';
</script>

<template>
    <Sidebar>
        <Default :navbar_items="navbar_items">
            <div class="container-fluid">
                <div class="backdrop" :class="{ 'd-none': !form_disabled }" id="loading">
                    <div class="spinner-border" role="status"
                        style="pointer-events: none; position: absolute; top: 50%; left: 50%;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>


                <form class="row justify-content-center" :action="router.resolve({ name: 'home' }).path" method="POST"
                    @submit="criar">
                    <div class="col-md-6 py-3 border">
                        <FloatingText type="text" name="titulo" placeholder="Título" div_class="mb-3 p-0"
                            :disabled="form_disabled" required="true" />
                        <FloatingTextarea type="text" name="texto" placeholder="Texto" div_class="mb-3 p-0"
                            :disabled="form_disabled" required="true" height="30vh" />

                        <div class="row justify-content-center">
                            <div class="row col-md-6 m-0">
                                <RouterLink class="btn btn-danger" to="/">
                                    Cancelar
                                </RouterLink>
                            </div>
                            <div class="row col-md-6 m-0">
                                <button class="btn btn-primary" type="submit" :disabled="form_disabled">Criar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Default>
    </Sidebar>
</template>

<script>
import SprintsController from '../../../../app/Controllers/Sprints/SprintsController';
const sprintsController = new SprintsController();

export default {
    props: ['navbar_items'],
    data() {
        return {
            form_disabled: false
        }
    },
    beforeMount() {
        document.title = 'Plataforma - Criar Sprint';
    },
    methods: {
        criar(event) {
            event.preventDefault();
            this.form_disabled = true;
            sprintsController.criarSprint(event);
            this.form_disabled = false;
        }
    }
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