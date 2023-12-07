<template>
  <div>
    <h2>Listado de Usuarios</h2>
    <ul>
      <li v-for="user in userList" :key="user.id">
        <router-link :to="{ name: 'user-details', params: { id: user.id }}">
          {{ user.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { users } from '../api';
export default {
  setup() {
    const userList = ref([]);

    const fetchUserList = async () => {
      userList.value= await users.getAll()
    };

    onMounted(() => {
      fetchUserList();
    });

    return {
      userList,
    };
  },
};
</script>