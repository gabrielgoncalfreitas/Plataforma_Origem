<template>
    <div class="form-floating" :class="div_class">
        <input :type="type" class="form-control" :class="input_class" :id="id" :placeholder="placeholder">
        <label :for="id" :class="label_class">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    props: ['type', 'id', 'name', 'placeholder', 'div_class', 'input_class', 'label_class']
}
</script>

<style></style>