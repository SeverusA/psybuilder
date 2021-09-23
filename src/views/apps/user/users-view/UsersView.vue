<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="userData">
      <!-- First Row -->
      <b-row>
        <b-col
          cols="12"
          xl="12"
          lg="8"
          md="7"
        >
          <user-view-user-info-card :user-data="userData" />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <user-view-user-action-card :user-data="userData"/>
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <user-view-user-vision-card :user-data="userData"/>
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <user-view-user-more-card :user-data="userData"/>
        </b-col>
      </b-row>


    </template>

  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { ref, onUnmounted } from '@vue/composition-api'
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import userStoreModule from '../userStoreModule'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue'
import UserViewUserVisionCard from './UserViewUserVisionCard.vue'
import UserViewUserActionCard from "@/views/apps/user/users-view/UserViewUserActionCard"
import UserViewUserMoreCard from "@/views/apps/user/users-view/UserViewUserMoreCard"

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    UserViewUserInfoCard,
    UserViewUserVisionCard,
    UserViewUserActionCard,
    UserViewUserMoreCard,
  },
  setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { userData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        }
      })

    return {
      userData,
    }
  },
}
</script>

<style>

</style>
