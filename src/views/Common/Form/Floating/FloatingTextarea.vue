<template>
    <div class="form-floating" :class="div_class">
        <textarea class="form-control" :class="input_class" :id="name" :name="name" :placeholder="placeholder"
            v-model="localValue" :disabled="disabled" :required="required" :style="{ 'height': height }"></textarea>
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
        'value',
        'height',
        'disabled',
        'required'
    ],
    data() {
        return {
            localValue: ''
        }
    },
    mounted() {
        this.localValue = this.value;
    }
}
</script>

<style></style>