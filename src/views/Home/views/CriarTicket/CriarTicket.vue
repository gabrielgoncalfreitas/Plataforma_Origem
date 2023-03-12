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
                <form class="row justify-content-center" :action="router.resolve({ name: 'home' }).path" method="POST"
                    @submit="criar">
                    <div class="col-md-6 py-3 border">
                        <FloatingText type="text" name="titulo" placeholder="Título" div_class="mb-3 p-0" />
                        <FloatingTextarea type="text" name="texto" placeholder="Texto" div_class="mb-3 p-0" height="30vh" />

                        <div class="row justify-content-center">
                            <div class="row col-md-6 m-0">
                                <RouterLink class="btn btn-danger" to="/">
                                    Cancelar
                                </RouterLink>
                            </div>
                            <div class="row col-md-6 m-0">
                                <button class="btn btn-primary" type="submit">Criar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Default>
    </Sidebar>
</template>

<script>
import TicketsController from '../../../../app/Controllers/Home/TicketsController.js';
const ticketsController = new TicketsController();

export default {
    props: ['navbar_items'],
    beforeMount() {
        document.title = 'Plataforma - Criar Ticket';
    },
    methods: {
        criar(event) {
            event.preventDefault();
            ticketsController.criarTicket(event);
        }
    }
}
</script>

<style></style>