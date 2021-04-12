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
              <Input :inputitem="item" :editData="submission" v-on:update="updateForm($event)"/>
            </div>
          </div>
          <div class="add_settings">
            <h3>Settings</h3>
            <div class="add_settings_details" v-for="(item, index) in settingsDetails" :key="index">
              <Input :inputitem="item" :editData="submission" :languages="preferredLanguages" v-on:update="updateForm($event)"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onBeforeMount } from "vue";
import Input from '../components/Input.vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import Navigation from '../components/Navigation.vue';
import { eventData } from '../types/types';
import store from '../store/index';

export default {
  name: 'Edit',
  components: {
    Input,
    ProfileHeader,
    Navigation
  },

  setup() {
    const userDetails = computed(() => store.getters.getUserDetailsForm);

    const settingsDetails = computed(() => store.getters.getSettingsForm);

    const preferredLanguages = computed(() => store.getters.getPreferredLanguages);

    const submission = computed(() => store.getters.getSubmissionData);

    onBeforeMount(() => {
      preferredLanguagesInit();
      editData();
    })

    function initializeEditForm() {
      store.dispatch('fetchEditData').then(() => {
        console.log('data fetched');
      }).catch(() => {
         console.log('error');
      })
    }

    function preferredLanguagesInit() {
      store.dispatch('fetchPreferredLanguages').then(() => {
        console.log('data fetched');
      }).catch(() => {
         console.log('error');
      })
    }

    function submitForm() {
      store.dispatch('addUserSubmit').then(() => {
        console.log('data added');
      }).catch(() => {
         console.log('error');
      })
    }

    function updateForm(event: eventData) {
      store.dispatch('addFormUpdate', event).then(() => {
        console.log('data updated');
      }).catch(() => {
         console.log('error');
      })
    }

    function editData() {
      store.dispatch('fetchEditData').then(() => {
        console.log('edit data fetched');
      }).catch(() => {
          console.log('error');
      })
    }

    return {
      userDetails,
      settingsDetails,
      preferredLanguages,
      submission,
      initializeEditForm,
      preferredLanguagesInit,
      submitForm,
      updateForm,
      editData
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