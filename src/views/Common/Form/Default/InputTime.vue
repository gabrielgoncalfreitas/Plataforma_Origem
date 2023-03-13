<template>
    <div :class="div_class">
        <label :for="name" class="form-label" :class="label_class">{{ placeholder }}</label>
        <input type="time" class="form-control" :class="input_class" :id="name" :disabled="disabled" :required="required">
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
}
</script>

<style></style>