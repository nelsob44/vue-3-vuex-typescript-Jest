<template>
  <button :class="buttonType">{{buttonText}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    buttonText: String,
    buttonType: String
  },
});
</script>

<style scoped lang="scss">
.home_button {
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    border: 0.1em solid #141414;
    border-radius: 0.3em;
    box-shadow: 3px 3px 2px #888888;
}
.reset_button {
    cursor: pointer;
    font-size: 0.8rem;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
    border: 0.1em solid #141414;
    background-color:rgb(136, 142, 139);
    border-radius: 0.3em;
    box-shadow: 3px 3px 2px #888888;
}
.save_button {
    cursor: pointer;
    font-size: 0.8rem;
    color: #ffffff;
    width: 80%;
    padding: 10px;
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    background-color:rgb(74, 74, 74);
    border: 0.1em solid #141414;
    border-radius: 0.3em;
    box-shadow: 3px 3px 2px #888888;
}
.reset_button:hover, .save_button:hover, .home_button:hover {
    font-style: italic;
    color: #FFFFFF;
    background-color:rgb(119, 128, 123);
}
</style>
