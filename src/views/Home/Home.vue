<script setup>
import Sidebar from '../layouts/components/Sidebar.vue';
import Default from '../layouts/Default.vue';
import NavBar from '../layouts/components/NavBar.vue';
</script>

<template>
    <Sidebar>
        <NavBar :navbar_items="navbar_items" />
        <Default>
            <div class="board mt-5">
                <h1 class="text-center text-uppercase">Kanban</h1>

                <div class="container-fluid text-center">
                    <div class="row mx-1">
                        <div class="col border rounded p-0">
                            <div class="kb-header fw-bold fs-5 user-select-none border-bottom">Column</div>

                            <div class="kb-col" @dragover="dragOver" @drop="drop">
                                <div class="card m-1" draggable="true" @dragstart="dragStart">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up
                                            the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col border rounded p-0">
                            <div class="kb-header fw-bold fs-5 user-select-none border-bottom">Column</div>

                            <div class="kb-col" @dragover="dragOver" @drop="drop">
                                <div class="card m-1" draggable="true" @dragstart="dragStart">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up
                                            the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col border rounded p-0">
                            <div class="kb-header fw-bold fs-5 user-select-none border-bottom">Column</div>

                            <div class="kb-col" @dragover="dragOver" @drop="drop">
                                <div class="card m-1" draggable="true" @dragstart="dragStart">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up
                                            the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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