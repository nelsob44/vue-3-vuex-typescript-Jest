<template>
    <div class="input">
        <label class="input_label" v-if="inputitem.type !== 'checkbox'">{{ inputitem.label }}</label>
        <input :class="inputitem.type" v-if="inputitem.type !== 'select' && editData !== null" 
            :type="inputitem.type"
            :v-model="inputitem.name"
            :checked="inputitem.checked"
            :valid="inputitem.validation"
            :value="editData[inputitem.name]"
            @change="$emit('update', {'name': inputitem.name, 'value': (inputitem.type === 'checkbox' ? $event.target.checked : $event.target.value) })"
        />
        <input :class="inputitem.type" v-if="inputitem.type !== 'select' && editData === null" 
            :type="inputitem.type"
            :name="inputitem.name"
            :v-model="inputitem.value"
            :checked="inputitem.checked"
            :valid="inputitem.validation"
            :value="inputitem.value"
            @change="$emit('update', {'name': inputitem.name, 'value': (inputitem.type === 'checkbox' ? $event.target.checked : $event.target.value) })"
        />
        <select class="input_select" v-if="inputitem.type === 'select' && inputitem.name !== 'preferredLanguage' && editData !== null" :v-model="editData[inputitem.name]"
            @change="$emit('update', {'name': inputitem.name, 'value': $event.target.value })"
            :name="inputitem.name"
        >
            <option value="">-Select-</option>
            <option v-for="(item, index) in inputitem.options" 
            :key="index" :value="item.value" :selected="item.value === 'EHS'">{{ item.name }}
            </option>
        </select>
        <select class="input_select" v-if="inputitem.type === 'select' && inputitem.name !== 'preferredLanguage' && editData === null" :v-model="inputitem.value"
            @change="$emit('update', {'name': inputitem.name, 'value': $event.target.value })"
            :name="inputitem.name"
        >
            <option value="">-Select-</option>
            <option v-for="(item, index) in inputitem.options" 
            :key="index" :value="item.value" :selected="item.value === 'EHS'">{{ item.name }}
            </option>
        </select>
        <select class="input_select" v-if="inputitem.type === 'select' && inputitem.name === 'preferredLanguage' && editData !== null" :v-model="editData[inputitem.name]"
            @change="$emit('update', {'name': inputitem.name, 'value': $event.target.value })"
            :name="inputitem.name"
        >
            <option value="">-Select-</option>
            <option v-for="(item, index) in languages" 
            :key="index" :value="item.value">{{ item.label }}
            </option>
        </select>
        <select class="input_select" v-if="inputitem.type === 'select' && inputitem.name === 'preferredLanguage' && editData === null" :v-model="inputitem.value"
            @change="$emit('update', {'name': inputitem.name, 'value': $event.target.value })"
            :name="inputitem.name"
        >
            <option value="">-Select-</option>
            <option v-for="(item, index) in languages" 
            :key="index" :value="item.value">{{ item.label }}
            </option>
        </select>
        <label :for="inputitem.name" class="input_label" v-if="inputitem.type === 'checkbox'">{{ inputitem.label }}</label>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { InputType, PreferredLanguage, SubmissionData } from '../types/types';

export default defineComponent({
  name: 'Input',
  props: {
    inputitem: {
        type: Object as PropType<InputType>,
        required: true
    },
    languages: {
        type: [] as PropType<[PreferredLanguage]>,
        required: true
    },
    editData: {
        type: Object as PropType<SubmissionData>,
        required: true
    }
  }
});
</script>
<style lang="scss" scoped>
.input {
    padding: 10px;
    box-sizing: border-box;
    .input_label {
        display: inline;
        margin: 8px 8px 0 15px;
    }
    .text-field, .email, .input_select {
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
        font: inherit;
        padding: 6px 10px;
        display: block;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>