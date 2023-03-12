<script setup>
import MarkdownIt from 'markdown-it';
</script>

<template>
    <div class="form-floating" :class="div_class">
        <textarea class="form-control" :class="input_class" :type="type" :id="name" :name="name" :placeholder="placeholder"
            v-model="localValue"></textarea>
        <label :for="name" :class="label_class">{{ placeholder }}</label>
    </div>

    <div class="text-white" v-html="markdownContent"></div>
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
            localValue: '',
            textareaContent: '',
            markdownContent: '',
        }
    },
    mounted() {
        this.localValue = this.value;
    },
    methods: {
        convertToMarkdown() {
            const md = new MarkdownIt();
            console.log(this.markdownContent);
            this.markdownContent = md.render(this.textareaContent);
        },
    }
}
</script>

<style></style>