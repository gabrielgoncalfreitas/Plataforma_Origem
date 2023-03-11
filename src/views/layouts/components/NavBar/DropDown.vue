<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ title }}
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Ticket</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['title', 'items']
}
</script>

<style></style>