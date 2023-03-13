<template>
    <div class="form-floating" :class="div_class">
        <input type="text" class="form-control" :class="input_class" :id="name" :name="name" :placeholder="placeholder"
            v-model="value" :disabled="disabled" :required="required">
        <label :for="name" :class="label_class">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    props: [
        'name',
        'placeholder',
        'div_class',
        'input_class',
        'label_class',
        'disabled',
        'required'
    ],
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style></style>