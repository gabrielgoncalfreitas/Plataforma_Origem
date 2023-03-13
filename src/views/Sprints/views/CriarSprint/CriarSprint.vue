<script setup>
import Sidebar from '../../../layouts/components/Sidebar.vue';
import Default from '../../../layouts/Default.vue';

import FloatingText from '../../../Common/Form/Floating/FloatingText.vue';
import FloatingTextarea from '../../../Common/Form/Floating/FloatingTextarea.vue';
import InputDate from '../../../Common/Form/Default/InputDate.vue';
import InputTime from '../../../Common/Form/Default/InputTime.vue';

import router from '../../../../router';
</script>

<template>
    <Sidebar>
        <Default :navbar_items="navbar_items">
            <div class="container-fluid border-top border-bottom my-5">
                <div class="backdrop" :class="{ 'd-none': !form_disabled }" id="loading">
                    <div class="spinner-border" role="status"
                        style="pointer-events: none; position: absolute; top: 50%; left: 50%;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>


                <form class="row justify-content-center py-5" :action="router.resolve({ name: 'home' }).path" method="POST"
                    @submit="criar">
                    <div class="row p-0 justify-content-center">
                        <div class="col-md-6">
                            <div class="row m-0">
                                <FloatingText type="text" name="titulo" placeholder="Título" div_class="mb-3 p-0"
                                    :disabled="form_disabled" required="true" />
                            </div>

                            <div class="row m-0">
                                <div class="col ps-1">
                                    <InputDate div_class="mb-3" placeholder="Início" name="inicio" required="true" />
                                </div>
                                <div class="col pe-1">
                                    <InputDate div_class="mb-3" placeholder="Término" name="termino" required="true" />
                                </div>
                            </div>

                            <div class="row m-0">
                                <FloatingTextarea type="text" name="texto" placeholder="Texto" div_class="p-0"
                                    :disabled="form_disabled" required="true" height="30vh" />
                            </div>

                            <hr>

                            <div class="row m-0">
                                <div class="row justify-content-end p-0 m-0">
                                    <div class="col-md-auto p-0" data-bs-toggle="tooltip" data-bs-title="Adicionar item">
                                        <button class="btn btn-sm btn-success" type="button">
                                            <i class="bi bi-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <hr>
                        </div>
                    </div>

                    <div class="row p-0 col-md-6 justify-content-center">
                        <div class="row col-md-6 m-0">
                            <RouterLink class="btn btn-danger" to="/">
                                Cancelar
                            </RouterLink>
                        </div>
                        <div class="row col-md-6 m-0">
                            <button class="btn btn-primary" type="submit" :disabled="form_disabled">Criar</button>
                        </div>
                    </div>
                </form>
            </div>
        </Default>
    </Sidebar>
</template>

<script>
import Tooltip from '../../../../app/Helpers/Bootstrap';
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
    mounted() {
        Tooltip();
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