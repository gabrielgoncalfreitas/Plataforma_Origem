<template>
    <div class="form-floating" :class="div_class">
        <textarea class="form-control" :class="input_class" :type="type" :id="name" :name="name" :placeholder="placeholder"
            v-model="localValue" :style="{ 'height': height }"></textarea>
        <label :for="name" :class="label_class">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    props: [
        'type',
        'name',
        'placeholder',
        'div_class',
        'input_class',
        'label_class',
        'value',
        'height'
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