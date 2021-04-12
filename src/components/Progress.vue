<template>
    <div class="progress_container">
        <div class="progress_name">
            <h2>Austin Fisher</h2>
        </div>
        <div class="progress_bar">
            <progress value="25" max="100"> 25% </progress>
        </div>
        <div class="progress_info">
            <p>Your Profile is 25% Complete</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Progress',
  data: () => {
    return {
      Add: "Add Form" as string,
      Edit: "Edit Form" as string
    }
  }
});
</script>
<style lang="scss" scoped>
.progress_container {
    height: auto;
    display: flex;
    flex-direction: column;
    .progress_info {
        font-size: 0.8rem;
    }
}
progress {
    size: 0.8rem;
} 
</style>