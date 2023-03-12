<template>
    <div class="form-floating" :class="div_class">
        <input :type="type" class="form-control" :class="input_class" :id="name" :name="name" :placeholder="placeholder"
            v-model="value">
        <label :for="name" :class="label_class">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    props: ['type', 'name', 'placeholder', 'div_class', 'input_class', 'label_class'],
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style></style>