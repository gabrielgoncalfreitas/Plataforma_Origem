<template>
    <div class="form-floating" :class="div_class">
        <select class="form-select" :class="select_class" :id="name" :name="name" v-model="value">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <label :for="name">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    props: ['div_class', 'select_class', 'name', 'placeholder'],
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style></style>