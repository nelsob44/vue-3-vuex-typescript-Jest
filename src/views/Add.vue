<template>
<Navigation />
  <div class="container-fluid">
    <div>
      <form @submit.prevent>
        <div class="profile_header">
          <ProfileHeader v-on:onSubmit="submitForm()"/>
        </div>
        <div class="add">
          <div class="add_user">
            <div class="user_header">
              <h3>User Details</h3>
            </div>
            <div class="add_user_details" v-for="(item, index) in userDetails" :key="index">
              <Input :inputitem="item" :editData="null" v-on:update="updateForm($event)"/>
            </div>
          </div>
          <div class="add_settings">
            <h3>Settings</h3>
            <div class="add_settings_details" v-for="(item, index) in settingsDetails" :key="index">
              <Input :inputitem="item" :editData="null" :languages="preferredLanguages" v-on:update="updateForm($event)"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import Input from '../components/Input.vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import Navigation from '../components/Navigation.vue';
import useProcessForm from '../modules/processForm';


export default {
  name: 'Add',
  components: {
    Input,
    ProfileHeader,
    Navigation
  },

  setup() {
    const {
      userDetails,
      settingsDetails,
      preferredLanguages,
      initializeEditForm,
      preferredLanguagesInit,
      submitForm,
      updateForm
    } = useProcessForm();

    return {
      userDetails,
      settingsDetails,
      preferredLanguages,
      initializeEditForm,
      preferredLanguagesInit,
      submitForm,
      updateForm
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  width: 95vw;
  flex-wrap: wrap;
  z-index: 100;
  position: absolute;
  top: 30%;
  @media (max-width: 673px) {
      position: absolute;
      top: 50%;
  }
  @media (max-width: 447px) {
      position: absolute;
      top: 70%;
  }
  .add_user {
    flex: 50%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    outline: none;
    border-radius: 5px;
    font-family: inherit;
    font-size: 0.8em;
    padding: 15px;
    margin: 30px 15px;
    box-shadow: 2px 2px 2px 2px #cccac5;
    .user_header {
      flex: 100%;
    }
    .add_user_details {
      flex: 50%;
    }
  }
  .add_settings {
    flex: 35%;
    background-color: #fff;
    outline: none;
    border-radius: 5px;
    font-family: inherit;
    font-size: 0.8em;
    padding: 15px;
    margin: 30px 15px;
    box-shadow: 2px 2px 2px 2px #cccac5;
    .add_settings_details {
      flex: 50%;
    }
  }
  @media (max-width: 940px) {
    .add_user, .add_settings {
      flex: 100%;
    }
  }
  @media (max-width: 485px) {
    .add_user {
      .add_user_details {
        flex: 100%;
      }
    }
  }
}
.profile_header {
  margin-left: -30px;
}
h3 {
  font-weight: bold;
}
</style>