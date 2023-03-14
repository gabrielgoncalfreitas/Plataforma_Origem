<script setup>
import Sidebar from '../../../layouts/components/Sidebar.vue';
import Default from '../../../layouts/Default.vue';
import Loading from '../../../Common/Loading.vue';

import Item from './Components/Item.vue';

import FloatingText from '../../../Common/Form/Floating/FloatingText.vue';
import FloatingTextarea from '../../../Common/Form/Floating/FloatingTextarea.vue';
import InputDate from '../../../Common/Form/Default/InputDate.vue';

import router from '../../../../router';
</script>

<template>
    <Sidebar>
        <Default :navbar_items="navbar_items">

            <Loading :loading="form_disabled" />

            <form :action="router.resolve({ name: 'home' }).path" method="POST" @submit="criar">
                <div class="container-fluid py-5 border-top border-bottom my-5">
                    <div class="row p-0 mb-3 justify-content-center">
                        <div class="col-md-5">
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
                        </div>

                        <div class="col m-0">
                            <div class="row mb-2 justify-content-end p-0 m-0">
                                <div class="col-md-auto p-0" data-bs-toggle="tooltip" data-bs-title="Adicionar item">
                                    <button class="btn btn-sm btn-success" type="button" @click="append()">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="row">
                                <template v-for="(item, index) in items" :key="index">
                                    <Item :id="item.id" />
                                </template>
                            </div>
                        </div>
                    </div>

                    <div class="row p-0 justify-content-center">
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
            form_disabled: false,
            items: [
                { id: 1 },
            ]
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
        },
        append() {
            this.items.push({ id: (this.items.length + 1) });
        }
    }
}
</script>

<style></style>