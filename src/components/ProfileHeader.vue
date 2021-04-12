<template>
    <div class="profile">
        <div class="profile_left">
            <div class="profile_left_image">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TAGCfZHqdPV2G8neh6E2ewHaE7%26pid%3DApi&f=1"
                    alt="Cristiano Ronaldo"
                />
            </div>
            <div class="profile_left_progress">
                <Progress class="profile_left_progress_bar"/>
            </div>
        </div>
        <div class="profile_right">
            <div class="profile_right_reset">
                <Button class="button" :buttonText="resetPassword" :buttonType="resetButton"/>
            </div>
            <div class="profile_right_save">
                <Button @click="$emit('onSubmit')" class="button" :buttonText="saveAll" :buttonType="saveButton"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';
import Progress from './Progress.vue';

export default defineComponent({
  name: 'ProfileHeader',
  components: {
      Button,
      Progress
  },
  data: () => {
    return {
      resetPassword: "Reset Password" as string,
      saveAll: "Save All" as string,
      resetButton: "reset_button" as string,
      saveButton: "save_button" as string
    }
  }
});
</script>
<style lang="scss" scoped>
.profile {
    width: 95%;
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    outline: none;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    margin: 30px;
    box-shadow: 2px 2px 2px 2px #cccac5;
    @media (max-width: 673px) {
        min-height: 400px;
    }
    .profile_left {
        flex: 60%;
        background-color: white;
        padding: 8px;
        height: 100%;
        box-shadow: border-box;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        .profile_left_image {
            flex: 3%;
            margin-right: 10px;
            margin-bottom: 20px;
            img {
                width: 120px;
                box-shadow: 2px 2px 2px 2px #cccac5;
                border-radius: 5px;
            }
        }
        .profile_left_progress {
            flex: 40%;
            .profile_left_progress_bar {
                float: left;
            }
        }
    }
    .profile_right {
        padding: 10px;
        flex: 40%;
        display: flex;
        flex-wrap: wrap;
        .profile_right_reset {
            flex: 60%;
        }
        .profile_right_save {
            flex: 40%;          
        }
    }
}
.button {
    float: right;
}
@media (max-width: 710px) {
    .profile_right_reset, .profile_right_save {
        height: 70px;
    }
  }
@media (max-width: 430px) {
    .profile_left_progress {
        margin-bottom: 10px;
        max-height: 50px;
    }
  }
</style>