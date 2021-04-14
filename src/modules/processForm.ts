import { computed, onBeforeMount } from "vue";
import store from '../store/index';
import { eventData } from '../types/types';

export default function useProcessForm() {
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