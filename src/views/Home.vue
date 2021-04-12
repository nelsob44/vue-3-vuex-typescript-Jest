<template>
  <div class="home">
    <div>
      <router-link to="/add"><Button :buttonText="add" :buttonType="type"/></router-link>
      <router-link to="/edit"><Button :buttonText="edit" :buttonType="type"/></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue'; // @ is an alias to /src
import store from '../store/index';

export default defineComponent({
  name: 'Home',
  components: {
    Button,
  },
  computed: {
    add(){
      return store.getters.getAddText;
    },
    edit(){
      return store.getters.getEditText;
    },
    type(){
      return store.getters.getTypeText;
    }
  },
});
</script>
