import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home/Home.vue')
        },
        {
            path: '/sprints',
            name: 'sprints',
            component: () => import('../views/Sprints/Sprints.vue')
        },
        {
            path: '/sprints/criar',
            name: 'sprintsCriar',
            component: () => import('../views/Sprints/views/CriarSprint/CriarSprint.vue')
        }
    ]
})

export default router
