<script setup>
import Sidebar from '../../../layouts/components/Sidebar.vue';
import Default from '../../../layouts/Default.vue';

import FloatingField from '../../../Common/Form/Floating/FloatingField.vue';
import FloatingSelect from '../../../Common/Form/Floating/FloatingSelect.vue';
</script>

<template>
    <Sidebar>
        <Default :navbar_items="navbar_items">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 pt-3 border overflow-auto">
                        <FloatingField type="text" name="criarTicketTeste" placeholder="Tessteeee" div_class="mb-3" />
                        <FloatingSelect name="criarTicketTeste" placeholder="Seleeect" div_class="mb-3" />
                    </div>
                    <div class="col border">
                        123
                    </div>
                </div>
            </div>
        </Default>
    </Sidebar>
</template>

<script>
export default {
    props: ['navbar_items'],
    beforeMount() {
        document.title = 'Plataforma - Criar Ticket'
    }
}
</script>

<style></style>