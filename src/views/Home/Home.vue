<script setup>
import Sidebar from '../layouts/components/Sidebar.vue';
import Default from '../layouts/Default.vue';
import KanbanLoading from './Components/KanbanLoading.vue';
</script>

<template>
    <Sidebar>
        <Default :navbar_items="navbar_items">
            <div class="board mt-5">
                <KanbanLoading />
            </div>
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
                        label: 'Ticket',
                        link: '/home/criar/ticket'
                    }
                ]
            }
        }
    },
    beforeMount() {
        document.title = 'Plataforma - Home'
    },
    methods: {
        dragStart(event) {
            console.log({
                dragStart: event
            });
        },
        dragOver(event) {
            event.preventDefault();
            // console.log({
            //     dragOver: event
            // });
        },
        drop(event) {
            event.preventDefault();
            console.log({
                drop: event
            });
        }
    }
}
</script>

<style scroped></style>