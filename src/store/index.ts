import { createStore } from 'vuex'
import mockData from '../../mockData';
import { SubmissionData, PreferredLanguage } from '../types/types';

export default createStore({
  state: {
    Add: "Add Form",
    Edit: "Edit Form",
    type: "home_button",
    userDetailsForm: [
      {
        name: "firstName",
        label: "First Name",
        type: "text-field",
        value: ''
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text-field",
        value: ''
      },
      {
        name: "userName",
        label: "Username",
        type: "text-field",
        value: ''
      },
      {
        name: "defaultEmail",
        label: "Default Email",
        type: "email",
        value: ''
      },
      {
        name: "title",
        label: "Title",
        type: "select",
        options: [
          {
              value: "Mr",
              name: "Mr"
          },
          {
              value: "Mrs",
              name: "Mrs"
          },
          {
              value: "Dr",
              name: "Dr"
          },
          {
              value: "Miss",
              name: "Miss"
          }
        ],
        value: ''
      },
      {
        name: "designation",
        label: "Designation",
        type: "text-field",
        value: ''
      }
    ],
    settingsForm: [
      {
        name: "defaultInterface",
        label: "Default Interface",
        type: "select",
        options: [
            {
                value: "EHS",
                name: "EHS"
            },
            {
                value: "Compliance",
                name: "Compliance"
            }
        ],
        value: ''
      },
      {
        name: "preferredLanguage",
        label: "Preferred Language",
        type: "select",
        value: ''
      },
      {
        name: "accountLocked",
        label: "Account Locked",
        type: "checkbox",
        value: ''
      },
      {
        name: "userMustChangePassword",
        label: "User must change password at next login",
        type: "checkbox",
        value: ''
      },
      {
        name: "passwordsNeverExpire",
        label: "Passwords never expire",
        type: "checkbox",
        value: ''
      },
      {
        name: "superUser",
        label: "Super User",
        type: "checkbox",
        checked: true,
        value: ''
      }
    ],
    submission: {
      firstName: '',
      lastName: '',
      userName: '',
      defaultEmail: '',
      title: 'Mr',
      designation: '',
      defaultInterface: 'EHS',
      preferredLanguage: '',
      accountLocked: false,
      userMustChangePassword: false,
      passwordsNeverExpire: false,
      superUser: true,
    } as SubmissionData,
    preferredLanguages: [] as PreferredLanguage[]
  },
  mutations: {
    SET_LANGUAGES(state, preferredLanguages) {
      state.preferredLanguages = preferredLanguages;
    },
    UPDATE_FORM_DATA(state, submissionData){
      state.submission = submissionData;
    },
    SET_EDIT_DATA(state, submissionData){
      state.submission = submissionData;
    }
  },
  actions: {
    async fetchPreferredLanguages({ commit }) {
      const preferredLanguages =  mockData.preferredLanguages;
      return await commit('SET_LANGUAGES', preferredLanguages);
    },
    async addUserSubmit({ state }) {
      const data = state.submission;
      console.log(JSON.stringify(data));
      return 'user data logged';
    },
    async addFormUpdate({ commit, state }, event){
      const submissionData = this.getters.getSubmissionData;
      for(const key in state.submission){
        key === event.name ? (submissionData[event.name] = event.value) : '';
      }
      commit('UPDATE_FORM_DATA', submissionData);
      return 'updated form entry';
    },
    async fetchEditData({ commit }){
      const submissionData = this.getters.getSubmissionData;
      submissionData.firstName = mockData.userData.firstName;
      submissionData.lastName = mockData.userData.lastName;
      submissionData.userName = mockData.userData.userName;
      submissionData.defaultEmail = mockData.userData.defaultEmail;
      submissionData.title = mockData.userData.title;
      submissionData.designation = mockData.userData.designation;
      submissionData.defaultInterface = mockData.settingsData.defaultInterface;
      submissionData.preferredLanguage = mockData.settingsData.preferredLanguage;
      submissionData.accountLocked = mockData.settingsData.accountLocked;
      submissionData.userMustChangePassword = mockData.settingsData.userMustChangePassword;
      submissionData.passwordsNeverExpire = mockData.settingsData.passwordsNeverExpire;
      submissionData.superUser = mockData.settingsData.superUser;

      commit('SET_EDIT_DATA', submissionData);
      return 'edit data successfully set';
    }
  },
  getters: {
    getUserDetailsForm: (state) => {
      return state.userDetailsForm;
    },
    getSettingsForm: (state) => {
      return state.settingsForm;
    },
    getPreferredLanguages: (state) => {
      return state.preferredLanguages;
    },
    getSubmissionData: (state) => {
      return state.submission;
    },
    getAddText: (state) => {
      return state.Add;
    },
    getEditText: (state) => {
      return state.Edit;
    },
    getTypeText: (state) => {
      return state.type;
    }
  },
  modules: {
  }
})
